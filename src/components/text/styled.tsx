import type { Breakpoint } from "@/hooks/use-responsive";
import styled from "styled-components";
import type { TextProps } from ".";
import { getMarginsCSS, getPaddingCSS } from "../common";

// eslint-disable-next-line react-refresh/only-export-components
export const getFontSize = (
  size: TextProps["size"],
  breakpoint: Breakpoint,
) => {
  if (breakpoint === "sm") {
    return `${Number(size) / (8 / 7)}px`;
  }
  return `${size}px`;
};

// eslint-disable-next-line react-refresh/only-export-components
export const getFontWeight = (weight: TextProps["weight"]) => {
  switch (weight) {
    case "regular":
      return "400";
    case "medium":
      return "500";
    case "semibold":
      return "600";
    case "bold":
      return "700";
    default:
      return "400";
  }
};

export const StyledText = styled.p<TextProps & { breakpoint: Breakpoint }>`
  font-family: ${({ theme }) => theme.text.fontFamily};
  margin: 0;
  color: ${({ color }) => color};
  ${({ m, mb, ml, mr, mt, mx, my }) =>
    getMarginsCSS({ m, mb, ml, mr, mt, mx, my })};
  ${({ p, pb, pl, pr, pt, px, py }) =>
    getPaddingCSS({ p, pb, pl, pr, pt, px, py })};
  font-weight: ${({ weight }) => getFontWeight(weight)};
  font-size: ${({ size, breakpoint }) => size && getFontSize(size, breakpoint)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  text-align: ${({ align }) => align ?? "left"};
`;
