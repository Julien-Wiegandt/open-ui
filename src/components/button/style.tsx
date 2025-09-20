/* eslint-disable @typescript-eslint/no-explicit-any */
import { radiusMap } from "@/theme/constants";
import type { Color, Theme } from "@/theme/types";
import styled from "styled-components";
import type { ButtonStyleProps } from ".";
import { getMarginsCSS, getPaddingCSS, toRem } from "../common";
import type { TextProps } from "../text";

const getVariantStyle = ({
  color,
  theme,
}: {
  color: Color;
  theme: Theme;
}): Record<string, any> => ({
  contained: {
    bgColor: theme.palette[color].main,
    border: `2px solid transparent`,
    color: "#FFFFFF",
    onHover: {
      opacity: 0.75,
    },
    onActive: {
      transform: `scale(0.95)`,
    },
  },
  outlined: {
    bgColor: "#FFFFFF",
    border: `2px solid ${theme.palette[color].main}`,
    color: theme.palette[color].main,
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
    color: theme.palette[color].main,
    onActive: {
      transform: `scale(0.95)`,
    },
    onHover: {
      backgroundColor: `${theme.palette[color].main}22`,
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const sizeMap: Record<
  NonNullable<ButtonStyleProps["size"]>,
  { padding: string; fontSize: TextProps["size"] }
> = {
  sm: {
    padding: "6px 0.75rem",
    fontSize: "12",
  },
  md: {
    padding: "8px 1rem",
    fontSize: "14",
  },
  lg: {
    padding: "10px 1.5rem",
    fontSize: "16",
  },
};

export const StyledButton = styled.button<ButtonStyleProps>`
  all: unset;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  padding: ${({ size }) => sizeMap[size ?? "md"].padding};
  display: flex;
  align-items: center;
  height: fit-content;
  gap: ${({ gap }) => (gap ? toRem(gap) : "8px")};
  transition: all 0.25s ease;
  background-color: ${({ bgcolor, variant, color, theme }) =>
    bgcolor ?? getVariantStyle({ color, theme })[variant].bgColor};
  border: ${({ variant, color, theme }) =>
    getVariantStyle({ color, theme })[variant].border};
  border-radius: ${({ theme, radius }) =>
    radius ? radiusMap[radius] : radiusMap[theme.radius]};
  ${({ m, mb, ml, mr, mt, mx, my }) => getMarginsCSS({ m, mb, ml, mr, mt, mx, my })};
  ${({ p, pb, pl, pr, pt, px, py }) => getPaddingCSS({ p, pb, pl, pr, pt, px, py })};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  position: relative;
  color: ${({ txtColor, color, variant, theme }) =>
    txtColor ?? getVariantStyle({ color, theme })[variant].color};

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    opacity: ${({ loading }) => (loading ? 0 : 1)};
  }

  &:hover {
    ${({ variant, color, theme }) => getVariantStyle({ color, theme })[variant].onHover}
    opacity: ${({ disabled }) => disabled && 0.6};
  }

  &:active {
    ${({ variant, color, theme }) => getVariantStyle({ color, theme })[variant].onActive}
  }
`;
