"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle } from "lucide-react";

export default function TestimonialsCarouselOne() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true })]
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
        "Before joining the advisory room, I was generating $4.2M annually but pulling 80-hour weeks. Within 14 months of implementing the Extraction framework, we hit $7.8M while I reduced my active working hours to under 20 per week.",
      name: "Marcus Vance",
      title: "Founder & CEO, Apex Logistics",
      milestone: "$4.2M → $7.8M ARR",
      badge: "30X Certainty Milestone",
    },
    {
      quote:
        "The Certainty Calculator was a turning point. It proved mathematically that chasing another $10M in top-line wasn't buying my freedom—re-allocating our profit into yield-producing assets was. My net worth has compounded 300% faster.",
      name: "Elena Rostova",
      title: "Managing Partner, B2B SaaS Group",
      milestone: "$11M Portfolio Value",
      badge: "Equity Extraction Member",
    },
    {
      quote:
        "Every other mastermind is about hustle and raw volume. This is the only boardroom on Earth focused on extracting the founder and turning the enterprise into a self-managing machine that can be exited for a premium multiple.",
      name: "David Chen",
      title: "Co-Founder, Omnichannel Commerce",
      milestone: "$3.5M → $9.2M Scale",
      badge: "Boardroom Fellow",
    },
    {
      quote:
        "The peer caliber here is unmatched. Checking your ego at the door with 99 other 8-figure operators who openly share bottlenecks and acquisition blueprints saved our company at least two years of expensive trial and error.",
      name: "Sarah Sterling",
      title: "President, Sterling Medical Tech",
      milestone: "$14.5M Annual Run-Rate",
      badge: "60X Certainty Milestone",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-black overflow-hidden relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c5a059] block mb-3">
                Verified Founder Case Studies
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                From Success Prison to <span className="font-serif-accent italic gold-gradient-text">Absolute Certainty</span>
              </h2>
            </Reveal>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-[#27272a] bg-[#111113] flex items-center justify-center text-white hover:border-[#c5a059] hover:text-[#c5a059] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-[#27272a] bg-[#111113] flex items-center justify-center text-white hover:border-[#c5a059] hover:text-[#c5a059] transition-all"
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
                <div className="h-full p-8 md:p-10 rounded-sm bg-[#0E0E10] border border-[#222226] hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col justify-between relative group">
                  {/* Subtle top gold accent glow on card */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Header with Star Rating and Badge */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-1 text-[#c5a059]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={15} className="fill-[#c5a059]" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded bg-[#1A1A1E] border border-[#2B2B32] text-[#fae19c]">
                        {item.badge}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-[#D4D4D8] font-sans text-base md:text-[17px] leading-relaxed italic mb-8">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Founder Profile */}
                  <div className="pt-6 border-t border-[#1C1C22] flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-serif font-bold text-white text-base md:text-lg flex items-center gap-1.5">
                        {item.name}
                        <CheckCircle size={15} className="text-[#c5a059]" />
                      </h4>
                      <p className="text-xs text-[#80808a] font-sans mt-0.5">{item.title}</p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-[#c5a059] block font-mono">
                        {item.milestone}
                      </span>
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
                index === selectedIndex ? "w-8 bg-[#c5a059]" : "w-2 bg-[#27272a]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
