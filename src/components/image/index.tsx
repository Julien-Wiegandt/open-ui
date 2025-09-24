import React, { forwardRef } from "react";
import type { Styles } from "styled-components/dist/types";
import { StyledImage } from "./style";

export type ImageProps = {
  hoverstyle?: Styles<object>;
  pressstyle?: Styles<object>;
  style?: React.CSSProperties;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, width, height, style, ...props }, ref) => {
    return (
      <StyledImage
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        initstyle={style}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";
