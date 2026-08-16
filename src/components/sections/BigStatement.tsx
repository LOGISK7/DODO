"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export default function BigStatement() {
  return (
    <section className="py-20 md:py-28 bg-[#09090B] border-y border-[var(--border-subtle)] relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1040px] mx-auto px-6 md:px-8 text-center relative z-10">
        
        <Reveal>
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--accent-cobalt)] block mb-8">
            The Fundamental Law of Wealth Extraction
          </span>
        </Reveal>

        <Reveal delay={0.15}>
          <blockquote className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading italic text-[var(--text-primary)] leading-[1.22] tracking-tight mb-8">
            “Top-line revenue is <span className="text-[var(--text-muted)]">vanity</span>. Operating profit is <span className="text-[var(--text-primary)]">sanity</span>. Investable Net Worth is <span className="text-[var(--accent-cobalt)] not-italic font-heading font-bold">Absolute Reality</span>.”
          </blockquote>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[var(--accent-cobalt)]/40" />
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-cobalt)] font-sans">
              Dragon 100™ Governing Principle
            </p>
            <div className="h-[1px] w-12 bg-[var(--accent-cobalt)]/40" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
