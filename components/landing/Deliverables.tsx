import React from "react";

export default function Deliverables() {
  const deliverables = [
    {
      title: "Strategic Advisory Board",
      desc: "Monthly Advisory Board Calls to diagnose bottlenecks and map out your path to the Certainty Number."
    },
    {
      title: "Certainty Engine™ Software",
      desc: "Our proprietary internal tool designed to track your exact Extraction progress and Investable Net Worth metrics."
    },
    {
      title: "The Vault",
      desc: "Access to 6 years of high-level intelligence, operating procedures, and 8-figure scaling frameworks."
    },
    {
      title: "Private Network",
      desc: "A closed-door Slack community populated strictly by vetted $1M–$10M+ founders who actually execute."
    }
  ];

  return (
    <section className="section bg-[var(--bg-secondary)] border-y border-[var(--border)]">
      <div className="container max-w-[1000px] mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What do I <span className="text-[var(--accent)] font-serif italic">actually get</span> when I join?
          </h2>
          <p className="text-[17px] text-[var(--text-secondary)] max-w-[700px] mx-auto leading-relaxed">
            You get the strategic advisory and the machinery. We provide the same clarity as major corporate frameworks, but instead of leaving you to implement on your own, we give you the system installed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverables.map((item, idx) => (
            <div key={idx} className="card card-gold-border p-10 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)] mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-heading text-xl font-bold uppercase tracking-wide">{item.title}</h4>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="btn-primary shadow-[0_0_40px_var(--accent-glow)]">
            VIEW ALL MEMBER BENEFITS
          </button>
        </div>
      </div>
    </section>
  );
}
