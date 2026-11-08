import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BatteryCharging,
  CarFront,
  CircleGauge,
  CircleDot,
  Disc3,
  MapPin,
  Phone,
  Settings2,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { ServiceArea } from "@/components/ServiceArea";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { business, locationLabel } from "@/lib/business";
import { services } from "@/lib/services";

const serviceIcons = {
  tow: Truck,
  roadside: BatteryCharging,
  brakes: Disc3,
  transmission: Settings2,
  diagnostics: CircleGauge,
  maintenance: BadgeCheck,
  tires: CircleDot,
  suspension: CarFront,
  "tune-up": Wrench,
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-ink text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, transparent 49.7%, #fff 50%, transparent 50.3%), linear-gradient(45deg, transparent 49.7%, #fff 50%, transparent 50.3%)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/[0.04] px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white/80">
                <span className="h-2 w-2 rounded-full bg-[#f07575] shadow-[0_0_0_4px_rgba(217,47,50,0.2)]" />{" "}
                Local team · 24/7 emergency dispatch
              </div>
              <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Vehicle trouble?{" "}
                <span className="text-[#f07575]">We’re on your side.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                Emergency towing when you need help now, plus straightforward
                auto repair and maintenance from a local team. Call us to
                discuss service or confirm availability.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${business.phone}`}
                  className="group flex min-h-[60px] items-center justify-between gap-3 bg-signal px-5 py-4 font-extrabold text-white transition-colors hover:bg-[#bd2529] sm:min-w-[280px]"
                >
                  <span className="flex items-center gap-3">
                    <Phone size={20} aria-hidden="true" />
                    <span>
                      <span className="block text-sm">
                        I need a tow RIGHT NOW
                      </span>
                      <span className="mt-1 block text-xs font-semibold text-white/75">
                        Call emergency dispatch
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={19}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#services"
                  className="group inline-flex min-h-[60px] items-center justify-between gap-4 border border-white/20 bg-white/[0.04] px-5 py-4 text-sm font-extrabold text-white transition-colors hover:bg-white/10"
                >
                  Explore towing & repair services
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-white/55">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-[#f07575]" /> Local
                  service team
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={15} className="text-[#f07575]" /> Serving{" "}
                  {locationLabel}
                </span>
              </div>
            </div>
          </div>
          <a
            href="#services"
            className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45 lg:flex"
          >
            Explore services <ArrowDown size={13} aria-hidden="true" />
          </a>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-black/10 pb-7 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
                One call. One local shop.
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                Help for the whole road ahead.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-black/55">
              From a roadside emergency to your next maintenance visit, start
              with the service that fits.
            </p>
          </div>
          <div className="mt-8 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex min-h-[220px] flex-col bg-white p-6 transition-colors hover:bg-[#fafafa] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center bg-signal text-white">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold tabular-nums text-black/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-black/55">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-signal">
                    {service.urgent ? "Call dispatch" : "View service details"}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="mt-4 text-xs leading-5 text-black/45">
            Service availability can vary by vehicle and location. Call to
            confirm towing or roadside coverage.
          </p>
        </section>

        <section
          id="service-area"
          className="scroll-mt-20 bg-ink px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <ServiceArea />
          </div>
        </section>

        <section className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
              Need help on the road?
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em]">
              Talk to a real person, any time.
            </h2>
            <p className="mt-2 text-sm text-black/55">
              Emergency towing dispatch is available around the clock in our
              service area.
            </p>
          </div>
          <a
            href={`tel:${business.phone}`}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-signal px-6 text-sm font-extrabold text-white transition-colors hover:bg-[#bd2529]"
          >
            <Phone size={17} aria-hidden="true" /> Call {business.phoneDisplay}
          </a>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
