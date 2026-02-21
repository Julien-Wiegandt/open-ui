import type { Color, Radius, Variant } from "@/theme/types";
import styled from "styled-components";
import { Flex } from "../flex";
import { resolveColor } from "../utils/resolve-color";

export type StyledTooltipProps = {
  color: Color | string;
  variant: Variant;
  bgcolor?: string;
  radius?: Radius;
};

export const StyledTooltip = styled(Flex)<StyledTooltipProps>`
  background-color: ${({ bgcolor, variant, color, theme }) => {
    if (bgcolor) return bgcolor;
    const palette = resolveColor(color, theme);
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
    const palette = resolveColor(color, theme);
    switch (variant) {
      case "outlined":
      case "text":
      case "soft":
        return palette.main;
      case "contained":
      default:
        return "white";
    }
  }};
  border: ${({ variant, color, theme }) => {
    if (variant === "outlined") {
      const palette = resolveColor(color, theme);
      return `1px solid ${palette.main}`;
    }
    return "1px solid transparent";
  }};
  padding: 4px 8px;
  border-radius: ${({ radius }) => (radius === "full" ? "9999px" : "4px")};
  box-shadow: ${({ variant }) =>
    variant === "contained" ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none"};
  pointer-events: none;
  white-space: nowrap;
`;
