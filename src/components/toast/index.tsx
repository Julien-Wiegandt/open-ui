"use client";

import type { Color } from "@/theme/types";
import { forwardRef } from "react";
import { useTheme } from "styled-components";
import { Button } from "../button";
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
        {props.onClose && (
          <Button
            size="sm"
            variant="text"
            color="default"
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
              <Text size="14" ml={props.startIcon ? 0 : 2} mr={props.endIcon ? 0 : 2}>
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
