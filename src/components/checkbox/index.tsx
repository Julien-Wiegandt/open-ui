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

export type CheckboxProps = {
  // required
  color: Color;
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
  (
    {
      checked: checkedProp,
      defaultChecked = false,
      onChange,
      label,
      labelProps,
      labelPosition = "right",
      size = "md",
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const inputRef = React.useRef<HTMLInputElement>(null);
    const combinedRef = useCombinedRefs(ref, inputRef);

    // Mode contrôlé si checkedProp est défini, sinon mode non-contrôlé
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
          color={props.color}
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
              color={getCheckboxStyle({ color: props.color, theme }).checkColor}
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
  }
);

Checkbox.displayName = "Checkbox";
