import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

export function Registro() {
  const inputLabelStyle = "block text-gray-700 text-sm font-bold mb-2";
  const inputTextStyle =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  const { loading, error, register} = useAuth();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Datos del usuario:", userData);
    const success = await register(userData);
    if (success) {
      alert('¡Registro exitoso!');
      navigate("/login");
    } else {
      alert(`Error al registrar: ${error}`);
    }
  };

  return (
    <div className="w-full p-5 flex flex-col items-center justify-top min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold">Crear Cuenta</h1>
      <p className="mt-4">
        Regístrate para empezar a comprar productos locales.
      </p>

      <form
        onSubmit={handleRegister}
        className="flex flex-col w-full max-w-2xl mt-8 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "firstName", label: "Nombre", type: "text" },
            { name: "lastName", label: "Apellido", type: "text" },
            { name: "phoneNumber", label: "Teléfono", type: "text" },
            { name: "address", label: "Dirección", type: "text" },
            { name: "city", label: "Ciudad", type: "text" },
            { name: "postalCode", label: "Código Postal", type: "text" },
            {
              name: "email",
              label: "Correo Electrónico",
              type: "email",
              autoComplete: "email",
            },
            {
              name: "password",
              label: "Contraseña",
              type: "password",
              autoComplete: "new-password",
            },
            {
              name: "confirmPassword",
              label: "Confirmar Contraseña",
              type: "password",
              autoComplete: "new-password",
            },
          ].map(({ name, label, type, autoComplete }) => (
            <div className="mb-4" key={name}>
              <label className={inputLabelStyle} htmlFor={name}>
                {label}
              </label>
              <input
                required
                onChange={handleInputChange}
                value={userData[name]}
                type={type}
                name={name}
                autoComplete={autoComplete}
                placeholder={`Tu ${label.toLowerCase()}`}
                className={inputTextStyle}
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          disabled={loading}
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
}
