import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function PrivateRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redireciona para login se não estiver autenticado
    return <Navigate to="/login" replace />;
  }

  // Renderiza as rotas filhas (Outlet é um placeholder para as rotas filhas)
  return <Outlet />;
}

export default PrivateRoute;
