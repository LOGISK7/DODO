"use client";

import React from "react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Cpu, DollarSign, TrendingUp } from "lucide-react";

export default function FrameworkThreeEs() {
  const pillars = [
    {
      number: "01",
      icon: Cpu,
      title: "EFFICIENCY",
      subtitle: "The Autonomous Operating Engine",
      description:
        "We audit your operational bottlenecks and install proprietary execution SOPs and AI workflows. Your leadership team runs day-to-day operations without needing your adrenaline or micro-decisions.",
      deliverables: ["Key-Person Dependency Elimination", "Automated KPI Reporting Dashboards", "4-Day Executive Work Week Protocol"],
    },
    {
      number: "02",
      icon: DollarSign,
      title: "EXTRACTION",
      subtitle: "Systematic Capital Diversification",
      description:
        "Stop reinvesting 100% of profit back into volatile operational risk. We engineer structured dividend waterfalls that extract liquidity into recession-resilient, yield-bearing assets.",
      deliverables: ["Tax-Efficient Profit Extraction Schedules", "High-Yield Liquid Capital Allocation", "The 4% Safe Withdrawal Engine"],
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "EQUITY VALUE",
      subtitle: "The Premium Multiple Exit Blueprint",
      description:
        "Transform an un-sellable lifestyle business into a clean, audited enterprise that strategic buyers compete to acquire at top-tier EBITDA multiples whenever you decide to exit.",
      deliverables: ["EBITDA Multiple Expansion Framework", "Clean Balance Sheet Positioning", "Strategic Acquisition Readiness"],
    },
  ];

  return (
    <section id="framework" className="py-24 md:py-32 bg-black border-t border-[#18181B] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#c5a059] block mb-3">
              The Proprietary Architecture
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-6">
              The Three E's of <span className="font-serif-accent italic gold-gradient-text">Enterprise Freedom</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed">
              While conventional frameworks focus purely on making a business run, Dragon 100™ focuses on how the founder extracts value, hits their Certainty Number, and buys their life back.
            </p>
          </Reveal>
        </div>

        {/* 3 Pillars Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.number}>
                <div className="h-full p-8 md:p-10 rounded-sm bg-[#0E0E10] border border-[#222226] hover:border-[#c5a059]/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  
                  {/* Subtle top indicator */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Pillar Number & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-sm bg-[#161619] border border-[#27272a] flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059]/60 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.2)] transition-all">
                        <Icon size={26} />
                      </div>
                      <span className="font-serif font-bold text-2xl text-[#71717A] group-hover:text-[#c5a059] transition-colors">
                        {pillar.number}
                      </span>
                    </div>

                    {/* Titles */}
                    <h3 className="font-serif font-bold text-2xl text-white tracking-wide mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c5a059] mb-6">
                      {pillar.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm md:text-[15px] text-[#A1A1AA] leading-relaxed font-sans mb-8">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-6 border-t border-[#1C1C22] space-y-2.5">
                    {pillar.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#D4D4D8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
