import styled, { css, type CSSObject } from "styled-components";
import type { ImageProps } from ".";

export const StyledImage = styled.img<ImageProps & { initstyle?: React.CSSProperties }>`
  ${(props) => props.initstyle && css(props.initstyle as CSSObject)}
  &:hover {
    ${(props) => props.hoverstyle && css(props.hoverstyle)}
  }
  &:active {
    ${(props) => props.pressstyle && css(props.pressstyle)}
  }
`;
