import "styled-components";
import type { Palette, Radius } from "./theme/types";

declare module "styled-components" {
  export interface DefaultTheme {
    radius: Radius;
    palette: Palette;
    title: {
      fontFamily: string;
    };
    text: {
      fontFamily: string;
    };
  }
}
