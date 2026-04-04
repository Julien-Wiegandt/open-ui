import type { RefObject } from "react";
import { useContext, useLayoutEffect, useState } from "react";
import { ThemeContext, useAutoContrast } from "../../context/theme";
import { getColorBasedOnBackground } from "./get-color-based-on-background";
import { getRecursiveBgColor } from "./get-recursive-bg-color";

export function useAutoContrastColor(
  elementRef: RefObject<Element | null>,
  skip?: boolean,
  initialBgColor?: string,
): string | undefined {
  const { theme } = useContext(ThemeContext);
  const autoContrast = useAutoContrast();
  const disabled = !autoContrast || !!skip;
  const [color, setColor] = useState<string | undefined>(
    initialBgColor ? getColorBasedOnBackground(initialBgColor) : undefined,
  );

  useLayoutEffect(() => {
    if (disabled) return;

    const element = elementRef.current;
    if (!element) return;

    const compute = () => {
      try {
        const el = elementRef.current;
        if (!el) return;
        const bgColor = getRecursiveBgColor(el as HTMLElement);
        const resolvedColor = getColorBasedOnBackground(bgColor);
        setColor(resolvedColor);
      } catch (e) {
        console.error("[AutoContrast] error:", e);
      }
    };

    compute();

    const retryDelays = [50, 150, 300, 500];
    const timers = retryDelays.map((delay) => setTimeout(compute, delay));

    const observer = new MutationObserver(() => {
      compute();
    });
    let node: Element | null = element;
    while (node) {
      observer.observe(node, {
        attributes: true,
        attributeFilter: ["style", "class"],
      });
      node = node.parentElement;
    }

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [disabled, theme]);

  return disabled ? undefined : color;
}
