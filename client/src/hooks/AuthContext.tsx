import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}
interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => setIsLogged(true);
  const logout = () => setIsLogged(false);
  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
