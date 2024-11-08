import type { Metadata } from "next";
import { Montserrat, } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@components/lib/GoogleAnalytics";


const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ['100', "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} `}>
      <head><link rel="icon" href="/logo.svg" sizes="any" /></head>
      <GoogleAnalytics/>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}