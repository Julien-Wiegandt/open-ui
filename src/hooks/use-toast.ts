import { ToastContext } from "@/context/toast";
import { useContext } from "react";

export const useToast = () => {
  const { addToast } = useContext(ToastContext);
  return {
    addToast,
  };
};
