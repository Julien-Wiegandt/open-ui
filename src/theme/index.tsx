import { ThemeProvider } from "styled-components";
import type { Theme as ThemeType } from "./types";

export const OpenUIProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeType;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div id="modal"></div>
      <div id="toast"></div>
      {children}
    </ThemeProvider>
  );
};
