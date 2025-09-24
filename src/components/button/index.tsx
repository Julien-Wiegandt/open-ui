/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Color, Radius, Variant } from "@/theme/types";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "styled-components";
import type { MarginProps, PaddingProps } from "../common/types";
import { Flex } from "../flex";
import CheckIcon from "../icons/check";
import { Text } from "../text";
import { useCombinedRefs } from "../utils/use-combined-refs";
import { getVariantStyle, sizeMap, StyledButton } from "./style";

gsap.registerPlugin(SplitText);

export type ButtonProps = {
  // required
  color: Color;
  variant: Variant;
  // optional
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  endClickAnimation?: boolean;
  size?: "sm" | "md" | "lg";
  bgcolor?: string;
  radius?: Radius;
  gap?: string | number;
  loading?: boolean;
  active?: boolean;
  txtColor?: string;
  align?: "left" | "center" | "right";
  w?: string;
  h?: string;
} & MarginProps &
  PaddingProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, ...props }, ref) => {
    const theme = useTheme();

    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const startIconRef = useRef<HTMLDivElement>(null);
    const endIconRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);
    const [endAnimation, setEndAnimation] = useState(false);
    const [animationEndWidth, setAnimationEndWidth] = useState<number | undefined>(
      undefined
    );

    const combinedRef = useCombinedRefs(ref, buttonRef);

    const memoizedProps = useMemo(() => {
      const defaultProps = {
        size: "md" as ButtonProps["size"],
        loading: true,
      };
      return {
        ...defaultProps,
        ...props,
      };
    }, [props]);

    useEffect(() => {
      if (textRef.current) {
        const split = new SplitText(textRef.current, { type: "chars" });

        if (loading) {
          gsap.set(textRef.current, { opacity: 1 });
          gsap.to(split.chars, {
            opacity: 0.6,
            stagger: {
              each: 0.05,
              from: "start",
              repeat: -1,
            },
            ease: "power1.inOut",
          });
        }

        return () => {
          gsap.killTweensOf(split.chars);
          split.revert();
          gsap.set(textRef.current, { opacity: 1, y: 0 });
        };
      }
    }, [loading, props.label]);

    useEffect(() => {
      if (startIconRef.current && props.startIcon && !props.endIcon) {
        setAnimationEndWidth(startIconRef.current.getBoundingClientRect().width);
      }
    }, [props.startIcon, props.endIcon]);

    useEffect(() => {
      if (endIconRef.current && props.endIcon) {
        setAnimationEndWidth(endIconRef.current.getBoundingClientRect().width);
      }
    }, [props.endIcon]);

    const variant = useMemo(
      () => getVariantStyle({ color: memoizedProps.color, theme }),
      [memoizedProps.color, theme]
    );

    return (
      <StyledButton
        ref={combinedRef}
        onClick={async (event) => {
          if (memoizedProps.loading) setLoading(true);
          try {
            if (onClick) await onClick(event);
          } finally {
            if (memoizedProps.endClickAnimation) {
              setEndAnimation(true);
              setTimeout(() => {
                setEndAnimation(false);
              }, 1000);
            }
            if (memoizedProps.loading) setLoading(false);
          }
        }}
        {...memoizedProps}
        disabled={loading || props.disabled}
      >
        {!endAnimation && props.startIcon && (
          <Flex ref={startIconRef} align="center" justify="center">
            {props.startIcon}
          </Flex>
        )}
        {props.label &&
          (!endAnimation ||
            (endAnimation && props.startIcon) ||
            (endAnimation && props.endIcon)) && (
            <Text
              ref={textRef}
              onSizeChange={(size) => {
                if (!props.startIcon && !props.endIcon) {
                  setAnimationEndWidth(size.width);
                }
              }}
              width="100%"
              align={memoizedProps.align ?? "center"}
              size={sizeMap[memoizedProps.size ?? "md"].fontSize}
            >
              {props.label}
            </Text>
          )}
        {endAnimation && (
          <Flex align="center" justify="center" width={`${animationEndWidth}px`}>
            <CheckIcon
              isVisible={endAnimation}
              color={variant[memoizedProps.variant].color}
              size={sizeMap[memoizedProps.size ?? "md"].height ?? 24}
              animated
            />
          </Flex>
        )}
        {!endAnimation && props.endIcon && (
          <Flex ref={endIconRef} align="center" justify="center">
            {props.endIcon}
          </Flex>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
