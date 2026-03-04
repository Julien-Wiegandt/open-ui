/* eslint-disable react-refresh/only-export-components */
import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";

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
