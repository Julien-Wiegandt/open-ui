import { radiusMap } from "@/theme/constants";
import styled, { css } from "styled-components";
import type { SkeletonProps } from ".";

export const SkeletonWrapper = styled.div<SkeletonProps>`
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: ${({ color }) => color ?? `#000000`}14;

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "20px"};
  border-radius: ${({ radius, theme }) => radius ?? radiusMap[theme.radius]};
  ${({ style }) => style && css(style as any)}
`;

export const ShimmerEffect = styled.div<{
  color: SkeletonProps["color"];
  style: SkeletonProps["shimmerStyle"];
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    90deg,
    transparent,
    ${({ color }) => color ?? `#000000`}22,
    transparent
  );

  transform: translateX(-100%);
  ${({ style }) => style && css(style as any)}
`;
