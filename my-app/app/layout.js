import { Geist, Geist_Mono, Playfair_Display, Lora  } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

export const metadata = {
  title: "The Rakesh Daniel Times | Freelance Full Stack Developer",
  description: "My personal portfolio website i am a web developer and freelancer |  Freelance full stack developer in Chennai, building web apps, e-commerce, booking systems and Telegram bots.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${playfair.variable} ${lora.variable}`}
    >
      <body className="bg-paper text-ink font-body antialiased">{children}</body>
    </html>
  );
}
