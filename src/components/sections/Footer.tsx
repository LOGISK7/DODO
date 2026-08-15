"use client";

import React from "react";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030304] border-t border-[#18181B] pt-20 pb-12 text-[#71717A] font-sans">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#18181D] items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#c5a059] flex items-center justify-center bg-black">
                <span className="text-[#c5a059] font-serif font-bold text-base italic leading-none">D</span>
              </div>
              <span className="text-white font-serif font-bold text-sm tracking-[0.18em] uppercase">
                DRAGON <span className="text-[#c5a059]">100™</span>
              </span>
            </div>
            <p className="text-xs text-[#80808a] leading-relaxed max-w-sm">
              The premier private strategic advisory board and software ecosystem for 7 and 8-figure founders dedicated to operational extraction, enterprise equity multiple expansion, and reaching their Certainty Number.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#the-lie" className="hover:text-[#c5a059] transition-colors">The Success Prison</a></li>
              <li><a href="#framework" className="hover:text-[#c5a059] transition-colors">The Three E's</a></li>
              <li><a href="#calculator" className="hover:text-[#c5a059] transition-colors">Certainty Calculator</a></li>
              <li><a href="#qualifications" className="hover:text-[#c5a059] transition-colors">Eligibility Criteria</a></li>
              <li><a href="#process" className="hover:text-[#c5a059] transition-colors">Admissions Protocol</a></li>
              <li><a href="#faq" className="hover:text-[#c5a059] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Boardroom Admissions
            </h4>
            <p className="text-xs text-[#80808a] leading-relaxed">
              Admissions strictly by confidential application and vetting interview only.
            </p>
            <div className="pt-2">
              <a
                href="#calculator"
                className="btn-gold-primary text-xs py-2.5 px-5"
              >
                Apply For Review
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Block (Standard for High-Ticket Advisory Sites) */}
        <div className="py-8 border-b border-[#141418] text-[11px] leading-relaxed space-y-3 text-[#52525B]">
          <div className="flex items-center gap-1.5 text-[#71717A] font-bold uppercase tracking-wider text-[10px]">
            <Shield size={12} className="text-[#c5a059]" />
            <span>Important Earnings & Legal Disclaimers</span>
          </div>
          <p>
            We do not believe in get-rich-quick schemes or passive shortcuts. Building a self-managing enterprise and extracting lasting wealth requires rigorous operational discipline, leadership restructuring, and committed execution. As stipulated by law, we cannot and do not make any guarantees about your individual ability to achieve financial results or execute enterprise value multiples. Your business results depend solely on your execution, market conditions, and operational variables.
          </p>
          <p>
            Any financial calculations, multiples, or milestone case studies referenced on this page are illustrative metrics representing specific member achievements and should not be construed as universal promises or projections of performance.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#52525B]">
          <p>© {new Date().getFullYear()} Dragon 100™ Global Advisory. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#c5a059] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">Terms of Advisory</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">Confidentiality Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
