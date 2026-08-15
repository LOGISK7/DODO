"use client";

import { useEffect, useState } from "react";

const workflowSteps = [
  { label: "المنتج", icon: "📦" },
  { label: "Research", icon: "🔍" },
  { label: "Angles", icon: "🎯" },
  { label: "Hooks", icon: "🪝" },
  { label: "Creatives", icon: "🎬" },
  { label: "Testing", icon: "🧪" },
  { label: "Results", icon: "📊" },
  { label: "Analysis", icon: "🧠" },
  { label: "Next Test", icon: "🔄" },
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0b0d11 0%, #10131a 40%, #141825 100%)" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />

      <div className="container--wide relative z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-6 px-4 py-1.5 text-sm font-semibold tracking-wider"
              style={{ background: "var(--accent-muted)", color: "var(--accent)", border: "1px solid var(--border-accent)", borderRadius: "var(--radius-sm)" }}>
              AI E-Commerce Creative & Ad Testing System
            </div>

            <h1
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] font-[900] mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="block">توقف عن التخمين</span>
              <span className="block" style={{ color: "var(--accent)" }}>
                بشأن الإعلان الذي يجب أن تصنعه بعد ذلك.
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: "var(--text-secondary)", maxWidth: 560 }}>
              حوّل منتجك إلى زوايا وHooks وCreatives متعددة، اختبرها، حلل النتائج، واعرف ماذا يجب أن تختبر بعد ذلك.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#pricing" className="btn-primary text-lg px-10 py-4">
                احصل على النظام الآن
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scaleX(-1)" }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#mechanism" className="btn-ghost text-lg">
                شاهد كيف يعمل
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                وصول فوري
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ابدأ في دقائق
              </span>
            </div>
          </div>

          {/* Product UI Visualization Column */}
          <div className="order-1 lg:order-2">
            <div
              className="relative rounded-md overflow-hidden p-1"
              style={{
                background: "linear-gradient(135deg, var(--border-accent), var(--border), var(--border-accent))",
              }}
            >
              <div
                className="rounded-sm p-6 md:p-8"
                style={{ background: "var(--bg-secondary)" }}
              >
                {/* Mock UI Header */}
                <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
                  </div>
                  <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    creative-system.app
                  </span>
                </div>

                {/* Workflow Pipeline */}
                <div className="space-y-2">
                  {workflowSteps.map((step, i) => {
                    const isActive = i === activeStep;
                    const isPast = i < activeStep;
                    return (
                      <div
                        key={step.label}
                        className="flex items-center gap-3 px-4 py-3 rounded-sm transition-all duration-500"
                        style={{
                          background: isActive
                            ? "var(--accent-muted)"
                            : isPast
                            ? "rgba(255,255,255,0.02)"
                            : "transparent",
                          border: isActive
                            ? "1px solid var(--border-accent)"
                            : "1px solid transparent",
                          opacity: isPast ? 0.5 : 1,
                        }}
                      >
                        <span className="text-base">{step.icon}</span>
                        <span
                          className="text-sm font-semibold flex-1"
                          style={{
                            color: isActive ? "var(--accent)" : isPast ? "var(--text-muted)" : "var(--text-secondary)",
                            fontFamily: "var(--font-heading)",
                          }}
                        >
                          {step.label}
                        </span>
                        {isPast && (
                          <svg width="16" height="16" fill="none" stroke="#22c55e" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                        )}
                        {isActive && (
                          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Progress bar */}
                <div className="mt-6 h-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      background: "var(--accent)",
                      width: `${((activeStep + 1) / workflowSteps.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
