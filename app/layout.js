import { Inter, Domine } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const domine = Domine({ subsets: ["latin"] });

export const metadata = {
  title: "Help Chameleon",
  description:
    "Protótipo para Projeto Integrado I - Sistemas e Mídias Digitais",
  manifest: "/manifest.json",
  icons: { apple: "/icon.png" },
  application: {
    name: "Help Chameleon",
    short_name: "Chm_Hlp",
    theme_color: "#710af0",
    background_color: "#e4d4f7",
    display: "standalone",
  },
  apple: {
    mobileWebAppCapable: "yes",
    appleTouchIcon: {
      image: {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    },
  },
  mobileWebAppCapable: "yes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={[inter.className, domine.className]}>{children}</body>
    </html>
  );
}
