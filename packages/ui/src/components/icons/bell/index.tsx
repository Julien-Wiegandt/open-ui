"use client";

// src/components/BellIcon.tsx

import gsap from "gsap";
import {
  forwardRef,
  useLayoutEffect,
  useRef,
} from "react";
import { useAutoContrastColor } from "../../utils/use-auto-contrast-color";

export type BellIconProps = {
  hasNotification: boolean;
  size?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
} & React.SVGAttributes<SVGSVGElement>;

export const BellIcon = forwardRef<SVGSVGElement, BellIconProps>(
  (
    {
      hasNotification,
      size = 24,
      strokeWidth = 2,
      animated = false,
      color,
      ...props
    },
    ref,
  ) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const bellRef = useRef<SVGGElement>(null);
    const autoColor = useAutoContrastColor(svgRef, !!color);

    const resolvedColor = color ?? autoColor ?? "currentColor";
    const prevHasNotification = useRef(hasNotification);

    useLayoutEffect(() => {
      if (animated && hasNotification && !prevHasNotification.current) {
        gsap.fromTo(
          bellRef.current,
          { rotation: -15 },
          {
            rotation: 15,
            duration: 0.1,
            repeat: 5,
            yoyo: true,
            ease: "power2.inOut",
            transformOrigin: "50% 20%",
            onComplete: () => {
              gsap.to(bellRef.current, { rotation: 0, duration: 0.2 });
            },
          },
        );
      }
      prevHasNotification.current = hasNotification;
    }, [hasNotification, animated]);

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
        style={{
          overflow: "visible",
          ...props.style,
        }}
      >
        <g ref={bellRef}>
          <path
            d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
            stroke={resolvedColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
);
