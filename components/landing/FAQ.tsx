"use client";

import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I know if I qualify for Dragon 100™?",
      answer: "We exclusively work with elite founders in the $1M – $10M+ range. Beyond the revenue, the true qualifier is your current reality: If you have already achieved 'success' but find yourself trapped as the bottleneck and the 'Chief Everything Officer' of your own company, you are exactly who this was built for."
    },
    {
      question: "Is this just another mastermind or a course?",
      answer: "Most masterminds are about 'more'—more revenue, more hustle, and more noise. Dragon 100™ is a strategic advisory board focused on Extraction. We aren't here to give you another 'course' to watch; we are here to help you install the systems required to hit your Certainty Number and buy your life back. This is a finite mission with a definitive finish line."
    },
    {
      question: "What makes Dragon 100™ different from EOS or Scaling Up?",
      answer: "EOS and Scaling Up are great for building a better machine. But a better machine often just creates a bigger cage for the founder. While those frameworks focus on how the business runs, we focus on how the owner exits. We don't just optimize your company; we optimize your life by shifting your focus to the Three E's: Efficiency, Extraction, and Equity Value."
    },
    {
      question: "How much time do I need to commit? I'm already overwhelmed.",
      answer: "If the thought of 'adding one more thing' to your plate is stressful, you are the reason this program exists. Dragon 100™ isn't about spending time; it's about buying it back. Our goal is to move you toward a 4-day work week and the ability to take months of unplugged vacation. If you don't have time to fix your 'Success Prison,' you'll be a prisoner for life."
    },
    {
      question: "Why is membership capped at exactly 100?",
      answer: "This is Dan's Last Dance. This is a legacy mission with a definitive expiration date. Dan's final professional goal is to lead exactly 100 Dragons to their Certainty Number. Once that 100th finish line is crossed and those founders have bought their lives back, Dan will retire from the business world and shut down the program forever."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section bg-[var(--bg-primary)] border-t border-[var(--border)]">
      <div className="container max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight">FAQ’s</h2>
        
        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`accordion-item ${isOpen ? 'open' : ''} border-b border-[var(--border)]`}
              >
                <button 
                  className="accordion-trigger w-full flex justify-between items-center py-6 text-left"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-[var(--accent)]' : 'text-white hover:text-[var(--accent)]'}`}>
                    {faq.question}
                  </span>
                  <div className={`accordion-icon w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>
                <div 
                  className="accordion-content overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-8 text-[16px] text-[var(--text-secondary)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
