"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { business } from "@/lib/business";

const navigationLinks = [
  { href: "/#services", label: "Services" },
  { href: "/service-area/cedar-rapids-52404", label: "Service area" },
  { href: "/blog", label: "Driver guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink text-white shadow-lg shadow-black/10">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <BrandLogo />
        <nav
          className="hidden items-center gap-5 text-sm font-semibold text-white/70 lg:flex xl:gap-7"
          aria-label="Main navigation"
        >
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${business.phone}`}
            className="inline-flex min-h-10 items-center justify-center gap-1.5 bg-signal px-2.5 text-[11px] font-extrabold text-white transition-colors hover:bg-[#bd2529] min-[360px]:gap-2 min-[360px]:px-3 min-[360px]:text-xs sm:min-h-11 sm:px-4 sm:text-sm"
          >
            <Phone size={15} aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white hover:bg-white/10 focus-visible:outline-white lg:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-site-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-ink px-4 py-3 lg:hidden sm:px-6"
        >
          <ul className="mx-auto grid max-w-7xl gap-1">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center border-b border-white/10 px-2 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
