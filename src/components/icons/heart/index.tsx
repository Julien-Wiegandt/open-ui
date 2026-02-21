// src/components/HeartIcon.tsx

import gsap from "gsap";
import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { getColorBasedOnBackground } from "../../utils/get-color-based-on-background";
import { getRecursiveBgColor } from "../../utils/get-recursive-bg-color";

export type HeartIconProps = {
  isLiked: boolean;
  size?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
} & React.SVGAttributes<SVGSVGElement>;

export const HeartIcon = forwardRef<SVGSVGElement, HeartIconProps>(
  (
    { isLiked, size = 24, strokeWidth = 2, animated = false, color, ...props },
    ref,
  ) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const heartRef = useRef<SVGPathElement>(null);
    const [autoColor, setAutoColor] = useState("#FF4500");

    useEffect(() => {
      if (color) return;
      const element = svgRef.current?.parentElement;
      if (!element) return;
      try {
        const bgColor = getRecursiveBgColor(element);
        setAutoColor(getColorBasedOnBackground(bgColor));
      } catch {
        // Fallback silencieux
      }
    });

    const resolvedColor = color ?? autoColor;

    useLayoutEffect(() => {
      if (!animated) {
        // Applique l'état directement si non animé
        gsap.set(heartRef.current, {
          fill: isLiked ? resolvedColor : "none",
          stroke: resolvedColor,
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { duration: 0.2, ease: "power3.inOut" },
      });

      if (isLiked) {
        // Animation quand on "like"
        timeline
          .to(heartRef.current, {
            fill: resolvedColor, // Remplissage
            scale: 1.2, // Effet "pop"
            transformOrigin: "center center",
          })
          .to(heartRef.current, { scale: 1 }); // Retour à la taille normale
      } else {
        // Animation quand on "unlike"
        timeline.to(heartRef.current, {
          fill: "none",
        });
      }
    }, [isLiked, animated, resolvedColor]);

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
        <path
          ref={heartRef}
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          stroke={resolvedColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          fill="none" // Initialement non rempli
        />
      </svg>
    );
  },
);
