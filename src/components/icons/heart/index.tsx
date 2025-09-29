// src/components/HeartIcon.tsx

import gsap from "gsap";
import { forwardRef, useLayoutEffect, useRef } from "react";

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
    {
      isLiked,
      size = 24,
      strokeWidth = 2,
      animated = false,
      color = "#FF4500", // Couleur par défaut pour un coeur
      ...props
    },
    ref
  ) => {
    const heartRef = useRef<SVGPathElement>(null);

    useLayoutEffect(() => {
      if (!animated) {
        // Applique l'état directement si non animé
        gsap.set(heartRef.current, {
          fill: isLiked ? color : "none",
          stroke: color,
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
            fill: color, // Remplissage
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
    }, [isLiked, animated, color]);

    return (
      <svg
        ref={ref}
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
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          fill="none" // Initialement non rempli
        />
      </svg>
    );
  }
);
