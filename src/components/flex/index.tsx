import type { Elevation } from "@/theme/types";
import { forwardRef, useMemo } from "react";
import type { Styles } from "styled-components/dist/types";
import type { MarginProps, PaddingProps } from "../common/types";
import { SlyledFlex } from "./style";

export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

export type FlexJustify = "center" | "start" | "end" | "between" | "around" | "evenly";

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
} & MarginProps &
  PaddingProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, ...props }, ref) => {
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
      <SlyledFlex ref={ref} {...memoizedProps}>
        {children}
      </SlyledFlex>
    );
  }
);

Flex.displayName = "Flex";
