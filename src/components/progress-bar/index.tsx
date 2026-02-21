import type { Color } from "@/theme/types";
import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";

import { gsap } from "gsap";
import { resolveColor } from "../utils/resolve-color";

export type ProgressBarProps = {
  color: Color | string;
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

  const palette = resolveColor(color, theme);

  return (
    <div
      style={{
        width: w ?? "100%",
        position: "relative",
        backgroundColor: palette.light,
        borderRadius: "8px",
        height: h ?? "8px",
        border: `2px solid ${palette.light}`,
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
          backgroundColor: palette.main,
          borderRadius: "8px",
        }}
      ></div>
    </div>
  );
};
