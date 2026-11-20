import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Rakesh Daniel (Rakesh AKM) | Full Stack Developer - Ayankulam, Tirunelveli & Chennai",
  description:
    "Rakesh Daniel (AKM / Rakesh AKM) — Freelance Full Stack Developer in Chennai, from AKM Ayankulam, Tirunelveli. Building modern web apps, e-commerce, and booking systems.",
  keywords: [
    "Rakesh Daniel",
    "Rakesh AKM",
    "AKM",
    "AKM Ayankulam",
    "Ayankulam",
    "Tirunelveli",
    "Full Stack Developer",
    "Full Stack Developer Chennai",
    "Full Stack Developer Tirunelveli",
  ],
};


export const viewport = { themeColor: "#0f0b08" };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        {/* SVG filter that makes paper edges look burnt */}
        <svg
          width="0"
          height="0"
          aria-hidden="true"
          style={{ position: "absolute" }}
        >
          <defs>
            <filter id="burn" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.035"
                numOctaves="3"
                seed="4"
                result="n"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="n"
                scale="16"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
