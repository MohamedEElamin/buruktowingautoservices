import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { business } from "@/lib/business";

export function ServiceArea() {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-signal">
        Close by, ready to roll
      </p>
      <h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl">
        Local roads. Real people. Help that comes through.
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
        Our dispatch team covers {business.city} and nearby neighborhoods. Share
        your location when you call and we’ll confirm availability and an
        arrival estimate.
      </p>
      <div className="mt-7 flex flex-wrap gap-2">
        {business.neighborhoods.map((area) => (
          <span
            key={area}
            className="inline-flex items-center gap-1.5 border border-white/15 px-3 py-2 text-xs font-semibold text-white/85"
          >
            <MapPin size={13} aria-hidden="true" />
            {area}
          </span>
        ))}
      </div>
      <Link
        href="/service-area/cedar-rapids-52404"
        className="mt-6 inline-flex min-h-11 items-center gap-2 border border-white/20 px-4 text-sm font-bold text-white transition-colors hover:border-white/50"
      >
        Explore all coverage areas <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}
