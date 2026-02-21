/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Color, Theme } from "@/theme/types";
import styled from "styled-components";
import type { CheckboxProps } from ".";
import { getMarginsCSS } from "../common";
import type { TextProps } from "../text";
import { getColorBasedOnBackground } from "../utils/get-color-based-on-background";
import { resolveColor } from "../utils/resolve-color";

// eslint-disable-next-line react-refresh/only-export-components
export const getCheckboxStyle = ({
  color,
  theme,
}: {
  color: Color | string;
  theme: Theme;
}) => {
  const palette = resolveColor(color, theme);
  return {
    borderColor: palette.main,
    bgColor: palette.main,
    checkColor: getColorBasedOnBackground(palette.main),
  };
};

const radiusMap = {
  none: "0px",
  sm: "4px",
  md: "6px",
  lg: "10px",
  full: "42px",
};

// eslint-disable-next-line react-refresh/only-export-components
export const sizeMap: Record<
  NonNullable<CheckboxProps["size"]>,
  { size: number; fontSize: TextProps["size"]; iconSize: number; gap: string }
> = {
  sm: {
    size: 16,
    fontSize: "12",
    iconSize: 14,
    gap: "8px",
  },
  md: {
    size: 20,
    fontSize: "14",
    iconSize: 18,
    gap: "10px",
  },
  lg: {
    size: 24,
    fontSize: "16",
    iconSize: 22,
    gap: "12px",
  },
};

export const StyledCheckboxContainer = styled.label<
  Pick<CheckboxProps, "disabled"> & {
    m?: any;
    mb?: any;
    ml?: any;
    mr?: any;
    mt?: any;
    mx?: any;
    my?: any;
    gap?: string;
  }
>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap ?? "10px"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  user-select: none;
  ${({ m, mb, ml, mr, mt, mx, my }) =>
    getMarginsCSS({ m, mb, ml, mr, mt, mx, my })};
`;

export const StyledCheckbox = styled.div<
  Pick<CheckboxProps, "color" | "size" | "radius" | "checked" | "disabled">
>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: ${({ size }) => sizeMap[size ?? "md"].size}px;
  height: ${({ size }) => sizeMap[size ?? "md"].size}px;

  background-color: ${({ color, theme, checked }) =>
    checked
      ? getCheckboxStyle({ color: color ?? "default", theme }).bgColor
      : "transparent"};

  border: 2px solid
    ${({ color, theme }) =>
      getCheckboxStyle({ color: color ?? "default", theme }).borderColor};

  border-radius: ${({ theme, radius }) =>
    radius ? radiusMap[radius] : radiusMap[theme.radius]};

  transition: all 0.2s ease;

  @media (hover: hover) {
    ${StyledCheckboxContainer}:hover & {
      ${({ disabled, color, theme, checked }) =>
        !disabled &&
        `background-color: ${checked ? "transparent" : resolveColor(color ?? "default", theme).main}11;`}
    }
  }

  ${StyledCheckboxContainer}:active & {
    transform: ${({ disabled }) => !disabled && "scale(0.95)"};
  }
`;
