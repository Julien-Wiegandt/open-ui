"use client";

import { forwardRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Flex } from "../flex";

export type ModalProps = {
  isOpen: boolean;
  fullScreen?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, fullScreen, children, style, onClick }, ref) => {
    const [portal, setPortal] = useState<HTMLElement | null>(null);

    useEffect(() => {
      setPortal(document.getElementById("modal"));
    }, []);

    const modal = (
      <Flex
        ref={ref}
        onClick={onClick}
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
          backdropFilter: "blur(2px)",
        }}
      >
        <Flex
          onClick={(e) => {
            e.stopPropagation();
          }}
          direction="column"
          justify="center"
          align="center"
          style={{
            zIndex: 999999,
            width: fullScreen ? "100vw" : "80vw",
            height: fullScreen ? "100vh" : "80vh",
            outline: "solid 4px #FFFFFF33",
            borderRadius: fullScreen ? "0px" : "24px",
            ...style,
          }}
        >
          {children}
        </Flex>
      </Flex>
    );

    return isOpen && portal ? ReactDOM.createPortal(modal, portal) : null;
  }
);

Modal.displayName = "Modal";
