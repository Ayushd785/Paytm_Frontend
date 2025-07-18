import { Navigate, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/signin" />;
};
