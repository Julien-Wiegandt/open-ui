import { createTheme } from "@/theme/create-theme";
import type { Theme } from "@/theme/types";

export const FONTS = [
            { label: "Helvetica Neue", key: "Helvetica Neue" },
            { label: "IBM Plex Mono", key: "IBM Plex Mono" },
            { label: "Inter", key: "Inter" },
            { label: "Lilita One", key: "Lilita One" },
            { label: "Poppins", key: "Poppins" },
            { label: "Space Mono", key: "Space Mono" },
          ]

export const KEYPOP : Theme = createTheme({
    radius: 'none',
    titleFontFamily: 'Inter Variable',
    textFontFamily: 'Space Mono',
    primary: '#6090fa'
})