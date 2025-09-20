"use client";

import type { Color, Radius, Variant } from "@/theme/types";
import React, { forwardRef, useMemo } from "react";
import { sizeMap } from "../button/style";
import type { MarginProps, PaddingProps } from "../common/types";
import { Text } from "../text";
import { StyledChip } from "./style";

export type ChipStyleProps = {
  // required
  color: Color;
  variant: Variant;
  // optional
  size?: "sm" | "md" | "lg";
  bgcolor?: string;
  radius?: Radius;
  gap?: string | number;
  fontColor?: string;
} & MarginProps &
  PaddingProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ChipProps = {
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & ChipStyleProps;

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ label, startIcon, endIcon, ...props }, ref) => {
    const memoizedProps = useMemo(() => {
      const defaultProps = {
        size: "md" as const,
      };
      return {
        ...defaultProps,
        ...props,
      };
    }, [props]);

    return (
      <StyledChip ref={ref} {...memoizedProps}>
        {startIcon}
        {label && (
          <Text size={sizeMap[memoizedProps.size].fontSize} mx={0.75}>
            {label}
          </Text>
        )}
        {endIcon}
      </StyledChip>
    );
  }
);

Chip.displayName = "Chip";
