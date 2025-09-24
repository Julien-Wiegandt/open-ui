import { useCallback } from "react";

export function useCombinedRefs<T>(...refs: React.Ref<T>[]) {
  return useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (!ref) {
          return;
        }

        if (typeof ref === "function") {
          ref(element);
        } else {
          ref.current = element;
        }
      });
    },
    [...refs]
  );
}
