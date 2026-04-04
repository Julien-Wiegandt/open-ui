"use client";

import { useResponsive } from "../../hooks/use-responsive";
import type { Color, Theme } from "../../theme/types";
import { useMemo, useRef } from "react";
import { useTheme } from "styled-components";
import type { MarginProps, PaddingProps } from "../common/types";
import { useAutoContrastColor } from "../utils/use-auto-contrast-color";
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
  const theme = useTheme() as Theme;
  const { breakpoint } = useResponsive();
  const internalRef = useRef<HTMLHeadingElement | null>(null);
  const autoColor = useAutoContrastColor(internalRef, !!color);

  const resolvedColor = color
    ? THEME_COLOR_KEYS.includes(color)
      ? resolveColor(color, theme as Theme).main
      : color
    : autoColor;

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
