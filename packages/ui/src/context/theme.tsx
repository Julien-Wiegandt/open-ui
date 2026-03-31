"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useMemo, useState } from "react";
import { THEME } from "../theme/constants";
import type { Theme } from "../theme/types";

export type IThemeContext = {
  theme: Theme;
  setTheme: ({ index, theme }: { index?: number; theme?: Theme }) => void;
  autoContrast: boolean;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<IThemeContext>({
  theme: THEME,
  setTheme: () => {},
  autoContrast: true,
});

export const useAutoContrast = () => {
  const { autoContrast } = useContext(ThemeContext);
  return autoContrast;
};

export const ThemeContextProvider = (params: {
  children: React.ReactNode;
  themes: Theme[];
  autoContrast?: boolean;
}) => {
  if (params.themes.length === 0) throw new Error("No themes provided");

  const [activeTheme, setActiveTheme] = useState<Theme>(params.themes[0]);

  const setTheme = ({ index, theme }: { index?: number; theme?: Theme }) => {
    const newTheme = index !== undefined ? params.themes[index] : theme;
    if (!newTheme) throw new Error("Theme not found");
    setActiveTheme(newTheme);
  };

  const autoContrast = params.autoContrast !== false;

  const memoizedValue: IThemeContext = useMemo(
    () => ({
      theme: activeTheme,
      setTheme,
      autoContrast,
    }),
    [activeTheme, autoContrast],
  );

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {params.children}
    </ThemeContext.Provider>
  );
};
