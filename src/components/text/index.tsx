"use client";

import { useResponsive } from "@/hooks/use-responsive";
import { forwardRef } from "react";
import type { MarginProps, PaddingProps } from "../common/types";
import { StyledText } from "./styled";

export type TextProps = {
  weight?: "regular" | "medium" | "semibold" | "bold";
  size?:
    | "8"
    | "10"
    | "12"
    | "14"
    | "15"
    | "16"
    | "18"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "40"
    | "44"
    | "48"
    | "52"
    | "56"
    | "60"
    | "64"
    | "72"
    | "80"
    | "96";
  width?: string;
  height?: string;
  align?: "left" | "center" | "right" | "justify";
} & MarginProps &
  PaddingProps &
  React.HTMLAttributes<HTMLParagraphElement>;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, ...props }, ref) => {
    const { breakpoint } = useResponsive();
    return (
      <StyledText ref={ref} {...props} breakpoint={breakpoint}>
        {children}
      </StyledText>
    );
  }
);

Text.displayName = "Text";
