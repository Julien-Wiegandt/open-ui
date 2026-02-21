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

export type SyncIconProps = {
  isSyncing?: boolean;
  size?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
} & React.SVGAttributes<SVGSVGElement>;

export const SyncIcon = forwardRef<SVGSVGElement, SyncIconProps>(
  (
    {
      isSyncing = false,
      size = 24,
      strokeWidth = 2,
      animated = false,
      color,
      ...props
    },
    ref,
  ) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const iconRef = useRef<SVGGElement | null>(null);
    const prevIsSyncingRef = useRef<boolean>(isSyncing);
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
      if (!animated) return;

      const element = iconRef.current;
      const prevIsSyncing = prevIsSyncingRef.current;

      if (element) {
        // Detect transition from false to true
        const isTransitionToSyncing = !prevIsSyncing && isSyncing;

        if (isTransitionToSyncing) {
          // Start rotation animation only when transitioning from false to true
          gsap.to(element, {
            rotation: 360,
            repeat: -1,
            ease: "linear",
            duration: 1,
            transformOrigin: "50% 50%",
          });
        } else if (!isSyncing) {
          // Stop animation when isSyncing becomes false, but keep icon visible
          gsap.killTweensOf(element);
          gsap.set(element, {
            rotation: 0,
          });
        }
      }

      // Update the previous value
      prevIsSyncingRef.current = isSyncing;

      return () => {
        if (iconRef.current) gsap.killTweensOf(iconRef.current);
      };
    }, [isSyncing, animated]);

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
        <g ref={iconRef}>
          <path
            d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
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
