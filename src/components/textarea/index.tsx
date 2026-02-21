import type { Color } from "@/theme/types";
import { forwardRef } from "react";
import { useTheme } from "styled-components";
import type { MarginProps, PaddingProps } from "../common/types";
import { Flex } from "../flex";
import { Text, type TextProps } from "../text";
import { resolveColor } from "../utils/resolve-color";
import { StyledTextArea } from "./styled";

import { useComponentTheme } from "@/hooks/use-component-theme";

export type TextAreaProps = {
  color?: Color | string;
  error?: string;
  errorStyle?: React.CSSProperties;
  label?: string;
  required?: boolean;
  labelProps?: TextProps;
  containerStyle?: React.CSSProperties;
  w?: string;
  h?: string;
} & MarginProps &
  PaddingProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (originalProps, ref) => {
    const theme = useTheme();
    const mergedProps = useComponentTheme("textarea", originalProps);
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
            mb="4px"
            style={{ minHeight: "1.2em" }}
          >
            {label && (
              <Text
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
        <StyledTextArea ref={ref} error={error} {...rest} />
        {error && (
          <Text
            color={theme.palette.error.main}
            size="10"
            mt="4px"
            style={{ minHeight: "1.2em", ...errorStyle }}
          >
            {error}
          </Text>
        )}
      </Flex>
    );
  },
);

TextArea.displayName = "TextArea";
