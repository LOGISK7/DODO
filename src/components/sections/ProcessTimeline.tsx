"use client";

import React from "react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { FileText, PhoneCall, CheckSquare, Rocket } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      step: "STEP 01",
      title: "APPLY",
      icon: FileText,
      description:
        "Submit your confidential corporate brief. Our admissions committee reviews your current business model, bottlenecks, and financial milestones.",
    },
    {
      step: "STEP 02",
      title: "DIAGNOSTIC",
      icon: PhoneCall,
      description:
        "If your application meets our vetting baseline, you will be invited to a private 45-minute strategic audit call to evaluate room fit and synergy.",
    },
    {
      step: "STEP 03",
      title: "ADMISSION",
      icon: CheckSquare,
      description:
        "Upon unanimous board acceptance, you receive an official invitation. Membership is strictly capped at 100 founders—when seats fill, admissions lock.",
    },
    {
      step: "STEP 04",
      title: "ONBOARDING",
      icon: Rocket,
      description:
        "Gain immediate deployment access to the Certainty Engine™ software, 6+ years of proprietary Vault intelligence, and your private Slack boardroom.",
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#080808] border-t border-[#18181B] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#c5a059] block mb-3">
              Admissions Roadmap
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-6">
              How to Secure <span className="font-serif-accent italic gold-gradient-text">Your Seat</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed">
              A streamlined, 4-step onboarding sequence engineered for busy executives.
            </p>
          </Reveal>
        </div>

        {/* 4-Step Grid with Connecting Line */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent z-0" />

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.step}>
                  <div className="flex flex-col items-center text-center group h-full">
                    
                    {/* Circle Badge with Icon */}
                    <div className="w-20 h-20 md:w-22 md:h-22 rounded-full bg-[#111113] border-2 border-[#27272a] group-hover:border-[#c5a059] flex flex-col items-center justify-center mb-6 shadow-xl transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(197,160,89,0.3)]">
                      <Icon className="w-6 h-6 text-[#c5a059] mb-1" />
                      <span className="text-[9px] font-mono font-bold tracking-widest text-[#A1A1AA] group-hover:text-white transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-serif font-bold text-lg md:text-xl text-white tracking-wider mb-3">
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs md:text-sm text-[#A1A1AA] leading-relaxed font-sans max-w-xs">
                      {item.description}
                    </p>

                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4} className="mt-16 text-center">
          <a
            href="#calculator"
            className="btn-gold-primary text-xs py-4 px-10"
          >
            Apply For Membership Protocol
          </a>
        </Reveal>

      </div>
    </section>
  );
}
