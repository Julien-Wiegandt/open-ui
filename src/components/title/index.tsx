import { useResponsive } from "@/hooks/use-responsive";
import type { Color } from "@/theme/types";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "styled-components";
import type { MarginProps, PaddingProps } from "../common/types";
import { getColorBasedOnBackground } from "../utils/get-color-based-on-background";
import { getRecursiveBgColor } from "../utils/get-recursive-bg-color";
import { resolveColor } from "../utils/resolve-color";
import { StyledTitle } from "./style";

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: "regular" | "medium" | "semibold" | "bold";
  color?: Color | string;
} & MarginProps &
  PaddingProps &
  React.HTMLAttributes<HTMLHeadingElement>;

const THEME_COLOR_KEYS = ["default", "primary", "secondary", "error"];

export const Title = ({ children, color, ...props }: TitleProps) => {
  const theme = useTheme();
  const { breakpoint } = useResponsive();
  const internalRef = useRef<HTMLHeadingElement | null>(null);
  const [autoColor, setAutoColor] = useState<string | undefined>(undefined);

  const resolvedColor = color
    ? THEME_COLOR_KEYS.includes(color)
      ? resolveColor(color, theme).main
      : color
    : autoColor;

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

  const memoizedProps = useMemo(() => {
    const defaultProps = {
      level: 1,
    };
    return {
      ...defaultProps,
      ...props,
    };
  }, [props]);

  return (
    <StyledTitle
      ref={internalRef}
      {...memoizedProps}
      color={resolvedColor}
      breakpoint={breakpoint}
    >
      {children}
    </StyledTitle>
  );
};
