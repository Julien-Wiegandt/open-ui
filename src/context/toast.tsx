/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex } from "@/components/flex";
import { Toast } from "@/components/toast";
import type { Color } from "@/theme/types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Toast = {
  title: string;
  color?: Color;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClose?: () => void;
};

export type IToastContext = {
  toasts: Toast[];
  addToast: (toast: Toast) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext<IToastContext>({
  toasts: [],
  addToast: () => {},
});

export const ToastContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback(() => {
    setToasts((currentToasts) => currentToasts.slice(1)); // .slice(1) retire le premier élément
  }, []);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        removeToast();
      }, 2_000);

      return () => clearTimeout(timer);
    }
  }, [toasts, removeToast]);

  const memoizedValue: IToastContext = useMemo(
    () => ({
      toasts,
      addToast: (toast: Toast) => {
        setToasts((prevToasts) => [...prevToasts, toast]);
      },
    }),
    [toasts]
  );

  return <ToastContext.Provider value={memoizedValue}>{children}</ToastContext.Provider>;
};

export const ToastProvider = () => {
  const { toasts } = useContext(ToastContext);
  return (
    <Flex
      gap={1}
      style={{ position: "absolute", bottom: "8px", right: "8px", zIndex: 99999 }}
    >
      {toasts.map((toast) => (
        <Toast key={toast.title} {...toast} />
      ))}
    </Flex>
  );
};
