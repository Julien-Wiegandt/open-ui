import type { Color } from "@/theme/types";
import { forwardRef } from "react";
import { useTheme } from "styled-components";
import { Button } from "../button";
import { Flex, type FlexProps } from "../flex";
import { Text } from "../text";
import { StyledToast } from "./style";

/**
 * TODO:
 * - make children/custom toast component available
 */

export type ToastProps = {
  id: string;
  color?: Color;
  title: string;
  icon?: React.ReactNode;
  duration?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClose?: () => void;
} & FlexProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Toast = forwardRef<HTMLDivElement, Omit<ToastProps, "id">>(
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
            starticon={
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
            align="center"
            style={{
              minWidth: "248px",
            }}
          >
            {props.icon && (
              <Flex
                p={1.5}
                style={{
                  backgroundColor: `${theme.palette[props.color ?? "default"].light}44`,
                }}
              >
                {props.icon}
              </Flex>
            )}
            {props.title && (
              <Text size="14" p={1.5}>
                {props.title}
              </Text>
            )}
          </Flex>
        )}
      </StyledToast>
    );
  }
);

Toast.displayName = "Toast";
