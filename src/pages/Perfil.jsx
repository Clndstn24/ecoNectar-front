import React from 'react';

export function Perfil() {
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
              <p className="text-gray-600 font-medium">Nombre:</p>
              <p className="text-gray-800">Juan Pérez</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Correo Electrónico:</p>
              <p className="text-gray-800">juan.perez@example.com</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Teléfono:</p>
              <p className="text-gray-800">+34 123 456 789</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Dirección:</p>
              <p className="text-gray-800">Calle Falsa 123, Ciudad, País</p>
            </div>
          </div>
          <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
            Editar Información
          </button>
        </div>

        {/* Pedidos recientes */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Pedidos Recientes</h2>
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
                  <td className="border border-gray-300 px-4 py-2">#12345</td>
                  <td className="border border-gray-300 px-4 py-2">2025-04-20</td>
                  <td className="border border-gray-300 px-4 py-2">€50.00</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-700">Entregado</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">#12346</td>
                  <td className="border border-gray-300 px-4 py-2">2025-04-18</td>
                  <td className="border border-gray-300 px-4 py-2">€30.00</td>
                  <td className="border border-gray-300 px-4 py-2 text-yellow-600">En Proceso</td>
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
