/* eslint-disable @typescript-eslint/no-explicit-any */
import { THEME } from "@/theme/constants";
import type { Theme } from "@/theme/types";
import { createContext, useMemo, useState } from "react";

export type IThemeContext = {
  theme: Theme;
  setTheme: ({index, theme}: {index?: number, theme?: Theme}) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<IThemeContext>({
  theme: THEME,
  setTheme: () => {},
});

export const ThemeContextProvider = (params: {
  children: React.ReactNode;
  themes: Theme[];
}) => {
  if (params.themes.length === 0) throw new Error("No themes provided");

  const [activeTheme, setActiveTheme] = useState<Theme>(params.themes[0]);

  const setTheme = ({index, theme}: {index?: number, theme?: Theme}) => {
    const newTheme = index ? params.themes[index] : theme;
    if (!newTheme) throw new Error("Theme not found");
    setActiveTheme(newTheme);
  };

  const memoizedValue: IThemeContext = useMemo(
    () => ({
      theme: activeTheme,
      setTheme,
    }),
    [activeTheme]
  );

  return (
    <ThemeContext.Provider value={memoizedValue}>{params.children}</ThemeContext.Provider>
  );
};
