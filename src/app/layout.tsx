import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteKeywords } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fradysflooring.com"),
  title: {
    default: "Frady's Flooring Service | Flooring Sylva NC",
    template: "%s | Frady's Flooring Service",
  },
  description:
    "Family-owned flooring Sylva NC service for hardwood installation, LVP installation, laminate, and sanding refinishing across Western NC.",
  keywords: siteKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f8f5ef] text-[#1f2a33]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
