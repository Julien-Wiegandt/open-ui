import { gsap } from "gsap";
import { forwardRef, useEffect, useRef } from "react";
import { ShimmerEffect, SkeletonWrapper } from "./style";

export type SkeletonProps = {
  width?: string;
  height?: string;
  radius?: string;
  color?: string;
  wrapperStyle?: React.CSSProperties;
  shimmerStyle?: React.CSSProperties;
};

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height, radius, color, wrapperStyle, shimmerStyle }, ref) => {
    const shimmerRef = useRef(null);

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
        color={color}
        style={wrapperStyle}
      >
        <ShimmerEffect ref={shimmerRef} color={color} style={shimmerStyle} />
      </SkeletonWrapper>
    );
  }
);
