import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Productos } from './pages/Productos';
import { Productor } from './pages/Productor';
import { Login } from './pages/Login';
import { Registro } from './pages/Registro';
import { Carrito } from './pages/Carrito';
import { Perfil } from './pages/Perfil';
import { Sobre } from './pages/Sobre';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productor/:id" element={<Productor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/sobre" element={<Sobre />} />
            {/* Aquí puedes añadir más rutas si luego necesitas */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
