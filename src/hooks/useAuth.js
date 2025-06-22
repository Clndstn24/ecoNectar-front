import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser, setLoading, setError } from "../redux/userSlice";

export function useAuth() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const isAuth = useSelector((state) => state.user.user.isAuthenticated);

  const register = async (userData) => {
    if (userData.password !== userData.confirmPassword) {
      dispatch(setError("Las contraseñas no coinciden"));
      return false;
    }
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Error al registrar usuario");
      dispatch(setUser(data.user || { email: userData.email })); // Ajusta según respuesta del backend
      return true;
    } catch (err) {
      dispatch(setError(err.message));
      dispatch(clearUser());
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const login = async (email, password) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.text();
      if (!response.ok)
        throw new Error(data || "Error al iniciar sesión");
      if (data === "Login successful") {
        // Aquí podrías hacer otra petición para obtener los datos del usuario
        dispatch(setUser({ ...user, isAuthenticated: true }));
      }
      return true;
    } catch (err) {
      dispatch(setError(err.message));
      dispatch(clearUser());
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { user, loading, error, isAuth, register, login };
}
