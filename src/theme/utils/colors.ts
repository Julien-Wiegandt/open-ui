/* eslint-disable prefer-const */
type RGB = { r: number; g: number; b: number };
type HSL = { h: number; s: number; l: number };

function hexToRgb(hex: string): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    throw new Error("Invalid HEX color");
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

function rgbToHsl({ r, g, b }: RGB): HSL {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h, s, l };
}

function hslToRgb({ h, s, l }: HSL): RGB {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

function rgbToHex({ r, g, b }: RGB): string {
  const toHex = (c: number) => ("0" + c.toString(16)).slice(-2);
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function generateColorPalette(
  baseColorHex: string,
  baseShadeKey: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 = 600
): { [shade: string]: string } {
  const lightnessMap = {
    50: 0.95,
    100: 0.89,
    200: 0.78,
    300: 0.67,
    400: 0.56,
    500: 0.45,
    600: 0.35,
    700: 0.29,
    800: 0.23,
    900: 0.18,
    950: 0.1,
  };

  const baseRgb = hexToRgb(baseColorHex);
  const baseHsl = rgbToHsl(baseRgb);

  const palette: { [shade: string]: string } = {};

  for (const shade in lightnessMap) {
    const key = shade as unknown as keyof typeof lightnessMap;

    const newHsl: HSL = {
      h: baseHsl.h,
      s: baseHsl.s,
      l: lightnessMap[key],
    };

    palette[shade] = rgbToHex(hslToRgb(newHsl));
  }

  palette[baseShadeKey.toString()] = baseColorHex;

  return palette;
}
