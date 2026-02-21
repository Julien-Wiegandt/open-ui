import { radiusMap } from "@/theme/constants";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useTheme } from "styled-components";
import { Button } from "../button";
import { Flex } from "../flex";
import { Title, type TitleProps } from "../title";

import { useResponsive } from "@/hooks/use-responsive";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { getColorBasedOnBackground } from "../utils/get-color-based-on-background";

gsap.registerPlugin(useGSAP);

const sizeMap = {
  xs: {
    minWidth: {
      sm: "75%",
      md: "320px",
      lg: "320px",
      xl: "320px",
    },
    maxHeight: "50vh",
    width: "30vw",
    headerPy: 1,
    headerPx: 2.5,
    bodyPy: 0.5,
    bodyPx: 2.5,
    footerPy: 1,
    footerPx: 2.5,
  },
  s: {
    minWidth: {
      sm: "82%",
      md: "380px",
      lg: "380px",
      xl: "380px",
    },
    maxHeight: "60vh",
    width: "40vw",
    headerPy: 1.5,
    headerPx: 3,
    bodyPy: 1,
    bodyPx: 3,
    footerPy: 1.5,
    footerPx: 3,
  },
  m: {
    minWidth: {
      sm: "90%",
      md: "400px",
      lg: "400px",
      xl: "400px",
    },
    maxHeight: "70vh",
    width: "50vw",
    headerPy: 2,
    headerPx: 3,
    bodyPy: 1,
    bodyPx: 3,
    footerPy: 1.5,
    footerPx: 3,
  },
  l: {
    minWidth: {
      sm: "96%",
      md: "500px",
      lg: "500px",
      xl: "500px",
    },
    maxHeight: "80vh",
    width: "60vw",
    headerPy: 2,
    headerPx: 3,
    bodyPy: 1,
    bodyPx: 3,
    footerPy: 1.5,
    footerPx: 3,
  },
  xl: {
    minWidth: {
      sm: "98%",
      md: "600px",
      lg: "600px",
      xl: "600px",
    },
    maxHeight: "90vh",
    width: "70vw",
    headerPy: 2.5,
    headerPx: 3.5,
    bodyPy: 1.5,
    bodyPx: 3.5,
    footerPy: 2,
    footerPx: 3.5,
  },
};

export type ModalProps = {
  isOpen: boolean;
  fullScreen?: boolean;
  title?: React.ReactNode;
  titleProps?: Omit<TitleProps, "children">;
  size?: "xs" | "s" | "m" | "l" | "xl";
  children?: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
  onClose?: () => void;
  closeOnClickOutside?: boolean;
  bodyStyle?: React.CSSProperties;
  close?: React.ReactNode;
  closeStyle?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>;

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      fullScreen,
      children,
      style,
      closeOnClickOutside = true,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const { breakpoint } = useResponsive();

    const [portal, setPortal] = useState<HTMLElement | null>(null);

    const [isMounted, setIsMounted] = useState(false);
    const scope = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setPortal(document.getElementById("modal"));
    }, []);

    useEffect(() => {
      if (isOpen) {
        setIsMounted(true);
      }
    }, [isOpen]);

    useGSAP(
      () => {
        if (!isMounted) return;

        if (isOpen) {
          gsap
            .timeline()
            .fromTo(
              scope.current,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.3, ease: "power2.inOut" },
            )
            .fromTo(
              ".modal-content",
              { autoAlpha: 0, scale: 0.95, y: -20 },
              {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              },
              "-=0.2",
            );
        } else {
          gsap
            .timeline({
              onComplete: () => setIsMounted(false),
            })
            .to(".modal-content", {
              autoAlpha: 0,
              scale: 0.95,
              y: -20,
              duration: 0.2,
              ease: "power2.in",
            })
            .to(
              scope.current,
              { autoAlpha: 0, duration: 0.2, ease: "power2.inOut" },
              "-=0.1",
            );
        }
      },
      { dependencies: [isOpen, isMounted], scope: scope },
    );

    const bodyStyle: React.CSSProperties = {
      zIndex: 999999,
      width: fullScreen ? "100vw" : sizeMap[props.size ?? "m"].width,
      height: fullScreen ? "100vh" : "fit-content",
      minWidth: fullScreen
        ? "100vw"
        : sizeMap[props.size ?? "m"].minWidth[breakpoint],
      maxHeight: fullScreen ? "100vh" : sizeMap[props.size ?? "m"].maxHeight,
      borderRadius: fullScreen
        ? "0px"
        : `min(24px, ${radiusMap[theme.radius]})`,
      backgroundColor: "#FFFFFF",
      position: "relative",
      ...style,
    };

    const modal = (
      <Flex
        ref={scope}
        onClick={() => closeOnClickOutside && props.onClose && props.onClose()}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(4px)",
          visibility: "hidden",
        }}
      >
        <Flex
          ref={ref}
          className="modal-content"
          onClick={(e) => {
            e.stopPropagation();
          }}
          direction="column"
          elevation={3}
          style={bodyStyle}
        >
          {props.onClose && !props.close && (
            <Button
              variant="text"
              color="default"
              starticon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={getColorBasedOnBackground(
                    bodyStyle.backgroundColor ?? "#FFFFFF",
                  )}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              }
              onClick={props.onClose}
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                cursor: "pointer",
                zIndex: 999999 + 1,
                ...props.closeStyle,
              }}
            />
          )}
          {props.onClose && props.close}
          {props.title && (
            <Flex
              direction="row"
              width="100%"
              py={sizeMap[props.size ?? "m"].headerPy}
              px={sizeMap[props.size ?? "m"].headerPx}
              align="center"
              justify="between"
            >
              {React.isValidElement(props.title) ? (
                props.title
              ) : (
                <Title level={4} {...props.titleProps}>
                  {props.title}
                </Title>
              )}
            </Flex>
          )}
          <Flex
            py={sizeMap[props.size ?? "m"].bodyPy}
            px={sizeMap[props.size ?? "m"].bodyPx}
            style={{
              overflowY: "auto",
              ...props.bodyStyle,
            }}
          >
            {children}
          </Flex>
          {props.footer && (
            <Flex
              direction="row"
              gap={2}
              width="100%"
              mt={"auto"}
              py={sizeMap[props.size ?? "m"].footerPy}
              px={sizeMap[props.size ?? "m"].footerPx}
              align="center"
              justify="end"
            >
              {props.footer}
            </Flex>
          )}
        </Flex>
      </Flex>
    );

    return portal ? ReactDOM.createPortal(modal, portal) : null;
  },
);

Modal.displayName = "Modal";
