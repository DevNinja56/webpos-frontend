import React, { useEffect, useState } from "react";
import { AuthContext } from "./index";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Contstent/url-endpoints";

export interface AuthContextType {
  isAuthenticated: boolean | null;
  login?: () => void;
  logout?: () => void;
  verifyAuth?: () => void;
  isLoading: boolean;
}

const UserAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (isAuth === "true") setIsAuthenticated(true);
  }, [isAuth]);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const verifyAuth = () => {
    if (isAuth === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    navigate(ROUTES.AUTH.LOGIN);
  };

  const authContextValue: AuthContextType = {
    isAuthenticated,
    login,
    logout,
    verifyAuth,
    isLoading,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserAuthProvider;
