"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "@/context/AuthContext";
import { MobileProvider } from "@/context/MobileContext";

export default function Providers({ children }) {
  return (
    <MobileProvider>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </MobileProvider>
  );
}
