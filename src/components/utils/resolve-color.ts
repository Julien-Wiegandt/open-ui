import { getPalette } from "@/theme/create-theme";
import type { Color, ColorPalette, Theme } from "@/theme/types";

const THEME_COLORS: string[] = ["default", "primary", "secondary", "error"];

/**
 * Resolve a `Color` token (e.g. "primary") or any raw color string
 * (hex, rgb, hsl, …) to a `ColorPalette` object.
 *
 * - If `color` is one of the four theme tokens it reads from `theme.palette`.
 * - Otherwise it generates a palette on the fly via `getPalette`.
 */
export function resolveColor(
  color: Color | string,
  theme: Theme,
): ColorPalette {
  const isStringColor =
    typeof color === "string" && !THEME_COLORS.includes(color);
  return isStringColor ? getPalette(color) : theme.palette[color as Color];
}
