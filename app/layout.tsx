import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";

// Body font — highly legible workhorse, full Slovak diacritics support.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Display font — geometric, modern, athletic; used for headings.
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Franek — Škola športu Senec",
  description: "Šport je naším poslaním. Tréningy pre deti a dospelých v Senci.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
