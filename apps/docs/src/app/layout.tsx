import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";

// Font source variable Inter
import "@fontsource-variable/inter/index.css";
// Font source Inter (Standard)
import "@fontsource/inter/index.css";
// Font source Space Mono
import "@fontsource/space-mono/index.css";
import "@fontsource/space-mono/700.css";
// Font source IBM Plex Mono
import "@fontsource/ibm-plex-mono/index.css";
import "@fontsource/ibm-plex-mono/700.css";
// Font source Lilita One
import "@fontsource/lilita-one/index.css";
// Font source Epilogue
import "@fontsource/epilogue/index.css";
// Font source Poppins
import "@fontsource/poppins/index.css";
import "@fontsource/poppins/700.css";
// Font source Allura
import "@fontsource/allura/index.css";
// Font source Bodoni Moda
import "@fontsource/bodoni-moda/index.css";
import "@fontsource/bodoni-moda/700.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "open-ui - Documentation",
  description: "The best open source react UI library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
