import type { Color } from "@/theme/types";
import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";

import { gsap } from "gsap";

export type ProgressBarProps = {
  color: Color;
  value: number;
  animationDurationInSeconds?: number;
  h?: string;
  w?: string;
};

export const ProgressBar = ({
  color,
  value,
  h,
  w,
  animationDurationInSeconds,
}: ProgressBarProps) => {
  const theme = useTheme();

  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${value > 100 ? 100 : value}%`,
        duration: animationDurationInSeconds ?? 1,
        ease: "power2.out",
      });
    }
  }, [value, animationDurationInSeconds]);

  return (
    <div
      style={{
        width: w ?? "100%",
        position: "relative",
        backgroundColor: theme.palette[color].light,
        borderRadius: "8px",
        height: h ?? "8px",
        border: `2px solid ${theme.palette[color].light}`,
      }}
    >
      <div
        ref={progressBarRef}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "0%",
          backgroundColor: theme.palette[color].main,
          borderRadius: "8px",
        }}
      ></div>
    </div>
  );
};
