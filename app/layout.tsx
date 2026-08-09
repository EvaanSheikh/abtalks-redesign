import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
      <body className="bg-black text-white">

        {children}

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#18181b",
              color: "#ffffff",
              border: "1px solid #3f3f46",
              borderRadius: "12px",
              padding: "14px 18px",
              fontSize: "14px",
            },

            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#ffffff",
              },
            },

            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#ffffff",
              },
            },
          }}
        />

      </body>
    </html>
  );
}