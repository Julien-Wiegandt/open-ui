import type { Palette, Radius } from "@julien-wiegandt/open-ui";
import "styled-components";

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
