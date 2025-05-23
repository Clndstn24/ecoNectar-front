import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">EcoNectar</Link>

        {/* Icono de menú para pantallas pequeñas */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          ☰
        </button>

        {/* Enlaces de navegación */}
        <div
          className={`absolute top-16 left-0 w-full bg-green-700 lg:static lg:w-auto lg:flex lg:items-center lg:space-x-6 transition-transform duration-300 ${isMenuOpen ? 'block' : 'hidden'
            }`}
        >
          <div className="flex flex-col text-center items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6 p-2 w-full">
            <Link className="w-full text-center px-4 py-2 font-bold bg-white text-green-700 rounded-full hover:text-black transition md:bg-transparent md:text-white md:p-0 hover:bg-gray-200 md:hover:bg-transparent
"
              to="/productos">Productos</Link>
            <Link className="w-full text-center px-4 py-2 font-bold bg-white text-green-700 rounded-full hover:text-black transition md:bg-transparent md:text-white md:p-0 hover:bg-gray-200 md:hover:bg-transparent
"
              to="/perfil">Perfil</Link>
            <Link to="/carrito" className="flex items-center justify-center w-full p-2 bg-white rounded-full md:w-full hover:bg-gray-200 transition">
              <ShoppingCartIcon className="h-6 w-6 text-green-700 hover:text-black" />
            </Link>
            <button
              onClick={toggleSidebar}
              className="w-full bg-white text-green-700 font-bold py-2 px-4 rounded-full hover:bg-gray-200 hover:text-black transition"
            >
              Login
            </button>
            <Link
              to="/registro"
              className="w-full bg-white text-green-700 font-bold py-2 px-4 rounded-full hover:bg-gray-200 hover:text-black transition"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar con animación */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Iniciar Sesión</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full px-4 py-2 border bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
            <Link to="/registro" className="text-green-700 font-semibold hover:underline">
              Regístrate
            </Link>
          </p>
        </div>
        {/* Botón para cerrar el sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
      </div>
    </nav>
  );
}