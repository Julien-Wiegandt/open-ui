/* eslint-disable @typescript-eslint/no-explicit-any */
import { radiusMap } from "@/theme/constants";
import { getPalette } from "@/theme/create-theme";
import type { Color, Theme } from "@/theme/types";
import styled from "styled-components";
import type { ButtonProps } from ".";
import { getMarginsCSS, getPaddingCSS, toRem } from "../common";
import type { TextProps } from "../text";

// eslint-disable-next-line react-refresh/only-export-components
export const getVariantStyle = ({
  color,
  theme,
}: {
  color: Color | string;
  theme: Theme;
}): Record<string, any> => {
  const isStringColor =
    typeof color === "string" &&
    !["default", "primary", "secondary", "error"].includes(color);
  const palette = isStringColor
    ? getPalette(color)
    : theme.palette[color as Color];
  return {
    contained: {
      bgColor: palette.main,
      border: `2px solid transparent`,
      onHover: {
        opacity: 0.75,
      },
      onActive: {
        transform: `scale(0.95)`,
      },
    },
    outlined: {
      bgColor: "transparent",
      border: `2px solid ${palette.main}`,
      onHover: {
        opacity: 0.75,
      },
      onActive: {
        transform: `scale(0.95)`,
      },
    },
    text: {
      bgColor: "transparent",
      border: `2px solid transparent`,
      onActive: {
        transform: `scale(0.95)`,
      },
      onHover: {
        backgroundColor: `${palette.main}22`,
      },
    },
    soft: {
      bgColor: `${palette.main}22`,
      border: `2px solid transparent`,
      onHover: {
        opacity: 0.75,
      },
      onActive: {
        transform: `scale(0.95)`,
      },
    },
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const sizeMap: Record<
  NonNullable<ButtonProps["size"]>,
  { padding: string; fontSize: TextProps["size"]; height: number }
> = {
  sm: {
    padding: "4px 0.5rem",
    fontSize: "12",
    height: 18,
  },
  md: {
    padding: "5px 0.75rem",
    fontSize: "14",
    height: 21,
  },
  lg: {
    padding: "6px 1rem",
    fontSize: "16",
    height: 24,
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export const sizeIconMap: Record<
  NonNullable<ButtonProps["size"]>,
  { padding: string; fontSize: TextProps["size"] }
> = {
  sm: {
    padding: "6px",
    fontSize: "12",
  },
  md: {
    padding: "8px",
    fontSize: "14",
  },
  lg: {
    padding: "10px",
    fontSize: "16",
  },
};

export const StyledButton = styled.button<ButtonProps>`
  all: unset;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  padding: ${({ size, label, starticon, endicon }) =>
    !label && (starticon || endicon)
      ? sizeIconMap[size ?? "md"].padding
      : sizeMap[size ?? "md"].padding};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => (gap ? toRem(gap) : "8px")};

  transition: all 0.25s ease;

  width: ${({ w }) => w ?? "auto"};

  height: ${({ h, size }) =>
    (h ?? sizeMap[size ?? "md"].height)
      ? `${sizeMap[size ?? "md"].height}px`
      : undefined};
  overflow: hidden;

  background-color: ${({ bgcolor, variant, color, theme }) =>
    bgcolor ??
    getVariantStyle({ color: color ?? "default", theme })[
      variant ?? "contained"
    ].bgColor};
  border: ${({ variant, color, theme }) =>
    getVariantStyle({ color: color ?? "default", theme })[
      variant ?? "contained"
    ].border};
  border-radius: ${({ theme, radius }) =>
    radius ? radiusMap[radius] : radiusMap[theme.radius]};
  ${({ m, mb, ml, mr, mt, mx, my }) =>
    getMarginsCSS({ m, mb, ml, mr, mt, mx, my })};
  ${({ p, pb, pl, pr, pt, px, py }) =>
    getPaddingCSS({ p, pb, pl, pr, pt, px, py })};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  position: relative;

  ${({ variant, color, theme, active, activeStyle }) =>
    active &&
    (activeStyle
      ? activeStyle
      : {
          ...getVariantStyle({ color: color ?? "default", theme })[
            variant ?? "contained"
          ].onHover,
        })}

  @media (hover: hover) {
    &:hover {
      ${({ variant, color, theme }) =>
        getVariantStyle({ color: color ?? "default", theme })[
          variant ?? "contained"
        ].onHover}
      opacity: ${({ disabled }) => disabled && 0.6};
    }
  }

  &:active {
    ${({ variant, color, theme }) =>
      getVariantStyle({ color: color ?? "default", theme })[
        variant ?? "contained"
      ].onActive}
  }
`;
