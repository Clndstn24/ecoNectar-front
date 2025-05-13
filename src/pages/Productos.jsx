import React, { useState } from 'react';

export function Productos() {
  const productos = [
    {
      id: 1,
      nombre: 'Tomates Orgánicos',
      descripcion: 'Tomates frescos cultivados sin pesticidas.',
      precio: 2.5,
      categoria: 'Verduras',
      imagen: 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg',
    },
    {
      id: 2,
      nombre: 'Papas Canarias',
      descripcion: 'Papas locales de alta calidad.',
      precio: 1.8,
      categoria: 'Tubérculos',
      imagen: 'https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_640.jpg',
    },
    {
      id: 3,
      nombre: 'Plátanos',
      descripcion: 'Plátanos dulces y frescos.',
      precio: 1.2,
      categoria: 'Frutas',
      imagen: 'https://cdn.pixabay.com/photo/2015/11/05/23/08/banana-1025109_640.jpg',
    },
    {
      id: 4,
      nombre: 'Lechuga',
      descripcion: 'Lechuga fresca y crujiente.',
      precio: 0.9,
      categoria: 'Verduras',
      imagen: 'https://cdn.pixabay.com/photo/2016/10/02/20/02/green-1710328_640.jpg',
    },
  ];

  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [precioMax, setPrecioMax] = useState('');

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === 'Todas' || producto.categoria === categoria;
    const coincidePrecio = !precioMax || producto.precio <= parseFloat(precioMax);
    return coincideBusqueda && coincideCategoria && coincidePrecio;
  });

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">Productos Locales</h1>
        <p className="text-lg text-gray-700 mb-8">
          Explora nuestra variedad de productos agrícolas frescos y locales. Apoya a los productores de tu región.
        </p>

        {/* Barra de búsqueda y filtros */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Barra de búsqueda */}
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full sm:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Filtro por categoría */}
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full sm:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Todas">Todas las Categorías</option>
            <option value="Verduras">Verduras</option>
            <option value="Tubérculos">Tubérculos</option>
            <option value="Frutas">Frutas</option>
          </select>

          {/* Filtro por precio máximo */}
          <input
            type="number"
            placeholder="Precio máximo (€)"
            value={precioMax}
            onChange={(e) => setPrecioMax(e.target.value)}
            className="w-full sm:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Lista de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <div
                key={producto.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{producto.nombre}</h2>
                  <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                  <p className="text-green-700 font-semibold mt-4">€{producto.precio.toFixed(2)}</p>
                  <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-700 text-center col-span-full">
              No se encontraron productos que coincidan con los filtros.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
