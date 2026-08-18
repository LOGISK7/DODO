"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Play, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[var(--bg-primary)]">
      {/* Background Ambience / Sharp grid lines instead of floaty glow */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] [background-size:48px_48px] opacity-40 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center flex flex-col items-center relative z-10">
        {/* Eyebrow Badge - Sharp, brutalist */}
        <Reveal delay={0.05}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] editorial-border mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--text-primary)] font-sans">
              Strictly Capped at 100 Founders Worldwide
            </span>
          </div>
        </Reveal>

        {/* Main Headline - Massive Editorial Typography */}
        <Reveal delay={0.15}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-huge font-heading font-bold text-[var(--text-primary)] max-w-[1080px] mb-8 uppercase"
          >
            Why Almost Everyone Is Dead Wrong About{" "}
            <span className="italic font-normal text-[var(--accent-primary)] block sm:inline normal-case">
              Building a 7-Figure Enterprise
            </span>
          </motion.h1>
        </Reveal>

        {/* Authoritative Subheadline */}
        <Reveal delay={0.25}>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-[840px] leading-relaxed font-sans font-normal mb-12">
            And the brutal reality of how the high-revenue machine you forged to set you free became an all-consuming{" "}
            <strong className="text-[var(--text-primary)] font-semibold">“Success Prison”</strong> that drains your life, binds your attention, and prevents true equity extraction.
          </p>
        </Reveal>

        {/* Dual CTAs - Sharp brutalist buttons */}
        <Reveal delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[560px] mb-16">
            <a
              href="#calculator"
              className="btn-brutal-primary w-full sm:w-auto flex-1 text-center"
            >
              Calculate Your Certainty Number
            </a>
            <a
              href="#the-lie"
              className="btn-brutal-ghost w-full sm:w-auto flex-1 text-center"
            >
              Discover The Framework
            </a>
          </div>
        </Reveal>

        {/* Featured Video / Summit Trailer Mockup Frame */}
        <Reveal delay={0.45} className="w-full max-w-[960px]">
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group bg-[var(--bg-card)] p-2 md:p-3 editorial-border transition-all duration-300 hover:bg-[var(--bg-secondary)] cursor-pointer"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--bg-secondary)] editorial-border flex items-center justify-center">
              
              <div className="relative z-20 text-center flex flex-col items-center px-6">
                {/* Play Button - Red, sharp */}
                <motion.div 
                  animate={{ 
                    scale: isHovered ? 1.05 : 1,
                    backgroundColor: isHovered ? "var(--text-primary)" : "var(--accent-primary)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-white mb-4 editorial-border"
                >
                  <Play className="w-7 h-7 md:w-8 md:h-8 fill-white ml-1 text-white" />
                </motion.div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-primary)] mb-1">
                  Private Boardroom Intelligence Briefing
                </p>
                <p className="text-sm md:text-base text-[var(--text-secondary)] font-serif max-w-lg italic">
                  “The Mechanics of Operational Extraction & Autonomous Scale”
                </p>
              </div>

              {/* Crosshair Accent Corner Markers */}
              <div className="absolute top-0 left-0 w-8 h-8 border-r border-b border-[var(--border-strong)] z-20 pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-[var(--border-strong)] z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-r border-t border-[var(--border-strong)] z-20 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-l border-t border-[var(--border-strong)] z-20 pointer-events-none" />
            </div>

            {/* Bottom trust bar */}
            <div className="mt-3 py-2 px-4 flex flex-wrap items-center justify-between text-xs font-sans font-bold uppercase tracking-wider text-[var(--text-secondary)] editorial-border-t">
              <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-primary)]" /> Closed-Door Private Advisory
              </span>
              <span>100 Founding Members Worldwide</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
