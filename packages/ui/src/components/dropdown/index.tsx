"use client";

import gsap from "gsap";
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import type { Color, Radius, Variant } from "../../theme/types";
import type { MarginProps, PaddingProps } from "../common/types";
import { Text } from "../text";
import { useComponentTheme } from "../../hooks/use-component-theme";
import type { DropdownSize } from "./style";
import {
  StyledDropdownContainer,
  StyledDropdownOption,
} from "./style";

export type DropdownOption = { key: string; label: string; data?: any };

export type DropdownProps = {
  children: React.ReactNode;
  trigger?: "hover" | "click";
  options?: Array<DropdownOption>;
  onSelect?: (option: DropdownOption) => void;
  content?: React.ReactNode;
  placement?:
    | "top"
    | "top-left"
    | "top-right"
    | "bottom"
    | "bottom-left"
    | "bottom-right"
    | "left"
    | "left-top"
    | "left-bottom"
    | "right"
    | "right-top"
    | "right-bottom";
  gap?: number;
  color?: Color | string;
  variant?: Variant;
  bgcolor?: string;
  radius?: Radius;
  size?: DropdownSize;
  zIndex?: number;
} & MarginProps &
  PaddingProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, "content">;

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (originalProps, _) => {
    const { children, options, onSelect, content, ...props } = originalProps;

    const [open, setOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const childrenRef = useRef<HTMLElement>(null);
    const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    const [dropdownSize, setDropdownSize] = useState({ height: 0, width: 0 });
    const [childrenSize, setChildrenSize] = useState({ height: 0, width: 0 });
    const [dropdownPosition, setDropdownPosition] = useState({
      top: 0,
      left: 0,
    });

    const mergedProps = useComponentTheme("dropdown", props);

    const memoizedProps = useMemo(() => {
      const defaultProps = {
        trigger: "click" as const,
        placement: "bottom" as const,
        zIndex: 100,
        color: "primary" as Color,
        variant: "contained" as Variant,
        size: "md" as DropdownSize,
        gap: 8,
      };
      return {
        ...defaultProps,
        ...mergedProps,
      };
    }, [mergedProps]);

    // Open -> mount portal
    useEffect(() => {
      if (open) {
        setShouldRender(true);
      }
    }, [open]);

    // GSAP animation
    useLayoutEffect(() => {
      if (!dropdownRef.current) return;

      if (open) {
        gsap.to(dropdownRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (shouldRender) {
        gsap.to(dropdownRef.current, {
          autoAlpha: 0,
          y: -10,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => setShouldRender(false),
        });
      }
    }, [open, shouldRender]);

    // Measure children
    useEffect(() => {
      if (childrenRef?.current && shouldRender) {
        const { clientHeight: height, clientWidth: width } =
          childrenRef.current;
        setChildrenSize({ height, width });
      }
    }, [childrenRef?.current, shouldRender]);

    // Measure dropdown
    useEffect(() => {
      if (dropdownRef?.current && shouldRender) {
        const { clientHeight: height, clientWidth: width } =
          dropdownRef.current;
        setDropdownSize({ height, width });
      }
    }, [dropdownRef?.current, shouldRender, content, options]);

    // Position calculation
    useLayoutEffect(() => {
      const updatePosition = () => {
        if (
          !shouldRender ||
          !childrenRef.current ||
          !dropdownRef.current ||
          dropdownSize.height === 0 ||
          dropdownSize.width === 0 ||
          childrenSize.height === 0
        ) {
          return;
        }

        const childRect = childrenRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY;
        const scrollLeft = window.scrollX;

        const { height: ddHeight, width: ddWidth } = dropdownSize;
        const { height: childHeight, width: childWidth } = childrenSize;

        const ddGap = memoizedProps.gap;

        let newPos = { top: 0, left: 0 };

        const childCenterX = childRect.left + scrollLeft + childWidth / 2;
        const childCenterY = childRect.top + scrollTop + childHeight / 2;

        switch (memoizedProps.placement) {
          case "top":
            newPos = {
              top: childRect.top + scrollTop - ddHeight - ddGap,
              left: childCenterX - ddWidth / 2,
            };
            break;
          case "top-left":
            newPos = {
              top: childRect.top + scrollTop - ddHeight - ddGap,
              left: childRect.left + scrollLeft,
            };
            break;
          case "top-right":
            newPos = {
              top: childRect.top + scrollTop - ddHeight - ddGap,
              left: childRect.left + scrollLeft + childWidth - ddWidth,
            };
            break;

          case "left":
            newPos = {
              top: childCenterY - ddHeight / 2,
              left: childRect.left + scrollLeft - ddWidth - ddGap,
            };
            break;
          case "left-top":
            newPos = {
              top: childRect.top + scrollTop,
              left: childRect.left + scrollLeft - ddWidth - ddGap,
            };
            break;
          case "left-bottom":
            newPos = {
              top: childRect.top + scrollTop + childHeight - ddHeight,
              left: childRect.left + scrollLeft - ddWidth - ddGap,
            };
            break;

          case "right":
            newPos = {
              top: childCenterY - ddHeight / 2,
              left: childRect.left + scrollLeft + childWidth + ddGap,
            };
            break;
          case "right-top":
            newPos = {
              top: childRect.top + scrollTop,
              left: childRect.left + scrollLeft + childWidth + ddGap,
            };
            break;
          case "right-bottom":
            newPos = {
              top: childRect.top + scrollTop + childHeight - ddHeight,
              left: childRect.left + scrollLeft + childWidth + ddGap,
            };
            break;

          case "bottom-left":
            newPos = {
              top: childRect.top + scrollTop + childHeight + ddGap,
              left: childRect.left + scrollLeft,
            };
            break;
          case "bottom-right":
            newPos = {
              top: childRect.top + scrollTop + childHeight + ddGap,
              left: childRect.left + scrollLeft + childWidth - ddWidth,
            };
            break;
          case "bottom":
          default:
            newPos = {
              top: childRect.top + scrollTop + childHeight + ddGap,
              left: childCenterX - ddWidth / 2,
            };
            break;
        }

        setDropdownPosition(newPos);
      };

      updatePosition();

      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }, [shouldRender, memoizedProps.placement, dropdownSize, childrenSize]);

    // Click outside detection
    useEffect(() => {
      if (memoizedProps.trigger !== "click" || !open) return;

      const handleClickOutside = (event: MouseEvent) => {
        if (
          childrenRef.current &&
          !childrenRef.current.contains(event.target as Node) &&
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [open, memoizedProps.trigger]);

    // Cleanup hover timeout on unmount
    useEffect(() => {
      return () => {
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }
      };
    }, []);

    // Reset sizes when closing
    useEffect(() => {
      if (!shouldRender) {
        setDropdownSize({ height: 0, width: 0 });
        setChildrenSize({ height: 0, width: 0 });
        setDropdownPosition({ top: 0, left: 0 });
      }
    }, [shouldRender]);

    // Ref merging (same pattern as Tooltip)
    const mergedRef = (node: HTMLElement) => {
      (childrenRef as React.MutableRefObject<HTMLElement | null>).current = node;

      if (isValidElement(children)) {
        const originalRef = (
          children as React.ReactElement & { ref?: React.Ref<any> }
        ).ref;

        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef != null && typeof originalRef === "object") {
          (originalRef as React.MutableRefObject<any>).current = node;
        }
      }
    };

    // Hover handlers with delay
    const handleMouseEnter = () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = setTimeout(() => setOpen(true), 100);
    };

    const handleMouseLeave = () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = setTimeout(() => setOpen(false), 150);
    };

    // Click handler
    const handleClick = () => {
      setOpen((prev) => !prev);
    };

    const handleOptionSelect = (option: DropdownOption) => {
      onSelect?.(option);
      setOpen(false);
    };

    if (!isValidElement(children)) {
      return <>{children}</>;
    }

    // Build trigger props based on trigger mode
    const triggerProps: Record<string, any> = { ref: mergedRef };

    if (memoizedProps.trigger === "hover") {
      triggerProps.onMouseEnter = handleMouseEnter;
      triggerProps.onMouseLeave = handleMouseLeave;
    } else {
      triggerProps.onClick = handleClick;
    }

    // Dropdown hover handlers (for hover mode - keep open when moving to dropdown)
    const dropdownHoverProps =
      memoizedProps.trigger === "hover"
        ? {
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
          }
        : {};

    const dropdownContent = (
      <StyledDropdownContainer
        ref={dropdownRef}
        color={memoizedProps.color}
        variant={memoizedProps.variant}
        bgcolor={memoizedProps.bgcolor}
        radius={memoizedProps.radius}
        size={memoizedProps.size}
        {...dropdownHoverProps}
        style={{
          position: "absolute",
          top: `${dropdownPosition.top}px`,
          left: `${dropdownPosition.left}px`,
          zIndex: memoizedProps.zIndex,
          visibility: "hidden",
          ...memoizedProps.style,
        }}
      >
        {content ??
          options?.map((option) => (
            <StyledDropdownOption
              key={option.key}
              color={memoizedProps.color}
              variant={memoizedProps.variant}
              size={memoizedProps.size}
              radius={memoizedProps.radius}
              onClick={() => handleOptionSelect(option)}
            >
              <Text style={{ fontSize: "inherit" }}>
                {option.label}
              </Text>
            </StyledDropdownOption>
          ))}
      </StyledDropdownContainer>
    );

    return (
      <>
        {cloneElement(children as React.ReactElement<any>, triggerProps)}
        {shouldRender && createPortal(dropdownContent, document.body)}
      </>
    );
  },
);

Dropdown.displayName = "Dropdown";
