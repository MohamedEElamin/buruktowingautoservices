import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { business, locationLabel } from "@/lib/business";
import { services } from "@/lib/services";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  const title = `${service.title} in ${locationLabel}`;
  const description = `${service.description} Serving ${locationLabel}. Contact ${business.name} for availability and next steps.`;
  const path = `/services/${service.slug}`;

  return {
    title,
    description,
    keywords: [
      `${service.shortName} in ${business.city}`,
      `${service.shortName} near me`,
      `${service.shortName} ${business.region}`,
    ],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      siteName: business.name,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const isEmergency = service.urgent;

  return (
    <>
      <SiteHeader />

      <main>
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/55 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} /> All services
            </Link>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f07575]">
                  {service.shortName} · {locationLabel}
                </p>
                <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
                  {service.title} in {business.city}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
                  {service.description}
                </p>
              </div>
              {isEmergency ? (
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex min-h-14 items-center justify-center gap-3 bg-signal px-6 font-extrabold text-white hover:bg-[#bd2529]"
                >
                  <Phone size={19} /> Call emergency dispatch{" "}
                  <ArrowRight size={17} />
                </a>
              ) : (
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex min-h-14 items-center justify-center gap-3 bg-signal px-6 font-extrabold text-white hover:bg-[#bd2529]"
                >
                  <Phone size={18} /> Call to discuss this service
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.82fr] lg:px-8">
          <div>
            <div className="flex h-12 w-12 items-center justify-center bg-signal text-white">
              {isEmergency ? <Truck size={23} /> : <ShieldCheck size={23} />}
            </div>
            <h2 className="mt-6 text-2xl font-extrabold tracking-[-0.03em]">
              Local {service.shortName.toLowerCase()} service, without the
              guesswork.
            </h2>
            <p className="mt-4 text-sm leading-7 text-black/60">
              {service.detail}
            </p>
            <div className="mt-7 space-y-3 border-y border-black/10 py-5">
              {(isEmergency
                ? [
                    "Dispatch available 24 hours a day",
                    "Share your location and vehicle details",
                    "Confirm coverage and estimate with the team",
                  ]
                : [
                    "Tell us what your vehicle needs",
                    "Call the shop to discuss availability",
                    "Share your vehicle details and concerns",
                  ]
              ).map((step) => (
                <p
                  key={step}
                  className="flex items-start gap-3 text-sm font-semibold"
                >
                  <Check size={17} className="mt-0.5 shrink-0 text-signal" />
                  {step}
                </p>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-black/55">
              <Clock3 size={16} className="text-signal" />{" "}
              {isEmergency
                ? "Emergency dispatch: 24/7"
                : "Call for repair and maintenance availability"}
            </div>
            <p className="mt-4 text-xs leading-5 text-black/45">
              Serving {business.city}, {business.region} and nearby areas.
              Availability depends on vehicle, service, and location.
            </p>
            <div className="mt-8 border-t border-black/10 pt-6">
              <h3 className="font-extrabold">More ways we can help</h3>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                {services
                  .filter((item) => item.slug !== service.slug)
                  .map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-asphalt underline decoration-black/20 underline-offset-4 hover:text-signal"
                    >
                      {item.shortName}
                      <ArrowRight size={13} />
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          <aside className="h-fit border border-black/10 bg-white p-5 shadow-lift sm:p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
              {isEmergency ? "Get help now" : "Need repair information?"}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold">
              {isEmergency ? "Talk to dispatch" : "Talk to the shop"}
            </h2>
            <p className="mt-3 text-sm leading-6 text-black/55">
              {isEmergency
                ? "Call with your location and a quick description of what happened. We’ll confirm whether service is available in your area."
                : "Call with your vehicle details and service needs. The team can discuss repair information and current availability."}
            </p>
            <a
              href={`tel:${business.phone}`}
              className="mt-6 flex min-h-14 items-center justify-center gap-2 bg-signal px-5 font-extrabold text-white hover:bg-[#bd2529]"
            >
              <Phone size={18} /> Call {business.phoneDisplay}
            </a>
            {isEmergency && (
              <p className="mt-4 text-xs text-black/45">
                For roadside safety, move away from traffic if you can do so
                safely.
              </p>
            )}
          </aside>
        </section>

        <section className="bg-mist px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
                Need a different service?
              </p>
              <p className="mt-2 text-sm text-black/60">
                Explore towing, roadside assistance, diagnostics, brakes, and
                maintenance.
              </p>
            </div>
            <Link
              href="/#services"
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-5 text-sm font-bold text-white hover:bg-asphalt"
            >
              Browse all services <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
