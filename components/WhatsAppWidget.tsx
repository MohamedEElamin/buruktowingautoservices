"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { business, locationLabel } from "@/lib/business";

type WhatsAppWidgetProps = {
  phone?: string;
  businessName?: string;
  location?: string;
  towingMessage?: string;
  repairMessage?: string;
};

export function WhatsAppWidget({
  phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || business.phone,
  businessName = business.name,
  location = locationLabel,
  towingMessage,
  repairMessage,
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const phoneDigits = phone.replace(/\D/g, "");
  const towingText =
    towingMessage ||
    `Hi ${businessName}, I need emergency roadside assistance or towing near ${location}.`;
  const repairText =
    repairMessage ||
    `Hi ${businessName}, I'd like to ask about auto repair service in ${location}.`;
  const whatsappUrl = (message: string) =>
    `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 z-[100] flex flex-col items-end gap-3 sm:right-6">
      {isOpen && (
        <section
          id="whatsapp-chat-options"
          aria-label="Choose a WhatsApp message"
          className="w-[min(20rem,calc(100vw-2rem))] border border-black/10 bg-white p-4 text-ink shadow-lift"
        >
          <div className="mb-3 flex items-start justify-between gap-3 border-b border-black/10 pb-3">
            <div>
              <h2 className="text-sm font-extrabold">Message our team</h2>
              <p className="mt-1 text-xs text-black/55">
                Choose what you need help with.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp message options"
              className="flex h-8 w-8 shrink-0 items-center justify-center text-black/55 hover:bg-mist hover:text-ink"
            >
              <X size={17} aria-hidden="true" />
            </button>
          </div>
          <div className="grid gap-2">
            <a
              href={whatsappUrl(towingText)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex min-h-11 items-center gap-2 bg-[#25D366] px-3 text-sm font-bold text-[#103b22] hover:bg-[#1fc45d]"
            >
              <Phone size={16} aria-hidden="true" /> Emergency towing / roadside
            </a>
            <a
              href={whatsappUrl(repairText)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex min-h-11 items-center gap-2 border border-black/15 px-3 text-sm font-bold text-ink hover:border-black/35"
            >
              <MessageCircle size={16} aria-hidden="true" /> Auto repair &
              maintenance
            </a>
          </div>
        </section>
      )}

      {!isOpen && (
        <span className="hidden border border-black/10 bg-white px-3 py-2 text-xs font-bold text-ink shadow-md sm:block">
          Chat with dispatch 24/7!
        </span>
      )}
      <button
        type="button"
        aria-label={
          isOpen
            ? "Close WhatsApp chat options"
            : "Chat with dispatch on WhatsApp"
        }
        aria-expanded={isOpen}
        aria-controls="whatsapp-chat-options"
        onClick={() => setIsOpen((open) => !open)}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-white sm:h-14 sm:w-14"
      >
        {isOpen ? (
          <X size={22} className="sm:h-[25px] sm:w-[25px]" aria-hidden="true" />
        ) : (
          <>
            <MessageCircle
              size={25}
              className="sm:h-[29px] sm:w-[29px]"
              strokeWidth={2.2}
              aria-hidden="true"
            />
            <Phone
              size={13}
              strokeWidth={3}
              aria-hidden="true"
              className="absolute left-[18px] top-[18px] sm:left-[22px] sm:top-[22px]"
            />
            <span
              className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-[#d92f32] sm:h-3.5 sm:w-3.5"
              aria-hidden="true"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-[#d92f32] opacity-60 motion-reduce:animate-none" />
            </span>
          </>
        )}
      </button>
    </div>
  );
}
