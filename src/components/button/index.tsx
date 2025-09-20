"use client";

import type { Color, Radius, Variant } from "@/theme/types";
import React, { forwardRef, useMemo } from "react";
import type { MarginProps, PaddingProps } from "../common/types";
import { Text } from "../text";
import { sizeMap, StyledButton } from "./style";

export type ButtonStyleProps = {
  // required
  color: Color;
  variant: Variant;
  // optional
  size?: "sm" | "md" | "lg";
  bgcolor?: string;
  radius?: Radius;
  gap?: string | number;
  loading?: boolean;
  txtColor?: string;
} & MarginProps &
  PaddingProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & ButtonStyleProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, startIcon, endIcon, ...props }, ref) => {
    const memoizedProps = useMemo(() => {
      const defaultProps = {
        size: "md" as ButtonStyleProps["size"],
      };
      return {
        ...defaultProps,
        ...props,
      };
    }, [props]);

    return (
      <StyledButton
        ref={ref}
        {...memoizedProps}
        disabled={props.loading || props.disabled}
      >
        {startIcon}
        {label && (
          <Text size={sizeMap[memoizedProps.size ?? "md"].fontSize}>{label}</Text>
        )}
        {endIcon}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
