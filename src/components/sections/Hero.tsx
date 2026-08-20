"use client";

import React, { useState } from "react";
import { ScrollExpandMedia } from "@/components/ui/scroll-expansion-hero";
import { Cpu, ShieldCheck, Play } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full bg-[var(--bg-primary)]">
      {/* HUD Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] [background-size:64px_64px] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,240,255,0.05)_0%,transparent_60%)] pointer-events-none" />

      {/* Cybernetic Grid Overlay */}
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-50" />

      <ScrollExpandMedia
        media={
          <div 
            className="relative w-full h-full flex flex-col items-center justify-center bg-[#000] border border-[var(--border-subtle)] cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Replace this div with your actual video or image tag */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen transition-transform duration-700 ease-out hover:scale-105" />
            
            {/* Top scanning line effect */}
            <motion.div 
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-primary)] opacity-20 z-30 pointer-events-none"
            />

            <div className="relative z-20 text-center flex flex-col items-center px-6 pointer-events-none">
              <motion.div 
                animate={{ 
                  scale: isHovered ? 1.05 : 1,
                  borderColor: isHovered ? "var(--accent-primary)" : "rgba(0, 240, 255, 0.4)"
                }}
                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-2 border-[var(--border-subtle)] mb-4 bg-black/50 hud-glass transition-colors duration-300"
              >
                <Play className="w-6 h-6 md:w-8 md:h-8 fill-none text-[var(--accent-primary)] ml-1" strokeWidth={2} />
              </motion.div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-primary)] mb-2 font-mono drop-shadow-md">
                [ENCRYPTED_STREAM_01]
              </p>
              <p className="text-sm md:text-base lg:text-xl text-[var(--text-primary)] font-mono max-w-lg drop-shadow-lg opacity-90">
                “The Mechanics of Operational Extraction & Autonomous Scale”
              </p>
            </div>

            {/* HUD Crosshairs */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[var(--accent-primary)] z-20 pointer-events-none opacity-70" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-[var(--accent-primary)] z-20 pointer-events-none opacity-70" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-[var(--accent-primary)] z-20 pointer-events-none opacity-70" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[var(--accent-primary)] z-20 pointer-events-none opacity-70" />
            
            {/* Bottom Tech Bar */}
            <div className="absolute bottom-0 left-0 right-0 py-3 px-6 flex flex-wrap items-center justify-between text-xs font-mono uppercase tracking-widest text-[var(--accent-primary)] bg-black/60 border-t border-[var(--border-subtle)] z-20 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Secure Protocol
              </span>
              <span>Uplink: Active</span>
            </div>
          </div>
        }
      >
        <div className="flex flex-col items-center text-center max-w-[1080px] mx-auto w-full">
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

          {/* Main Headline */}
          <Reveal delay={0.15}>
            <h1 className="text-huge font-heading font-bold text-[var(--text-primary)] mb-8">
              Why Everyone Is Dead Wrong About{" "}
              <span className="text-neon block sm:inline">
                Building a 7-Figure Enterprise
              </span>
            </h1>
          </Reveal>

          {/* Subheadline */}
          <Reveal delay={0.25}>
            <div className="relative mb-12">
              <span className="absolute -left-6 top-0 text-[10px] text-[var(--accent-primary)] font-mono opacity-50 hidden md:block">[LOG_INIT]</span>
              <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-[840px] leading-relaxed font-mono">
                The brutal reality of how the high-revenue machine you forged became an all-consuming <strong className="text-[var(--text-primary)]">“Success Prison”</strong> that drains your life and prevents true equity extraction.
              </p>
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[560px] relative mx-auto">
              <div className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[var(--accent-primary)] opacity-30 hidden md:block" />
              <div className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[var(--accent-primary)] opacity-30 hidden md:block" />
              
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
        </div>
      </ScrollExpandMedia>
    </section>
  );
}
