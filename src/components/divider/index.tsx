"use client";

import { forwardRef } from "react";

export type DividerProps = {
  color?: string;
  orientation?: "vertical" | "horizontal";
  size?: "sm" | "md" | "lg";
  type?: "solid" | "dotted" | "dashed" | "double";
} & React.HTMLAttributes<HTMLDivElement>;

const sizeMap: Record<NonNullable<DividerProps["size"]>, number> = {
  sm: 1,
  md: 2,
  lg: 3,
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ style, orientation = "horizontal", ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          height: orientation === "horizontal" ? "1px" : "100%",
          width: orientation === "horizontal" ? "100%" : "1px",
          borderTop:
            orientation === "horizontal"
              ? `${sizeMap[props.size ?? "sm"]}px ${props.type ?? "solid"} ${
                  props.color ?? "black"
                }`
              : "none",
          borderLeft:
            orientation === "horizontal"
              ? "none"
              : `${sizeMap[props.size ?? "sm"]}px ${props.type ?? "solid"} ${
                  props.color ?? "black"
                }`,
          ...style,
        }}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
