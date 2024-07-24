import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const maglony = localFont({
  src: "../../public/fonts/Maglony.ttf",
  variable: "--maglony",
});
const clashGrotesk = localFont({
  src: "../../public/fonts/ClashGrotesk.ttf",
  variable: "--clashGrotesk",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Thirdinternet",
  description: "Bringing the next generation onchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${maglony.variable} ${clashGrotesk.variable} bg-[#EAEAEA] font-clashGrotesk`}
      >
        {children}
      </body>
    </html>
  );
}
