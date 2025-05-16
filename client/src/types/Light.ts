import type { ReactNode } from "react";

export interface LightProps {
  light: boolean;
  setLight: (value: boolean) => void;
}
export interface ThemeProviderProps {
  children: ReactNode;
}
