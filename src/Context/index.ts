import { createContext, useContext } from "react";
import { AuthContextType } from "./UserAuthProvider";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useUserAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
