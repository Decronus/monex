import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import CreateSuggest from "./pages/create-suggest";
import Login from "./pages/login";
import Reg from "./pages/reg";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ProtectedRoute } from "./components/protected-route";
import ResetPassword from "./pages/reset-password";
import VerifyPopup from "./pages/verify-popup";

export const AppRoutes = () => {
  const [isLogin, setIsLogin] = useState();

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/verify-popup" element={<VerifyPopup />} />
      <Route element={<ProtectedRoute isLogin={isLogin} />}>
        <Route path="/create-suggest" element={<CreateSuggest />} />
      </Route>
      <Route element={<ProtectedRoute redirectPath="/" isLogin={!isLogin} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};
