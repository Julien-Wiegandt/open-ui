import type { Color, Radius, Variant } from "@/theme/types";
import React, { forwardRef } from "react";
import { sizeMap } from "../button/style";
import type { MarginProps, PaddingProps } from "../common/types";
import { Text } from "../text";
import { StyledChip } from "./style";

import { useComponentTheme } from "@/hooks/use-component-theme";

export type ChipStyleProps = {
  // optional with theme defaults
  color?: Color | string;
  variant?: Variant;
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
  (originalProps, ref) => {
    const mergedProps = useComponentTheme("chip", originalProps);
    const {
      label,
      startIcon,
      endIcon,
      size = "md",
      color = "default",
      variant = "contained",
      ...props
    } = mergedProps;

    return (
      <StyledChip
        ref={ref}
        size={size}
        color={color}
        variant={variant}
        {...props}
      >
        {startIcon}
        {label && (
          <Text size={sizeMap[size].fontSize} mx={0.75}>
            {label}
          </Text>
        )}
        {endIcon}
      </StyledChip>
    );
  },
);

Chip.displayName = "Chip";
