import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LocalSchema } from "@/components/SEO/LocalSchema";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { business, coordinatesConfigured, locationLabel } from "@/lib/business";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `24/7 Towing & Auto Repair in ${locationLabel} | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description: `24/7 emergency towing and trusted auto repair in ${locationLabel}. Call for roadside assistance, brake repair, diagnostics, and maintenance.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: business.name,
    title: `24/7 Towing & Auto Repair in ${locationLabel}`,
    description: `Emergency dispatch and scheduled auto repair in ${locationLabel}.`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${business.name} service truck`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `24/7 Towing & Auto Repair in ${locationLabel}`,
    description: `Emergency dispatch and scheduled auto repair in ${locationLabel}.`,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1c2023",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const placeConfigured = !locationLabel.includes("[");

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <meta
          name="geo.region"
          content={
            placeConfigured ? `${business.country}-${business.regionCode}` : ""
          }
        />
        <meta
          name="geo.placename"
          content={placeConfigured ? locationLabel : ""}
        />
        {coordinatesConfigured && (
          <>
            <meta
              name="geo.position"
              content={`${business.latitude};${business.longitude}`}
            />
            <meta
              name="ICBM"
              content={`${business.latitude}, ${business.longitude}`}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <LocalSchema />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
