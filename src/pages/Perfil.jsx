import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setLoading, setError } from '../redux/userSlice';

export function Perfil() {
  const dispatch = useDispatch();
  const { user: usuario, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        
        const response = await fetch('http://localhost:8080/api/v1/users/1');
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        dispatch(setUser({ ...data, isAuthenticated: true }));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUserData();
  }, [dispatch]);

  // Si está cargando, mostramos un mensaje
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <p className="text-xl">Cargando perfil...</p>
      </div>
    );
  }

  // Si hay un error, lo mostramos
  if (error) {
    return (
      <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  // Si no hay datos del usuario, mostramos un mensaje
  if (!usuario.id) {
    return (
      <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <p className="text-xl">No se encontraron datos del usuario</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Título */}
        <h1 className="text-3xl font-bold text-green-700 mb-6">Tu Perfil</h1>

        {/* Información del usuario */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Información Personal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 font-medium">Correo Electrónico:</p>
              <p className="text-gray-800">{usuario.email || 'No disponible'}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Nombre:</p>
              <p className="text-gray-800">{usuario.firstName || 'No disponible'}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Apellido:</p>
              <p className="text-gray-800">{usuario.lastName || 'No disponible'}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Teléfono:</p>
              <p className="text-gray-800">{usuario.phoneNumber || 'No disponible'}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Dirección:</p>
              <p className="text-gray-800">{usuario.address || 'No disponible'}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Ciudad:</p>
              <p className="text-gray-800">{usuario.city || 'No disponible'}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Código Postal:</p>
              <p className="text-gray-800">{usuario.postalCode || 'No disponible'}</p>
            </div>
          </div>
          <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
            Editar Información
          </button>
        </div>

        {/* Pedidos recientes */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Pedidos Recientes</h2>
          <p className="text-gray-600 mb-4">Esta sección mostrará tus pedidos cuando esté conectada a la API de pedidos</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">ID Pedido</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Fecha</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2" colSpan="4">
                    <p className="text-center text-gray-500">No hay pedidos para mostrar</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Opciones de cuenta */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Opciones de Cuenta</h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Cambiar Contraseña
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
