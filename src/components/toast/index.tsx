"use client";

import { forwardRef } from "react";
import { Flex } from "../flex";
import { Text } from "../text";

export type ToastProps = {
  title?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ children, style, ...props }, ref) => {
    return (
      <Flex ref={ref} p={1.5} elevation={1} style={style}>
        {children}
        {!children && (
          <Flex direction="row" gap={1} align="center" style={{ minWidth: "248px" }}>
            {props.startIcon}
            {props.title && <Text>{props.title}</Text>}
            {props.endIcon}
          </Flex>
        )}
      </Flex>
    );
  }
);

Toast.displayName = "Toast";
