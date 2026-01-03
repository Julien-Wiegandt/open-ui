import { isColorPalette, type ColorPalette, type Radius, type Theme } from "./types";
import { generateColorPalette } from "./utils/colors";

const getPalette = (color: string | ColorPalette, defaultColor: string): ColorPalette => {
  if (isColorPalette(color)) {
    return color;
  }
  const generated = generateColorPalette(color || defaultColor, 500);
  return {
    main: generated[500],
    dark: generated[900],
    light: generated[100],
  };
};

export const createTheme = (props: {
  radius: Radius;
  primary: string | ColorPalette;
  secondary?: string | ColorPalette;
  default?: string | ColorPalette;
  error?: string | ColorPalette;
  titleFontFamily?: string;
  textFontFamily?: string;
}): Theme => {
  const primaryPalette = getPalette(props.primary, "#000000");
  const secondaryPalette = getPalette(props.secondary ?? "#000000", "#000000");
  const defaultPalette = getPalette(props.default ?? "#000000", "#000000");
  const errorPalette = getPalette(props.error ?? "#e74c3c", "#e74c3c");

  return {
    radius: props.radius,
    title: {
      fontFamily: props.titleFontFamily ?? "Poppins",
    },
    text: {
      fontFamily: props.textFontFamily ?? "Poppins, sans-serif",
    },
    palette: {
      primary: primaryPalette,
      secondary: secondaryPalette,
      default: defaultPalette,
      error: errorPalette,
    },
  };
};
