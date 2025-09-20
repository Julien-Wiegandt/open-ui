import { radiusMap } from "@/theme/constants";
import type { Color, Theme } from "@/theme/types";
import styled from "styled-components";
import type { ChipStyleProps } from ".";
import { getMarginsCSS, getPaddingCSS, toRem } from "../common";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getVariantStyle = ({
  color,
  theme,
}: {
  color: Color;
  theme: Theme;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): Record<string, any> => ({
  contained: {
    bgColor: theme.palette[color].main,
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
export const sizeMap: Record<NonNullable<ChipStyleProps["size"]>, { padding: string }> = {
  sm: {
    padding: "4px 0.25rem",
  },
  md: {
    padding: "6px 0.5rem",
  },
  lg: {
    padding: "8px 1rem",
  },
};

export const StyledChip = styled.div<ChipStyleProps>`
  all: unset;
  padding: ${({ size }) => sizeMap[size ?? "md"].padding};
  display: flex;
  align-items: center;
  gap: ${({ gap }) => (gap ? toRem(gap) : "0px")};
  transition: all 0.25s ease;
  width: fit-content;
  height: fit-content;
  background-color: ${({ bgcolor, variant, color, theme }) =>
    bgcolor ?? getVariantStyle({ color, theme })[variant].bgColor};
  border: ${({ variant, color, theme }) =>
    getVariantStyle({ color, theme })[variant].border};
  border-radius: ${({ radius, theme }) =>
    radius ? radiusMap[radius] : radiusMap[theme.radius]};
  ${({ m, mb, ml, mr, mt, mx, my }) => getMarginsCSS({ m, mb, ml, mr, mt, mx, my })};
  ${({ p, pb, pl, pr, pt, px, py }) => getPaddingCSS({ p, pb, pl, pr, pt, px, py })};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  position: relative;
  color: ${({ fontColor, color, variant, theme }) =>
    fontColor ?? getVariantStyle({ color, theme })[variant].color};
`;
