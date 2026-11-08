import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import {
  business,
  businessAddress,
  businessMapsUrl,
  locationLabel,
} from "@/lib/business";
import { services } from "@/lib/services";

const pageUrl = `${business.siteUrl}/about`;

export const metadata: Metadata = {
  title: { absolute: `About ${business.name} | Cedar Rapids, Iowa` },
  description: `${business.name} provides 24/7 emergency towing and auto repair services in Cedar Rapids, Iowa. Learn about our services and local service area.`,
  keywords: [
    "about towing company Cedar Rapids IA",
    "Cedar Rapids auto repair shop",
    "local towing service 52404",
    "Buruk Towing Cedar Rapids Iowa",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: business.name,
    title: `About ${business.name} in Cedar Rapids, Iowa`,
    description:
      "Local emergency towing and auto repair services in Cedar Rapids, Iowa.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${business.name} in Cedar Rapids, Iowa`,
    description:
      "Local emergency towing and auto repair services in Cedar Rapids, Iowa.",
    images: ["/opengraph-image"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${business.name}`,
  url: pageUrl,
  mainEntity: {
    "@type": ["AutomotiveBusiness", "AutoRepair", "TowingService"],
    name: business.name,
    url: business.siteUrl,
    telephone: business.phone,
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

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
              About · {locationLabel}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
              Roadside help and auto care, rooted in Cedar Rapids.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              {business.name} serves drivers in Cedar Rapids with 24/7 emergency
              towing dispatch and a range of auto repair and maintenance
              services.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.7fr] lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
              What we do
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em]">
              One local point of contact for the road and the shop.
            </h2>
            <p className="mt-4 text-sm leading-7 text-black/60">
              When a vehicle problem interrupts your day, call us to discuss the
              help you need. Emergency towing and roadside requests go through
              dispatch; repair questions can be discussed directly with the shop
              by phone.
            </p>
            <div className="mt-7 grid gap-px bg-black/10 sm:grid-cols-2">
              <div className="bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center bg-signal text-white">
                  <Truck size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-extrabold">Emergency towing</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  24/7 dispatch for towing and roadside assistance requests.
                  Call to share your location and confirm current coverage.
                </p>
              </div>
              <div className="bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center bg-signal text-white">
                  <Wrench size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-extrabold">Auto repair</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  Repair and maintenance services for a range of vehicle needs.
                  Call the shop to discuss service details and availability.
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit border border-black/10 bg-mist p-6 sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center bg-signal text-white">
              <MapPin size={20} aria-hidden="true" />
            </div>
            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
              Based in Cedar Rapids
            </p>
            <h2 className="mt-2 text-xl font-extrabold">
              Local service in Linn County and nearby communities.
            </h2>
            <p className="mt-3 text-sm leading-6 text-black/55">
              Our shop is at {businessAddress}. Towing coverage depends on your
              pickup location and current availability, so call dispatch to
              confirm before relying on an estimate.
            </p>
            <a
              href={businessMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 border border-black/15 px-4 text-sm font-bold text-ink hover:border-black/40"
            >
              <MapPin size={15} />
              View shop directions
            </a>
            <p className="mt-6 flex items-start gap-2 border-t border-black/10 pt-5 text-sm font-semibold">
              <ShieldCheck size={17} className="mt-0.5 shrink-0 text-signal" />
              Emergency dispatch is available 24 hours a day, every day.
            </p>
          </aside>
        </section>

        <section className="bg-mist px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
                  Our services
                </p>
                <h2 className="mt-2 text-2xl font-extrabold">
                  Ways we can help
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-6 text-black/55">
                Call to discuss vehicle-specific service needs and current
                availability.
              </p>
            </div>
            <div className="mt-6 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex min-h-24 items-center justify-between gap-4 bg-white p-4 hover:bg-[#fafafa]"
                >
                  <span>
                    <span className="block font-extrabold">{service.name}</span>
                    <span className="mt-1 block text-xs text-black/50">
                      {service.shortName} · {locationLabel}
                    </span>
                  </span>
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-signal transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
