import { ToastContextProvider, ToastProvider } from "@/context/toast";
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
      <ToastContextProvider>
        <ToastProvider />
        <div id="modal"></div>
        {children}
      </ToastContextProvider>
    </ThemeProvider>
  );
};
