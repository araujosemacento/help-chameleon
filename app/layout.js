import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Help Chameleon",
  description:
    "Protótipo para Projeto Integrado I - Sistemas e Mídias Digitais",
  manifest: "/manifest.json",
  icons: { apple: "/icon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
