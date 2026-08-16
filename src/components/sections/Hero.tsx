"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Play, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
      {/* Background Ambience / Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1e_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center flex flex-col items-center relative z-10">
        {/* Eyebrow Badge */}
        <Reveal delay={0.05}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] border border-[#c5a059]/30 mb-8 shadow-[0_0_20px_rgba(197,160,89,0.12)]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c5a059] font-sans">
              Strictly Capped at 100 Founders Worldwide
            </span>
          </div>
        </Reveal>

        {/* Main Headline */}
        <Reveal delay={0.15}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white max-w-[1080px] leading-[1.12] tracking-tight mb-8">
            Why Almost Everyone Is Dead Wrong About{" "}
            <span className="font-serif-accent italic font-normal gold-gradient-text block sm:inline">
              Building a 7 or 8-Figure Enterprise
            </span>
          </h1>
        </Reveal>

        {/* Authoritative Subheadline */}
        <Reveal delay={0.25}>
          <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-[840px] leading-relaxed font-sans font-normal mb-12">
            And the brutal reality of how the high-revenue machine you forged to set you free became an all-consuming{" "}
            <span className="text-white font-medium">“Success Prison”</span> that drains your life, binds your attention, and prevents true equity extraction.
          </p>
        </Reveal>

        {/* Dual CTAs */}
        <Reveal delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[560px] mb-16">
            <a
              href="#calculator"
              className="btn-gold-primary w-full sm:w-auto flex-1 text-center"
            >
              Calculate Your Certainty Number
            </a>
            <a
              href="#the-lie"
              className="btn-gold-ghost w-full sm:w-auto flex-1 text-center"
            >
              Discover The Framework
            </a>
          </div>
        </Reveal>

        {/* Featured Video / Summit Trailer Mockup Frame */}
        <Reveal delay={0.45} className="w-full max-w-[960px]">
          <div className="relative group rounded-sm border border-[#27272a] bg-[#0E0E10] p-2 md:p-3 shadow-2xl transition-all duration-500 hover:border-[#c5a059]/60">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-[#050505] flex items-center justify-center">
              {/* Subtle visual backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              
              <div className="relative z-20 text-center flex flex-col items-center px-6">
                {/* Play Button */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c5a059] flex items-center justify-center text-black shadow-[0_0_35px_rgba(197,160,89,0.5)] group-hover:scale-110 transition-transform duration-300 mb-4 cursor-pointer">
                  <Play className="w-7 h-7 md:w-8 md:h-8 fill-black ml-1 text-black" />
                </div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#c5a059] mb-1">
                  Private Boardroom Intelligence Briefing
                </p>
                <p className="text-sm md:text-base text-white/90 font-serif max-w-lg">
                  “The Mechanics of Operational Extraction & Autonomous Scale”
                </p>
              </div>

              {/* Gold Accent Corner Markers */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#c5a059] z-20" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#c5a059] z-20" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#c5a059] z-20" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#c5a059] z-20" />
            </div>

            {/* Bottom trust bar */}
            <div className="mt-3 py-2 px-4 flex flex-wrap items-center justify-between text-xs text-[#71717A] border-t border-[#1C1C20]">
              <span className="flex items-center gap-1.5 text-[#D4D4D8]">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" /> Closed-Door Private Advisory
              </span>
              <span>100 Founding Members Worldwide</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
