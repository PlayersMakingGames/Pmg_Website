import { Cinzel, Inter, IBM_Plex_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-plex-mono",
});

export const metadata = {
  title: {
    default: "PlayersMakingGames",
    template: "%s · PlayersMakingGames",
  },
  description:
    "PlayersMakingGames is an independent studio building fair, expandable card games. Creators of Focus.",
  keywords: [
    "Focus",
    "Focus TCG",
    "Focus card game",
    "Focus ECG",
    "PlayersMakingGames",
    "PMG",
    "expandable card game",
    "ECG",
    "trading card game alternative",
    "no randomized packs",
    "no loot boxes card game",
    "fair card game",
    "free online card game",
    "browser card game",
    "digital card game",
    "strategy card game",
    "deck building game",
    "elemental card game",
    "competitive card game",
    "indie card game studio",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
