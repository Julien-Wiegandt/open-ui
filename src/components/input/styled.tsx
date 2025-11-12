import { radiusMap } from "@/theme/constants";
import styled from "styled-components";
import type { InputProps } from ".";
import { getMarginsCSS, getPaddingCSS, getScrollbarCSS } from "../common";
import type { MarginProps, PaddingProps } from "../common/types";

export const StyledInput = styled.input<InputProps>`
  all: unset;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 13px;
  display: flex;
  align-items: center;
  text-align: left;

  color: ${({ theme, color }) => theme.palette[color ?? "default"].main};

  background-color: white;
  border-radius: ${({ theme }) => radiusMap[theme.radius]};
  padding: ${({ type }) => (type === "color" ? "0" : `8px 12px`)};
  ${getScrollbarCSS()};

  border: 1px solid
    ${({ error, type }) =>
      type === "color"
        ? "transparent"
        : error
        ? ({ theme }) => theme.palette.error.main
        : ({ theme, color }) => theme.palette[color ?? "default"].main};
  ${({ m, mb, ml, mr, mt, mx, my }: MarginProps) =>
    getMarginsCSS({ m, mb, ml, mr, mt, mx, my })};
  ${({ p, pb, pl, pr, pt, px, py }: PaddingProps) =>
    getPaddingCSS({ p, pb, pl, pr, pt, px, py })};

  width: ${({ w }) => w ?? "100%"};
  height: ${({ h }) => h};

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;

    height: 12px;
    width: 12px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%233D3D3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
`;
