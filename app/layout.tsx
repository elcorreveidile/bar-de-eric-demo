import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { CarritoProvider } from "@/context/CarritoContext";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "El Bar de Eric — Donde la música se hace tapa",
    template: "%s | El Bar de Eric",
  },
  description:
    "Bar museo del rock en Granada. Tapas con nombres musicales, 170+ fotos históricas, eventos en vivo. Fundado por Eric Jiménez, batería de Los Planetas y Lagartija Nick.",
  keywords: [
    "bar",
    "granada",
    "rock",
    "museo",
    "tapas",
    "eric jiménez",
    "los planetas",
    "lagartija nick",
  ],
  // PLACEHOLDER: imagen Open Graph temporal — sustituir por imagen real en preproducción
  openGraph: {
    title: "El Bar de Eric — Donde la música se hace tapa",
    description:
      "Bar museo del rock en Granada. Tapas con nombres musicales, 170+ fotos históricas y eventos en vivo.",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/images/og/og-image.svg", width: 1200, height: 630, alt: "El Bar de Eric" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-negro text-white font-body">
        <CarritoProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CarritoProvider>
      </body>
    </html>
  );
}
