"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Calculator, RotateCcw, ArrowRight, ShieldCheck, Sparkles, DollarSign } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function InteractiveCalculator() {
  const currencies = ["USD", "EUR", "GBP", "CAD", "AUD", "AED", "SAR"];
  
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [monthlyExpense, setMonthlyExpense] = useState(25000);
  const [isCalculated, setIsCalculated] = useState(false);

  // Core Formulas
  const annualExpense = monthlyExpense * 12;
  const certaintyNumber = annualExpense * 25; // 4% Rule = 25x Annual (or 300x Monthly)
  const buffer30X = monthlyExpense * 30; // 2.5 Years / 30 Months liquid buffer
  const buffer60X = monthlyExpense * 60; // 5 Years / 60 Months liquid buffer

  const handleCalculate = () => {
    setIsCalculated(true);
  };

  const handleReset = () => {
    setIsCalculated(false);
  };

  return (
    <section id="calculator" className="py-24 md:py-32 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1040px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161619] border border-[var(--border-cobalt)] mb-4">
              <Calculator className="w-3.5 h-3.5 text-[var(--accent-cobalt)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-cobalt)]">
                Interactive Financial Architecture
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight mb-6">
              Calculate Your <span className="font-heading italic text-[var(--accent-cobalt)]">Certainty Number™</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
              Based on the proven 4% Safe Withdrawal Framework used by multi-generational wealth managers. Discover the exact liquid net worth required to fund 100% of your ideal lifestyle forever without ever working again.
            </p>
          </Reveal>
        </div>

        {/* Main Calculator Box */}
        <Reveal delay={0.3}>
          <div className="p-8 sm:p-10 md:p-12 rounded-sm bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-[var(--border-cobalt)]">
            
            {/* Top subtle gold bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-cobalt)] to-transparent" />

            {/* Currency Selector Pills */}
            <div className="mb-10">
              <label className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-4">
                1. Select Operating Currency
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {currencies.map((curr) => {
                  const isActive = selectedCurrency === curr;
                  return (
                    <button
                      key={curr}
                      onClick={() => setSelectedCurrency(curr)}
                      className={`px-4 py-2 text-xs font-bold font-mono tracking-wider rounded-sm transition-all duration-200 ${
                        isActive
                          ? "bg-[var(--accent-cobalt)] text-black font-extrabold shadow-[0_0_15px_rgba(197,160,89,0.4)]"
                          : "bg-[#18181B] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-subtle)]"
                      }`}
                    >
                      {curr}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Monthly Expense Range Slider */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  2. Desired Monthly Living Expenses (Post-Tax)
                </label>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-[var(--text-primary)] flex items-baseline gap-1">
                  <span className="text-[var(--accent-cobalt)]">
                    {formatCurrency(monthlyExpense, selectedCurrency)}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-sans font-normal uppercase tracking-wider">
                    / month
                  </span>
                </div>
              </div>

              {/* Slider Input */}
              <div className="py-4">
                <input
                  type="range"
                  min={5000}
                  max={150000}
                  step={2500}
                  value={monthlyExpense}
                  onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                  className="cobalt-slider"
                  aria-label="Monthly living expense slider"
                />
              </div>

              <div className="flex justify-between text-[11px] font-mono text-[var(--text-secondary)] px-1">
                <span>{formatCurrency(5000, selectedCurrency)}/mo</span>
                <span>{formatCurrency(50000, selectedCurrency)}/mo</span>
                <span>{formatCurrency(100000, selectedCurrency)}/mo</span>
                <span>{formatCurrency(150000, selectedCurrency)}/mo</span>
              </div>
            </div>

            {/* Action Button */}
            {!isCalculated ? (
              <div className="text-center pt-2">
                <button
                  onClick={handleCalculate}
                  className="btn-cobalt-primary w-full sm:w-auto text-sm px-10 py-4"
                >
                  Calculate My Certainty Number
                </button>
              </div>
            ) : (
              /* Results Panel */
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-8 border-t border-[var(--border-subtle)]"
                >
                  <div className="text-center mb-8">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-cobalt)] block mb-2">
                      Computed Wealth Scorecard
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--text-primary)]">
                      Your Mathematical Path to Sovereign Freedom
                    </h3>
                  </div>

                  {/* 4 Computed Stat Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    
                    {/* Stat 1: The Certainty Number */}
                    <div className="p-6 rounded-sm bg-[#141417] border border-[var(--border-cobalt)] shadow-[0_0_25px_rgba(197,160,89,0.15)] relative overflow-hidden">
                      <div className="absolute top-0 right-0 px-2 py-0.5 bg-[var(--accent-cobalt)] text-black text-[9px] font-bold uppercase tracking-wider">
                        Core Target
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)] block mb-2">
                        Certainty Number (4% Rule)
                      </span>
                      <div className="text-2xl sm:text-3xl font-heading font-bold text-[var(--accent-cobalt)] mb-2">
                        {formatCurrency(certaintyNumber, selectedCurrency)}
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                        Invested capital yielding 4% passive annual return.
                      </p>
                    </div>

                    {/* Stat 2: Annual Run-Rate */}
                    <div className="p-6 rounded-sm bg-[#141417] border border-[var(--border-subtle)]">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)] block mb-2">
                        Annual Capital Need
                      </span>
                      <div className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-primary)] mb-2">
                        {formatCurrency(annualExpense, selectedCurrency)}
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                        Total annual cost of your frictionless lifestyle.
                      </p>
                    </div>

                    {/* Stat 3: 30X Award (30 Months Buffer) */}
                    <div className="p-6 rounded-sm bg-[#141417] border border-[var(--border-subtle)]">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)] block mb-2">
                        30X Award Benchmark
                      </span>
                      <div className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-primary)] mb-2">
                        {formatCurrency(buffer30X, selectedCurrency)}
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                        30 months of pure living costs in liquid safety reserve.
                      </p>
                    </div>

                    {/* Stat 4: 60X Award (5 Years Freedom) */}
                    <div className="p-6 rounded-sm bg-[#141417] border border-[var(--border-subtle)]">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)] block mb-2">
                        60X Award Benchmark
                      </span>
                      <div className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-primary)] mb-2">
                        {formatCurrency(buffer60X, selectedCurrency)}
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                        5 full years of bought-back sovereignty.
                      </p>
                    </div>

                  </div>

                  {/* Reset / Recalculate CTA Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <RotateCcw size={14} />
                      <span>Adjust Parameters</span>
                    </button>

                    <a
                      href="#qualifications"
                      className="btn-cobalt-primary text-xs py-3 px-8"
                    >
                      Apply For Strategic Assessment
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>
            )}

          </div>
        </Reveal>

      </div>
    </section>
  );
}
