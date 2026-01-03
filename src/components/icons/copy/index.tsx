import gsap from "gsap";
import { forwardRef, useLayoutEffect, useRef } from "react";

export type CopyIconProps = {
  isCopied?: boolean;
  size?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
} & React.SVGAttributes<SVGSVGElement>;

export const CopyIcon = forwardRef<SVGSVGElement, CopyIconProps>(
  (
    {
      isCopied,
      size = 24,
      strokeWidth = 2,
      animated = true,
      color = "currentColor",
      ...props
    },
    ref
  ) => {
    const frontRef = useRef<SVGRectElement>(null);
    const backRef = useRef<SVGPathElement>(null);
    const prevIsCopied = useRef(isCopied);

    useLayoutEffect(() => {
      if (!animated) {
        gsap.set([frontRef.current, backRef.current], {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
        });
        return;
      }

      // Initial subtle loop if not copied
      const ctx = gsap.context(() => {
        if (!isCopied) {
          gsap.to(frontRef.current, {
            x: 1,
            y: 1,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });

      // Trigger animation on isCopied change
      if (isCopied && !prevIsCopied.current) {
        const tl = gsap.timeline();
        tl.to(frontRef.current, {
          scale: 1.1,
          x: 2,
          y: 2,
          duration: 0.2,
          ease: "power2.out",
        }).to(frontRef.current, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "bounce.out",
        });
      }

      prevIsCopied.current = isCopied;
      return () => ctx.revert();
    }, [isCopied, animated]);

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        style={{
          overflow: "visible",
          ...props.style,
        }}
      >
        <path ref={backRef} d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        <rect
          ref={frontRef}
          width="14"
          height="14"
          x="8"
          y="8"
          rx="2"
          ry="2"
          fill="none"
        />
      </svg>
    );
  }
);
