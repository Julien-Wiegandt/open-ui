/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useMemo, useState } from "react";
import { THEME } from "./constants";
import type { Theme } from "./types";

export type ICustomThemeContext = {
  radius: Theme["radius"];
  setRadius: (radius: Theme["radius"]) => void;
  palette: Theme["palette"];
  setPalette: (palette: Theme["palette"]) => void;
  title: Theme["title"];
  setTitle: (title: Theme["title"]) => void;
  text: Theme["text"];
  setText: (text: Theme["text"]) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const CustomThemeContext = createContext<ICustomThemeContext>({
  radius: "none",
  setRadius: () => {},
  palette: {} as any,
  setPalette: () => {},
  title: {} as any,
  setTitle: () => {},
  text: {} as any,
  setText: () => {},
});

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [radius, setRadius] = useState<Theme["radius"]>(THEME.radius);
  const [palette, setPalette] = useState<Theme["palette"]>(THEME.palette);

  const [title, setTitle] = useState<Theme["text"]>(THEME.title);
  const [text, setText] = useState<Theme["text"]>(THEME.text);

  const memoizedValue: ICustomThemeContext = useMemo(
    () => ({
      radius,
      setRadius,
      palette,
      setPalette,
      title,
      setTitle,
      text,
      setText,
    }),
    [radius, palette, title, text]
  );

  return (
    <CustomThemeContext.Provider value={memoizedValue}>
      {children}
    </CustomThemeContext.Provider>
  );
};
