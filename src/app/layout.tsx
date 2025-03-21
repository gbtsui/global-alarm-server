import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Comic_Neue } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
    variable: "--font-atkinson",
    subsets: ["latin"],
    weight: "700"
})

const comicNeue = Comic_Neue({
    variable: "--font-comic",
    subsets: ["latin"],
    weight: "700"
})

export const metadata: Metadata = {
  title: "globalAlarm",
  description: "yea because ofc I want someone else to wake me up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comicNeue.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
