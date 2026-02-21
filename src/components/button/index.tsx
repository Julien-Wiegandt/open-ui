import type { Color, Radius, Variant } from "@/theme/types";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import type { MarginProps, PaddingProps } from "../common/types";
import { Flex } from "../flex";
import { HamburgerIcon, HeartIcon, SyncIcon } from "../icons";
import { BellIcon } from "../icons/bell";
import { CheckIcon } from "../icons/check";
import { CopyIcon } from "../icons/copy";
import { DotsIcon } from "../icons/dots";
import { SendHorizontalIcon } from "../icons/send-horizontal";
import { SparklesIcon } from "../icons/sparkles";
import { Text, type TextProps } from "../text";
import { getColorBasedOnBackground } from "../utils/get-color-based-on-background";
import { getRecursiveBgColor } from "../utils/get-recursive-bg-color";
import { useCombinedRefs } from "../utils/use-combined-refs";
import { sizeMap, StyledButton } from "./style";

import { useComponentTheme } from "@/hooks/use-component-theme";

export type Icon =
  | "bell"
  | "check"
  | "hamburger"
  | "heart"
  | "sync"
  | "sparkles"
  | "dots"
  | "send"
  | "copy";

gsap.registerPlugin(SplitText);

const Icon = forwardRef<
  HTMLDivElement,
  {
    icon: ButtonProps["starticon"];
    animation: boolean;
    size: number;
  }
>(({ icon, animation, size }, ref) => {
  return (
    icon && (
      <Flex ref={ref} align="center" justify="center">
        {typeof icon !== "string" && icon}
        {icon === "bell" && (
          <BellIcon hasNotification={animation} size={size} animated />
        )}
        {icon === "check" && (
          <CheckIcon isVisible={animation} size={size} animated={animation} />
        )}
        {icon === "hamburger" && (
          <HamburgerIcon isOpen={animation} size={size} animated />
        )}
        {icon === "heart" && (
          <HeartIcon isLiked={animation} size={size} animated />
        )}
        {icon === "sync" && (
          <SyncIcon isSyncing={animation} size={size} animated />
        )}
        {icon === "sparkles" && (
          <SparklesIcon size={size} animated={animation} />
        )}
        {icon === "dots" && <DotsIcon size={size} animated={animation} />}
        {icon === "send" && (
          <SendHorizontalIcon size={size} animated={animation} />
        )}
        {icon === "copy" && (
          <CopyIcon isCopied={animation} size={size} animated />
        )}
      </Flex>
    )
  );
});

export type ButtonProps = {
  // optional with theme defaults
  color?: Color | string;
  variant?: Variant;
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
  activeStyle?: React.CSSProperties;
  align?: "left" | "center" | "right";
  w?: string;
  h?: string;
  labelProps?: TextProps;
} & MarginProps &
  PaddingProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (originalProps, ref) => {
    const {
      onClick,
      loading: loadingProp,
      labelProps,
      ...mergedProps
    } = useComponentTheme("button", originalProps);

    const { color = "default", variant = "contained", ...props } = mergedProps;

    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const starticonRef = useRef<HTMLDivElement>(null);
    const endiconRef = useRef<HTMLDivElement>(null);
    const [internalLoading, setInternalLoading] = useState(false);
    const [endAnimation, setEndAnimation] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [animationEndWidth, setAnimationEndWidth] = useState<
      number | undefined
    >(undefined);

    // Mode contrôlé si loadingProp est défini, sinon mode non-contrôlé
    const isControlled = loadingProp !== undefined;
    const loading = isControlled ? loadingProp : internalLoading;

    const isToogleIcon =
      (typeof props.starticon === "string" &&
        ["heart", "hamburger"].includes(props.starticon)) ||
      (typeof props.endicon === "string" &&
        ["heart", "hamburger"].includes(props.endicon));

    const combinedRef = useCombinedRefs(ref, buttonRef);

    const [labelColor, setLabelColor] = useState<string | undefined>(undefined);

    useEffect(() => {
      if (labelProps?.color) return;
      const btn = buttonRef.current;
      if (!btn) return;
      try {
        const bgColor = getComputedStyle(btn).backgroundColor;
        const alphaMatch = bgColor.match(
          /rgba\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/,
        );
        const alpha = alphaMatch ? parseFloat(alphaMatch[1]) : 1;
        const isEffectivelyTransparent =
          bgColor === "rgba(0, 0, 0, 0)" ||
          bgColor === "transparent" ||
          alpha < 0.5;
        const resolvedBg = isEffectivelyTransparent
          ? getRecursiveBgColor(btn.parentElement ?? btn)
          : bgColor;
        setLabelColor(getColorBasedOnBackground(resolvedBg));
      } catch {}
    });

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
        setAnimationEndWidth(
          starticonRef.current.getBoundingClientRect().width,
        );
      }
    }, [props.starticon, props.endicon]);

    useEffect(() => {
      if (endiconRef.current && props.endicon) {
        setAnimationEndWidth(endiconRef.current.getBoundingClientRect().width);
      }
    }, [props.endicon]);

    const handleButtonClick = async (
      event: React.MouseEvent<HTMLButtonElement>,
    ) => {
      // En mode non-contrôlé, gérer le loading automatiquement
      if (!isControlled) setInternalLoading(true);

      try {
        if (onClick) await onClick(event);
      } finally {
        if (!isControlled) setInternalLoading(false);

        if (props.endanimation) setEndAnimation(true);
        setAnimation(isToogleIcon ? !animation : true);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (props.endanimation) setEndAnimation(false);
        if (!isToogleIcon) setAnimation(false);
      }
    };

    const handleTextSizeChange = useCallback(
      (size: { width: number; height: number }) => {
        if (!props.starticon && !props.endicon && !endAnimation) {
          setAnimationEndWidth(size.width);
        }
      },
      [props.starticon, props.endicon, endAnimation],
    );

    return (
      <StyledButton
        ref={combinedRef}
        onClick={handleButtonClick}
        variant={variant}
        color={color}
        {...props}
        disabled={loading || props.disabled}
      >
        {!endAnimation && (
          <Icon
            ref={starticonRef}
            icon={props.starticon}
            animation={animation}
            size={sizeMap[props.size ?? "md"].height ?? 24}
          />
        )}
        {props.label &&
          (!endAnimation ||
            (endAnimation && props.starticon) ||
            (endAnimation && props.endicon)) && (
            <Text
              key={props.label}
              ref={textRef}
              onSizeChange={handleTextSizeChange}
              width="100%"
              align={props.align ?? "center"}
              size={sizeMap[props.size ?? "md"].fontSize}
              color={labelColor}
              {...labelProps}
            >
              {props.label}
            </Text>
          )}
        {endAnimation && (
          <Flex
            align="center"
            justify="center"
            width={`${animationEndWidth}px`}
          >
            <CheckIcon
              isVisible={endAnimation}
              size={sizeMap[props.size ?? "md"].height ?? 24}
              animated
            />
          </Flex>
        )}
        {!endAnimation && (
          <Icon
            ref={endiconRef}
            icon={props.endicon}
            animation={animation}
            size={sizeMap[props.size ?? "md"].height ?? 24}
          />
        )}
      </StyledButton>
    );
  },
);

Button.displayName = "Button";
