"use client";

import { radiusMap } from "../../theme/constants";
import styled from "styled-components";
import type { TextAreaProps } from ".";
import { getMarginsCSS, getPaddingCSS, getScrollbarCSS } from "../common";
import type { MarginProps, PaddingProps } from "../common/types";
import type { Theme } from "../../theme/types";
import { resolveColor } from "../utils/resolve-color";

export const StyledTextArea = styled.textarea<TextAreaProps>`
  all: unset;
  box-sizing: border-box;
  font-family: ${({ theme }) => (theme as Theme).text.fontFamily};
  font-size: 13px;
  display: flex;
  align-items: center;
  text-align: left;

  color: ${({ theme, color }) =>
    resolveColor(color ?? "default", theme as Theme).main};
  background-color: white;
  border-radius: min(16px, ${({ theme }) => radiusMap[(theme as Theme).radius]});
  padding: 8px 12px;
  width: 100%;
  ${getScrollbarCSS()};

  border: 1px solid
    ${({ error, theme, color }) =>
      error
        ? (theme as Theme).palette.error.main
        : resolveColor(color ?? "default", theme as Theme).main};

  ${({ m, mb, ml, mr, mt, mx, my }: MarginProps) =>
    getMarginsCSS({ m, mb, ml, mr, mt, mx, my })};
  ${({ p, pb, pl, pr, pt, px, py }: PaddingProps) =>
    getPaddingCSS({ p, pb, pl, pr, pt, px, py })};

  width: ${({ w }) => w};
  height: ${({ h }) => h};
`;
