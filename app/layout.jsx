import { Inter, Bitter, Sono } from "next/font/google";
import Providers from "@/app/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bitter = Bitter({ subsets: ["latin"] });
const sono = Sono({ subsets: ["latin"] });

export const metadata = {
  title: "Help Chameleon",
  description:
    "Protótipo para Projeto Integrado I - Sistemas e Mídias Digitais",
  manifest: "/manifest.json",
  icons: { apple: "/icon.png" },
  application: {
    name: "Help Chameleon",
    short_name: "Hameleon",
    theme_color: "#a61fad",
    background_color: "#e6e6e6",
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
      <body className={[inter.className, bitter.className, sono.className]}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
