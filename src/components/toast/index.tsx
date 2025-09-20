"use client";

import type { Color } from "@/theme/types";
import { forwardRef } from "react";
import { useTheme } from "styled-components";
import { Flex, type FlexProps } from "../flex";
import { Text } from "../text";
import { StyledToast } from "./style";

export type ToastProps = {
  title?: React.ReactNode;
  color?: Color;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClose?: () => void;
} & FlexProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ children, style, ...props }, ref) => {
    const theme = useTheme();
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
        {children}
        {!children && (
          <Flex
            direction="row"
            gap={1}
            align="center"
            style={{
              minWidth: "248px",
            }}
          >
            {props.startIcon && (
              <Flex
                p={1.5}
                style={{
                  backgroundColor: `${theme.palette[props.color ?? "default"].light}44`,
                }}
              >
                {props.startIcon}
              </Flex>
            )}
            {props.title && (
              <Text size="14" ml={props.startIcon ? 0 : 1} mr={props.endIcon ? 0 : 1}>
                {props.title}
              </Text>
            )}

            {props.endIcon && (
              <Flex
                p={1.5}
                style={{
                  backgroundColor: `${theme.palette[props.color ?? "default"].light}44`,
                }}
              >
                {props.endIcon}
              </Flex>
            )}
          </Flex>
        )}
      </StyledToast>
    );
  }
);

Toast.displayName = "Toast";
