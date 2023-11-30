import { Poppins, Inter, Bitter, Sono } from "next/font/google";
import Providers from "@/app/providers";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
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
    <html className={`${poppins.variable}`} lang="pt-BR">
      <body className={[poppins.className, inter.className, bitter.className, sono.className]}>
        <Providers attribute="class" defaultTheme="system" enableSystem={true} enableColorScheme={true}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
