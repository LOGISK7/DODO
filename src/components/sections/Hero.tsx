"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Play, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[var(--bg-primary)]">
      {/* HUD Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] [background-size:64px_64px] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,240,255,0.05)_0%,transparent_60%)] pointer-events-none" />

      {/* Cybernetic Grid Overlay */}
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-50" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center flex flex-col items-center relative z-10">
        
        {/* HUD Eyebrow Badge */}
        <Reveal delay={0.05}>
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-[var(--bg-card)] hud-border hud-glass mb-8 relative">
            <Cpu className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent-primary)] font-mono">
              System Cap: 100 Nodes Online
            </span>
            <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--accent-primary)] animate-pulse" />
          </div>
        </Reveal>

        {/* Main Headline - Glitching HUD Text */}
        <Reveal delay={0.15}>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-huge font-heading font-bold text-[var(--text-primary)] max-w-[1080px] mb-8"
          >
            Why Everyone Is Dead Wrong About{" "}
            <span className="text-neon block sm:inline">
              Building a 7-Figure Enterprise
            </span>
          </motion.h1>
        </Reveal>

        {/* Authoritative Subheadline - Data Readout Style */}
        <Reveal delay={0.25}>
          <div className="relative mb-12">
            <span className="absolute -left-6 top-0 text-[10px] text-[var(--accent-primary)] font-mono opacity-50">[LOG_INIT]</span>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-[840px] leading-relaxed font-mono">
              The brutal reality of how the high-revenue machine you forged became an all-consuming <strong className="text-[var(--text-primary)]">“Success Prison”</strong> that drains your life and prevents true equity extraction.
            </p>
          </div>
        </Reveal>

        {/* Dual CTAs - Cyber Buttons */}
        <Reveal delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[560px] mb-16 relative">
            <div className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[var(--accent-primary)] opacity-30" />
            <div className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[var(--accent-primary)] opacity-30" />
            
            <a
              href="#calculator"
              className="btn-cyber-primary w-full sm:w-auto flex-1 text-center"
            >
              Init Extraction Calc
            </a>
            <a
              href="#the-lie"
              className="btn-cyber-ghost w-full sm:w-auto flex-1 text-center"
            >
              Access Data Frame
            </a>
          </div>
        </Reveal>

        {/* Featured Video / HUD Media Frame */}
        <Reveal delay={0.45} className="w-full max-w-[960px]">
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group bg-[var(--bg-card)] p-1 hud-border hud-glass cursor-pointer"
          >
            {/* Top scanning line effect */}
            <motion.div 
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-primary)] opacity-20 z-30 pointer-events-none"
            />

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#000] flex items-center justify-center border border-[var(--border-subtle)]">
              
              <div className="relative z-20 text-center flex flex-col items-center px-6">
                <motion.div 
                  animate={{ 
                    scale: isHovered ? 1.05 : 1,
                    borderColor: isHovered ? "var(--accent-primary)" : "rgba(0, 240, 255, 0.4)"
                  }}
                  className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-2 border-[var(--border-subtle)] mb-4 bg-black/50 hud-glass"
                >
                  <Play className="w-6 h-6 md:w-8 md:h-8 fill-none text-[var(--accent-primary)] ml-1" strokeWidth={2} />
                </motion.div>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-primary)] mb-2 font-mono">
                  [ENCRYPTED_STREAM_01]
                </p>
                <p className="text-sm md:text-base text-[var(--text-primary)] font-mono max-w-lg opacity-80">
                  “The Mechanics of Operational Extraction & Autonomous Scale”
                </p>
              </div>

              {/* HUD Crosshairs */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-[var(--accent-primary)] z-20 pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-[var(--accent-primary)] z-20 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-[var(--accent-primary)] z-20 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-[var(--accent-primary)] z-20 pointer-events-none" />
            </div>

            {/* Bottom Tech Bar */}
            <div className="mt-1 py-2 px-4 flex flex-wrap items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[var(--accent-primary)] bg-black/40 border border-[var(--border-subtle)]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" /> Secure Protocol
              </span>
              <span>Uplink: Active</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
