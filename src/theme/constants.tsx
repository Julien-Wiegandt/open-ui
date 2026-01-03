import type { Radius, Theme } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const radiusMap: Record<Radius, string> = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "14px",
  full: "42px",
};

// eslint-disable-next-line react-refresh/only-export-components
export const THEME: Theme = {
  radius: "lg",
  title: {
    fontFamily: "Inter",
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
      dark: "#7c420b",
      main: "#ffbf00",
      light: "#fffbc5",
    },
    default: { dark: "#000000", main: "#1e1e1e", light: "#d1d1d1" },
    error: {
      dark: "#43110c",
      main: "#e74c3c",
      light: "#fcd0cc",
    },
  },
};

export const ExampleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

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
