import styled from "styled-components";
import type { SkeletonProps } from ".";

export const SkeletonWrapper = styled.div<SkeletonProps>`
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: #e0e0e0;

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "20px"};
  border-radius: ${({ radius }) => radius || "4px"};
`;

export const ShimmerEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);

  transform: translateX(-100%);
`;
