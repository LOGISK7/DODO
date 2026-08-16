"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Lie", href: "#the-lie" },
    { label: "The 3 E's", href: "#framework" },
    { label: "Calculator", href: "#calculator" },
    { label: "Qualifications", href: "#qualifications" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[#222226] py-3.5 shadow-2xl"
          : "bg-transparent py-5 md:py-7"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 md:w-10 md:h-10 border border-[#c5a059] flex items-center justify-center bg-black/60 relative overflow-hidden group-hover:border-[#dfb76c] transition-colors">
            <div className="absolute inset-0 bg-[#c5a059]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[#c5a059] font-serif font-bold text-lg md:text-xl italic leading-none">
              D
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-serif font-bold text-sm md:text-base tracking-[0.18em] uppercase">
              DRAGON <span className="text-[#c5a059]">100™</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#80808a] font-sans -mt-0.5">
              Advisory Board
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.14em] text-[#A1A1AA] hover:text-[#c5a059] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#calculator"
            className="btn-gold-primary text-xs py-3 px-6 md:px-7"
          >
            Calculate Number
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#EDEDED] p-2 hover:text-[#c5a059] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0A0A0A] border-b border-[#222226] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-[0.15em] text-[#EDEDED] hover:text-[#c5a059] py-1 transition-colors flex items-center justify-between"
                >
                  {link.label}
                  <ArrowUpRight size={16} className="text-[#80808a]" />
                </a>
              ))}
              <div className="pt-4 border-t border-[#222226]">
                <a
                  href="#calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold-primary w-full text-center py-3.5 text-xs"
                >
                  Calculate Your Certainty Number
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
