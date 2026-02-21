import type { Color } from "@/theme/types";
import gsap from "gsap";
import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { resolveColor } from "../utils/resolve-color";
import { useCombinedRefs } from "../utils/use-combined-refs";

export type SwitchProps = {
  value?: boolean;
  size?: number;
  color?: Color | string;
  onChange?: (isOn: boolean) => void;
} & Omit<React.SVGAttributes<SVGSVGElement>, "onChange">;

export const Switch = forwardRef<SVGSVGElement, SwitchProps>(
  ({ value, size = 48, color, onChange, ...props }, ref) => {
    const theme = useTheme();
    const [isOn, setIsOn] = useState(value ?? false);
    const knobRef = useRef<SVGCircleElement>(null);
    const bgRef = useRef<SVGRectElement>(null);
    const svgInternalRef = useRef<SVGSVGElement>(null);
    const svgRef = useCombinedRefs(ref, svgInternalRef);
    const width = size;
    const height = size / 1.75;
    const palette = resolveColor(color ?? "default", theme);

    useLayoutEffect(() => {
      const timeline = gsap.timeline({
        defaults: { duration: 0.5, ease: "elastic.out(1, 0.5)" },
      });

      if (isOn) {
        timeline
          .to(knobRef.current, { cx: width - height / 2 })
          .to(bgRef.current, { fill: palette.main }, "<")
          .to(
            svgInternalRef.current,
            {
              filter: `drop-shadow(0px 1px 4px ${palette.main}88)`,
              duration: 0.3,
              ease: "power2.out",
            },
            "<",
          );
      } else {
        timeline
          .to(knobRef.current, { cx: height / 2 })
          .to(bgRef.current, { fill: palette.light }, "<")
          .to(
            svgInternalRef.current,
            {
              filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.15))",
              duration: 0.3,
              ease: "power2.out",
            },
            "<",
          );
      }
    }, [isOn, color, width, height, theme]);

    const handleMouseDown = () => {
      gsap.to(knobRef.current, {
        scaleX: 1.2,
        scaleY: 0.8,
        duration: 0.1,
        transformOrigin: "center center",
      });
    };

    const handleMouseUp = () => {
      gsap.to(knobRef.current, {
        scaleX: 1,
        scaleY: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
        transformOrigin: "center center",
      });
    };

    return (
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        onClick={() => {
          onChange?.(!isOn);
          setIsOn(!isOn);
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        style={{
          cursor: "pointer",
          overflow: "visible",
          filter: isOn
            ? `drop-shadow(0px 1px 4px ${palette.main}88)`
            : "drop-shadow(0px 1px 2px rgba(0,0,0,0.15))",
          ...props.style,
        }}
      >
        <rect
          ref={bgRef}
          width={width}
          height={height}
          rx={height / 2}
          fill={isOn ? palette.main : palette.light}
        />
        <circle
          ref={knobRef}
          cx={isOn ? width - height / 2 : height / 2}
          cy={height / 2}
          r={height / 2 - 3}
          fill="white"
        />
      </svg>
    );
  },
);
