import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { ROLE } from "helpers/enums";

type RequireAuthProps = {
  allowedRoles: ROLE[];
};

export const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
  const { auth } = useAuth();
  const location = useLocation();

  const hasRole = auth?.roles?.find((role) => allowedRoles?.includes(role));

  return hasRole ? (
    <Outlet />
  ) : auth?.accessToken ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
