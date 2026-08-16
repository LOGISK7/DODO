"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Award, Briefcase, Globe, Target } from "lucide-react";

export default function FounderBio() {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-[#18181B] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Founder Portrait Frame */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <div className="relative p-2 md:p-3 rounded-sm bg-[#0E0E10] border border-[#27272a] group hover:border-[#c5a059]/60 transition-all duration-500 shadow-2xl">
                
                {/* Image Placeholder with high-end luxury styling */}
                <div className="aspect-[4/5] w-full rounded-sm bg-[#08080A] relative overflow-hidden flex flex-col justify-end p-8 border border-[#1A1A1E]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  
                  {/* Watermark / Emblem */}
                  <div className="absolute top-6 right-6 w-12 h-12 border border-[#c5a059]/30 flex items-center justify-center bg-black/50 z-20">
                    <span className="font-serif italic font-bold text-[#c5a059] text-xl">D</span>
                  </div>

                  {/* Caption Overlay */}
                  <div className="relative z-20 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c5a059] block">
                      Founding Principal & Advisor
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-white">
                      The Chairman's Office
                    </h3>
                    <p className="text-xs text-[#80808a] font-sans">
                      Dragon 100™ Global Advisory Board
                    </p>
                  </div>
                </div>

                {/* Accent Corner Brackets */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#c5a059]" />
                <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#c5a059]" />
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#c5a059]" />
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#c5a059]" />
              </div>
            </Reveal>
          </div>

          {/* Bio Story Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#c5a059] block mb-2">
                Executive Leadership & Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                This Is Not A Business Service. <br />
                <span className="font-serif-accent italic gold-gradient-text">This Is A Finite Legacy Mission.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4 text-base md:text-[17px] text-[#A1A1AA] leading-relaxed font-sans">
                <p>
                  Having navigated multiple 8-figure enterprise exits and deployed capital across diversified commercial holdings, our founding advisory board was formed with a singular, unambiguous mission:
                </p>
                <p className="text-white font-medium">
                  To guide exactly 100 high-performing founders to their Certainty Number, enabling total operational extraction and permanent sovereign freedom.
                </p>
                <p>
                  Unlike traditional corporate consulting agencies or generic SaaS templates, Dragon 100™ does not scale infinitely. Once the 100th founder reaches their certainty milestone, this boardroom closes its doors permanently.
                </p>
              </div>
            </Reveal>

            {/* Quick Stat Badges */}
            <Reveal delay={0.25}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-sm bg-[#0E0E10] border border-[#222226]">
                  <span className="text-xl sm:text-2xl font-serif font-bold gold-gradient-text block">100</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#80808a]">Max Board Seats</span>
                </div>
                <div className="p-4 rounded-sm bg-[#0E0E10] border border-[#222226]">
                  <span className="text-xl sm:text-2xl font-serif font-bold text-white block">$120M+</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#80808a]">Portfolio Value</span>
                </div>
                <div className="p-4 rounded-sm bg-[#0E0E10] border border-[#222226] col-span-2 sm:col-span-1">
                  <span className="text-xl sm:text-2xl font-serif font-bold text-white block">6+ Years</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#80808a]">Vault Intelligence</span>
                </div>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}
