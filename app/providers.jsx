"use client";

import { ThemeProvider } from "@material-tailwind/react";

export default function Providers({ children }) {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  );
}