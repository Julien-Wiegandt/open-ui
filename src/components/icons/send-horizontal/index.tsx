import gsap from "gsap";
import { forwardRef, useLayoutEffect, useRef } from "react";

export type SendHorizontalIconProps = {
  size?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
} & React.SVGAttributes<SVGSVGElement>;

export const SendHorizontalIcon = forwardRef<SVGSVGElement, SendHorizontalIconProps>(
  (
    { size = 24, strokeWidth = 2, animated = true, color = "currentColor", ...props },
    ref
  ) => {
    const pathRef = useRef<SVGPathElement>(null);
    const lineRef = useRef<SVGPathElement>(null);

    useLayoutEffect(() => {
      if (!animated) {
        gsap.set([pathRef.current, lineRef.current], {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
        });
        return;
      }

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          repeat: -1,
          defaults: { ease: "power2.inOut" },
        });

        tl.to([pathRef.current, lineRef.current], {
          x: 25,
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
        })
          .set([pathRef.current, lineRef.current], { x: -25 })
          .to([pathRef.current, lineRef.current], {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          })
          .to({}, { duration: 0.4 }); // Short pause for rhythm
      });

      return () => ctx.revert();
    }, [animated]);

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
        <path
          ref={pathRef}
          d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
        />
        <path ref={lineRef} d="M6 12h16" />
      </svg>
    );
  }
);
