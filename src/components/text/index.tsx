import { useResponsive } from "@/hooks/use-responsive";
import { forwardRef, useEffect, useRef } from "react";
import type { MarginProps, PaddingProps } from "../common/types";
import { useCombinedRefs } from "../utils/use-combined-refs";
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
  onSizeChange?: (size: { width: number; height: number }) => void;
} & MarginProps &
  PaddingProps &
  React.HTMLAttributes<HTMLParagraphElement>;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, onSizeChange, ...props }, ref) => {
    const { breakpoint } = useResponsive();
    const internalRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
      const element = internalRef.current;
      if (!element || !onSizeChange) {
        return;
      }

      const observer = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) {
          const { width, height } = entry.contentRect;
          onSizeChange({ width, height });
        }
      });

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }, [onSizeChange]);

    const combinedRef = useCombinedRefs(ref, internalRef);

    return (
      <StyledText ref={combinedRef} {...props} breakpoint={breakpoint}>
        {children}
      </StyledText>
    );
  }
);

Text.displayName = "Text";
