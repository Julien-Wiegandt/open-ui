// src/components/HamburgerIcon.tsx

import gsap from "gsap";
import { forwardRef, useLayoutEffect, useRef } from "react";

export type HamburgerIconProps = {
  isOpen: boolean;
  size?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
} & React.SVGAttributes<SVGSVGElement>;

export const HamburgerIcon = forwardRef<SVGSVGElement, HamburgerIconProps>(
  (
    {
      isOpen,
      size = 24,
      strokeWidth = 2,
      animated = false,
      color = "currentColor",
      ...props
    },
    ref
  ) => {
    const lineOneRef = useRef<SVGPathElement>(null);
    const lineTwoRef = useRef<SVGPathElement>(null);
    const lineThreeRef = useRef<SVGPathElement>(null);

    useLayoutEffect(() => {
      if (!animated) return;
      const timeline = gsap.timeline({
        defaults: { duration: 0.2, ease: "power2.inOut" },
      });

      if (isOpen) {
        // Animation vers la croix "X"
        timeline
          .to(lineOneRef.current, { attr: { d: "M6 18L18 6" } }, 0)
          .to(lineTwoRef.current, { autoAlpha: 0 }, 0)
          .to(lineThreeRef.current, { attr: { d: "M6 6L18 18" } }, 0);
      } else {
        // Animation de retour vers le hamburger
        timeline
          .to(lineOneRef.current, { attr: { d: "M4 6L20 6" } }, 0)
          .to(lineTwoRef.current, { autoAlpha: 1 }, 0)
          .to(lineThreeRef.current, { attr: { d: "M4 18L20 18" } }, 0);
      }
    }, [isOpen, animated]);

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
          ref={lineOneRef}
          d="M4 6L20 6" // Ligne du haut
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          ref={lineTwoRef}
          d="M4 12L20 12" // Ligne du milieu
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          ref={lineThreeRef}
          d="M4 18L20 18" // Ligne du bas
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);
