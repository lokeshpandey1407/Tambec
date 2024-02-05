/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Contexts/AuthHook";
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const isAuthenticated = currentUser && currentUser.email;
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/"
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
