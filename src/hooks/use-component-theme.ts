import { ThemeContext } from "@/context/theme";
import type { Theme } from "@/theme/types";
import { useContext } from "react";

export const useComponentTheme = <T extends Record<string, any>>(
  componentName: keyof NonNullable<Theme["components"]>,
  props: T,
): T => {
  const { theme } = useContext(ThemeContext);
  const componentDefaults = theme.components?.[componentName] || {};
  return { ...componentDefaults, ...props };
};
