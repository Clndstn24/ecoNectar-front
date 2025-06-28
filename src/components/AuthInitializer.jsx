import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/userSlice';
import PropTypes from 'prop-types';

export function AuthInitializer({ children }) {
  const dispatch = useDispatch();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      if (!initialized) {
        try {
          dispatch(getCurrentUser());
        } catch {
          // Si no hay cookie válida, simplemente continuamos
          console.log('No hay sesión activa');
        } finally {
          setInitialized(true);
        }
      }
    };

    initializeAuth();
  }, [dispatch, initialized]);

  // Mostrar loading mientras verificamos la autenticación
  if (!initialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto mb-4"></div>
          <div className="text-lg">Inicializando aplicación...</div>
        </div>
      </div>
    );
  }

  return children;
}

AuthInitializer.propTypes = {
  children: PropTypes.node.isRequired,
};
