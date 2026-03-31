"use client";

import { createTheme } from "@julien-wiegandt/open-ui";

import type { Theme } from "@julien-wiegandt/open-ui";

export const FONTS = [
  { label: "Helvetica Neue", key: "Helvetica Neue" },
  { label: "IBM Plex Mono", key: "IBM Plex Mono" },
  { label: "Inter", key: "Inter" },
  { label: "Lilita One", key: "Lilita One" },
  { label: "Poppins", key: "Poppins" },
  { label: "Space Mono", key: "Space Mono" },
  { label: "Allura", key: "Allura" },
  { label: "Bodoni Moda", key: "Bodoni Moda" },
];

export const KEYPOP: Theme = createTheme({
  radius: "none",
  titleFontFamily: "Inter Variable",
  textFontFamily: "Space Mono",
  primary: "#6090fa",
});

export const EM: Theme = createTheme({
  radius: "none",
  titleFontFamily: "Allura",
  textFontFamily: "Bodoni Moda",
  primary: "#E23C64",
  secondary: "#778F19",
});
