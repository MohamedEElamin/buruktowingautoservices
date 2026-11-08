import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowLeft, ArrowRight, MapPin, Phone, Wrench } from "lucide-react";
import { business } from "@/lib/business";
import { featuredServiceArea, serviceAreas } from "@/lib/service-areas";

type ServiceAreaPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceAreas.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) return {};

  const postalLabel = area.postalCodes.join(" / ");
  const title = {
    absolute: `Towing & Auto Repair in ${area.name} ${postalLabel} | Buruk Towing`,
  };
  const description = `${area.summary} Call ${business.phoneDisplay} for 24/7 dispatch in ${area.name}.`;
  const canonical = `/service-area/${area.slug}`;

  return {
    title,
    description,
    keywords: [
      `towing ${postalLabel}`,
      `auto repair ${postalLabel}`,
      `${area.name} roadside assistance`,
      `Cedar Rapids towing ${area.name}`,
    ],
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: business.name,
      title: title.absolute,
      description,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: title.absolute,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ServiceAreaPage({
  params,
}: ServiceAreaPageProps) {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) return null;

  const nearbyAreas = serviceAreas.filter((item) => item.slug !== area.slug);

  return (
    <>
      <SiteHeader />

      <main>
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Link
              href="/#service-area"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/55 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} /> Service area overview
            </Link>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f07575]">
                  Local dispatch area · ZIP {area.postalCodes.join(" / ")}
                </p>
                <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
                  Towing & Auto Repair in {area.name}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
                  {area.summary}
                </p>
              </div>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-signal px-6 font-extrabold text-white hover:bg-[#bd2529]"
              >
                <Phone size={18} /> Call {business.phoneDisplay}{" "}
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
              Local coverage
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em]">
              Roadside help starts with your exact location.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/60">
              If your vehicle is disabled, tell dispatch the nearest cross
              street, landmark, and vehicle details. Coverage and arrival
              estimates depend on your location and current availability, so our
              team confirms them directly.
            </p>
            <div className="mt-7 border-y border-black/10 py-5">
              <h3 className="font-extrabold">Local places and routes</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {area.localReferences.map((reference) => (
                  <li
                    key={reference}
                    className="flex items-start gap-2.5 text-sm text-black/65"
                  >
                    <MapPin size={16} className="mt-0.5 shrink-0 text-signal" />
                    {reference}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-7">
              <h3 className="font-extrabold">Services to request</h3>
              <div className="mt-4 grid gap-px bg-black/10 sm:grid-cols-2">
                {[
                  {
                    title: "24/7 towing",
                    text: "Call dispatch to confirm pickup coverage and an estimate.",
                    href: "/services/towing",
                  },
                  {
                    title: "Roadside assistance",
                    text: "Ask about jump starts, lockouts, fuel, and tire help.",
                    href: "/services/roadside-assistance",
                  },
                  {
                    title: "Brake repair",
                    text: "Call the shop to discuss a brake inspection.",
                    href: "/services/brake-repair",
                  },
                  {
                    title: "Diagnostics & maintenance",
                    text: "Call about a warning light or routine maintenance.",
                    href: "/services/engine-diagnostics",
                  },
                ].map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group flex min-h-28 flex-col bg-white p-4 hover:bg-[#fafafa]"
                  >
                    <span className="font-extrabold">{service.title}</span>
                    <span className="mt-2 flex-1 text-xs leading-5 text-black/55">
                      {service.text}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-signal">
                      Details{" "}
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit border border-black/10 bg-white p-5 shadow-lift sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center bg-mist text-signal">
              <Wrench size={20} />
            </div>
            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
              Need help now?
            </p>
            <h2 className="mt-2 text-2xl font-extrabold">
              Talk to local dispatch.
            </h2>
            <p className="mt-3 text-sm leading-6 text-black/55">
              Share your pickup point and what happened. The team will confirm
              service availability and the current estimate.
            </p>
            <a
              href={`tel:${business.phone}`}
              className="mt-6 flex min-h-12 items-center justify-center gap-2 bg-signal px-4 text-sm font-extrabold text-white hover:bg-[#bd2529]"
            >
              <Phone size={17} /> Call {business.phoneDisplay}
            </a>
            <p className="mt-4 text-xs leading-5 text-black/45">
              Call the shop to discuss repair and maintenance availability.
            </p>
          </aside>
        </section>

        <section className="bg-mist px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
                  Nearby service areas
                </p>
                <h2 className="mt-2 text-2xl font-extrabold">
                  More Cedar Rapids-area coverage
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-6 text-black/55">
                Coverage varies by location. Call to confirm towing availability
                before relying on a dispatch estimate.
              </p>
            </div>
            <div className="mt-6 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {nearbyAreas.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/service-area/${nearby.slug}`}
                  className="group flex min-h-28 flex-col bg-white p-4 hover:bg-[#fafafa]"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-black/40">
                    ZIP {nearby.postalCodes.join(" / ")}
                  </span>
                  <span className="mt-2 flex-1 font-extrabold">
                    {nearby.name}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-signal">
                    View coverage{" "}
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
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
