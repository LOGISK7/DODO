"use client";

import React from "react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

export default function ProofWall() {
  const logos = [
    { name: "Forbes", category: "Featured In" },
    { name: "Bloomberg", category: "Market Coverage" },
    { name: "Wall Street Journal", category: "Executive Feature" },
    { name: "Fast Company", category: "Innovation Award" },
    { name: "Inc. 5000", category: "Honoree Network" },
    { name: "Nasdaq", category: "Boardroom Intelligence" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
        
        <Reveal>
          <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--text-muted)] block mb-12">
            Advisory Board Practitioners Featured Across Global Media & Tier-1 Outlets
          </span>
        </Reveal>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
          {logos.map((brand) => (
            <StaggerItem key={brand.name}>
              <div className="p-6 rounded-sm bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-cobalt)] transition-all duration-300 flex flex-col items-center justify-center group cursor-default h-28">
                <span className="font-heading font-bold text-lg sm:text-xl text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                  {brand.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)] group-hover:text-[var(--accent-cobalt)] transition-colors mt-1">
                  {brand.category}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
