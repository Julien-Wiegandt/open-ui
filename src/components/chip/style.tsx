import { radiusMap } from "@/theme/constants";
import type { Color, Theme } from "@/theme/types";
import styled from "styled-components";
import type { ChipStyleProps } from ".";
import { getMarginsCSS, getPaddingCSS, toRem } from "../common";
import { resolveColor } from "../utils/resolve-color";

const getVariantStyle = ({
  color,
  theme,
}: {
  color: Color | string;
  theme: Theme;
}): Record<string, any> => {
  const palette = resolveColor(color, theme);
  return {
    contained: {
      bgColor: palette.main,
      color: "#FFFFFF",
    },
    outlined: {
      bgColor: "#FFFFFF",
      border: `2px solid ${palette.main}`,
      color: palette.main,
    },
    text: {
      bgColor: "transparent",
      color: palette.main,
    },
    soft: {
      bgColor: `${palette.main}22`,
      border: `2px solid transparent`,
      color: palette.main,
    },
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const sizeMap: Record<
  NonNullable<ChipStyleProps["size"]>,
  { padding: string }
> = {
  sm: {
    padding: "3px 0.25rem",
  },
  md: {
    padding: "3.5px 0.25rem",
  },
  lg: {
    padding: "4px 0.5rem",
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
    bgcolor ??
    getVariantStyle({ color: color ?? "default", theme })[
      variant ?? "contained"
    ].bgColor};
  border: ${({ variant, color, theme }) =>
    getVariantStyle({ color: color ?? "default", theme })[
      variant ?? "contained"
    ].border};
  border-radius: ${({ radius, theme }) =>
    radius ? radiusMap[radius] : radiusMap[theme.radius]};
  ${({ m, mb, ml, mr, mt, mx, my }) =>
    getMarginsCSS({ m, mb, ml, mr, mt, mx, my })};
  ${({ p, pb, pl, pr, pt, px, py }) =>
    getPaddingCSS({ p, pb, pl, pr, pt, px, py })};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  position: relative;
  color: ${({ fontColor, color, variant, theme }) =>
    fontColor ??
    getVariantStyle({ color: color ?? "default", theme })[
      variant ?? "contained"
    ].color};
`;
