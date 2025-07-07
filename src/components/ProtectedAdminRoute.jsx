// components/ProtectedAdminRoute.jsx
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser || currentUser.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
