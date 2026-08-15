import React from "react";

export default function Qualifications() {
  const perfectFor = [
    "You run a validated operation generating $1M to $10M+ in annual revenue that is fundamentally working, but it currently dominates 100% of your time, energy, and mental bandwidth.",
    "You are tired of building in absolute isolation. You want a vetted, elite sounding board of peers because you realize that isolation at the 7 and 8-figure level is a major liability - and you go further, faster, together.",
    "You are uncompromisingly committed to hitting your Certainty Number as soon as possible. You want to stop trading your life for active income and focus completely on building up your investable net worth that gives you all the free time.",
    "You want to engineer a self-sustaining asset, not maintain a job. You are ready to install a world-class team culture that executes flawlessly without relying on your personal oversight or adrenaline.",
    "You operate with a high-level, “go-giver” mentality. You are willing to check your ego at the door, drop the armor, and openly share your frameworks, bottlenecks, and wins to help elevate the entire room."
  ];

  const notFor = [
    "You are purely ego-driven and just want to build “bigger.” If you are obsessed with chasing a vanity revenue number just to brag at cocktail parties - even if it strips away your profit and traps you deeper in a Success Prison, this group will frustrate you.",
    "You don’t value family, health, or quality time. If you are content sacrificing your relationships, missing your kids growing up, and being a stranger to your spouse for the sake of a corporate P&L, you won't fit our culture.",
    "You are an unapologetic workaholic who wants to hustle until you drop dead. If your entire identity is wrapped up in the grind and you have no desire to build an automated engine that allows you to step away, save your time. We build machines; we don’t celebrate self-sabotage.",
    "You want a casual networking group to pitch or solicit. We enforce a strict, zero-tolerance, one-strike ejection rule for solicitation. This is a closed-door sanctuary for 8-figure practitioners, not a lead-generation mixer."
  ];

  const steps = [
    { step: "step 1", title: "apply", desc: "Click the “Apply for Membership” button and complete the application. Your answers help us determine if you’re the right fit" },
    { step: "step 2", title: "interview", desc: "If your application is strong, you’ll be invited to a private interview to discuss your business, goals, and challenges." },
    { step: "step 3", title: "acceptance", desc: "If we believe you’re a fit, you’ll receive an official invitation to join Dragon 100. Membership is capped at 100 founders worldwide — once we’re full, the doors close." },
    { step: "step 4", title: "orientation & onboarding", desc: "Once accepted, you'll be onboarded into the Certainty Engine™ software, granted access to 6 years of intelligence in the Vault, and receive your Slack community credentials. Your journey to your Certainty number begins." }
  ];

  return (
    <section id="qualification" className="section bg-[var(--bg-secondary)]">
      <div className="container">
        
        {/* Qualifications Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-24">
          
          {/* Perfect For */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-10 text-[var(--text-primary)] leading-tight">
              <span className="text-[var(--accent)]">DRAGON 100™</span> is the Perfect Home For You If:
            </h3>
            <div className="space-y-8">
              {perfectFor.map((text, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Not For */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-10 text-[var(--text-primary)] leading-tight">
              This is Absolutely <span className="text-[#ef4444]">Not For You If:</span>
            </h3>
            <div className="space-y-8">
              {notFor.map((text, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Steps Process */}
        <div className="max-w-[1000px] mx-auto mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold">Here’s how to see if you qualify.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--border-accent)] to-transparent z-0"></div>
            
            {steps.map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border-accent)] flex flex-col items-center justify-center mb-6 shadow-[0_0_20px_var(--accent-glow)]">
                  <span className="font-label text-[10px] tracking-widest text-[var(--accent)] uppercase mb-1">
                    {item.step}
                  </span>
                </div>
                <h4 className="font-heading text-xl font-bold mb-4 uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center flex justify-center">
            <button className="btn-primary">
              APPLY NOW
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
