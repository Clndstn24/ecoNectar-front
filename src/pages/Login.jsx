import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
export function Login() {
  const { loading, error, login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(form.email, form.password);
    if (!success) {
      return;
    }
    navigate(from, { replace: true }); // Redirige al inicio o a la página deseada
  };

  return (
    <div className="flex items-start pt-20 justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Escribe tu correo"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Escribe tu contraseña"
              required
            />
          </div>
          {error && <div className="text-red-600 mb-2">{error}</div>}
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-800 transition"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          ¿No tienes una cuenta?{" "}
          <a
            href="/registro"
            className="text-green-700 font-semibold hover:underline"
          >
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}
