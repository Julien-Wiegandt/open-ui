export const getColorBasedOnBackground = (backgroundColor: string): string => {
  const color = backgroundColor.trim().toLowerCase();
  if (color === "transparent") return "#000000";

  let r = 0, g = 0, b = 0;

  if (color.startsWith("#")) {
    let hex = color.slice(1);

    if (hex.length === 3 || hex.length === 4) {
      hex = hex.slice(0, 3).split("").map(c => c + c).join("");
    } else if (hex.length === 8) {
      hex = hex.slice(0, 6);
    }

    if (hex.length !== 6) throw new Error("Invalid hexadecimal color format.");

    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } 
  else if (color.startsWith("rgb")) {
    const values = color.match(/-?\d+(\.\d+)?/g)?.map(Number);
    if (!values || values.length < 3) throw new Error("Invalid RGB color format.");
    [r, g, b] = values;
  } 
  else if (color.startsWith("hsl")) {
    const values = color.match(/-?\d+(\.\d+)?/g)?.map(Number);
    if (!values || values.length < 3) throw new Error("Invalid HSL color format.");
    
    let [h, s, l] = values;
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;

    let rTemp = 0, gTemp = 0, bTemp = 0;

    if (0 <= h && h < 60) { rTemp = c; gTemp = x; bTemp = 0; }
    else if (60 <= h && h < 120) { rTemp = x; gTemp = c; bTemp = 0; }
    else if (120 <= h && h < 180) { rTemp = 0; gTemp = c; bTemp = x; }
    else if (180 <= h && h < 240) { rTemp = 0; gTemp = x; bTemp = c; }
    else if (240 <= h && h < 300) { rTemp = x; gTemp = 0; bTemp = c; }
    else if (300 <= h && h < 360) { rTemp = c; gTemp = 0; bTemp = x; }

    r = Math.round((rTemp + m) * 255);
    g = Math.round((gTemp + m) * 255);
    b = Math.round((bTemp + m) * 255);
  } 
  else {
    throw new Error("Unsupported color format.");
  }

  if (isNaN(r) || isNaN(g) || isNaN(b)) throw new Error("Invalid color values.");

  const luminance = (r * 299 + g * 587 + b * 114) / 1000;

  return luminance >= 128 ? "#000000" : "#FFFFFF";
};