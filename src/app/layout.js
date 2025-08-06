'use client';

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import DarkModeToggle from "@/components/DarkMode";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
