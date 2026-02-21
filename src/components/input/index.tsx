import type { Color } from "@/theme/types";
import { forwardRef } from "react";
import { useTheme } from "styled-components";
import type { MarginProps, PaddingProps } from "../common/types";
import { Flex } from "../flex";
import { Text, type TextProps } from "../text";
import { resolveColor } from "../utils/resolve-color";
import { StyledInput } from "./styled";

import { useComponentTheme } from "@/hooks/use-component-theme";

export type InputProps = {
  error?: string;
  label?: string;
  color?: Color | string;
  required?: boolean;
  labelProps?: TextProps;
  containerStyle?: React.CSSProperties;
  w?: string;
  h?: string;
  errorStyle?: React.CSSProperties;
} & MarginProps &
  PaddingProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (originalProps, ref) => {
    const theme = useTheme();
    const mergedProps = useComponentTheme("input", originalProps);
    const {
      label,
      required,
      labelProps,
      containerStyle,
      error,
      errorStyle,
      color = "default",
      ...rest
    } = mergedProps;
    return (
      <Flex direction="column" style={containerStyle}>
        {(label || required) && (
          <Flex
            direction="row"
            gap={0.5}
            align="center"
            mb={rest.type === "color" ? "0px" : "4px"}
            style={{ minHeight: "1.2em" }}
          >
            {label && (
              <Text
                key={label}
                {...{
                  color: error
                    ? theme.palette.error.main
                    : resolveColor(color ?? "default", theme).main,
                }}
                size="12"
                {...labelProps}
              >
                {label}
              </Text>
            )}
            {required && (
              <Text color={theme.palette.error.main} size="12">
                *
              </Text>
            )}
          </Flex>
        )}
        <StyledInput ref={ref} error={error} color={color} {...rest} />
        {error && (
          <Text
            color={theme.palette.error.main}
            size="10"
            mt={rest.type === "color" ? "0px" : "4px"}
            style={{ minHeight: "1.2em", ...errorStyle }}
          >
            {error}
          </Text>
        )}
      </Flex>
    );
  },
);

Input.displayName = "Input";
