import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/login", isLogin }) => {
  if (isLogin) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};
