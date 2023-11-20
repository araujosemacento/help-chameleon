"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "@/context/AuthContext";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
}
