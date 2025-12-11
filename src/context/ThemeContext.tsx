import { useState, createContext, useContext } from "react";
import type { ReactNode } from "react";

type Theme = "Light" | "Dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeColors: {
    bg: string;
    bgHover: string;
    text: string;
  };
}

const themeColor: Record<Theme, { bg: string; bgHover: string; text: string }> =
  {
    Dark: {
      bg: "bg-black/80",
      bgHover: "hover:bg-black/40",
      text: "text-white",
    },
    Light: {
      bg: "bg-white/20",
      bgHover: "hover:bg-white/40",
      text: "text-black",
    },
  };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("Light");

  const themeColors = themeColor[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
