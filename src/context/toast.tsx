/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex } from "@/components/flex";
import { Toast } from "@/components/toast";
import type { Color } from "@/theme/types";
import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

type Toast = {
  id: string;
  title: string;
  color?: Color;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  duration?: number;
  onClose?: () => void;
};

export type IToastContext = {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext<IToastContext>({
  toasts: [],
  addToast: () => {},
});

export const ToastContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((currentToasts) => currentToasts.filter((t) => t.id !== id));
  }, []);

  const memoizedValue: IToastContext = useMemo(
    () => ({
      toasts,
      addToast: (toast: Omit<Toast, "id">) => {
        const newToast = {
          ...toast,
          id: `toast-${Date.now()}-${Math.random()}`,
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);
      },
    }),
    [toasts]
  );

  return (
    <ToastContext.Provider value={memoizedValue}>
      {children} <ToastProvider toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

export const ToastProvider = ({
  toasts,
  removeToast,
}: {
  toasts: Toast[];
  removeToast: (id: string) => void;
}) => {
  const toastRefs = useRef(new Map<string, HTMLDivElement>());
  const containerRef = useRef<HTMLDivElement>(null);
  const [toastHover, setToastHover] = useState(false);

  useEffect(() => {
    toasts.forEach((toast) => {
      const node = toastRefs.current.get(toast.id);
      if (node && !node.dataset.animatedIn) {
        node.dataset.animatedIn = "true";
        gsap.fromTo(
          node,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              const timeline = gsap.timeline({
                delay: toast.duration || 10,
                onComplete: () => {
                  removeToast(toast.id);
                  toastRefs.current.delete(toast.id);
                },
              });

              timeline.to(node, {
                opacity: 0,
                y: 50,
                duration: 0.3,
                ease: "power2.in",
              });
            },
          }
        );
      }
    });
  }, [toasts, removeToast]);

  const visibleToasts = toasts.slice(-5);

  useGSAP(
    () => {
      gsap.to(".toast-item", {
        marginTop: (index) => (toastHover || index === 0 ? 0 : -48),
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.05,
      });
    },
    {
      dependencies: [toastHover, visibleToasts],
      scope: containerRef,
    }
  );

  useEffect(() => {
    if (visibleToasts.length === 0 && toastHover) {
      setToastHover(false);
    }
  }, [visibleToasts, toastHover]);

  return (
    <Flex
      ref={containerRef}
      gap={0.5}
      style={{
        position: "fixed",
        bottom: "8px",
        right: "8px",
        zIndex: 99999,
      }}
      onMouseEnter={() => setToastHover(true)}
      onMouseLeave={() => setToastHover(false)}
    >
      {visibleToasts.map((toast, index) => (
        <Toast
          key={toast.id}
          className="toast-item"
          onClose={() => removeToast(toast.id)}
          ref={(el) => {
            if (el) {
              toastRefs.current.set(toast.id, el);
            }
          }}
          {...toast}
          style={{
            position: "relative",
            zIndex: index,
            marginTop: index > 0 ? "-48px" : "0",
          }}
        />
      ))}
    </Flex>
  );
};
