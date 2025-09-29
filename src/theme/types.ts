export type Radius = "none" | "sm" | "md" | "lg" | "full";

export type Variant = "contained" | "outlined" | "text";

export type Elevation = 0 | 1 | 2 | 3 | 4 | 6 | 8;

export type Color = "default" | "primary" | "secondary" | "error";

export type Palette = {
  [key in Color]: {
    main: string;
    dark: string;
    light: string;
  };
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
