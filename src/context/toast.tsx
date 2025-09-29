/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex } from "@/components/flex";
import { Toast, type ToastProps } from "@/components/toast";
import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useResponsive } from "@/hooks/use-responsive";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Draggable);

export type IToastContext = {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, "id">) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext<IToastContext>({
  toasts: [],
  addToast: () => {},
});

export type ToastSettings =
  | {
      maxToastDisplay: number;
      durationInSeconds: number;
    }
  | undefined;

export const ToastContextProvider = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  settings?: ToastSettings;
}) => {
  const settings: ToastSettings = useMemo(
    () => ({
      maxToastDisplay: 3,
      durationInSeconds: 5,
      ...props.settings,
    }),
    [props.settings]
  );

  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((currentToasts) => currentToasts.filter((t) => t.id !== id));
  }, []);

  const memoizedValue: IToastContext = useMemo(
    () => ({
      toasts,
      addToast: (toast: Omit<ToastProps, "id">) => {
        const newToast = {
          id: `toast-${Date.now()}-${Math.random()}`,
          ...toast,
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);
      },
    }),
    [toasts]
  );

  return (
    <ToastContext.Provider value={memoizedValue}>
      {children}{" "}
      <ToastProvider toasts={toasts} removeToast={removeToast} settings={settings} />
    </ToastContext.Provider>
  );
};

export const ToastProvider = ({
  toasts,
  removeToast,
  settings,
}: {
  toasts: ToastProps[];
  removeToast: (id: string) => void;
  settings: NonNullable<ToastSettings>;
}) => {
  const toastRefs = useRef(new Map<string, HTMLDivElement>());
  const containerRef = useRef<HTMLDivElement>(null);
  const [toastHover, setToastHover] = useState(false);
  const { isMobile } = useResponsive();

  const animateAndRemoveToast = useCallback(
    (id: string) => {
      const node = toastRefs.current.get(id);
      if (node) {
        gsap.killTweensOf(node);
        gsap.to(node, {
          x: "100%",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            removeToast(id);
          },
        });
      }
    },
    [removeToast]
  );

  useEffect(() => {
    toasts.forEach((toast) => {
      const node = toastRefs.current.get(toast.id);
      if (node && !node.dataset.animatedIn) {
        node.dataset.animatedIn = "true";
        gsap.fromTo(
          node,
          { opacity: 0, y: -100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              const timeline = gsap.timeline({
                delay: toast.duration || settings.durationInSeconds,
                onComplete: () => {
                  gsap.to(node, {
                    opacity: 0,
                    y: -50,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => {
                      removeToast(toast.id);
                      toastRefs.current.delete(toast.id);
                    },
                  });
                },
              });

              (node as any).timeline = timeline;
            },
          }
        );
      }
    });
  }, [toasts, removeToast]);

  const visibleToasts = toasts.slice(-settings.maxToastDisplay);

  useGSAP(
    () => {
      gsap.to(".toast-item", {
        marginBottom: (index) => (toastHover || index === 0 ? 0 : -48),
        transform: (index) =>
          index < Math.min(5, visibleToasts.length - 1) && !toastHover
            ? `scale(${1 - (Math.min(5, visibleToasts.length - 1) - index) * 0.05})`
            : "scale(1)",
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

  useGSAP(
    () => {
      const draggables: Draggable[] = [];

      visibleToasts.forEach((toast) => {
        const node = toastRefs.current.get(toast.id);
        if (!node) return;

        const dragInstance = Draggable.create(node, {
          type: "x",
          edgeResistance: 0.9,
          bounds: { minX: 0, maxX: window.innerWidth },
          onPress: function () {
            if ((this.target as any).timeline) {
              (this.target as any).timeline.pause();
            }
          },
          onDrag: function () {
            gsap.set(this.target, { opacity: 1 - Math.abs(this.x) / this.maxX });
          },
          onDragEnd: function () {
            const dismissThreshold = node.offsetWidth * 0.1;

            if (this.x > dismissThreshold) {
              gsap.to(this.target, {
                x: "100%",
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                  removeToast(toast.id);
                },
              });
            } else {
              gsap.to(this.target, {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: "elastic.out(1, 0.75)",
              });
              if ((this.target as any).timeline) {
                (this.target as any).timeline.resume();
              }
            }
          },
        });
        draggables.push(dragInstance[0]);
      });

      return () => {
        draggables.forEach((d) => d.kill());
      };
    },
    { dependencies: [toasts], scope: containerRef }
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
      direction="column-reverse"
      style={{
        position: "fixed",
        top: isMobile ? "16px" : "8px",
        right: isMobile ? "16px" : "8px",
        zIndex: 99999,
      }}
      onMouseEnter={() => setToastHover(true)}
      onMouseLeave={() => setToastHover(false)}
    >
      {visibleToasts.map((toast, index) => (
        <Toast
          key={toast.id}
          className="toast-item"
          onClose={() => animateAndRemoveToast(toast.id)}
          ref={(el) => {
            if (el) {
              toastRefs.current.set(toast.id, el);
            }
          }}
          {...toast}
          style={{
            position: "relative",
            zIndex: index,
            marginBottom: index > 0 ? "-48px" : "0",

            transform:
              index < Math.min(5, visibleToasts.length - 1)
                ? `scale(${1 - (Math.min(5, visibleToasts.length - 1) - index) * 0.05})`
                : "scale(1)",
          }}
        />
      ))}
    </Flex>
  );
};
