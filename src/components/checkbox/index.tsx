import type { Color, Radius } from "@/theme/types";
import React, { forwardRef, useState } from "react";
import { useTheme } from "styled-components";
import type { MarginProps, PaddingProps } from "../common/types";
import { Flex } from "../flex";
import { CheckIcon } from "../icons/check";
import { Text, type TextProps } from "../text";
import { useCombinedRefs } from "../utils/use-combined-refs";
import {
  getCheckboxStyle,
  sizeMap,
  StyledCheckbox,
  StyledCheckboxContainer,
} from "./style";

import { useComponentTheme } from "@/hooks/use-component-theme";

export type CheckboxProps = {
  // required
  color?: Color | string;
  // optional
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md" | "lg";
  radius?: Radius;
  disabled?: boolean;
  labelProps?: TextProps;
  labelPosition?: "left" | "right";
} & MarginProps &
  PaddingProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (originalProps, ref) => {
    const theme = useTheme();
    const mergedProps = useComponentTheme("checkbox", originalProps);
    const {
      checked: checkedProp,
      defaultChecked = false,
      onChange,
      label,
      labelProps,
      labelPosition = "right",
      size = "md",
      color = "default",
      ...props
    } = mergedProps;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const combinedRef = useCombinedRefs(ref, inputRef);

    const isControlled = checkedProp !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const checked = isControlled ? checkedProp : internalChecked;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;

      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      if (onChange) {
        onChange(newChecked);
      }
    };

    const checkboxSize = sizeMap[size];

    return (
      <StyledCheckboxContainer
        gap={checkboxSize.gap}
        disabled={props.disabled}
        m={props.m}
        mb={props.mb}
        ml={props.ml}
        mr={props.mr}
        mt={props.mt}
        mx={props.mx}
        my={props.my}
      >
        {label && labelPosition === "left" && (
          <Text size={checkboxSize.fontSize} {...labelProps}>
            {label}
          </Text>
        )}

        <StyledCheckbox
          color={color}
          size={size}
          radius={props.radius}
          checked={checked}
          disabled={props.disabled}
        >
          <input
            ref={combinedRef}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={props.disabled}
            style={{ display: "none" }}
          />

          <Flex align="center" justify="center">
            <CheckIcon
              isVisible={checked}
              color={getCheckboxStyle({ color, theme }).checkColor}
              size={checkboxSize.iconSize}
              animated
            />
          </Flex>
        </StyledCheckbox>

        {label && labelPosition === "right" && (
          <Text size={checkboxSize.fontSize} {...labelProps}>
            {label}
          </Text>
        )}
      </StyledCheckboxContainer>
    );
  },
);

Checkbox.displayName = "Checkbox";
