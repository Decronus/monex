import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import CreateSuggest from "./pages/create-suggest";
import Login from "./pages/login";
import Reg from "./pages/reg";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ProtectedRoute } from "./components/protected-route";

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
      <Route element={<ProtectedRoute isLogin={!isLogin} />}>
        <Route path="/create-suggest" element={<CreateSuggest />} />
      </Route>
      <Route element={<ProtectedRoute redirectPath="/" isLogin={isLogin} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
      </Route>
    </Routes>
  );
};
