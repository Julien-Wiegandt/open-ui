"use client";

import type { Color } from "@/theme/types";
import { useTheme } from "styled-components";

export type ProgressBarProps = {
  color: Color;
  value: number;
  height?: string;
};

export const ProgressBar = ({ color, value, height }: ProgressBarProps) => {
  const theme = useTheme();

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: theme.palette[color].light,
        borderRadius: "8px",
        height: height ?? "8px",
        border: `2px solid ${theme.palette[color].light}`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: `${value > 100 ? 100 : value}%`,
          backgroundColor: theme.palette[color].main,
          borderRadius: "8px",
        }}
      ></div>
    </div>
  );
};
