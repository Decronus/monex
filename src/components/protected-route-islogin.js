import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserIsLoginContext } from "../App";

export const ProtectedRouteIsLogin = ({ redirectPath = "/" }) => {
  const isLogin = useContext(UserIsLoginContext);
  if (isLogin) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};
