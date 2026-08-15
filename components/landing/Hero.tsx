import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Background styling for Dragon 100 look */}
      <div className="absolute inset-0 z-0 bg-[var(--bg-primary)]">
        {/* Subtle top gradient */}
        <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-[rgba(188,161,101,0.05)] to-transparent" />
      </div>

      <div className="container relative z-10 text-center flex flex-col items-center">
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-[1000px] leading-[1.1] mb-8 tracking-tight">
          Why Almost Everyone Is Dead Wrong About{" "}
          <span className="text-[var(--accent)] font-serif italic font-bold">Building a 7 or 8-Figure Empire</span>…
        </h1>
        
        <p className="text-[17px] md:text-[20px] text-[var(--text-secondary)] max-w-[800px] leading-relaxed mb-12">
          And the Brutal Truth About How the Business You Forged to Set You Free Became a High-Revenue “Success Prison” That Has Left You Broke, Burned Out, and Bound to a Machine You Can’t Ever Leave.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-[600px]">
          <button className="btn-ghost flex-1">
            MEMBER BENEFITS
          </button>
          <button className="btn-primary flex-1">
            APPLY NOW
          </button>
        </div>
        
      </div>
    </section>
  );
}
