import { forwardRef } from "react";
import type { Color, Theme } from "../../theme/types";
import { useTheme } from "styled-components";
import { resolveThemeColor } from "../common";

export type DividerProps = {
  color?: Color | string;
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
  ({ style, orientation = "horizontal", color, ...props }, ref) => {
    const theme = useTheme() as Theme;
    const resolvedColor = resolveThemeColor(
      color ?? theme.semantic.border,
      theme,
    );

    return (
      <div
        ref={ref}
        style={{
          height: orientation === "horizontal" ? "1px" : "100%",
          width: orientation === "horizontal" ? "100%" : "1px",
          borderTop:
            orientation === "horizontal"
              ? `${sizeMap[props.size ?? "sm"]}px ${
                  props.type ?? "solid"
                } ${resolvedColor}`
              : "none",
          borderLeft:
            orientation === "horizontal"
              ? "none"
              : `${sizeMap[props.size ?? "sm"]}px ${
                  props.type ?? "solid"
                } ${resolvedColor}`,
          ...style,
        }}
        {...props}
      />
    );
  },
);


Divider.displayName = "Divider";
