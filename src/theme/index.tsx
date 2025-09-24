import { ToastContextProvider, type ToastSettings } from "@/context/toast";
import type React from "react";
import { ThemeProvider } from "styled-components";
import type { Theme as ThemeType } from "./types";

export const OpenUIProvider = ({
  children,
  theme,
  settings,
}: {
  children: React.ReactNode;
  theme: ThemeType;
  settings?: {
    toasts?: ToastSettings;
  };
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContextProvider settings={settings?.toasts}>
        <div id="modal"></div>
        {children}
      </ToastContextProvider>
    </ThemeProvider>
  );
};
