import type { RefObject } from "react";
import { useLayoutEffect, useState } from "react";
import { useAutoContrast } from "../../context/theme";
import { getColorBasedOnBackground } from "./get-color-based-on-background";
import { getRecursiveBgColor } from "./get-recursive-bg-color";

export function useAutoContrastColor(
  elementRef: RefObject<Element | null>,
  skip?: boolean,
): string | undefined {
  const autoContrast = useAutoContrast();
  const disabled = !autoContrast || !!skip;
  const [color, setColor] = useState<string | undefined>(undefined);

  useLayoutEffect(() => {
    if (disabled) return;

    const element = elementRef.current;
    if (!element) return;

    const compute = () => {
      try {
        const bgColor = getRecursiveBgColor(element as HTMLElement);
        setColor(getColorBasedOnBackground(bgColor));
      } catch {}
    };

    compute();

    const observer = new MutationObserver(compute);
    let node: Element | null = element;
    while (node) {
      observer.observe(node, {
        attributes: true,
        attributeFilter: ["style", "class"],
      });
      node = node.parentElement;
    }

    return () => observer.disconnect();
  }, [disabled]);

  return disabled ? undefined : color;
}
