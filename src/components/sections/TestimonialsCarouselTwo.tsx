"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronLeft, ChevronRight, Award, CheckCircle, TrendingUp } from "lucide-react";

export default function TestimonialsCarouselTwo() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const testimonials = [
    {
      quote:
        "The board helped us negotiate a strategic partnership that added $3.8M in enterprise value overnight. Having this caliber of advisors in your corner is an unfair competitive advantage.",
      name: "Arthur Pendelton",
      title: "Founder, Apex FinTech Solutions",
      milestone: "$18.2M Valuation",
      award: "Infinity Dragon Recipient",
    },
    {
      quote:
        "I was skeptical about another mastermind. But Dragon 100 isn't a course—it's an operational software and advisory ecosystem. The automated dashboard alone saved our CFO 20 hours a month.",
      name: "Victoria Lindqvist",
      title: "CEO, Scandinavian Health Group",
      milestone: "$6.4M Net Extraction",
      award: "60X Certainty Award",
    },
    {
      quote:
        "We restructured our management team using the Dragon Operating Framework. Within 9 months, our EBITDA margin expanded from 18% to 34%, while our top line continued to accelerate.",
      name: "Jonathan Reyes",
      title: "Principal, Nexus Direct Media",
      milestone: "+16% Margin Expansion",
      award: "30X Certainty Award",
    },
    {
      quote:
        "When you hit $8M in revenue, standard business advice stops working. You need peer intelligence from people who have navigated 9-figure exits. This room delivers exactly that.",
      name: "Karan Malhotra",
      title: "Founder, OmniChannel Brand Ventures",
      milestone: "$24M Enterprise Run-Rate",
      award: "Dragon of the Year",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] overflow-hidden relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-cobalt)] block mb-3">
                Proven Track Record
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight">
                Enterprise Value <span className="font-heading italic text-[var(--accent-cobalt)]">Milestones</span>
              </h2>
            </Reveal>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-cobalt)] hover:text-[var(--accent-cobalt)] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-cobalt)] hover:text-[var(--accent-cobalt)] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] pl-6 min-w-0"
              >
                <div className="h-full p-8 md:p-10 rounded-sm bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-cobalt)] transition-all duration-300 flex flex-col justify-between relative group">
                  
                  <div>
                    {/* Award Badge */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-cobalt-light)]">
                        <Award size={16} className="text-[var(--accent-cobalt)]" />
                        <span>{item.award}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[var(--accent-cobalt)] bg-[#1B1B20] px-2.5 py-1 rounded">
                        <TrendingUp size={13} />
                        <span>{item.milestone}</span>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-[var(--text-primary)] font-sans text-base md:text-[17px] leading-relaxed italic mb-8">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Founder Profile */}
                  <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-heading font-bold text-[var(--text-primary)] text-base md:text-lg flex items-center gap-1.5">
                        {item.name}
                        <CheckCircle size={15} className="text-[var(--accent-cobalt)]" />
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] font-sans mt-0.5">{item.title}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-8 bg-[var(--accent-cobalt)]" : "w-2 bg-[#27272a]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
