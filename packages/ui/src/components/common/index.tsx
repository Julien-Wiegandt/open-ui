import type { MarginProps, PaddingProps } from "./types";

export const toRem = (value: number | string) => {
  return typeof value === "number" ? `${value / 2}rem` : value;
};

export const getMarginsCSS = (props: MarginProps) => {
  const { m, mt, mr, mb, ml, mx, my } = props;
  return [
    m && `margin: ${toRem(m)};`,
    mt && `margin-top: ${toRem(mt)};`,
    mr && `margin-right: ${toRem(mr)};`,
    mb && `margin-bottom: ${toRem(mb)};`,
    ml && `margin-left: ${toRem(ml)};`,
    mx && `margin-left: ${toRem(mx)};`,
    mx && `margin-right: ${toRem(mx)};`,
    my && `margin-top: ${toRem(my)};`,
    my && `margin-bottom: ${toRem(my)};`,
  ]
    .filter(Boolean)
    .join(" ");
};

export const getPaddingCSS = (props: PaddingProps) => {
  const { p, pt, pr, pb, pl, px, py } = props;
  return [
    p && `padding: ${toRem(p)};`,
    pt && `padding-top: ${toRem(pt)};`,
    pr && `padding-right: ${toRem(pr)};`,
    pb && `padding-bottom: ${toRem(pb)};`,
    pl && `padding-left: ${toRem(pl)};`,
    px && `padding-left: ${toRem(px)};`,
    px && `padding-right: ${toRem(px)};`,
    py && `padding-top: ${toRem(py)};`,
    py && `padding-bottom: ${toRem(py)};`,
  ]
    .filter(Boolean)
    .join(" ");
};

export const getScrollbarCSS = () => {
  return `
    &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  `;
};
