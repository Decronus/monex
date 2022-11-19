import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import CreateSuggest from "./pages/create-suggest";
import Login from "./pages/login";
import Reg from "./pages/reg";
import { ProtectedRouteIsLogin } from "./components/protected-route-islogin";
import ResetPassword from "./pages/reset-password";
import VerifyPopup from "./pages/verify-popup";
import Profile from "./pages/profile";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/verify-popup" element={<VerifyPopup />} />
      <Route path="/create-suggest" element={<CreateSuggest />} />

      <Route path="/profile" element={<Profile />} />

      <Route element={<ProtectedRouteIsLogin />}>
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};
