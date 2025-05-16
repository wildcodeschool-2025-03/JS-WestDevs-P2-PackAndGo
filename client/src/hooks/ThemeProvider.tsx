import { type ReactNode, createContext, useState } from "react";
import { useContext } from "react";
import type { LightProps } from "../types/Light";

export const ThemeContext = createContext<LightProps | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [light, setLight] = useState(false);

  return (
    <ThemeContext.Provider value={{ light, setLight }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useLight() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("This context cannot be null");
  }
  return context;
}
