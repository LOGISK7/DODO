"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export default function NarrativeSection() {
  return (
    <section id="the-lie" className="py-24 md:py-32 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-[900px] mx-auto px-6 md:px-8 space-y-24">
        
        {/* Subsection 1: The Trap */}
        <div className="space-y-6">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-cobalt)] block">
              The Unspoken Reality of High-Revenue Founders
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] leading-tight">
              If You Are Nodding Your Head, You Haven't Failed.<br />
              <span className="font-heading italic text-[var(--accent-cobalt)]">You've Just Fallen Into A Success Prison.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
              <p>
                You are sprinting faster than ever, generating more revenue than ever, and looking immensely successful to everyone on the outside.
              </p>
              <p>
                Yet behind closed doors, you are bound to a machine you forged with your own hands. The greater your volume becomes, the heavier the operational burden. You set out a decade ago to build a doorway to personal freedom—only to realize you accidentally built a golden cage and locked yourself inside.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Subsection 2: The "Bigger is Better" Lie */}
        <div className="p-8 md:p-12 rounded-sm bg-[var(--bg-card)] border border-[var(--border-subtle)] relative space-y-6">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-[var(--accent-cobalt)]" />

          <Reveal>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--text-primary)]">
              The “Bigger Is Better” Illusion
            </h3>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
              <p>
                The mainstream business narrative tells founders that more revenue solves every problem. So you expand headcount, over-leverage overhead, and take on more complexity just to chase an arbitrary vanity milestone.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Here is the unfiltered truth:</strong> Revenue is a drug. Scaling an inefficient model doesn't make you freer; it amplifies your stress. Most founders are simply running on a high-speed treadmill, mistakenly believing the finish line is just “one more million” away.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Subsection 3: The Metric That Doesn't Lie */}
        <div className="space-y-6">
          <Reveal>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--text-primary)]">
              The Only Scoreboard That Buys Back Your Life
            </h3>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
              <p>
                Traditional business advisors train founders to fixate solely on the top-line income statement while completely ignoring the one metric that actually provides sovereign freedom: <strong className="text-[var(--accent-cobalt-light)]">Investable Net Worth</strong>.
              </p>
              <p>
                True wealth is not measured by the revenue your company touches; it is measured by the passive capital you extract and park into self-sustaining, cash-flowing assets that compound independently of your physical presence.
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
