import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { business } from "@/lib/business";
import { winterGuide } from "@/lib/blog";

const articleUrl = `${business.siteUrl}/blog/${winterGuide.slug}`;

export const metadata: Metadata = {
  title: {
    absolute: "Cedar Rapids Winter Towing Guide | Buruk Towing",
  },
  description: winterGuide.description,
  keywords: [
    "Cedar Rapids towing",
    "winter auto repair 52404",
    "roadside assistance I-380",
    "brake repair Cedar Rapids",
    "emergency towing Highway 30",
  ],
  alternates: { canonical: `/blog/${winterGuide.slug}` },
  openGraph: {
    type: "article",
    url: articleUrl,
    siteName: business.name,
    title: winterGuide.title,
    description: winterGuide.description,
    publishedTime: `${winterGuide.publishedAt}T09:00:00-06:00`,
    authors: [business.name],
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: winterGuide.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: winterGuide.title,
    description: winterGuide.description,
    images: ["/opengraph-image"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: winterGuide.title,
  description: winterGuide.description,
  image: `${business.siteUrl}/opengraph-image`,
  author: {
    "@type": "Organization",
    name: business.name,
    url: business.siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: business.name,
    url: business.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${business.siteUrl}/icon.svg`,
    },
  },
  datePublished: winterGuide.publishedAt,
  dateModified: winterGuide.publishedAt,
  mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
  contentLocation: {
    "@type": "Place",
    name: "Cedar Rapids, Iowa",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: "52404",
      addressCountry: business.country,
    },
  },
};

const coverageLinks = [
  {
    href: "/service-area/cedar-rapids-52404",
    label: "Southwest Cedar Rapids · 52404",
  },
  { href: "/service-area/fairfax-ia", label: "Fairfax, Iowa" },
  { href: "/service-area/ely-ia", label: "Ely, Iowa" },
  {
    href: "/service-area/shueyville-swisher-ia",
    label: "Shueyville & Swisher",
  },
];

export default function WinterTowingGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <main>
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-5xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/50"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog" className="hover:text-white">
                Driver guides
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/80">Winter breakdown guide</span>
            </nav>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f07575]">
              Local driver guide · Linn County · ZIP 52404
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              {winterGuide.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/65">
              Winter breakdown safety, cold-weather warning signs, and practical
              preparation for Cedar Rapids drivers on I-380, US 30, and nearby
              roads.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-white/50">
              <span>Published November 7, 2026</span>
              <span aria-hidden="true">·</span>
              <span>{business.name}</span>
              <span aria-hidden="true">·</span>
              <span>{winterGuide.readMinutes} min read</span>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 border-l-4 border-signal bg-mist p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="font-extrabold text-ink">Stranded right now?</p>
              <p className="mt-1 text-sm leading-6 text-black/60">
                Call dispatch with your road, direction of travel, and nearest
                exit or cross street.
              </p>
            </div>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-signal px-5 text-sm font-extrabold text-white hover:bg-[#bd2529]"
            >
              <Phone size={16} /> Call {business.phoneDisplay}
            </a>
          </div>

          <div className="max-w-3xl space-y-6 text-[15px] leading-7 text-black/70">
            <p className="text-lg font-semibold leading-8 text-ink">
              Winter weather around Cedar Rapids can make a routine commute more
              demanding. If your vehicle stops on I-380, US 30, or a nearby
              road, focus on reaching a safe place and clearly sharing your
              location before thinking about repairs.
            </p>

            <section aria-labelledby="breakdown-safety">
              <h2
                id="breakdown-safety"
                className="mb-3 mt-10 border-l-4 border-signal pl-4 text-2xl font-extrabold leading-tight text-ink"
              >
                1. What to do when your vehicle breaks down
              </h2>
              <ul className="list-disc space-y-3 pl-6 marker:text-signal">
                <li>
                  <strong className="text-ink">
                    Move out of traffic if you can do so safely.
                  </strong>{" "}
                  Use an exit or a wide, safe shoulder; do not stop in a travel
                  lane to inspect the vehicle.
                </li>
                <li>
                  <strong className="text-ink">Turn on hazard lights.</strong>{" "}
                  Make the vehicle easier for other drivers to see, especially
                  in snow, low visibility, or darkness.
                </li>
                <li>
                  <strong className="text-ink">
                    Avoid roadside repairs beside moving traffic.
                  </strong>{" "}
                  Stay in a safe location. If leaving the vehicle would put you
                  closer to traffic, remain inside with your seat belt on while
                  you call for help.
                </li>
                <li>
                  <strong className="text-ink">
                    Call 911 for immediate danger or injuries.
                  </strong>{" "}
                  For a disabled vehicle, contact dispatch and give the highway,
                  direction, nearest exit or mile marker, and vehicle
                  description.
                </li>
              </ul>
            </section>

            <section aria-labelledby="winter-warning-signs">
              <h2
                id="winter-warning-signs"
                className="mb-3 mt-10 border-l-4 border-signal pl-4 text-2xl font-extrabold leading-tight text-ink"
              >
                2. Cold-weather warning signs to take seriously
              </h2>
              <h3 className="mt-6 text-lg font-extrabold text-ink">
                Slow starts or clicking
              </h3>
              <p>
                Cold conditions can make a weak battery show its age. If the
                engine cranks slowly, you hear repeated clicking, or warning
                lights appear, arrange a check rather than repeatedly attempting
                to start it. Do not try to jump-start a visibly damaged or
                frozen battery; follow your vehicle manual or get professional
                help.
              </p>
              <h3 className="mt-6 text-lg font-extrabold text-ink">
                Low tire pressure
              </h3>
              <p>
                Temperature changes can affect tire pressure. Check it when
                tires are cold and use the pressure listed on the vehicle’s
                door-jamb placard or owner’s manual, not the maximum printed on
                the tire sidewall. If a tire is damaged or losing air quickly,
                avoid driving on it.
              </p>
              <h3 className="mt-6 text-lg font-extrabold text-ink">
                Brake noise or a changed pedal
              </h3>
              <p>
                Grinding, persistent squealing, pulling, a soft pedal, or a
                brake warning light deserves attention. If braking feels unsafe,
                do not continue driving; arrange assistance and request an
                inspection.
              </p>
            </section>

            <section aria-labelledby="winter-preparation">
              <h2
                id="winter-preparation"
                className="mb-3 mt-10 border-l-4 border-signal pl-4 text-2xl font-extrabold leading-tight text-ink"
              >
                3. A short winter-prep checklist
              </h2>
              <ul className="list-disc space-y-3 pl-6 marker:text-signal">
                <li>
                  Check battery condition, tire pressure and tread, exterior
                  lights, wipers, and washer fluid.
                </li>
                <li>
                  Keep a warm layer, gloves, a flashlight, phone charger, and
                  basic first-aid supplies in the vehicle.
                </li>
                <li>
                  Before a longer drive, check road and weather conditions and
                  make sure your phone is charged.
                </li>
                <li>
                  Schedule an inspection if you notice a new warning light,
                  unusual noise, or change in handling or braking.
                </li>
              </ul>
            </section>

            <section aria-labelledby="cedar-rapids-help">
              <h2
                id="cedar-rapids-help"
                className="mb-3 mt-10 border-l-4 border-signal pl-4 text-2xl font-extrabold leading-tight text-ink"
              >
                Local towing and repair around Cedar Rapids
              </h2>
              <p>
                Buruk Towing & Auto Services provides 24/7 emergency dispatch
                and scheduled auto repair in the Cedar Rapids area. Coverage and
                arrival estimates depend on your location and current
                availability; call to confirm before relying on a dispatch
                estimate. Call the shop to discuss repair and maintenance
                availability.
              </p>
              <div className="mt-5 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
                {coverageLinks.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="flex min-h-14 items-center justify-between gap-3 bg-white px-4 py-3 text-sm font-bold text-ink hover:text-signal"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={15} className="text-signal" />
                      {area.label}
                    </span>
                    <ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            </section>

            <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-extrabold text-ink">Need repair help?</p>
                <p className="mt-1 text-sm text-black/55">
                  Call to discuss brake, diagnostic, or maintenance service.
                </p>
              </div>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-signal px-5 text-sm font-bold text-white hover:bg-[#bd2529]"
              >
                <Phone size={15} /> Call {business.phoneDisplay}
              </a>
            </div>

            <p className="mt-8 flex items-start gap-2 border-t border-black/10 pt-5 text-xs leading-5 text-black/45">
              <ShieldCheck size={15} className="mt-0.5 shrink-0 text-signal" />{" "}
              This guide is general information, not a substitute for emergency
              services or your vehicle owner’s manual. Conditions and service
              availability vary; call dispatch for current coverage.
            </p>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
