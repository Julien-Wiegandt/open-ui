export type Radius = "none" | "sm" | "md" | "lg" | "full";

export type Variant = "contained" | "outlined" | "text" | "soft";

export type Elevation = 0 | 1 | 2 | 3 | 4 | 6 | 8;

export type Color = "default" | "primary" | "secondary" | "error";

export type ColorPalette = {
  darker: string;
  dark: string;
  main: string;
  light: string;
  lighter: string;
};

export type Palette = {
  [key in Color]: ColorPalette;
};

export const isColorPalette = (color: string | ColorPalette): color is ColorPalette => {
  return (
    typeof color === "object" &&
    color !== null &&
    "main" in color &&
    "dark" in color &&
    "light" in color
  );
};

type Text = {
  fontFamily: string;
};

export type Theme = {
  radius: Radius;
  palette: Palette;
  title: Text;
  text: Text;
};
