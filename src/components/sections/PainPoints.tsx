"use client";

import React from "react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { AlertCircle } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    {
      number: "01",
      leadIn: "YOU ARE THE CHIEF EVERYTHING OFFICER:",
      description:
        "Every strategic decision, emergency escalation, and key client relationship routes through your desk. If you step away for 30 days, operational momentum halts.",
    },
    {
      number: "02",
      leadIn: "REVENUE GROWS, BUT TIME EVAPORATES:",
      description:
        "Your top-line revenue has tripled over the last three years, yet your personal freedom has shrunk. You are working longer hours now than when you first launched.",
    },
    {
      number: "03",
      leadIn: "HIGH ACTIVE INCOME, ZERO EXIT LEVERAGE:",
      description:
        "You make substantial monthly distributions, but you haven't built a self-sustaining enterprise value. The business cannot be sold or transferred without your daily presence.",
    },
    {
      number: "04",
      leadIn: "SOLITARY DECISION MAKING AT THE TOP:",
      description:
        "You have no real peer group. Your employees look to you for answers, your family doesn't understand your pressures, and traditional masterminds are filled with beginners.",
    },
    {
      number: "05",
      leadIn: "NO DEFINED 'CERTAINTY NUMBER':",
      description:
        "You are sprinting endlessly toward an invisible finish line without a concrete, mathematical formula for how much invested capital actually buys back 100% of your time.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#080808] border-y border-[#18181B] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c5a059] mb-4">
              <AlertCircle className="w-4 h-4" />
              <span>Diagnostic Assessment</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
              Ask Yourself: Have You Built an Asset, Or Did You Accidentally Build a{" "}
              <span className="font-serif-accent italic gold-gradient-text">Success Prison?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed">
              If three or more of the following scenarios describe your current week, your business model is optimized for exhaustion rather than extraction.
            </p>
          </Reveal>
        </div>

        {/* 5-Question Pain Points List */}
        <StaggerContainer staggerDelay={0.12} className="space-y-4">
          {painPoints.map((item) => (
            <StaggerItem key={item.number}>
              <div className="p-6 md:p-8 rounded-sm bg-[#111113] border border-[#222226] hover:border-[#c5a059]/50 transition-all duration-300 group flex flex-col md:flex-row gap-5 md:gap-8 items-start">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <span className="font-serif font-bold text-2xl md:text-3xl text-[#c5a059] opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-sm md:text-base font-bold font-sans tracking-[0.08em] text-white group-hover:text-[#fae19c] transition-colors">
                    {item.leadIn}
                  </h3>
                  <p className="text-sm md:text-[15px] text-[#A1A1AA] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
