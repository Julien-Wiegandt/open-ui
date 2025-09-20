"use client";

import { radiusMap } from "@/theme/constants";
import { forwardRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useTheme } from "styled-components";
import { Button } from "../button";
import { Flex } from "../flex";
import { Title } from "../title";

const sizeMap = {
  sm: {
    minWidth: "280px",
    maxWidth: "380px",
    maxHeight: "60vh",
    headerPy: 1.5,
    headerPx: 3,
    bodyPy: 1,
    bodyPx: 3,
    footerPy: 1.5,
    footerPx: 3,
  },
  md: {
    minWidth: "400px",
    maxWidth: "448px",
    maxHeight: "70vh",
    headerPy: 2,
    headerPx: 3,
    bodyPy: 1,
    bodyPx: 3,
    footerPy: 1.5,
    footerPx: 3,
  },
  lg: {
    minWidth: "500px",
    maxWidth: "576px",
    maxHeight: "80vh",
    headerPy: 2,
    headerPx: 3,
    bodyPy: 1,
    bodyPx: 3,
    footerPy: 1.5,
    footerPx: 3,
  },
};

export type ModalProps = {
  isOpen: boolean;
  fullScreen?: boolean;
  title?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
  onClose?: () => void;
  closeOnClickOutside?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    { isOpen, fullScreen, children, style, closeOnClickOutside = true, ...props },
    ref
  ) => {
    const theme = useTheme();
    const [portal, setPortal] = useState<HTMLElement | null>(null);

    useEffect(() => {
      setPortal(document.getElementById("modal"));
    }, []);

    const modal = (
      <Flex
        ref={ref}
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
        }}
      >
        <Flex
          onClick={(e) => {
            e.stopPropagation();
          }}
          direction="column"
          elevation={3}
          style={{
            zIndex: 999999,
            width: fullScreen ? "100vw" : "80vw",
            height: fullScreen ? "100vh" : "fit-content",
            minWidth: fullScreen ? "100vw" : sizeMap[props.size ?? "md"].minWidth,
            maxWidth: fullScreen ? "100vw" : sizeMap[props.size ?? "md"].maxWidth,
            maxHeight: fullScreen ? "100vh" : sizeMap[props.size ?? "md"].maxHeight,
            outline: "solid 4px #FFFFFF33",
            borderRadius: fullScreen ? "0px" : `min(24px, ${radiusMap[theme.radius]})`,
            backgroundColor: "white",
            position: "relative",
            ...style,
          }}
        >
          {props.onClose && (
            <Button
              variant="text"
              color="default"
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              }}
            />
          )}
          {props.title && (
            <Flex
              direction="row"
              width="100%"
              py={sizeMap[props.size ?? "md"].headerPy}
              px={sizeMap[props.size ?? "md"].headerPx}
              align="center"
              justify="between"
            >
              <Title level={4}>{props.title}</Title>
            </Flex>
          )}
          <Flex
            py={sizeMap[props.size ?? "md"].bodyPy}
            px={sizeMap[props.size ?? "md"].bodyPx}
            style={{
              overflowY: "auto",
            }}
          >
            {children}
          </Flex>
          <Flex
            direction="row"
            gap={2}
            width="100%"
            mt={"auto"}
            py={sizeMap[props.size ?? "md"].footerPy}
            px={sizeMap[props.size ?? "md"].footerPx}
            align="center"
            justify="end"
          >
            {props.footer}
          </Flex>
        </Flex>
      </Flex>
    );

    return isOpen && portal ? ReactDOM.createPortal(modal, portal) : null;
  }
);

Modal.displayName = "Modal";
