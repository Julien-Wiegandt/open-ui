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

export type DotsIconProps = {
  size?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
} & React.SVGAttributes<SVGSVGElement>;

export const DotsIcon = forwardRef<SVGSVGElement, DotsIconProps>(
  ({ size = 24, strokeWidth = 2, animated = true, color, ...props }, ref) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const dot1Ref = useRef<SVGCircleElement>(null);
    const dot2Ref = useRef<SVGCircleElement>(null);
    const dot3Ref = useRef<SVGCircleElement>(null);
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
        gsap.set([dot1Ref.current, dot2Ref.current, dot3Ref.current], {
          y: 0,
          opacity: 1,
          scale: 1,
        });
        return;
      }

      const ctx = gsap.context(() => {
        const dots = [dot1Ref.current, dot2Ref.current, dot3Ref.current];

        gsap.to(dots, {
          y: -4,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          stagger: {
            each: 0.15,
            repeat: -1,
            yoyo: true,
          },
          ease: "power1.inOut",
        });

        gsap.to(dots, {
          opacity: 0.4,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          stagger: {
            each: 0.15,
            repeat: -1,
            yoyo: true,
          },
          ease: "power1.inOut",
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
        <circle ref={dot1Ref} cx="5" cy="12" r="1" fill={resolvedColor} />
        <circle ref={dot2Ref} cx="12" cy="12" r="1" fill={resolvedColor} />
        <circle ref={dot3Ref} cx="19" cy="12" r="1" fill={resolvedColor} />
      </svg>
    );
  },
);
