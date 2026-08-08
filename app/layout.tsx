import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABTalks 2.0",
  description: "60-Day Coding Challenge Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}