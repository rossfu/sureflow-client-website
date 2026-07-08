import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { site } from "@/config/site";
import { localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { EmergencyStrip } from "@/components/layout/EmergencyStrip";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — 24/7 Water, Fire & Mold Restoration in ${site.address.city}, ${site.address.state}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body>
        {/* Keyboard users get straight to content */}
        <a
          href="#main"
          className="sr-only z-50 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-lg focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema()} />
        <EmergencyStrip />
        <Header />
        {/* pb on mobile so the sticky call bar never covers content */}
        <main id="main" className="pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
