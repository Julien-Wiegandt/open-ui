"use client";

import type { Color, Elevation } from "../../theme/types";
import { forwardRef, useMemo, useRef } from "react";
import type { Styles } from "styled-components/dist/types";
import type { MarginProps, PaddingProps } from "../common/types";
import { SlyledFlex } from "./style";
import { useAutoContrastColor } from "../utils/use-auto-contrast-color";
import { useCombinedRefs } from "../utils/use-combined-refs";

export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

export type FlexJustify =
  | "center"
  | "start"
  | "end"
  | "between"
  | "around"
  | "evenly";

export type FlexAlign = "normal" | "center" | "start" | "end" | "stretch";

export type FlexProps = {
  elevation?: Elevation;
  direction?: FlexDirection;
  gap?: string | number;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: FlexWrap;
  width?: string;
  height?: string;
  minWidth?: string;
  minheight?: string;
  hoverstyle?: Styles<object>;
  bgcolor?: Color | string;
  color?: Color | string;
} & MarginProps &
  PaddingProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, "content">;


export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const combinedRef = useCombinedRefs(ref, internalRef);

    const autoContrastColor = useAutoContrastColor(internalRef, !!props.color);

    const memoizedProps = useMemo(() => {
      const defaultProps = {
        display: "flex",
        direction: "column" as FlexDirection,
      };
      return {
        ...defaultProps,
        ...props,
      };
    }, [props]);

    return (
      <SlyledFlex
        ref={combinedRef}
        {...memoizedProps}
        color={props.color ?? autoContrastColor}
      >
        {children}
      </SlyledFlex>
    );
  },
);

Flex.displayName = "Flex";
