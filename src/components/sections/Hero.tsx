"use client";

import React, { useState } from "react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { Cpu, ShieldCheck, Play } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative w-full bg-[var(--bg-primary)]">
      {/* Cybernetic Grid Overlay */}
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-50 z-20" />

      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1280&auto=format&fit=crop"
        bgImageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        title="SUCCESS PRISON"
        date="[ENCRYPTED_STREAM_01]"
        scrollToExpand="INIT EXTRACTION SEQUENCE"
        textBlend={false}
      >
        <div className="flex flex-col items-center text-center max-w-[1080px] mx-auto w-full z-20 relative">
          {/* HUD Eyebrow Badge */}
          <Reveal delay={0.05}>
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-8 relative">
              <Cpu className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent-primary)] font-mono">
                System Cap: 100 Nodes Online
              </span>
              <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--accent-primary)] animate-pulse" />
            </div>
          </Reveal>

          {/* Main Headline */}
          <Reveal delay={0.15}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Why Everyone Is Dead Wrong About{" "}
              <span className="text-[var(--accent-primary)] block sm:inline">
                Building a 7-Figure Enterprise
              </span>
            </h1>
          </Reveal>

          {/* Subheadline */}
          <Reveal delay={0.25}>
            <div className="relative mb-12">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-[840px] leading-relaxed font-mono">
                The brutal reality of how the high-revenue machine you forged became an all-consuming <strong className="text-white">“Success Prison”</strong> that drains your life and prevents true equity extraction.
              </p>
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[560px] relative mx-auto">
              <a
                href="#calculator"
                className="px-8 py-4 bg-[var(--accent-primary)] text-black font-bold uppercase tracking-widest text-sm w-full sm:w-auto flex-1 text-center hover:bg-white transition-colors"
              >
                Init Extraction Calc
              </a>
              <a
                href="#the-lie"
                className="px-8 py-4 border border-[var(--border-subtle)] text-white font-bold uppercase tracking-widest text-sm w-full sm:w-auto flex-1 text-center hover:bg-white/10 transition-colors"
              >
                Access Data Frame
              </a>
            </div>
          </Reveal>
        </div>
      </ScrollExpandMedia>
    </section>
  );
}
