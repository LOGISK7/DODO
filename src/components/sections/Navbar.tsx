"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4 pointer-events-none flex justify-center">
      <div
        className={`pointer-events-auto flex items-center justify-between transition-all duration-300 w-full max-w-5xl rounded-full px-4 md:px-6 py-3 border ${
          isScrolled
            ? "bg-[var(--bg-card)]/80 backdrop-blur-xl border-[var(--border-subtle)] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "bg-[var(--bg-card)]/90 backdrop-blur-md border-[var(--border-subtle)] shadow-sm"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 md:gap-3 group shrink-0">
          <div className="w-8 h-8 flex items-center justify-center bg-[var(--accent-cobalt)] text-[var(--text-primary)] rounded-full">
            <span className="font-heading font-bold text-sm tracking-tighter">D</span>
          </div>
          <span className="text-[var(--text-primary)] font-heading font-bold tracking-tight text-sm md:text-base hidden sm:block">
            Dragon 100
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium font-sans text-[var(--text-secondary)] hover:text-[var(--accent-cobalt)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center shrink-0 ml-auto lg:ml-0">
          <a
            href="#calculator"
            className="btn-cobalt-primary text-xs py-2 px-5"
          >
            Calculate Number
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[var(--text-primary)] p-1.5 hover:text-[var(--accent-cobalt)] transition-colors ml-auto sm:ml-4"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-2 lg:hidden bg-[var(--bg-card)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden shadow-2xl pointer-events-auto origin-top"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium font-sans text-[var(--text-primary)] hover:text-[var(--accent-cobalt)] py-2 transition-colors flex items-center justify-between"
                >
                  {link.label}
                  <ArrowUpRight size={16} className="text-[var(--text-muted)]" />
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-[var(--border-subtle)]">
                <a
                  href="#calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-cobalt-primary w-full text-center py-3 text-[13px]"
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
