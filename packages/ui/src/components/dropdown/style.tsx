import styled from "styled-components";
import { radiusMap } from "../../theme/constants";
import type { Color, Radius, Theme, Variant } from "../../theme/types";
import { Flex } from "../flex";
import { resolveColor } from "../utils/resolve-color";
import { getColorBasedOnBackground } from "../utils/get-color-based-on-background";

export type DropdownSize = "sm" | "md" | "lg";

const DROPDOWN_SIZE_MAP: Record<
  DropdownSize,
  {
    padding: string;
    fontSize: string;
    optionPadding: string;
  }
> = {
  sm: {
    padding: "4px",
    fontSize: "12px",
    optionPadding: "6px 10px",
  },
  md: {
    padding: "4px",
    fontSize: "14px",
    optionPadding: "8px 12px",
  },
  lg: {
    padding: "6px",
    fontSize: "16px",
    optionPadding: "10px 14px",
  },
};

export type StyledDropdownContainerProps = {
  color: Color | string;
  variant: Variant;
  bgcolor?: string;
  radius?: Radius;
  size: DropdownSize;
};

export const StyledDropdownContainer = styled(Flex)<StyledDropdownContainerProps>`
  flex-direction: column;
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
  padding: ${({ size }) => DROPDOWN_SIZE_MAP[size].padding};
  font-size: ${({ size }) => DROPDOWN_SIZE_MAP[size].fontSize};
  border-radius: ${({ radius, theme }) => {
    const r = radius ?? (theme as Theme).radius;
    return r === "full" ? "16px" : radiusMap[r];
  }};

  box-shadow: ${({ variant }) =>
    variant === "contained" ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "0 2px 8px rgba(0, 0, 0, 0.1)"};
  overflow: hidden;
  min-width: 120px;
`;

export type StyledDropdownOptionProps = {
  color: Color | string;
  variant: Variant;
  size: DropdownSize;
  radius?: Radius;
};

export const StyledDropdownOption = styled(Flex)<StyledDropdownOptionProps>`
  padding: ${({ size }) => DROPDOWN_SIZE_MAP[size].optionPadding};
  font-size: ${({ size }) => DROPDOWN_SIZE_MAP[size].fontSize};
  cursor: pointer;
  transition: background-color 0.15s ease;
  border-radius: ${({ radius, theme }) =>
    radius ? radiusMap[radius] : radiusMap[(theme as Theme).radius]};


  &:hover {
    background-color: ${({ variant, color, theme }) => {
      const palette = resolveColor(color, theme as Theme);

      switch (variant) {
        case "contained":
          return `rgba(255, 255, 255, 0.15)`;
        case "outlined":
        case "text":
        case "soft":
        default:
          return `${palette.main}18`;
      }
    }};
  }
`;
