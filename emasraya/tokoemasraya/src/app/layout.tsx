import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toko Emas Mulia Raya | Pusat Perhiasan Emas & Logam Mulia Banda Aceh",
  description: "Melayani Jual Beli Emas, Logam Mulia Antam, Mahar Nikah Khas Aceh, dan Layanan Tindik Telinga Steril Sejak Pasar Aceh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={clsx(
          playfair.variable,
          jakarta.variable,
          "antialiased font-jakarta"
        )}
      >
        {children}
      </body>
    </html>
  );
}
