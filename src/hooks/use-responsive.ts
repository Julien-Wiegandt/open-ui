import { useEffect, useMemo, useState } from "react";

export type Breakpoint = "sm" | "md" | "lg" | "xl";

export const breakpoints: { [key in Breakpoint]: number } = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const useResponsive = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  const [breakpoint, setBreakpoint] = useState<Breakpoint>("sm");

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof width === "number") {
      if (width >= breakpoints.xl) {
        setBreakpoint("xl");
      } else if (width >= breakpoints.lg) {
        setBreakpoint("lg");
      } else if (width >= breakpoints.sm) {
        setBreakpoint("md");
      } else {
        setBreakpoint("sm");
      }
    }
  }, [width]);

  const { isMobile, isTablet, isLaptop, isDesktop } = useMemo(() => {
    return {
      isMobile: breakpoint === "sm",
      isTablet: breakpoint === "md",
      isLaptop: breakpoint === "lg",
      isDesktop: breakpoint === "xl",
    };
  }, [breakpoint]);

  return { width, breakpoint, isMobile, isTablet, isLaptop, isDesktop };
};
