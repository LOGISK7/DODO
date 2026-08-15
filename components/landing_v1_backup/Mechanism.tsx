"use client";

import { useEffect, useState } from "react";

const steps = [
  { label: "CREATE", labelAr: "أنشئ", icon: "🎬", color: "#d4a843" },
  { label: "TEST", labelAr: "اختبر", icon: "🧪", color: "#22c55e" },
  { label: "ANALYZE", labelAr: "حلل", icon: "📊", color: "#3b82f6" },
  { label: "IMPROVE", labelAr: "طوّر", icon: "🚀", color: "#a855f7" },
];

export default function Mechanism() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="mechanism" className="section" style={{ background: "var(--bg-tertiary)" }}>
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          الآلية: <span style={{ color: "var(--accent)" }}>النظام الذي يتعلم</span>
        </h2>
        <p className="section-subtitle reveal">
          ليس خطوة واحدة. إنه دورة مستمرة — كل اختبار يبني على اللي قبله.
        </p>

        {/* Animated Loop */}
        <div className="reveal max-w-[700px] mx-auto mt-12">
          {/* Circle visualization */}
          <div className="relative mx-auto" style={{ width: "min(100%, 500px)", aspectRatio: "1" }}>
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-8">
              <span className="text-4xl mb-3">{steps[active].icon}</span>
              <span
                className="text-3xl md:text-4xl font-[900] tracking-wide transition-all duration-500"
                style={{ fontFamily: "var(--font-heading)", color: steps[active].color }}
              >
                {steps[active].label}
              </span>
              <span className="text-lg mt-2" style={{ color: "var(--text-secondary)" }}>
                {steps[active].labelAr}
              </span>
            </div>

            {/* Orbital ring */}
            <svg viewBox="0 0 400 400" className="w-full h-full absolute inset-0">
              {/* Background ring */}
              <circle cx="200" cy="200" r="170" fill="none" stroke="var(--border)" strokeWidth="1" />

              {/* Progress arc */}
              <circle
                cx="200"
                cy="200"
                r="170"
                fill="none"
                stroke={steps[active].color}
                strokeWidth="2"
                strokeDasharray={`${((active + 1) / steps.length) * 1068} 1068`}
                strokeLinecap="round"
                className="transition-all duration-1000"
                style={{ transformOrigin: "center", transform: "rotate(-90deg)", opacity: 0.6 }}
              />
            </svg>

            {/* Step nodes positioned around the circle */}
            {steps.map((step, i) => {
              const angle = (i / steps.length) * 360 - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 170;
              const cx = 50 + (radius / 200) * 50 * Math.cos(rad);
              const cy = 50 + (radius / 200) * 50 * Math.sin(rad);
              const isActive = i === active;

              return (
                <button
                  key={step.label}
                  onClick={() => setActive(i)}
                  className="absolute flex flex-col items-center gap-1 transition-all duration-500 cursor-pointer"
                  style={{
                    left: `${cx}%`,
                    top: `${cy}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-sm flex items-center justify-center text-lg font-bold transition-all duration-500"
                    style={{
                      background: isActive ? step.color : "var(--bg-card)",
                      color: isActive ? "#0b0d11" : "var(--text-muted)",
                      border: `1px solid ${isActive ? step.color : "var(--border)"}`,
                      boxShadow: isActive ? `0 0 24px ${step.color}40` : "none",
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-[11px] font-bold tracking-wider transition-all duration-500"
                    style={{
                      color: isActive ? step.color : "var(--text-muted)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Step descriptions below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 reveal-stagger">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className="reveal text-center p-4 rounded-sm transition-all duration-500 cursor-pointer"
                onClick={() => setActive(i)}
                style={{
                  background: i === active ? `${step.color}10` : "var(--bg-card)",
                  border: `1px solid ${i === active ? `${step.color}40` : "var(--border)"}`,
                }}
              >
                <span className="text-2xl block mb-2">{step.icon}</span>
                <span className="text-sm font-bold block" style={{ color: step.color, fontFamily: "var(--font-heading)" }}>
                  {step.label}
                </span>
                <span className="text-xs block mt-1" style={{ color: "var(--text-muted)" }}>
                  {step.labelAr}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
