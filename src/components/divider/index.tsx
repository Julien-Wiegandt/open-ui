"use client";

import { forwardRef } from "react";

export type DividerProps = {
  horizontal?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ style, horizontal = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          height: horizontal ? "4px" : "100%",
          width: horizontal ? "100%" : "4px",
          backgroundColor: "#FFFFFF1A",
          ...style,
        }}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
