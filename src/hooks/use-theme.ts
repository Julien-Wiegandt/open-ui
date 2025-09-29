import { ThemeContext, type IThemeContext } from "@/context/theme";
import { useContext } from "react";
import {} from "styled-components";

export const useTheme = (): IThemeContext => {
  const theme = useContext(ThemeContext);
  return theme;
};
