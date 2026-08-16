"use client";

import React from "react";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border-subtle)] pt-24 pb-12 text-[var(--text-secondary)] font-sans">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        
        {/* Brutal Minimal Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-16 border-b border-[var(--border-subtle)]">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight mb-4">
              DRAGON 100™
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] font-medium">
              The premier private strategic advisory board for 7 and 8-figure founders dedicated to operational extraction.
            </p>
          </div>

          <div className="flex flex-col gap-4 min-w-[200px]">
            <a
              href="#calculator"
              className="btn-cobalt-primary text-center w-full"
            >
              Apply For Review
            </a>
            <p className="text-xs text-[var(--text-muted)] text-center font-mono-accent uppercase tracking-wider">
              Admissions by vetting only
            </p>
          </div>
        </div>

        {/* Legal Disclaimer Block */}
        <div className="py-12 border-b border-[var(--border-subtle)] text-[13px] leading-relaxed space-y-4 text-[var(--text-secondary)] max-w-4xl">
          <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold uppercase tracking-wider text-[11px] font-mono-accent">
            <Shield size={14} className="text-[var(--accent-cobalt)]" />
            <span>Important Earnings & Legal Disclaimers</span>
          </div>
          <p>
            We do not believe in get-rich-quick schemes or passive shortcuts. Building a self-managing enterprise and extracting lasting wealth requires rigorous operational discipline, leadership restructuring, and committed execution. As stipulated by law, we cannot and do not make any guarantees about your individual ability to achieve financial results or execute enterprise value multiples.
          </p>
          <p>
            Any financial calculations, multiples, or milestone case studies referenced on this page are illustrative metrics representing specific member achievements and should not be construed as universal promises or projections of performance.
          </p>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] font-medium text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Dragon 100™ Global Advisory.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="hover:text-[var(--accent-cobalt)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--accent-cobalt)] transition-colors">Terms of Advisory</a>
            <a href="#" className="hover:text-[var(--accent-cobalt)] transition-colors">Confidentiality Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
