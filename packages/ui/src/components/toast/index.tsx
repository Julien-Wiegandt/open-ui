"use client";

import { forwardRef, useRef } from "react";
import { useTheme } from "styled-components";
import { useResponsive } from "../../hooks/use-responsive";
import type { Color, Theme } from "../../theme/types";
import { Button } from "../button";
import { Flex, type FlexProps } from "../flex";
import { Text } from "../text";
import { resolveColor } from "../utils/resolve-color";
import { useAutoContrastColor } from "../utils/use-auto-contrast-color";

import { StyledToast } from "./style";

// Sub-component: auto-contrasts icon color against its tinted background
const IconContainer = ({
  resolvedBgColor,
  iconNode,
}: {
  resolvedBgColor: string;
  iconNode: React.ReactNode;
}) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const autoColor = useAutoContrastColor(iconRef, false, resolvedBgColor);
  return (
    <Flex
      ref={iconRef}
      p={1.5}
      style={{
        backgroundColor: resolvedBgColor,
        color: autoColor ?? "currentColor",
      }}
    >
      {iconNode}
    </Flex>
  );
};

/**
 * TODO:
 * - make children/custom toast component available
 */

export type ToastProps = {
  id: string;
  color?: Color | string;
  title?: string;
  icon?: React.ReactNode;
  duration?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  data?: any;
  onClose?: () => void;
} & FlexProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Toast = forwardRef<HTMLDivElement, Omit<ToastProps, "id">>(
  ({ children, style, ...props }, ref) => {
    const theme = useTheme() as Theme;

    const { isMobile } = useResponsive();

    return (
      <StyledToast
        ref={ref}
        p={0.5}
        elevation={3}
        {...props}
        style={{
          ...style,
        }}
      >
        {props.onClose && (
          <Button
            size="sm"
            variant="text"
            color="default"
            starticon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            }
            onClick={props.onClose}
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              cursor: "pointer",
            }}
          />
        )}
        {children}
        {!children && (
          <Flex
            direction="row"
            align="center"
            style={{
              minWidth: "300px",
              width: isMobile ? "calc(100vw - 40px)" : "auto",
            }}
          >
            {props.icon && (
              <IconContainer
                resolvedBgColor={`${resolveColor(props.color ?? "default", theme as Theme).light}44`}
                iconNode={props.icon}
              />
            )}
            {props.title && (
              <Text size="14" px={1.5} py={props.icon ? 0 : 1.5}>
                {props.title}
              </Text>
            )}
          </Flex>
        )}
      </StyledToast>
    );
  },
);

Toast.displayName = "Toast";
