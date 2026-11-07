import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Truck,
  Wrench,
} from "lucide-react";
import {
  business,
  businessAddress,
  businessMapsUrl,
  locationLabel,
} from "@/lib/business";

const pageUrl = `${business.siteUrl}/contact`;

export const metadata: Metadata = {
  title: { absolute: `Contact ${business.name} | Cedar Rapids, IA` },
  description: `Call ${business.name} for 24/7 emergency towing or help with auto repair in Cedar Rapids, Iowa 52404. Find our shop at ${businessAddress}.`,
  keywords: [
    "contact towing Cedar Rapids IA",
    "24/7 towing phone Cedar Rapids",
    "auto repair contact Cedar Rapids",
    "towing 52404 phone number",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: business.name,
    title: `Contact ${business.name} in ${locationLabel}`,
    description: `Call for 24/7 emergency towing or auto repair information in Cedar Rapids, Iowa.`,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${business.name} in ${locationLabel}`,
    description: `Call for 24/7 emergency towing or auto repair information in Cedar Rapids, Iowa.`,
    images: ["/opengraph-image"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${business.name}`,
  url: pageUrl,
  mainEntity: {
    "@type": "AutomotiveBusiness",
    name: business.name,
    telephone: business.phone,
    email: "buuruktowingautoseervices@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    areaServed: { "@type": "City", name: business.city },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c"),
        }}
      />
      <header className="border-b border-white/10 bg-ink text-white">
        <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <BrandLogo />
          <a
            href={`tel:${business.phone}`}
            className="inline-flex min-h-11 items-center gap-2 bg-signal px-4 text-sm font-extrabold text-white hover:bg-[#bd2529]"
          >
            <Phone size={16} aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        </div>
      </header>

      <main>
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/55 hover:text-white"
            >
              <ArrowLeft size={14} /> Home
            </Link>
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f07575]">
              Contact · {locationLabel}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
              Call the local team. Get the next step.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              For roadside emergencies, towing, or questions about repair
              services, contact Buruk Towing & Auto Services in Cedar Rapids.
            </p>
          </div>
        </section>

        <section className="mx-auto grid min-w-0 max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:px-8">
          <div className="grid min-w-0 grid-cols-1 gap-px bg-black/10 sm:grid-cols-2">
            <div className="min-w-0 bg-white p-6 sm:p-7">
              <span className="flex h-11 w-11 items-center justify-center bg-signal text-white">
                <Truck size={20} aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.14em] text-signal">
                Emergency towing
              </p>
              <h2 className="mt-2 text-xl font-extrabold">
                Need help on the road?
              </h2>
              <p className="mt-3 text-sm leading-6 text-black/55">
                Call with your location, direction of travel, vehicle, and what
                happened. The team will confirm service availability and an
                arrival estimate.
              </p>
              <a
                href={`tel:${business.phone}`}
                className="mt-5 inline-flex min-h-11 items-center gap-2 bg-signal px-4 text-sm font-extrabold text-white hover:bg-[#bd2529]"
              >
                <Phone size={16} />
                {business.phoneDisplay}
              </a>
            </div>
            <div className="min-w-0 bg-white p-6 sm:p-7">
              <span className="flex h-11 w-11 items-center justify-center bg-signal text-white">
                <Wrench size={20} aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.14em] text-signal">
                Auto repair
              </p>
              <h2 className="mt-2 text-xl font-extrabold">
                Ask about shop services
              </h2>
              <p className="mt-3 text-sm leading-6 text-black/55">
                Call about brakes, diagnostics, tires, suspension, tune-ups, oil
                changes, and other vehicle concerns. The shop can discuss
                current service availability.
              </p>
              <a
                href={`tel:${business.phone}`}
                className="mt-5 inline-flex min-h-11 items-center gap-2 border border-black/15 px-4 text-sm font-extrabold text-ink hover:border-black/40"
              >
                <Phone size={16} />
                {business.phoneDisplay}
              </a>
            </div>
          </div>

          <aside className="h-fit min-w-0 border border-black/10 bg-mist p-6 sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
              Visit our shop
            </p>
            <h2 className="mt-3 text-2xl font-extrabold">
              Cedar Rapids, Iowa 52404
            </h2>
            <a
              href={businessMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-start gap-3 text-sm font-semibold leading-6 text-ink underline decoration-black/20 underline-offset-4 hover:text-signal"
            >
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-signal"
                aria-hidden="true"
              />
              {businessAddress}
            </a>
            <a
              href={businessMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 bg-ink px-4 text-sm font-bold text-white hover:bg-asphalt"
            >
              <MapPin size={16} aria-hidden="true" />
              Get directions <ArrowRight size={15} />
            </a>
            <a
              href="mailto:buuruktowingautoseervices@gmail.com"
              className="mt-6 flex items-start gap-3 border-t border-black/10 pt-5 text-sm font-semibold text-ink hover:text-signal"
            >
              <Mail
                size={17}
                className="mt-0.5 shrink-0 text-signal"
                aria-hidden="true"
              />
              buuruktowingautoseervices@gmail.com
            </a>
            <p className="mt-3 text-xs leading-5 text-black/50">
              Call the shop for current repair service availability and visit
              details.
            </p>
          </aside>
        </section>

        <section className="bg-mist px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
                Nearby coverage
              </p>
              <p className="mt-2 text-sm text-black/60">
                See local towing and repair coverage across Cedar Rapids and
                nearby communities.
              </p>
            </div>
            <Link
              href="/service-area/cedar-rapids-52404"
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-5 text-sm font-bold text-white hover:bg-asphalt"
            >
              Explore service areas <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
