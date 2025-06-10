import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./global.scss";
import type { Metadata } from "next";
import Footer from "./components/footer.tsx";
import { Header } from "./components/header.tsx";

const officeCodePro = localFont({ src: "../fonts/OfficeCodeProD-Regular.otf" });

export const metadata: Metadata = {
  title: "scallaway.dev",
  description: "An archive of my online ramblings",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={officeCodePro.className}>
      <body>
        <Analytics />
        <SpeedInsights />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
