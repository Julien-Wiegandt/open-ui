/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Color, Radius, Variant } from "@/theme/types";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTheme } from "styled-components";
import type { MarginProps, PaddingProps } from "../common/types";
import { Flex } from "../flex";
import { CheckIcon } from "../icons/check";
import { Text, type TextProps } from "../text";
import { useCombinedRefs } from "../utils/use-combined-refs";
import { getVariantStyle, sizeMap, StyledButton } from "./style";

gsap.registerPlugin(SplitText);

export type ButtonProps = {
  // required
  color: Color;
  variant: Variant;
  // optional
  label?: string;
  starticon?: React.ReactNode;
  endicon?: React.ReactNode;
  endClickAnimation?: boolean;
  size?: "sm" | "md" | "lg";
  bgcolor?: string;
  radius?: Radius;
  gap?: string | number;
  loading?: boolean;
  active?: boolean;
  align?: "left" | "center" | "right";
  w?: string;
  h?: string;
  labelProps?: TextProps;
} & MarginProps &
  PaddingProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, loading: loadingProp = true, labelProps, ...props }, ref) => {
    const theme = useTheme();

    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const starticonRef = useRef<HTMLDivElement>(null);
    const endiconRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);
    const [endAnimation, setEndAnimation] = useState(false);
    const [animationEndWidth, setAnimationEndWidth] = useState<number | undefined>(
      undefined
    );

    const combinedRef = useCombinedRefs(ref, buttonRef);

    const memoizedProps = useMemo(() => {
      const defaultProps = {
        size: "md" as ButtonProps["size"],
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
      if (starticonRef.current && props.starticon && !props.endicon) {
        setAnimationEndWidth(starticonRef.current.getBoundingClientRect().width);
      }
    }, [props.starticon, props.endicon]);

    useEffect(() => {
      if (endiconRef.current && props.endicon) {
        setAnimationEndWidth(endiconRef.current.getBoundingClientRect().width);
      }
    }, [props.endicon]);

    const variant = useMemo(
      () => getVariantStyle({ color: memoizedProps.color, theme }),
      [memoizedProps.color, theme]
    );

    const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
      if (loadingProp) setLoading(true);

      try {
        if (onClick) await onClick(event);
      } finally {
        if (loadingProp) setLoading(false);

        if (memoizedProps.endClickAnimation) {
          setEndAnimation(true);

          await new Promise((resolve) => setTimeout(resolve, 1000));

          setEndAnimation(false);
        }
      }
    };

    const handleTextSizeChange = useCallback(
      (size: { width: number; height: number }) => {
        if (!props.starticon && !props.endicon && !endAnimation) {
          setAnimationEndWidth(size.width);
        }
      },
      [props.starticon, props.endicon, endAnimation]
    );

    return (
      <StyledButton
        ref={combinedRef}
        onClick={handleButtonClick}
        {...memoizedProps}
        disabled={loading || props.disabled}
      >
        {!endAnimation && props.starticon && (
          <Flex ref={starticonRef} align="center" justify="center">
            {props.starticon}
          </Flex>
        )}
        {props.label &&
          (!endAnimation ||
            (endAnimation && props.starticon) ||
            (endAnimation && props.endicon)) && (
            <Text
              ref={textRef}
              onSizeChange={handleTextSizeChange}
              width="100%"
              align={memoizedProps.align ?? "center"}
              size={sizeMap[memoizedProps.size ?? "md"].fontSize}
              {...labelProps}
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
        {!endAnimation && props.endicon && (
          <Flex ref={endiconRef} align="center" justify="center">
            {props.endicon}
          </Flex>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
