import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export function Perfil() {
  const { user: usuario, loading, error, logout, refreshUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      navigate('/');
    }
  };

  const handleRefreshProfile = () => {
    refreshUser();
  };
  console.log('Datos del usuario:', usuario);
  console.log('¿Está autenticado?:', usuario.isAuthenticated);
  console.log('Loading:', loading);
  console.log('Error:', error);

  // Si está cargando, mostramos un mensaje
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto mb-4"></div>
          <p className="text-xl">Cargando perfil...</p>
        </div>
      </div>
    );
  }

  // Si hay un error, lo mostramos
  if (error) {
    return (
      <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={handleRefreshProfile}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  // Si no está autenticado o no hay datos básicos del usuario
  if (!usuario.isAuthenticated || (!usuario.email)) {
    return (
      <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <div className="text-center">
          <p className="text-xl mb-4">No se encontraron datos del usuario</p>
          <p className="text-gray-600 mb-4">Debug: {JSON.stringify(usuario, null, 2)}</p>
          <button 
            onClick={handleRefreshProfile}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
          >
            Recargar datos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Título */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">Tu Perfil</h1>
          <button 
            onClick={handleRefreshProfile}
            disabled={loading}
            className="bg-gray-500 text-white px-3 py-1 text-sm rounded hover:bg-gray-600 transition disabled:opacity-50"
          >
            {loading ? 'Actualizando...' : 'Actualizar'}
          </button>
        </div>

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
            <div>
              <p className="text-gray-600 font-medium">Rol:</p>
              <p className="text-gray-800">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  (() => {
                    switch(usuario.role) {
                      case 'ADMIN': return 'bg-red-200 text-red-800';
                      case 'PRODUCER': return 'bg-blue-200 text-blue-800';
                      default: return 'bg-green-200 text-green-800';
                    }
                  })()
                }`}>
                  {usuario.role || 'USER'}
                </span>
              </p>
            </div>
          </div>
          <button 
            onClick={handleRefreshProfile}
            className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
          >
            Actualizar Información
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
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Cambiar Contraseña
            </button>
            <button 
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
