"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Play, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative z-10 w-full max-w-[1080px] mx-auto text-center flex flex-col items-center">
      {/* Eyebrow Badge */}
      <Reveal delay={0.05}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-cobalt)]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-cobalt)] font-mono-accent">
            Strictly Capped at 100 Founders Worldwide
          </span>
        </div>
      </Reveal>

      {/* Main Headline */}
      <Reveal delay={0.15}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[var(--text-primary)] max-w-[960px] leading-[1.05] tracking-tight mb-8 font-heading">
          Why Almost Everyone Is Dead Wrong About{" "}
          <span className="text-[var(--accent-cobalt)] block sm:inline relative">
            Building a 7 or 8-Figure Enterprise
            {/* Subtle underline SVG for accent */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--accent-cobalt-muted)]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h1>
      </Reveal>

      {/* Authoritative Subheadline */}
      <Reveal delay={0.25}>
        <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-[720px] leading-relaxed font-sans font-medium mb-12">
          And the brutal reality of how the high-revenue machine you forged to set you free became an all-consuming{" "}
          <span className="text-[var(--text-primary)] font-semibold border-b border-[var(--border-subtle)]">“Success Prison”</span> that drains your life, binds your attention, and prevents true equity extraction.
        </p>
      </Reveal>

      {/* CTAs */}
      <Reveal delay={0.35}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[560px] mb-20">
          <a
            href="#calculator"
            className="btn-cobalt-primary w-full sm:w-auto flex-1 text-center group"
          >
            Calculate Your Certainty Number
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#the-lie"
            className="btn-cobalt-ghost w-full sm:w-auto flex-1 text-center"
          >
            Discover The Framework
          </a>
        </div>
      </Reveal>

      {/* Video / Summit Trailer */}
      <Reveal delay={0.45} className="w-full max-w-[840px]">
        <div className="relative group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card-elevated)] p-2 md:p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[var(--border-cobalt)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center">
            {/* Subtle visual backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent z-10 opacity-50" />
            
            <div className="relative z-20 text-center flex flex-col items-center px-6">
              {/* Play Button */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--accent-cobalt)] flex items-center justify-center text-[var(--text-primary)] shadow-[0_4px_20px_var(--accent-cobalt-muted)] group-hover:scale-110 transition-transform duration-300 mb-6 cursor-pointer">
                <Play className="w-7 h-7 md:w-8 md:h-8 fill-white ml-1 text-[var(--text-primary)]" />
              </div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-[var(--accent-cobalt)] mb-2 font-mono-accent">
                Private Boardroom Intelligence Briefing
              </p>
              <p className="text-sm md:text-lg text-[var(--text-primary)] font-semibold max-w-lg">
                “The Mechanics of Operational Extraction & Autonomous Scale”
              </p>
            </div>
          </div>

          {/* Bottom trust bar */}
          <div className="mt-3 py-2 px-4 flex flex-wrap items-center justify-between text-xs text-[var(--text-muted)] border-t border-[var(--border-subtle)] font-mono-accent">
            <span className="flex items-center gap-2 text-[var(--text-secondary)]">
              <ShieldCheck className="w-4 h-4 text-[var(--accent-cobalt)]" /> Closed-Door Private Advisory
            </span>
            <span>100 Founding Members Worldwide</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
