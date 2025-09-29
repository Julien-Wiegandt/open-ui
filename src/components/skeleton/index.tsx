import { gsap } from "gsap";
import { forwardRef, useEffect, useRef } from "react";
import { ShimmerEffect, SkeletonWrapper } from "./style";

export type SkeletonProps = {
  width?: string;
  height?: string;
  radius?: string;
};

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height, radius }, ref) => {
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
      <SkeletonWrapper ref={ref} width={width} height={height} radius={radius}>
        <ShimmerEffect ref={shimmerRef} />
      </SkeletonWrapper>
    );
  }
);
