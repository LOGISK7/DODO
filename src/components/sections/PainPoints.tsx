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
    <div className="w-full">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-cobalt)] mb-4 font-mono-accent">
            <AlertCircle className="w-4 h-4" />
            <span>Diagnostic Assessment</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] leading-tight mb-6">
            Have You Built an Asset, Or Did You Accidentally Build a{" "}
            <span className="text-[var(--accent-cobalt)] block sm:inline">Success Prison?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            If three or more of the following scenarios describe your current week, your business model is optimized for exhaustion rather than extraction.
          </p>
        </Reveal>
      </div>

      {/* 5-Question Pain Points List */}
      <StaggerContainer staggerDelay={0.12} className="space-y-4">
        {painPoints.map((item) => (
          <StaggerItem key={item.number}>
            <div className="p-6 md:p-8 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-cobalt)] transition-all duration-300 group flex flex-col md:flex-row gap-5 md:gap-8 items-start shadow-sm hover:shadow-md">
              {/* Number Badge */}
              <div className="flex-shrink-0">
                <span className="font-heading font-bold text-2xl md:text-3xl text-[var(--accent-cobalt)] opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-sm md:text-base font-bold font-sans tracking-[0.08em] text-[var(--text-primary)] group-hover:text-[var(--accent-cobalt)] transition-colors">
                  {item.leadIn}
                </h3>
                <p className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
