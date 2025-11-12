/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from "gsap";
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { Flex } from "../flex";
import { Text } from "../text";

export type SelectOption = { key: string; label: string; data?: any };

export type SelectProps = {
  options: Array<SelectOption>;
  initialValue?: SelectOption;
  value?: SelectOption;
  onChange?: (value: SelectOption) => void;
  label?: string;
  required?: boolean;
  placeholder?: string;
  orientation?: "up" | "down";
  hideScrollbar?: boolean;
  CustomOption?: (props: {
    option?: SelectOption;
    handleChange?: (option: SelectOption) => void;
  }) => React.ReactNode;
  selectOptionStyle?: React.CSSProperties;
  optionContainerStyle?: React.CSSProperties;
};

const DefaultOption = ({
  option,
  handleChange,
}: {
  option?: SelectOption;
  handleChange?: (option: SelectOption) => void;
}) => {
  const theme = useTheme();
  return (
    <Flex
      key={option?.key}
      onClick={() => handleChange && option && handleChange(option)}
      px={1.5}
      py={1}
      height="37px"
      hoverstyle={{
        backgroundColor: theme.palette.primary.light,
      }}
    >
      {option?.label && (
        <Text size="14" align="left">
          {option.label}
        </Text>
      )}
    </Flex>
  );
};

export const Select = forwardRef<HTMLDivElement, SelectProps>((props) => {
  const theme = useTheme();

  const [selectedValue, setSelectedValue] = useState<SelectOption | undefined>(
    props.value ??
      props.initialValue ??
      (props.placeholder
        ? {
            key: props.placeholder,
            label: props.placeholder,
          }
        : undefined)
  );
  const [open, setOpen] = useState(false);
  const [selectOptionHeight, setSelectOptionHeight] = useState<number | undefined>(
    undefined
  );

  const selectContainerRef = useRef<HTMLDivElement>(null);
  const selectOptionRef = useRef<HTMLDivElement>(null);
  const optionsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectContainerRef.current &&
        !selectContainerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useLayoutEffect(() => {
    if (open) {
      gsap.to(optionsContainerRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(optionsContainerRef.current, {
        autoAlpha: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [open]);

  useEffect(() => {
    if (selectOptionRef.current) {
      setSelectOptionHeight(selectOptionRef.current.clientHeight);
    }
  }, [selectOptionRef.current]);

  const handleChange = (option: SelectOption) => {
    setSelectedValue(option);
    if (props.onChange) {
      props.onChange(option);
    }
    setOpen(false);
  };

  return (
    <Flex ref={selectContainerRef} direction="column" width="100%" justify="start">
      {(props.label || props.required) && (
        <Flex
          direction="row"
          gap={0.5}
          align="center"
          mb="4px"
          style={{ minHeight: "1.2em" }}
        >
          {props.label && <Text size="12">{props.label}</Text>}
          {props.required && (
            <Text color={theme.palette.error.main} size="12">
              *
            </Text>
          )}
        </Flex>
      )}
      <Flex
        ref={selectOptionRef}
        elevation={1}
        onClick={() => setOpen(!open)}
        style={{ position: "relative", cursor: "pointer", ...props.selectOptionStyle }}
      >
        {props.CustomOption ? (
          <props.CustomOption option={selectedValue} />
        ) : (
          <DefaultOption option={selectedValue} />
        )}

        <Flex
          ref={optionsContainerRef}
          elevation={1}
          width="100%"
          gap={0.5}
          style={{
            position: "absolute",
            left: "0",
            ...(!props.orientation || props.orientation === "down"
              ? {
                  top: selectOptionHeight ? `${selectOptionHeight + 1}px` : "37px",
                }
              : {
                  bottom: selectOptionHeight ? `${selectOptionHeight + 1}px` : "37px",
                }),
            visibility: "hidden",
            zIndex: 1,
            backdropFilter: "blur(6px)",
            maxHeight: "200px",
            overflowY: "auto",
            ...(props.hideScrollbar && {
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }),
            ...props.optionContainerStyle,
          }}
        >
          {props.options.map((option) =>
            props.CustomOption ? (
              <props.CustomOption option={option} handleChange={handleChange} />
            ) : (
              <DefaultOption option={option} handleChange={handleChange} />
            )
          )}
        </Flex>
      </Flex>
    </Flex>
  );
});

Select.displayName = "Select";
