import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children }) {
    const isAuth = useSelector((state) => state.user.user.isAuthenticated);
    const { isLoading } = useAuth(); 
    const location = useLocation();

  if (isLoading) {
    return <div>Cargando...</div>; // Mejor UX
  }

  if (!isAuth) {
    // Redirige al login y guarda la ruta actual para volver después
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};