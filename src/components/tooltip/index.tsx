import type { Color, Radius, Variant } from "@/theme/types";
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
import type { MarginProps, PaddingProps } from "../common/types";
import { Text } from "../text";
import { StyledTooltip } from "./style";

import { useComponentTheme } from "@/hooks/use-component-theme";

export type TooltipProps = {
  label: React.ReactNode;
  children: React.ReactNode;
  variant?: Variant;
  color?: Color | string;
  placement?: "left" | "right" | "top" | "bottom";
  gap?: number;
  bgcolor?: string;
  radius?: Radius;
  zIndex?: number;
} & MarginProps &
  PaddingProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (originalProps, _) => {
    const { children, label, ...props } = originalProps;
    const [visible, setVisible] = useState(false);

    const tooltipRef = useRef<HTMLDivElement>(null);
    const childrenRef = useRef<HTMLElement>(null);

    const [tooltipSize, setTooltipSize] = useState({ height: 0, width: 0 });
    const [childrenSize, setChildrenSize] = useState({ height: 0, width: 0 });

    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

    const mergedProps = useComponentTheme("tooltip", props);

    const memoizedProps = useMemo(() => {
      const defaultProps = {
        placement: "top" as const,
        zIndex: 100,
        color: "primary" as Color,
        variant: "contained" as Variant,
      };
      return {
        ...defaultProps,
        ...mergedProps,
      };
    }, [mergedProps]);

    useEffect(() => {
      if (childrenRef?.current && visible) {
        const { clientHeight: height, clientWidth: width } =
          childrenRef.current;
        setChildrenSize({ height, width });
      }
    }, [childrenRef?.current, visible]);

    useEffect(() => {
      if (tooltipRef?.current && visible) {
        const { clientHeight: height, clientWidth: width } = tooltipRef.current;
        setTooltipSize({ height, width });
      }
    }, [tooltipRef?.current, visible, label]);

    useLayoutEffect(() => {
      const updatePosition = () => {
        if (
          !visible ||
          !childrenRef.current ||
          !tooltipRef.current ||
          tooltipSize.height === 0 ||
          tooltipSize.width === 0 ||
          childrenSize.height === 0
        ) {
          return;
        }

        const childRect = childrenRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY;
        const scrollLeft = window.scrollX;

        const { height: tooltipHeight, width: tooltipWidth } = tooltipSize;
        const { height: childHeight, width: childWidth } = childrenSize;

        const tooltipGap = props.gap ?? 8;

        let newTooltipPos = { top: 0, left: 0 };

        const childCenterX = childRect.left + scrollLeft + childWidth / 2;
        const childCenterY = childRect.top + scrollTop + childHeight / 2;

        switch (memoizedProps.placement) {
          case "bottom":
            newTooltipPos = {
              top: childRect.top + scrollTop + childHeight + tooltipGap,
              left: childCenterX - tooltipWidth / 2,
            };
            break;

          case "left":
            newTooltipPos = {
              top: childCenterY - tooltipHeight / 2,
              left: childRect.left + scrollLeft - tooltipWidth - tooltipGap,
            };
            break;

          case "right":
            newTooltipPos = {
              top: childCenterY - tooltipHeight / 2,
              left: childRect.left + scrollLeft + childWidth + tooltipGap,
            };
            break;

          case "top":
          default:
            newTooltipPos = {
              top: childRect.top + scrollTop - tooltipHeight - tooltipGap,
              left: childCenterX - tooltipWidth / 2,
            };
            break;
        }

        setTooltipPosition(newTooltipPos);
      };

      updatePosition();

      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }, [visible, memoizedProps.placement, tooltipSize, childrenSize]);

    const mergedRef = (node: HTMLElement) => {
      (childrenRef as React.MutableRefObject<HTMLElement | null>).current =
        node;

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

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    if (!isValidElement(children)) {
      return <>{children}</>;
    }

    const tooltipContent = (
      <StyledTooltip
        ref={tooltipRef}
        color={memoizedProps.color}
        variant={memoizedProps.variant}
        bgcolor={memoizedProps.bgcolor}
        radius={memoizedProps.radius}
        style={{
          position: "absolute",
          top: `${tooltipPosition.top}px`,
          left: `${tooltipPosition.left}px`,
          zIndex: memoizedProps.zIndex,
          opacity: `${
            visible && tooltipSize.height !== 0 && tooltipSize.width !== 0
              ? 1
              : 0
          }`,
          transition: "opacity 0.2s ease",
        }}
      >
        {typeof label === "string" ? (
          <Text size="12" weight="medium" color="inherit">
            {label}
          </Text>
        ) : (
          label
        )}
      </StyledTooltip>
    );

    return (
      <>
        {cloneElement(children as React.ReactElement<any>, {
          ref: mergedRef,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        })}
        {visible && createPortal(tooltipContent, document.body)}
      </>
    );
  },
);

Tooltip.displayName = "Tooltip";
