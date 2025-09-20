"use client";

import type { Color, Radius, Variant } from "@/theme/types";
import React, { forwardRef, useMemo } from "react";
import type { MarginProps, PaddingProps } from "../common/types";
import { Text } from "../text";
import { sizeMap, StyledButton } from "./style";

export type ButtonProps = {
  // required
  color: Color;
  variant: Variant;
  // optional
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  bgcolor?: string;
  radius?: Radius;
  gap?: string | number;
  loading?: boolean;
  active?: boolean;
  txtColor?: string;
} & MarginProps &
  PaddingProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const memoizedProps = useMemo(() => {
    const defaultProps = {
      size: "md" as ButtonProps["size"],
    };
    return {
      ...defaultProps,
      ...props,
    };
  }, [props]);

  return (
    <StyledButton ref={ref} {...memoizedProps} disabled={props.loading || props.disabled}>
      {props.startIcon}
      {props.label && (
        <Text size={sizeMap[memoizedProps.size ?? "md"].fontSize}>{props.label}</Text>
      )}
      {props.endIcon}
    </StyledButton>
  );
});

Button.displayName = "Button";
