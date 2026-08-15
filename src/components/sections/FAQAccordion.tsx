"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Plus } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I know if my enterprise qualifies for Dragon 100™?",
      answer:
        "Dragon 100™ is reserved for owners of validated operations generating between $1M and $10M+ in annual revenue. Beyond revenue, our chief qualifier is operational reality: you have achieved commercial validation, but find yourself trapped as the primary bottleneck and 'Chief Everything Officer' of your enterprise.",
    },
    {
      question: "How is this different from generic mastermind groups or business courses?",
      answer:
        "Masterminds typically celebrate raw revenue growth and more hustle, creating a bigger cage for the founder. Dragon 100™ is a closed-door Strategic Advisory Board focused on Extraction. We do not sell courses—we install proven operating software, automated financial waterfall models, and high-level peer accountability designed to hit your Certainty Number.",
    },
    {
      question: "How does Dragon 100™ compare to frameworks like EOS® or Scaling Up?",
      answer:
        "Frameworks like EOS® optimize how the company runs, but they rarely solve how the founder gets out. We focus squarely on the Three E's: Efficiency, Extraction, and Equity Multiple. Our target is buying back your time, achieving a 4-day executive work week, and positioning your company for a premium institutional exit.",
    },
    {
      question: "I am already completely overwhelmed. How much time commitment is required?",
      answer:
        "If you feel you don't have time to fix your business bottlenecks, that is the exact reason Dragon 100™ exists. This boardroom is engineered to eliminate 20–40 hours of operational drag from your week through structured delegation and automated systems. You are not adding tasks—you are installing extraction engines.",
    },
    {
      question: "Why is membership capped at exactly 100 founders worldwide?",
      answer:
        "This is an intentional, finite mission. Our advisory board prioritizes peer intimacy, zero solicitation, and direct strategic access. Once the 100th seat is finalized and those founders reach their certainty milestones, the doors lock permanently.",
    },
    {
      question: "What exact tools and deliverables are included upon acceptance?",
      answer:
        "Members receive full deployment access to the proprietary Certainty Engine™ software, 6+ years of vetted intelligence and legal contracts in The Vault, 24/7 private Slack boardroom access, monthly Advisory Board intensives, and private 1-on-1 strategic diagnostic sessions.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#080808] border-t border-[#18181B] relative">
      <div className="max-w-[900px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#c5a059] block mb-3">
              Direct Answers
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-6">
              Frequently Asked <span className="font-serif-accent italic gold-gradient-text">Questions</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base text-[#A1A1AA] leading-relaxed font-sans">
              Clear answers regarding eligibility, boardroom mechanics, and advisory deliverables.
            </p>
          </Reveal>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="rounded-sm bg-[#0E0E10] border border-[#222226] overflow-hidden transition-colors hover:border-[#c5a059]/40">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif font-bold text-base sm:text-lg text-white pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="w-8 h-8 rounded-full bg-[#18181B] border border-[#2B2B32] flex items-center justify-center text-[#c5a059] flex-shrink-0"
                    >
                      <Plus size={16} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 text-sm md:text-base text-[#A1A1AA] leading-relaxed font-sans border-t border-[#18181D]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
