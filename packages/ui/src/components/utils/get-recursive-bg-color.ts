type RGBA = { r: number; g: number; b: number; a: number };

// Browsers always return rgb() / rgba() from getComputedStyle
const parseComputedColor = (color: string): RGBA | null => {
  const m = color.match(/rgba?\(\s*([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\s*\)/);
  if (!m) return null;
  return {
    r: parseFloat(m[1]),
    g: parseFloat(m[2]),
    b: parseFloat(m[3]),
    a: m[4] !== undefined ? parseFloat(m[4]) : 1,
  };
};

// Porter-Duff "over": composite src (front) over dst (back)
const compositeOver = (src: RGBA, dst: RGBA): RGBA => {
  const outA = src.a + dst.a * (1 - src.a);
  if (outA === 0) return { r: 255, g: 255, b: 255, a: 0 };
  return {
    r: (src.r * src.a + dst.r * dst.a * (1 - src.a)) / outA,
    g: (src.g * src.a + dst.g * dst.a * (1 - src.a)) / outA,
    b: (src.b * src.a + dst.b * dst.a * (1 - src.a)) / outA,
    a: outA,
  };
};

// Walk up the DOM, collect all bg layers until the first fully opaque one
const collectBgLayers = (element: HTMLElement): RGBA[] => {
  const layers: RGBA[] = [];
  let node: HTMLElement | null = element;
  while (node) {
    const bg = window.getComputedStyle(node).backgroundColor;
    const parsed = parseComputedColor(bg);
    if (parsed && parsed.a > 0) {
      layers.push(parsed);
      if (parsed.a >= 1) break; // fully opaque — stop here
    }
    node = node.parentElement;
  }
  return layers;
};

// Returns the true visible background color as a fully opaque "rgb()" string
export const getRecursiveBgColor = (element: HTMLElement): string => {
  const layers = collectBgLayers(element);

  if (layers.length === 0) return "rgb(255, 255, 255)";

  // Composite from deepest (back) to shallowest (front)
  let composed: RGBA = layers[layers.length - 1];
  for (let i = layers.length - 2; i >= 0; i--) {
    composed = compositeOver(layers[i], composed);
  }

  // If still not fully opaque after all layers, composite against white
  if (composed.a < 1) {
    composed = compositeOver(composed, { r: 255, g: 255, b: 255, a: 1 });
  }

  return `rgb(${Math.round(composed.r)}, ${Math.round(composed.g)}, ${Math.round(composed.b)})`;
};
