import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
import localFont from "next/font/local";
import "./global.scss";
import { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";

const officeCodePro = localFont({ src: "../fonts/OfficeCodeProD-Regular.otf" });

export const metadata: Metadata = {
  title: "scallaway.dev",
  description: "An archive of my online ramblings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={officeCodePro.className}>
      <body>
        <SpeedInsights />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
