export const getColorBasedOnBackground = (backgroundColor: string): string => {
  if (backgroundColor === "transparent") return "#000000";

  let hex = backgroundColor.startsWith("#") ? backgroundColor.slice(1) : backgroundColor;

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  if (hex.length !== 6) {
    throw new Error("Invalid hexadecimal color format.");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const luminance = (r * 299 + g * 587 + b * 114) / 1000;

  return luminance >= 128 ? "#000000" : "#FFFFFF";
};
