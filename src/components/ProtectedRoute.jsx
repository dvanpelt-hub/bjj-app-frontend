// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.access_token);
  // check if token exists, if not re-direct to login screen
  // else render the children pages/components
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;