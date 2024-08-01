import type { Metadata } from "next";
import {
  Outfit,
  Space_Grotesk,
  Maven_Pro,
  Saira_Stencil_One,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import PrivyProvider from "@/context/PrivyProvider";
import DbProvider from "@/context/DbProvider";

const outfit = Outfit({ subsets: ["latin"], variable: "--outfit" });
const sairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--sairaStencilOne",
});
const mavenPro = Maven_Pro({ subsets: ["latin"], variable: "--mavenPro" });

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
        className={`${spaceGrotesk.variable} ${sairaStencilOne.variable} ${mavenPro.variable} ${outfit.variable} ${maglony.variable} ${clashGrotesk.variable} bg-[#EAEAEA] font-clashGrotesk`}
      >
        <PrivyProvider>
          <DbProvider>{children}</DbProvider>
        </PrivyProvider>
      </body>
    </html>
  );
}
