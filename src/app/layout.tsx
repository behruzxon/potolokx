import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin", "cyrillic", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Natijnoy patalok Qashqadaryo bo'ylab | Natijnoy Patalok",
    template: "%s | Natijnoy Patalok",
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    siteName: site.name,
    url: site.url,
    title: "Natijnoy patalok Qashqadaryo bo'ylab",
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={inter.variable}>
      <body className="font-sans antialiased text-ink-900 bg-white selection:bg-brand-100">
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactBar />
      </body>
    </html>
  );
}
