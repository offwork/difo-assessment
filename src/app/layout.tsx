import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";
import Topnav from "@/components/layout/difo-topnav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const karla = Karla({ subsets: ["latin"], variable: "--font-karla", display: "swap" });

export const metadata: Metadata = {
  title: "Difo Launchpad is a new generation hybrid launch ramp",
  description: "Difo Launchpad is a new generation hybrid launch ramp that brings together the valuable features of both centralized IEO platforms and decentralized IDO platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth focus:scroll-auto">
      <body suppressHydrationWarning className={`${inter.variable} ${karla.variable} antialiased bg-black w-full`}>
        <Topnav />
        <main className="relative w-full z-0 pt-[92px] lg:pt-24">{children}</main>
      </body>
    </html>
  );
}
