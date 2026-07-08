"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

/**
 * Dependency-free comparison slider driven by a native range input —
 * keyboard accessible (arrow keys) and touch-friendly for free.
 */
export function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      {/* After (base layer). SVG placeholders skip the optimizer; real photos won't. */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(min-width: 1024px) 40rem, 100vw"
        className="object-cover"
        unoptimized={afterSrc.endsWith(".svg")}
      />
      {/* Before (clipped reveal) */}
      <div aria-hidden="true" className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={beforeSrc}
          alt=""
          fill
          sizes="(min-width: 1024px) 40rem, 100vw"
          className="object-cover"
          unoptimized={beforeSrc.endsWith(".svg")}
        />
      </div>
      {/* Screen-reader access to the before description */}
      <span className="sr-only">{beforeAlt}</span>

      {/* Divider handle */}
      <div aria-hidden="true" className="absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M5 3 1 8l4 5M11 3l4 5-4 5" stroke="#0c1f33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Reveal before and after comparison"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />

      <span className="absolute left-3 top-3 rounded-md bg-brand-950/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        Before
      </span>
      <span className="absolute right-3 top-3 rounded-md bg-brand-950/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        After
      </span>
    </div>
  );
}
