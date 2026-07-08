"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/config/site";

interface MobileMenuProps {
  links: Array<{ label: string; href: string }>;
}

/**
 * Full-screen sheet menu: big tap targets, phone number first,
 * ESC/backdrop close, body scroll lock, focus restored on close.
 */
export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      openRef.current?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={openRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-slate-300 text-brand-900 transition-colors duration-200 hover:bg-slate-50"
      >
        <Menu aria-hidden="true" className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-30" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-brand-950/60"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
              <span className="font-display font-bold text-brand-900">{site.name}</span>
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-slate-300 text-brand-900 transition-colors duration-200 hover:bg-slate-50"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            {/* Phone first — the reason most mobile visitors opened the menu */}
            <a
              href={`tel:${site.phoneE164}`}
              data-cta="mobile-menu"
              className="mx-4 mt-4 flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-accent-700"
            >
              <Phone aria-hidden="true" className="h-5 w-5" />
              {site.phone}
            </a>
            <p className="mt-2 text-center text-sm text-slate-500">{site.hoursLabel}</p>

            <nav aria-label="Mobile" className="mt-4 flex-1 overflow-y-auto px-4 pb-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-slate-100 py-4 text-lg font-medium text-brand-900 transition-colors duration-200 hover:text-accent-600"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/emergency"
                onClick={() => setOpen(false)}
                className="block py-4 text-lg font-semibold text-accent-600"
              >
                Emergency Service →
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
