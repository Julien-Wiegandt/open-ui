// src/components/CheckIcon.tsx

import gsap from "gsap";
import { forwardRef, useLayoutEffect, useRef } from "react";

export type CheckIconProps = {
  isVisible: boolean;
  size?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
} & React.SVGAttributes<SVGSVGElement>;

const CheckIcon = forwardRef<SVGSVGElement, CheckIconProps>(
  (
    {
      isVisible,
      size = 24,
      strokeWidth = 2,
      animated = false,
      color = "currentColor",
      ...props
    },
    ref
  ) => {
    const checkPathRef = useRef<SVGPathElement | null>(null);

    useLayoutEffect(() => {
      if (!animated) return;

      if (checkPathRef.current) {
        const path = checkPathRef.current;
        const pathLength = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        if (isVisible) {
          gsap.fromTo(
            path,
            {
              opacity: 0,
            },
            {
              strokeDashoffset: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              delay: 0.2,
            }
          );
        } else {
          gsap.to(path, {
            strokeDashoffset: pathLength,
            duration: 0.3,
            ease: "power2.in",
          });
        }
      }
    }, [isVisible, animated]);

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          ref={checkPathRef}
          d="M5 13L9 17L19 7"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default CheckIcon;
