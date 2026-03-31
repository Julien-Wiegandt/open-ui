"use client";

import gsap from "gsap";
import {
  forwardRef,
  useLayoutEffect,
  useRef,
} from "react";
import { useAutoContrastColor } from "../../utils/use-auto-contrast-color";

export type CheckIconProps = {
  isVisible: boolean;
  size?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
} & React.SVGAttributes<SVGSVGElement>;

export const CheckIcon = forwardRef<SVGSVGElement, CheckIconProps>(
  (
    {
      isVisible,
      size = 24,
      strokeWidth = 2,
      animated = false,
      color,
      ...props
    },
    ref,
  ) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const checkPathRef = useRef<SVGPathElement | null>(null);
    const autoColor = useAutoContrastColor(svgRef, !!color);

    const resolvedColor = color ?? autoColor ?? "currentColor";

    useLayoutEffect(() => {
      if (!animated) return;

      if (checkPathRef.current) {
        const path = checkPathRef.current;
        const pathLength = path.getTotalLength();

        if (isVisible) {
          gsap.fromTo(
            path,
            {
              strokeDasharray: pathLength,
              strokeDashoffset: pathLength,
              opacity: 0,
            },
            {
              strokeDashoffset: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              delay: 0.2,
            },
          );
        } else {
          gsap.to(path, {
            strokeDashoffset: pathLength,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          });
        }
      }
    }, [isVisible, animated]);

    return (
      <svg
        ref={(node) => {
          svgRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref)
            (ref as React.MutableRefObject<SVGSVGElement | null>).current =
              node;
        }}
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
          stroke={resolvedColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={animated ? { opacity: isVisible ? undefined : 0 } : undefined}
        />
      </svg>
    );
  },
);
