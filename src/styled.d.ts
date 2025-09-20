import "styled-components";
import type { Palette, Radius, Text } from "./theme/types";

declare module "styled-components" {
  export interface DefaultTheme {
    radius: Radius;
    palette: Palette;
    title: Text;
    text: Text;
  }
}
