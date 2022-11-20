import { AppRoutes } from "./routes";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserIsLoginContext = createContext("default");

function App() {
  const [isLogin, setIsLogin] = useState();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLogin(user);
    });
  });
  return (
    <UserIsLoginContext.Provider value={isLogin}>
      <AppRoutes />
    </UserIsLoginContext.Provider>
  );
}

export default App;
