import {
  isColorPalette,
  type ColorPalette,
  type Radius,
  type Theme,
} from "./types";
import { generateColorPalette, parseColorToRgb } from "./utils/colors";

export const getPalette = (color: string | ColorPalette): ColorPalette => {
  if (isColorPalette(color)) {
    return color;
  }
  const generated = generateColorPalette(color, 500);
  return {
    darker: generated[950],
    dark: generated[900],
    main: generated[500],
    light: generated[100],
    lighter: generated[50],
  };
};

const getLuminance = (color: string): number => {
  try {
    const rgb = parseColorToRgb(color);
    return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  } catch (e) {
    return 0.5;
  }
};

export const createTheme = (props: {
  mode?: "dark" | "light";
  radius: Radius;
  primary: string | ColorPalette;
  secondary?: string | ColorPalette;
  default?: string | ColorPalette;
  error?: string | ColorPalette;
  titleFontFamily?: string;
  textFontFamily?: string;
  semantic?: Partial<Theme["semantic"]>;
  components?: Theme["components"];
}): Theme => {
  const mode = props.mode ?? "light";
  const isDark = mode === "dark";

  const primaryPalette = getPalette(props.primary);

  // Fix: neutral colors should follow mode if they were not explicitly customized to be dark/light
  const resolveNeutralColor = (color?: string | ColorPalette) => {
    if (!color) return isDark ? "#ffffff" : "#000000";

    const mainColor = isColorPalette(color) ? color.main : color;
    const luminance = getLuminance(mainColor);

    // If we're in dark mode but the neutral color is very dark, flip it
    if (isDark && luminance < 0.1) return "#ffffff";
    // If we're in light mode but the neutral color is very light, flip it
    if (!isDark && luminance > 0.9) return "#000000";

    return color;
  };

  const secondaryPalette = getPalette(resolveNeutralColor(props.secondary));
  const defaultPalette = getPalette(resolveNeutralColor(props.default));

  const errorPalette = getPalette(props.error ?? "#e74c3c");

  const defaultSemantic: Theme["semantic"] = {
    foreground:
      mode === "dark" ? defaultPalette.lighter : defaultPalette.darker,
    background: mode === "dark" ? defaultPalette.darker : "#ffffff",
    surface: mode === "dark" ? defaultPalette.dark : defaultPalette.lighter,
    muted: mode === "dark" ? defaultPalette.main : defaultPalette.light,
    border: mode === "dark" ? defaultPalette.main : defaultPalette.light,
    shadow: mode === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.1)",
  };


  return {
    mode,
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
    semantic: {
      ...defaultSemantic,
      ...props.semantic,
    },
    components: props.components,
  };
};

