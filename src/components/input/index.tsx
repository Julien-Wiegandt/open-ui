"use client";

import type { Color } from "@/theme/types";
import { forwardRef } from "react";
import { useTheme } from "styled-components";
import type { MarginProps, PaddingProps } from "../common/types";
import { Flex } from "../flex";
import { Text } from "../text";
import { StyledInput } from "./styled";

export type InputProps = {
  error?: string;
  label?: string;
  color?: Color;
  required?: boolean;
  w?: string;
  h?: string;
} & MarginProps &
  PaddingProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const theme = useTheme();
  return (
    <Flex direction="column">
      {(props.label || props.required) && (
        <Flex
          direction="row"
          gap={0.5}
          align="center"
          mb="4px"
          style={{ minHeight: "1.2em" }}
        >
          {props.label && (
            <Text
              {...{
                color: props.error
                  ? theme.palette.error.main
                  : theme.palette[props.color ?? "default"].main,
              }}
              size="12"
            >
              {props.label}
            </Text>
          )}
          {props.required && (
            <Text color={theme.palette.error.main} size="12">
              *
            </Text>
          )}
        </Flex>
      )}
      <StyledInput ref={ref} {...props} />
      {props.error && (
        <Text
          color={theme.palette.error.main}
          size="10"
          mt="4px"
          style={{ minHeight: "1.2em" }}
        >
          {props.error}
        </Text>
      )}
    </Flex>
  );
});

Input.displayName = "Input";
