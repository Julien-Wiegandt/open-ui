import type { Color, Radius } from "@/theme/types";
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
import { createPortal } from "react-dom"; // Importé
import { useTheme } from "styled-components";
import type { MarginProps, PaddingProps } from "../common/types";
import { resolveColor } from "../utils/resolve-color";
import { StyledPopover } from "./style";

export type PopoverStyleProps = {
  color: Color | string;
  content: React.ReactNode;
  children: React.ReactNode;
  visible?: boolean;
  zIndex?: number;
  placement?: "left" | "right" | "top" | "bottom";
  gap?: number;
  bgcolor?: string;
  arrowcolor?: string;
  radius?: Radius;
} & MarginProps &
  PaddingProps &
  React.HTMLAttributes<HTMLDivElement>;

export type PopoverProps = {} & PopoverStyleProps;

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, ...props }, _) => {
    const theme = useTheme();

    const popoverRef = useRef<HTMLDivElement>(null);
    const childrenRef = useRef<HTMLElement>(null);

    const [popoverSize, setPopoverSize] = useState({ height: 0, width: 0 });
    const [childrenSize, setChildrenSize] = useState({ height: 0, width: 0 });

    const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
    const [arrowPosition, setArrowPosition] = useState({ top: 0, left: 0 });

    const memoizedProps = useMemo(() => {
      const defaultProps = {
        placement: "top" as const,
        zIndex: 9,
      };
      return {
        ...defaultProps,
        ...props,
      };
    }, [props]);

    useEffect(() => {
      if (childrenRef?.current && props.visible) {
        const { clientHeight: height, clientWidth: width } =
          childrenRef.current;
        setChildrenSize({ height, width });
      }
    }, [childrenRef?.current, props.visible]);

    useEffect(() => {
      if (popoverRef?.current && props.visible) {
        const { clientHeight: height, clientWidth: width } = popoverRef.current;
        setPopoverSize({ height, width });
      }
    }, [popoverRef?.current, props.visible, props.content]);

    useLayoutEffect(() => {
      const updatePosition = () => {
        if (
          !props.visible ||
          !childrenRef.current ||
          !popoverRef.current ||
          popoverSize.height === 0 ||
          childrenSize.height === 0
        ) {
          return;
        }

        const childRect = childrenRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY;
        const scrollLeft = window.scrollX;

        const { height: popoverHeight, width: popoverWidth } = popoverSize;
        const { height: childHeight, width: childWidth } = childrenSize;

        const popoverGap = props.gap ?? 8;
        const arrowSize = 8;
        const arrowGap = popoverGap - arrowSize / 2;

        let newPopoverPos = { top: 0, left: 0 };
        let newArrowPos = { top: 0, left: 0 };

        const childCenterX = childRect.left + scrollLeft + childWidth / 2;
        const childCenterY = childRect.top + scrollTop + childHeight / 2;

        switch (memoizedProps.placement) {
          case "bottom":
            newPopoverPos = {
              top: childRect.top + scrollTop + childHeight + popoverGap,
              left: childCenterX - popoverWidth / 2,
            };
            newArrowPos = {
              top: childRect.top + scrollTop + childHeight + arrowGap,
              left: childCenterX - arrowSize / 2,
            };
            break;

          case "left":
            newPopoverPos = {
              top: childCenterY - popoverHeight / 2,
              left: childRect.left + scrollLeft - popoverWidth - popoverGap,
            };
            newArrowPos = {
              top: childCenterY - arrowSize / 2,
              left: childRect.left + scrollLeft - arrowSize - arrowGap,
            };
            break;

          case "right":
            newPopoverPos = {
              top: childCenterY - popoverHeight / 2,
              left: childRect.left + scrollLeft + childWidth + popoverGap,
            };
            newArrowPos = {
              top: childCenterY - arrowSize / 2,
              left: childRect.left + scrollLeft + childWidth + arrowGap,
            };
            break;

          case "top":
          default:
            newPopoverPos = {
              top: childRect.top + scrollTop - popoverHeight - popoverGap,
              left: childCenterX - popoverWidth / 2,
            };
            newArrowPos = {
              top: childRect.top + scrollTop - arrowSize - arrowGap,
              left: childCenterX - arrowSize / 2,
            };
            break;
        }

        setPopoverPosition(newPopoverPos);
        setArrowPosition(newArrowPos);
      };

      updatePosition();

      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }, [props.visible, memoizedProps.placement, popoverSize, childrenSize]);

    useEffect(() => {
      if (!props.visible) {
        setPopoverSize({ height: 0, width: 0 });
        setChildrenSize({ height: 0, width: 0 });
        setPopoverPosition({ top: 0, left: 0 });
        setArrowPosition({ top: 0, left: 0 });
      }
    }, [props.visible]);

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

    if (!isValidElement(children)) {
      console.error("Popover children must be a single valid React element.");
      return <>{children}</>;
    }

    const popoverContent = (
      <>
        <StyledPopover
          ref={popoverRef}
          {...memoizedProps}
          style={{
            position: "absolute",
            top: `${popoverPosition.top}px`,
            left: `${popoverPosition.left}px`,
            zIndex: memoizedProps.zIndex,
            opacity: `${
              props.visible &&
              popoverSize.height !== 0 &&
              popoverSize.width !== 0
                ? 1
                : 0
            }`,
            transition: "opacity 0.25s ease",
          }}
        >
          {props.content}
        </StyledPopover>
        <span
          style={{
            width: "8px",
            height: "8px",
            display: `${props.visible ? "block" : "none"}`,
            opacity: `${
              props.visible &&
              popoverSize.height !== 0 &&
              popoverSize.width !== 0
                ? 1
                : 0
            }`,
            transition: "opacity 0.25s ease",
            zIndex: `${(memoizedProps.zIndex ?? 9) - 1}`,
            backgroundColor: `${
              props.arrowcolor ??
              props.bgcolor ??
              resolveColor(props.color, theme).light
            }`,
            rotate: "45deg",
            position: "absolute",
            top: `${arrowPosition.top}px`,
            left: `${arrowPosition.left}px`,
          }}
        />
      </>
    );

    return (
      <>
        {cloneElement(children as React.ReactElement<any>, { ref: mergedRef })}
        {props.visible && createPortal(popoverContent, document.body)}
      </>
    );
  },
);

Popover.displayName = "Popover";
