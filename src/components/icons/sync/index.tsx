import gsap from "gsap";
import { forwardRef, useLayoutEffect, useRef } from "react";

export type SyncIconProps = {
  isVisible?: boolean;
  size?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
} & React.SVGAttributes<SVGSVGElement>;

export const SyncIcon = forwardRef<SVGSVGElement, SyncIconProps>(
  (
    {
      isVisible = true,
      size = 24,
      strokeWidth = 2,
      animated = false,
      color = "currentColor",
      ...props
    },
    ref
  ) => {
    const iconRef = useRef<SVGGElement | null>(null);

    useLayoutEffect(() => {
      if (!animated) return;

      const element = iconRef.current;
      if (element) {
        if (isVisible) {
          gsap.to(element, {
            opacity: 1,
            duration: 0.3,
          });
          gsap.to(element, {
            rotation: 360,
            repeat: -1,
            ease: "linear",
            duration: 1,
            transformOrigin: "50% 50%",
          });
        } else {
          gsap.to(element, {
            opacity: 0,
            duration: 0.3,
          });
        }
      }

      return () => {
        if (element) gsap.killTweensOf(element);
      };
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
        <g ref={iconRef}>
          <path
            d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }
);
