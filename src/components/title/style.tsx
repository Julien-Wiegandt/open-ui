import type { Breakpoint } from "@/hooks/use-responsive";
import styled from "styled-components";
import type { TitleProps } from ".";
import { getMarginsCSS, getPaddingCSS } from "../common";
import { getFontWeight } from "../text/styled";

const getFontSize = (level: TitleProps["level"], breakpoint: Breakpoint) => {
  switch (level) {
    case 1:
      return breakpoint === "sm" ? "28px" : "32px";
    case 2:
      return breakpoint === "sm" ? "22px" : "24px";
    case 3:
      return "20px";
    case 4:
      return "18px";
    case 5:
      return "16px";
    case 6:
      return "14px";
    default:
      return "1rem";
  }
};

export const StyledTitle = styled.h1<TitleProps & { breakpoint: Breakpoint }>`
  font-family: ${({ theme }) => theme.title.fontFamily};
  margin: 0;
  color: ${({ color }) => color};
  font-size: ${({ level, breakpoint }) => getFontSize(level, breakpoint)};
  font-weight: ${({ weight }) => getFontWeight(weight)};
  ${({ m, mb, ml, mr, mt, mx, my }) => getMarginsCSS({ m, mb, ml, mr, mt, mx, my })};
  ${({ p, pb, pl, pr, pt, px, py }) => getPaddingCSS({ p, pb, pl, pr, pt, px, py })};
`;
