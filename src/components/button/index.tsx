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
import { HamburgerIcon, HeartIcon } from "../icons";
import { BellIcon } from "../icons/bell";
import { CheckIcon } from "../icons/check";
import { Text, type TextProps } from "../text";
import { useCombinedRefs } from "../utils/use-combined-refs";
import { getVariantStyle, sizeMap, StyledButton } from "./style";

export type Icon = "bell" | "check" | "hamburger" | "heart";

gsap.registerPlugin(SplitText);

const Icon = forwardRef<
  HTMLDivElement,
  { icon: ButtonProps["starticon"]; animation: boolean; color: string; size: number }
>(({ icon, animation, color, size }, ref) => {
  return (
    icon && (
      <Flex ref={ref} align="center" justify="center">
        {typeof icon !== "string" && icon}
        {icon === "bell" && (
          <BellIcon hasNotification={animation} size={size} color={color} animated />
        )}
        {icon === "check" && (
          <CheckIcon
            isVisible={animation}
            size={size}
            animated={animation}
            color={color}
          />
        )}
        {icon === "hamburger" && (
          <HamburgerIcon isOpen={animation} size={size} animated color={color} />
        )}
        {icon === "heart" && (
          <HeartIcon isLiked={animation} size={size} animated color={color} />
        )}
      </Flex>
    )
  );
});

export type ButtonProps = {
  // required
  color: Color;
  variant: Variant;
  // optional
  label?: string;
  starticon?: React.ReactNode | Icon;
  endicon?: React.ReactNode | Icon;
  endanimation?: boolean;
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
    const [animation, setAnimation] = useState(false);
    const [animationEndWidth, setAnimationEndWidth] = useState<number | undefined>(
      undefined
    );

    const isToogleIcon =
      (typeof props.starticon === "string" &&
        ["heart", "hamburger"].includes(props.starticon)) ||
      (typeof props.endicon === "string" &&
        ["heart", "hamburger"].includes(props.endicon));

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

        if (memoizedProps.endanimation) setEndAnimation(true);
        setAnimation(isToogleIcon ? !animation : true);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (memoizedProps.endanimation) setEndAnimation(false);
        if (!isToogleIcon) setAnimation(false);
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
        {!endAnimation && (
          <Icon
            ref={starticonRef}
            icon={props.starticon}
            animation={animation}
            color={
              getVariantStyle({ color: memoizedProps.color, theme })[
                memoizedProps.variant
              ].color
            }
            size={sizeMap[memoizedProps.size ?? "md"].height ?? 24}
          />
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
        {!endAnimation && (
          <Icon
            ref={endiconRef}
            icon={props.endicon}
            animation={animation}
            color={
              getVariantStyle({ color: memoizedProps.color, theme })[
                memoizedProps.variant
              ].color
            }
            size={sizeMap[memoizedProps.size ?? "md"].height ?? 24}
          />
        )}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
