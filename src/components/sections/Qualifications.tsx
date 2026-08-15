"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Check, X, ShieldAlert, Users } from "lucide-react";

export default function Qualifications() {
  const perfectFor = [
    "You run an established, validated enterprise generating $1M to $10M+ in annual revenue that fundamentally works, but currently demands 100% of your personal cognitive bandwidth.",
    "You are exhausted by operating in solitary isolation at the top and seek a vetted, closed-door sounding board of high-caliber 8-figure peers who challenge and elevate your strategic thinking.",
    "You are unequivocally committed to calculating and reaching your Certainty Number, stopping the active income treadmill and converting corporate cash flow into enduring investable net worth.",
    "You are prepared to replace hero-dependent management with autonomous operating systems, high-leverage delegation frameworks, and institutional team leadership.",
    "You bring an absolute 'Go-Giver' mindset: you leave your ego at the door, drop the armor, and openly share your operational playbooks, bottlenecks, and breakthroughs to elevate the entire room.",
  ];

  const notFor = [
    "You are driven purely by vanity metrics and bragging rights. If you are obsessed with growing headcount or revenue for social prestige at the expense of net profit, this room will frustrate you.",
    "You are content sacrificing your family, physical health, and personal relationships for the sake of a corporate P&L. We do not celebrate burnout or glorification of endless grinding.",
    "You want a casual networking mixer or a vendor pool to pitch your services. Dragon 100™ enforces an uncompromising, immediate one-strike ejection policy for internal solicitation.",
    "You are looking for beginner courses, basic agency tutorials, or 'how-to-start' content. This is strictly a high-level strategic advisory board for seasoned operators with validated traction.",
  ];

  return (
    <section id="qualifications" className="py-24 md:py-32 bg-black border-t border-[#18181B] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#c5a059] block mb-3">
              Selective Admissions Protocol
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-6">
              Vetting Standards & <span className="font-serif-accent italic gold-gradient-text">Eligibility Criteria</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed">
              Dragon 100™ is deliberately limited to exactly 100 seats worldwide. We curate the room with surgical precision to ensure peer caliber and total operational alignment.
            </p>
          </Reveal>
        </div>

        {/* Two-Column Card Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Column 1: Perfect For You If */}
          <Reveal delay={0.15}>
            <div className="h-full p-8 sm:p-10 md:p-12 rounded-sm bg-[#0E0E10] border border-[#c5a059]/40 shadow-[0_0_30px_rgba(197,160,89,0.08)] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-sm bg-[#c5a059]/10 border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                      Dragon 100™ Is Built For You If:
                    </h3>
                  </div>
                </div>

                <ul className="space-y-6">
                  {perfectFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#1A2E1C] border border-[#22c55e]/40 flex items-center justify-center text-[#22c55e] flex-shrink-0 mt-0.5">
                        <Check size={14} />
                      </div>
                      <p className="text-sm md:text-[15px] text-[#D4D4D8] leading-relaxed font-sans">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-[#1C1C22]">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c5a059]">
                  ✓ Verified $1M–$10M+ Annual Scale
                </span>
              </div>
            </div>
          </Reveal>

          {/* Column 2: Not For You If */}
          <Reveal delay={0.25}>
            <div className="h-full p-8 sm:p-10 md:p-12 rounded-sm bg-[#0E0E10] border border-[#27272a] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-sm bg-[#ef4444]/10 border border-[#ef4444]/40 flex items-center justify-center text-[#ef4444]">
                    <ShieldAlert size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                      This Is Strictly NOT For You If:
                    </h3>
                  </div>
                </div>

                <ul className="space-y-6">
                  {notFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#2E1A1A] border border-[#ef4444]/40 flex items-center justify-center text-[#ef4444] flex-shrink-0 mt-0.5">
                        <X size={14} />
                      </div>
                      <p className="text-sm md:text-[15px] text-[#A1A1AA] leading-relaxed font-sans">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-[#1C1C22]">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ef4444]">
                  ✕ Zero-Tolerance Solicitation Rule
                </span>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
