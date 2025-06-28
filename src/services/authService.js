const API_BASE_URL = 'http://localhost:8080/api/v1';

export const authService = {
  // Login que recibe la cookie del backend
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Importante para recibir cookies
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData || 'Error al iniciar sesión');
    }

    // El backend devuelve la cookie automáticamente
    return await response.text(); // "Login successful" o similar
  },

  // Obtener información del usuario usando la cookie JWT
  getCurrentUser: async () => {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
      method: 'GET',
      credentials: 'include', // Envía las cookies automáticamente
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('No autenticado');
      }
      throw new Error('Error al obtener información del usuario');
    }

    return await response.json(); // DTO con la información del usuario
  },

  // Registro de usuario
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al registrar usuario');
    }

    return await response.json();
  },

  // Logout (opcional, para limpiar la cookie del servidor)
  logout: async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.warn('Error al hacer logout en el servidor:', error);
    }
  },
};