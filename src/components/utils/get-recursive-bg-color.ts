export const getRecursiveBgColor = (element: HTMLElement): string => {
  const style = window.getComputedStyle(element);
  const bgColor = style.backgroundColor;
  if (bgColor === "rgba(0, 0, 0, 0)" || bgColor === "transparent") {
    if (element.parentElement) {
      return getRecursiveBgColor(element.parentElement);
    }
    return "#ffffff";
  }
  return bgColor;
};
