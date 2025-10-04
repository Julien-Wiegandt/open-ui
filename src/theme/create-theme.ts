import type { Radius, Theme } from "./types";
import { generateColorPalette } from "./utils/colors";

export const createTheme = (props: {
  radius: Radius;
  primary: string;
  secondary: string;
  default?: string;
  error?: string;
}): Theme => {
  const primaryPalette = generateColorPalette(props.primary, 500);
  const secondaryPalette = generateColorPalette(props.primary, 500);
  const defaultPalette = generateColorPalette(props.primary, 500);
  const errorPalette = generateColorPalette(props.primary, 500);

  return {
    radius: "none",
    title: {
      fontFamily: "Poppins",
    },
    text: {
      fontFamily: "Poppins",
    },
    palette: {
      primary: {
        dark: primaryPalette[900],
        main: primaryPalette[500],
        light: primaryPalette[100],
      },
      secondary: {
        dark: secondaryPalette[900],
        main: secondaryPalette[500],
        light: secondaryPalette[100],
      },
      default: {
        dark: defaultPalette[900],
        main: defaultPalette[500],
        light: defaultPalette[100],
      },
      error: {
        dark: errorPalette[900],
        main: errorPalette[500],
        light: errorPalette[100],
      },
    },
  };
};
