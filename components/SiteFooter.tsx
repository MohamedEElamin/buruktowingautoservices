import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { CurrentYear } from "@/components/CurrentYear";
import {
  business,
  businessAddress,
  businessMapsUrl,
  locationLabel,
} from "@/lib/business";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/service-area/cedar-rapids-52404", label: "Service areas" },
  { href: "/blog", label: "Driver guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const shopHours = [
  { day: "Monday", time: "9:00 AM - 5:30 PM" },
  { day: "Tuesday", time: "9:00 AM - 5:30 PM" },
  { day: "Wednesday", time: "9:00 AM - 5:30 PM" },
  { day: "Thursday", time: "9:00 AM - 5:30 PM" },
  { day: "Friday", time: "9:00 AM - 5:30 PM" },
  { day: "Saturday", time: "9:00 AM - 5:30 PM" },
  { day: "Sunday", time: "10:00 AM - 3:30 PM" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.2fr_0.8fr_1.2fr_1.3fr] lg:px-8">
        <div>
          <BrandLogo placement="footer" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
            24/7 emergency towing and auto repair for drivers in Cedar Rapids
            and nearby communities.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#f07575]">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/75">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-hours-heading">
          <h2
            id="footer-hours-heading"
            className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#f07575]"
          >
            Shop hours
          </h2>
          <dl className="mt-4 space-y-2 text-xs text-white/75">
            {shopHours.map(({ day, time }) => (
              <div key={day} className="grid grid-cols-[5.5rem_1fr] gap-2">
                <dt className="font-semibold text-white">{day}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
        </section>

        <address className="not-italic">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#f07575]">
            Contact
          </h2>
          <a
            href={`tel:${business.phone}`}
            className="mt-4 flex items-center gap-2 text-sm font-bold text-white hover:text-[#f07575]"
          >
            <Phone size={15} aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <a
            href="mailto:buuruktowingautoseervices@gmail.com"
            className="mt-3 flex items-start gap-2 text-sm leading-5 text-white/75 hover:text-white"
          >
            <Mail size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span className="break-all">
              buuruktowingautoseervices@gmail.com
            </span>
          </a>
          <a
            href={businessMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-start gap-2 text-sm leading-5 text-white/75 hover:text-white"
          >
            <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>{businessAddress}</span>
          </a>
          <p className="mt-3 text-xs text-white/45">Serving {locationLabel}</p>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>
            © <CurrentYear /> {business.name}. All rights reserved.
          </span>
          <span>Emergency towing dispatch available 24/7.</span>
        </div>
      </div>
    </footer>
  );
}
