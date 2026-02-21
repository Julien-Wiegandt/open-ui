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

export type SparklesIconProps = {
  size?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
} & React.SVGAttributes<SVGSVGElement>;

export const SparklesIcon = forwardRef<SVGSVGElement, SparklesIconProps>(
  ({ size = 24, strokeWidth = 2, animated = true, color, ...props }, ref) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const mainSparkleRef = useRef<SVGPathElement>(null);
    const topSparkleRef = useRef<SVGGElement>(null);
    const bottomSparkleRef = useRef<SVGGElement>(null);
    const [autoColor, setAutoColor] = useState("currentColor");

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
        gsap.set(
          [
            mainSparkleRef.current,
            topSparkleRef.current,
            bottomSparkleRef.current,
          ],
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
          },
        );
        return;
      }

      const ctx = gsap.context(() => {
        // Main sparkle animation: subtle scale and rotation
        gsap.to(mainSparkleRef.current, {
          scale: 1.1,
          rotation: 5,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "center center",
        });

        // Top sparkle animation: blinking and scaling
        gsap.to(topSparkleRef.current, {
          opacity: 0.3,
          scale: 0.7,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 0.2,
          transformOrigin: "center center",
        });

        // Bottom sparkle animation: blinking and scaling with different timing
        gsap.to(bottomSparkleRef.current, {
          opacity: 0.3,
          scale: 0.7,
          duration: 0.7,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 0.4,
          transformOrigin: "center center",
        });
      });

      return () => ctx.revert();
    }, [animated]);

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
        stroke={resolvedColor}
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
        {/* Main Sparkle */}
        <path
          ref={mainSparkleRef}
          d="M9.937 15.5A2 2 0 0 0 8.5 14.063L2 12l6.5-2.063A2 2 0 0 0 9.937 8.5L12 2l2.063 6.5a2 2 0 0 0 1.437 1.437L22 12l-6.5 2.063a2 2 0 0 0-1.437 1.437L12 22l-2.063-6.5Z"
        />

        {/* Top Right Sparkle */}
        <g ref={topSparkleRef}>
          <path d="M20 3v4" />
          <path d="M19 5h4" />
        </g>

        {/* Bottom Left Sparkle */}
        <g ref={bottomSparkleRef}>
          <path d="M5 17v4" />
          <path d="M4 19h4" />
        </g>
      </svg>
    );
  },
);
