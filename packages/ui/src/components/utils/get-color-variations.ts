/**
 * Generates light and dark variations of a given hex color.
 *
 * @param {string} hex - The base hex color (e.g., "#3498db").
 * @param {number} percentage - The percentage (0 to 1) to lighten or darken by. Defaults to 0.2 (20%).
 * @returns {{light: string, dark: string}} An object with the light and dark hex color strings.
 */
export const getColorVariations = (
  hex: string,
  percentage: number = 0.2
): { light: string; dark: string } => {
  // 1. Remove '#' if present
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }

  // 2. Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // 3. Calculate the light version (tint)
  const lightR = Math.round(r + (255 - r) * percentage);
  const lightG = Math.round(g + (255 - g) * percentage);
  const lightB = Math.round(b + (255 - b) * percentage);

  // 4. Calculate the dark version (shade)
  const darkR = Math.round(r * (1 - percentage));
  const darkG = Math.round(g * (1 - percentage));
  const darkB = Math.round(b * (1 - percentage));

  // 5. Helper function to convert a single RGB component to a 2-digit hex string
  const toHex = (c: number): string => {
    const hexVal = c.toString(16);
    return hexVal.length === 1 ? "0" + hexVal : hexVal;
  };

  // 6. Convert new RGB values back to hex and return
  const lightHex = `#${toHex(lightR)}${toHex(lightG)}${toHex(lightB)}`;
  const darkHex = `#${toHex(darkR)}${toHex(darkG)}${toHex(darkB)}`;

  return {
    light: lightHex,
    dark: darkHex,
  };
};
