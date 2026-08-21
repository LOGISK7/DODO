"use client";

import React from "react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function Hero() {
  const heroHeader = (
    <div className="flex flex-col items-center text-center max-w-5xl mx-auto w-full pt-20 md:pt-32 px-4">
      {/* Proof / Eyebrow */}
      <Reveal delay={0.05}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">
            [PROOF / CREDIBILITY - E.g., Trusted by 10,000+ top creators]
          </span>
        </div>
      </Reveal>

      {/* Main Headline */}
      <Reveal delay={0.15}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          [MAIN HEADLINE: Clear, Punchy, <br className="hidden md:block"/>Desired Outcome]
        </h1>
      </Reveal>

      {/* Subheadline */}
      <Reveal delay={0.25}>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          [SUPPORTING SUBHEADLINE: Explain exactly how it works, who it's for, and why they should care right now. Keep it under 3 lines.]
        </p>
      </Reveal>

      {/* CTAs */}
      <Reveal delay={0.35}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
            [PRIMARY CTA]
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-white/5 transition-all">
            [SECONDARY ACTION]
          </button>
        </div>
      </Reveal>
      
      {/* Trust Badges / Guarantees */}
      <Reveal delay={0.45}>
         <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
           <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> No credit card required</div>
           <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> 14-day free trial</div>
           <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Cancel anytime</div>
         </div>
      </Reveal>
    </div>
  );

  return (
    <section className="relative w-full bg-[#030303] text-white overflow-hidden">
      {/* Optional subtle gradient background to add depth */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      
      <ScrollExpandMedia
        mediaType="image"
        // Replace mediaSrc with your product mockup or video
        mediaSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        headerContent={heroHeader}
      />
    </section>
  );
}
