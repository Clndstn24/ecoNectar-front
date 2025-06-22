import React from 'react';
import { Link } from 'react-router-dom';


export function Home() {
  

  return (
    <div className="flex flex-col space-y-12">
      {/* Hero principal */}
      <section className="w-full mx-auto max-w-5xl bg-green-700 text-white text-center py-20 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">EcoNectar Canarias</h1>
        <p className="text-xl mb-6">Productos locales, frescos y sostenibles a tu alcance.</p>
        <Link to="/productos" className="bg-white text-green-700 font-bold py-2 px-6 rounded-full hover:bg-gray-200">
          Ver productos
        </Link>
      </section>



      {/* Quienes somos */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Quiénes somos?</h2>
        <p className="text-lg font-semibold mb-4">
          EcoNectar conecta a productores locales de Canarias con consumidores conscientes.
          Apoyamos el comercio justo, la economía local y el respeto al medio ambiente.
        </p>
        <img src="src/assets/econectar.jpg" alt="EcoNectar" className="w-full h-64 object-cover mt-4 rounded-lg shadow-md" />
      </section>

      {/* Productos destacados */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Productos destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <img src="src/assets/producto1.jpg" alt="Producto 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Producto 1</h3>
              <p className="text-gray-600">Descripción breve del producto.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <img src="src/assets/producto2.jpg" alt="Producto 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Producto 2</h3>
              <p className="text-gray-600">Descripción breve del producto.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <img src="src/assets/producto3.jpg" alt="Producto 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Producto 3</h3>
              <p className="text-gray-600">Descripción breve del producto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="max-w-5xl mx-auto px-4 text-center text-justify ">
        <h2 className="text-3xl font-bold mb-4 text-center">Nuestra historia</h2>
        <p className="text-lg mb-10">
          La idea de EcoNectar Canarias nació en 2025, en plena efervescencia de los movimientos
          por la sostenibilidad y el consumo responsable en las Islas Canarias. Joel Pérez y Rafael Romero,
          dos jóvenes emprendedores apasionados por la tecnología, observaron la
          creciente dificultad de los pequeños productores locales para competir en un mercado cada
          vez más dominado por grandes cadenas de distribución. Inspirados por sus raíces canarias
          y comprometidos con la economía circular, decidieron crear una plataforma que conectara
          directamente a agricultores, artesanos y consumidores conscientes, fomentando el comercio
          justo y la reducción de la huella ecológica.
          Desde un pequeño coworking en Santa Cruz de Tenerife, y con recursos muy limitados, comenzaron
          a diseñar la aplicación con una visión clara: ofrecer una herramienta moderna, segura y accesible
          que revitalizara el mercado local. Durante su desarrollo, EcoNectar Canarias contó con el apoyo
          de iniciativas públicas de fomento al emprendimiento verde y consiguió atraer a los primeros
          productores, que veían en la plataforma una oportunidad para llegar a nuevos clientes
          sin intermediarios. El proyecto fue creciendo gracias al boca a boca, hasta convertirse
          en un referente de innovación social en el archipiélago. Hoy en día, EcoNectar no solo fortalece
          la economía local, sino que también educa y conciencia a la ciudadanía sobre el valor de consumir
          productos de proximidad y el respeto al medio ambiente, representando un verdadero puente entre la
          tradición canaria y la modernidad digital.
        </p>
      </section>
    </div>
  );
}