import { radiusMap } from "@/theme/constants";
import styled from "styled-components";
import type { TextAreaProps } from ".";
import { getMarginsCSS, getPaddingCSS, getScrollbarCSS } from "../common";
import type { MarginProps, PaddingProps } from "../common/types";

export const StyledTextArea = styled.textarea<TextAreaProps>`
  all: unset;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 13px;
  display: flex;
  align-items: center;
  text-align: left;

  color: ${({ theme }) => theme.palette.primary.dark};
  background-color: white;
  border-radius: min(16px, ${({ theme }) => radiusMap[theme.radius]});
  padding: 8px 12px;
  width: 100%;
  ${getScrollbarCSS()};

  border: 1px solid
    ${({ error, theme }) =>
      error ? theme.palette.error.main : theme.palette.primary.dark};
  ${({ m, mb, ml, mr, mt, mx, my }: MarginProps) =>
    getMarginsCSS({ m, mb, ml, mr, mt, mx, my })};
  ${({ p, pb, pl, pr, pt, px, py }: PaddingProps) =>
    getPaddingCSS({ p, pb, pl, pr, pt, px, py })};

  width: ${({ w }) => w};
  height: ${({ h }) => h};
`;
