import { useEffect, useMemo, useState } from "react";

export type Breakpoint = "sm" | "md" | "lg" | "xl";

export const breakpoints: { [key in Breakpoint]: number } = {
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1280,
};

const getWidth = () => {
  return typeof window !== "undefined" ? window.innerWidth : 0;
};

export const useResponsive = () => {
  const [width, setWidth] = useState<number>(getWidth());

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { breakpoint, isMobile, isTablet, isLaptop, isDesktop } = useMemo(() => {
    let currentBreakpoint: Breakpoint = "sm";

    if (width >= breakpoints.lg) {
      currentBreakpoint = "xl";
    } else if (width >= breakpoints.md) {
      currentBreakpoint = "lg";
    } else if (width >= breakpoints.sm) {
      currentBreakpoint = "md";
    } else {
      currentBreakpoint = "sm";
    }

    return {
      breakpoint: currentBreakpoint,
      isMobile: currentBreakpoint === "sm",
      isTablet: currentBreakpoint === "md",
      isLaptop: currentBreakpoint === "lg",
      isDesktop: currentBreakpoint === "xl",
    };
  }, [width]);

  return { width, breakpoint, isMobile, isTablet, isLaptop, isDesktop };
};
