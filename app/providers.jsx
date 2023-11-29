"use client";

import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AuthProvider } from "@/context/AuthContext";
import { MobileProvider } from "@/context/MobileContext";

export default function Providers({ children, ...props }) {
  return (
    <MobileProvider>
      <AuthProvider>
        <NextThemesProvider {...props}>
          <MaterialThemeProvider>{children}</MaterialThemeProvider>
        </NextThemesProvider>
      </AuthProvider>
    </MobileProvider>
  );
}
