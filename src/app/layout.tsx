import React from "react";
import localFont from "next/font/local";
import "./global.scss";
import Header from "./components/header";
import Footer from "./components/footer";

const officeCodePro = localFont({ src: "../fonts/OfficeCodeProD-Regular.otf" });

export const metadata = {
  title: "scallaway.dev",
  description: "Some online ramblings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={officeCodePro.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
