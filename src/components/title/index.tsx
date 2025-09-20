import { useResponsive } from "@/hooks/use-responsive";
import { useMemo } from "react";
import type { MarginProps, PaddingProps } from "../common/types";
import { StyledTitle } from "./style";

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: "regular" | "medium" | "semibold" | "bold";
} & MarginProps &
  PaddingProps &
  React.HTMLAttributes<HTMLHeadingElement>;

export const Title = ({ children, ...props }: TitleProps) => {
  const { breakpoint } = useResponsive();

  const memoizedProps = useMemo(() => {
    const defaultProps = {
      level: 1,
    };
    return {
      ...defaultProps,
      ...props,
    };
  }, [props]);

  return (
    <StyledTitle {...memoizedProps} breakpoint={breakpoint}>
      {children}
    </StyledTitle>
  );
};
