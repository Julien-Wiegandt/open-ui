import { ThemeContext, ThemeContextProvider } from "@/context/theme";
import { ToastContextProvider, type ToastSettings } from "@/context/toast";
import type React from "react";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import type { Theme } from "./types";

const ApplyStyledComponentsTheme = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const OpenUIProvider = ({
  children,
  themes,
  settings,
}: {
  children: React.ReactNode;
  themes: Theme[];
  settings?: {
    toasts?: ToastSettings;
  };
}) => {
  return (
    <ThemeContextProvider themes={themes}>
      <ApplyStyledComponentsTheme>
        <ToastContextProvider settings={settings?.toasts}>
          <div id="modal"></div>
          {children}
        </ToastContextProvider>
      </ApplyStyledComponentsTheme>
    </ThemeContextProvider>
  );
};
