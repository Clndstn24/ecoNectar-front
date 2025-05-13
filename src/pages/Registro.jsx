import React from 'react';
export function Registro() {
  return (
    <div className="w-full p-5 flex flex-col items-center justify-top min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold">Crear Cuenta</h1>
      <p className="mt-4">Regístrate para empezar a comprar productos locales.</p>
      <form className="w-full max-w-sm mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Primer Apellido
          </label>
          <input
            type="text"
            id="apellido"
            placeholder="Primer apellido"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Segundo Apellido
          </label>
          <input
            type="text"
            id="2apellido"
            placeholder="Segundo apellido"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="Tu correo electrónico"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Tu contraseña"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Confirmar contraseña
          </label>
          <input
            type="password"
            id="2password"
            placeholder="Confirma tu contraseña"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
