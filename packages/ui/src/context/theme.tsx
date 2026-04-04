"use client";

import { createContext, useContext, useLayoutEffect, useMemo, useState } from "react";

import { THEME, radiusMap } from "../theme/constants";
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

  useLayoutEffect(() => {
    const root = document.documentElement;

    // Mode & Radius
    root.style.setProperty("--oui-mode", activeTheme.mode ?? "light");
    root.style.setProperty("--oui-radius", radiusMap[activeTheme.radius]);

    // Semantic tokens
    root.style.setProperty("--oui-fg", activeTheme.semantic.foreground);
    root.style.setProperty("--oui-bg", activeTheme.semantic.background);
    root.style.setProperty("--oui-surface", activeTheme.semantic.surface);
    root.style.setProperty("--oui-muted", activeTheme.semantic.muted);
    root.style.setProperty("--oui-border", activeTheme.semantic.border);
    root.style.setProperty("--oui-shadow", activeTheme.semantic.shadow);

    // Palette tokens
    Object.entries(activeTheme.palette).forEach(([colorName, transitions]) => {
      Object.entries(transitions).forEach(([shade, value]) => {
        root.style.setProperty(`--oui-${colorName}-${shade}`, value as string);
      });
    });

    console.log("[Theme] Variables injected on root", activeTheme.mode);
  }, [activeTheme]);


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
