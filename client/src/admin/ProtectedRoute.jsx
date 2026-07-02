import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FoodLoader from "../components/FoodLoader";

export default function ProtectedRoute({ children }) {
  const { admin, loading } = useAuth();
  if (loading) return <FoodLoader message="Authenticating session..." />;
  if (!admin) return <Navigate to="/admin/login" replace />;
  return children;
}