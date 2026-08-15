"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[rgba(13,13,13,0.95)] backdrop-blur-md border-b border-[var(--border)] py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[var(--accent)] flex items-center justify-center">
            <span className="text-[var(--accent)] font-serif italic font-bold text-lg md:text-xl leading-none">D</span>
          </div>
          <span className="text-white font-heading font-bold text-lg md:text-xl tracking-wider">
            DRAGON <span className="text-[var(--accent)]">100™</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/success-story" className="text-sm font-label font-bold uppercase tracking-widest text-white hover:text-[var(--accent)] transition-colors">
            Success Stories
          </Link>
          <Link href="/apply" className="text-sm font-label font-bold uppercase tracking-widest text-[var(--accent)] hover:text-white transition-colors">
            Apply Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-secondary)] border-b border-[var(--border)] py-4 px-6 flex flex-col gap-4 shadow-xl">
          <Link 
            href="/success-story" 
            className="text-sm font-label font-bold uppercase tracking-widest text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Success Stories
          </Link>
          <Link 
            href="/apply" 
            className="text-sm font-label font-bold uppercase tracking-widest text-[var(--accent)] py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
