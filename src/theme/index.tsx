import { ThemeProvider } from "styled-components";
import type { Theme as ThemeType } from "./types";

export const OpenUITheme = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeType;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
