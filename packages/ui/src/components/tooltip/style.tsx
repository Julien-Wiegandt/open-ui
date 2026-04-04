"use client";

import styled from "styled-components";
import { radiusMap } from "../../theme/constants";
import type { Color, Radius, Theme, Variant } from "../../theme/types";
import { Flex } from "../flex";
import { resolveColor } from "../utils/resolve-color";
import { getColorBasedOnBackground } from "../utils/get-color-based-on-background";


export type TooltipSize = "sm" | "md" | "lg";

const TOOLTIP_SIZE_MAP: Record<
  TooltipSize,
  {
    padding: string;
    fontSize: string;
    letterSpacing: string;
    fontWeight: number;
  }
> = {
  sm: {
    padding: "2px 6px",
    fontSize: "10px",
    letterSpacing: "0.5px",
    fontWeight: 500,
  },
  md: {
    padding: "4px 6px",
    fontSize: "12px",
    letterSpacing: "0.5px",
    fontWeight: 500,
  },
  lg: {
    padding: "6px 8px",
    fontSize: "14px",
    letterSpacing: "0.5px",
    fontWeight: 500,
  },
};

export type StyledTooltipProps = {
  color: Color | string;
  variant: Variant;
  bgcolor?: string;
  radius?: Radius;
  size: TooltipSize;
};

export const StyledTooltip = styled(Flex)<StyledTooltipProps>`
  background-color: ${({ bgcolor, variant, color, theme }) => {
    if (bgcolor) return bgcolor;
    const palette = resolveColor(color, theme as Theme);
    switch (variant) {
      case "outlined":
      case "text":
        return "transparent";
      case "soft":
        return `${palette.main}22`;
      case "contained":
      default:
        return palette.main;
    }
  }};
  color: ${({ variant, color, theme }) => {
    const palette = resolveColor(color, theme as Theme);
    switch (variant) {
      case "outlined":
      case "text":
      case "soft":
        return palette.main;
      case "contained":
      default:
        return getColorBasedOnBackground(palette.main);
    }
  }};
  border: ${({ variant, color, theme }) => {
    if (variant === "outlined") {
      const palette = resolveColor(color, theme as Theme);
      return `1px solid ${palette.main}`;
    }
    return "1px solid transparent";
  }};

  padding: ${({ size }) => TOOLTIP_SIZE_MAP[size].padding};
  font-size: ${({ size }) => TOOLTIP_SIZE_MAP[size].fontSize};
  letter-spacing: ${({ size }) => TOOLTIP_SIZE_MAP[size].letterSpacing};
  font-weight: ${({ size }) => TOOLTIP_SIZE_MAP[size].fontWeight};
  border-radius: ${({ radius, theme }) =>
    radius ? radiusMap[radius] : radiusMap[theme.radius]};
  box-shadow: ${({ variant }) =>
    variant === "contained" ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none"};
  pointer-events: none;
  white-space: nowrap;
`;
