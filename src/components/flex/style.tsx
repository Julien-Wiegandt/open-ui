import { radiusMap } from "@/theme/constants";
import styled, { css } from "styled-components";
import type { FlexAlign, FlexJustify, FlexProps } from ".";
import { getMarginsCSS, getPaddingCSS, toRem } from "../common";

const alignMap: Record<FlexAlign, string> = {
  normal: "normal",
  center: "center",
  start: "flex-start",
  end: "flex-end",
  stretch: "stretch",
};

const justifyMap: Record<FlexJustify, string> = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

// eslint-disable-next-line react-refresh/only-export-components
export const shadowMap: Record<0 | 1 | 2 | 3 | 4 | 6 | 8, string> = {
  0: "none",
  1: `0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)`,
  2: `0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)`,
  3: `0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)`,
  4: `0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
  6: `0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)`,
  8: `0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)`,
};

export const SlyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap && toRem(gap)};
  align-items: ${({ align }) => align && alignMap[align]};
  justify-content: ${({ justify }) => justify && justifyMap[justify]};
  flex-wrap: ${({ wrap }) => wrap};
  box-sizing: border-box;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: min(16px, ${({ theme }) => radiusMap[theme.radius]});
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minheight }) => minheight};
  ${({ m, mb, ml, mr, mt, mx, my }) => getMarginsCSS({ m, mb, ml, mr, mt, mx, my })};
  ${({ p, pb, pl, pr, pt, px, py }) => getPaddingCSS({ p, pb, pl, pr, pt, px, py })};
  box-shadow: ${({ elevation }) => shadowMap[elevation ?? 0]};
  &:hover {
    ${(props) => props.hoverstyle && css(props.hoverstyle)}
  }
`;
