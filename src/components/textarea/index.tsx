"use client";

import { forwardRef } from "react";
import { useTheme } from "styled-components";
import type { MarginProps, PaddingProps } from "../common/types";
import { Flex } from "../flex";
import { Text } from "../text";
import { StyledTextArea } from "./styled";

export type TextAreaProps = {
  error?: string;
  w?: string;
  h?: string;
} & MarginProps &
  PaddingProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const theme = useTheme();
  return (
    <Flex direction="column">
      <StyledTextArea ref={ref} {...props} />
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

TextArea.displayName = "TextArea";
