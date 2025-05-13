import React from 'react';

export function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Iniciar Sesión</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Escribe tu correo"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Escribe tu contraseña"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-800 transition"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          ¿No tienes una cuenta?{' '}
          <a href="/registro" className="text-green-700 font-semibold hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}
