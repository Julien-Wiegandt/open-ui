import { useResponsive } from "@/hooks/use-responsive";
import type { Color } from "@/theme/types";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import type { MarginProps, PaddingProps } from "../common/types";
import { getColorBasedOnBackground } from "../utils/get-color-based-on-background";
import { getRecursiveBgColor } from "../utils/get-recursive-bg-color";
import { resolveColor } from "../utils/resolve-color";
import { useCombinedRefs } from "../utils/use-combined-refs";
import { StyledText } from "./styled";

export type TextProps = {
  weight?: "regular" | "medium" | "semibold" | "bold";
  color?: Color | string;
  size?:
    | "8"
    | "10"
    | "12"
    | "14"
    | "15"
    | "16"
    | "18"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "40"
    | "44"
    | "48"
    | "52"
    | "56"
    | "60"
    | "64"
    | "72"
    | "80"
    | "96";
  width?: string;
  height?: string;
  align?: "left" | "center" | "right" | "justify";
  onSizeChange?: (size: { width: number; height: number }) => void;
} & MarginProps &
  PaddingProps &
  React.HTMLAttributes<HTMLParagraphElement>;

const THEME_COLOR_KEYS = ["default", "primary", "secondary", "error"];

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, onSizeChange, color, ...props }, ref) => {
    const theme = useTheme();
    const { breakpoint } = useResponsive();
    const internalRef = useRef<HTMLParagraphElement | null>(null);
    const [autoColor, setAutoColor] = useState<string | undefined>(undefined);

    const resolvedColor = color
      ? THEME_COLOR_KEYS.includes(color)
        ? resolveColor(color, theme).main
        : color
      : autoColor;

    useEffect(() => {
      const element = internalRef.current;
      if (!element || !onSizeChange) {
        return;
      }

      const observer = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) {
          const { width, height } = entry.contentRect;
          onSizeChange({ width, height });
        }
      });

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }, [onSizeChange]);

    useEffect(() => {
      if (color) return;
      const element = internalRef.current;
      if (!element) return;
      try {
        const bgColor = getRecursiveBgColor(element);
        setAutoColor(getColorBasedOnBackground(bgColor));
      } catch {
        // Fallback silencieux si la couleur ne peut pas être déterminée
      }
    });

    const combinedRef = useCombinedRefs(ref, internalRef);

    return (
      <StyledText
        ref={combinedRef}
        {...props}
        color={resolvedColor}
        breakpoint={breakpoint}
      >
        {children}
      </StyledText>
    );
  },
);

Text.displayName = "Text";
