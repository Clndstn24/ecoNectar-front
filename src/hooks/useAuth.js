import { useDispatch, useSelector } from "react-redux";
import { 
  loginUser, 
  registerUser, 
  getCurrentUser, 
  logoutUser, 
  clearError 
} from "../redux/userSlice";

export function useAuth() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  const isAuth = user.isAuthenticated;

  const login = async (email, password) => {
    try {
      const result = await dispatch(loginUser({ email, password }));
      return { 
        success: result.type === 'user/login/fulfilled',
        error: result.type === 'user/login/rejected' ? result.error?.message : null
      };
    } catch {
      return error;
    }
  };

  const register = async (userData) => {
    if (userData.password !== userData.confirmPassword) {
      // Aquí podrías usar un toast o state local para este error específico
      return false;
    }
    
    try {
      const result = await dispatch(registerUser(userData));
      return result.type === 'user/register/fulfilled';
    } catch {
      return false;
    }
  };

  const logout = async () => {
    try {
      await dispatch(logoutUser());
      return true;
    } catch {
      return false;
    }
  };

  const clearAuthError = () => {
    dispatch(clearError());
  };

  const refreshUser = () => {
    dispatch(getCurrentUser());
  };

  return { 
    user, 
    loading, 
    error, 
    isAuth, 
    login, 
    register, 
    logout, 
    clearAuthError,
    refreshUser,
    isLoading: loading // Para mantener compatibilidad con ProtectedRoute
  };
}
