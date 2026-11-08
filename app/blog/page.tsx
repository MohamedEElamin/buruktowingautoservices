import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { business } from "@/lib/business";
import { winterGuide } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Local Driver Guides | Towing & Auto Repair",
  description: `Roadside safety and vehicle maintenance guides from ${business.name} in Cedar Rapids, Iowa.`,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    siteName: business.name,
    title: "Local Driver Guides | Buruk Towing & Auto Services",
    description: `Roadside safety and vehicle maintenance guides for Cedar Rapids, Iowa drivers.`,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Driver Guides | Buruk Towing & Auto Services",
    description:
      "Roadside safety and vehicle maintenance guides for Cedar Rapids drivers.",
    images: ["/opengraph-image"],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f07575]">
              <BookOpen size={15} /> Driver guides · Cedar Rapids, Iowa
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
              Useful notes for the road ahead.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Roadside safety, seasonal maintenance, and practical answers for
              drivers around Cedar Rapids.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
            Latest guide
          </p>
          <Link
            href={`/blog/${winterGuide.slug}`}
            className="group mt-4 grid gap-6 border-y border-black/10 py-7 sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <div>
              <p className="text-xs font-semibold text-black/45">
                November 7, 2026 · {winterGuide.readMinutes} min read
              </p>
              <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight tracking-[-0.03em] sm:text-3xl">
                {winterGuide.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-black/55">
                {winterGuide.excerpt}
              </p>
            </div>
            <span className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-extrabold text-signal sm:self-center">
              Read guide{" "}
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
