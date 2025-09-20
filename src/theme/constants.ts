import type { Radius, Theme } from "./types";

export const radiusMap: Record<Radius, string> = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "14px",
  full: "42px",
};

export const THEME: Theme = {
  radius: "none",
  title: {
    fontFamily: "Poppins",
  },
  text: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      dark: "#162a55",
      main: "#166FEE",
      light: "#daeeff",
    },
    secondary: {
      dark: "#c2255c",
      main: "#e64980",
      light: "#fcc2d7",
    },
    default: {
      main: "#000000",
      light: "#ffffff",
      dark: "#000000",
    },
    error: {
      main: "#e74c3c",
      dark: "#e74c3c",
      light: "#e74c3c",
    },
  },
};

// 'blue-ribbon': {
//     '50': '#eff8ff',
//     '100': '#daeeff',
//     '200': '#bee1ff',
//     '300': '#91d0ff',
//     '400': '#5db5fd',
//     '500': '#3794fa',
//     '600': '#166fee',
//     '700': '#195fdc',
//     '800': '#1b4eb2',
//     '900': '#1c448c',
//     '950': '#162a55',
// },
