import React, { useState } from 'react';

export function Carrito() {
  // Productos iniciales en el carrito
  const [productosEnCarrito] = useState([
    {
      id: 1,
      nombre: 'Tomates Orgánicos',
      precio: 2.5,
      cantidad: 2,
    },
    {
      id: 3,
      nombre: 'Plátanos',
      precio: 1.2,
      cantidad: 5,
    },
    {
      id: 4,
      nombre: 'Lechuga',
      precio: 0.9,
      cantidad: 1,
    },
  ]);

  // Calcular el total del carrito
  const calcularTotal = () => {
    return productosEnCarrito
      .reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
      .toFixed(2);
  };

  const handlePago = () => {
    alert('Gracias por tu compra. ¡Procesando el pago!');
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Tu Carrito</h1>
        <ul className="divide-y divide-gray-300">
          {productosEnCarrito.map((producto) => (
            <li key={producto.id} className="py-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{producto.nombre}</h2>
                <p className="text-gray-600">Cantidad: {producto.cantidad}</p>
              </div>
              <p className="text-green-700 font-semibold">
                €{(producto.precio * producto.cantidad).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-right">
          <p className="text-xl font-bold mb-4">Total: €{calcularTotal()}</p>
          <button
            onClick={handlePago}
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}
