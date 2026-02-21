import type { Color } from "@/theme/types";
import { gsap } from "gsap";
import { forwardRef, useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import { resolveColor } from "../utils/resolve-color";
import { ShimmerEffect, SkeletonWrapper } from "./style";

export type SkeletonProps = {
  width?: string;
  height?: string;
  radius?: string;
  color?: Color | string;
  wrapperStyle?: React.CSSProperties;
  shimmerStyle?: React.CSSProperties;
};

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height, radius, color, wrapperStyle, shimmerStyle }, ref) => {
    const theme = useTheme();
    const shimmerRef = useRef(null);

    // Resolve Color token or raw color string to a hex value
    const resolvedColor = color ? resolveColor(color, theme).main : undefined;

    useEffect(() => {
      const shimmerElement = shimmerRef.current;

      gsap.to(shimmerElement, {
        xPercent: 180,
        duration: 1.5,
        repeat: -1,
        ease: "power1.inOut",
      });
    }, []);

    return (
      <SkeletonWrapper
        ref={ref}
        width={width}
        height={height}
        radius={radius}
        color={resolvedColor}
        style={wrapperStyle}
      >
        <ShimmerEffect
          ref={shimmerRef}
          color={resolvedColor}
          style={shimmerStyle}
        />
      </SkeletonWrapper>
    );
  },
);
