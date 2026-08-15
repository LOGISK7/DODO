import React from "react";
import VideoEmbed from "../ui/VideoEmbed";
import { Reveal } from "../ui/Reveal";

export default function TestimonialGrid() {
  const testimonials = [
    {
      name: "Fabio Tesi",
      role: "CEO of ONNWATER",
      headline: "On Track to $15M With Dragon 100!",
      quote: `"Since joining Dragon 100, we've grown from $8M to $11M in revenue and expanded our team by 25 people. Next stop: $15M."`
    },
    {
      name: "Fabio Fontana",
      role: "Founder & CEO of Tao Technologies",
      headline: "Fabio's Income Quadrupled!",
      quote: `"In just one year, my company grew from $1 million to $4 million in revenue—clarity made all the difference."`
    },
    {
      name: "Dev Gadhvi",
      role: "CEO, Passionprenour",
      headline: "Dev Doubled His Revenue Every Year!",
      quote: `"I went from earning just $300,000 a year to building a $6 million business—and now heading toward $10 million—all thanks to Dragon 100 and Sifu Dan Lok."`
    },
    {
      name: "Shay Levister",
      role: "Master Certified Dating & Relationship Coach",
      headline: "Doubling Business Income!",
      quote: `"I've been able to significantly increase my business, my business income doubled when I started working with Dan."`
    }
  ];

  return (
    <section className="section bg-[var(--bg-secondary)] border-y border-[var(--border)]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((test, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col gap-6">
                <VideoEmbed />
                <div>
                  <h4 className="font-heading text-xl md:text-2xl font-bold mb-4">{test.headline}</h4>
                  <p className="text-[16px] text-[var(--text-secondary)] italic mb-6 leading-relaxed">
                    {test.quote}
                  </p>
                  <div>
                    <p className="font-bold text-white text-[16px]">{test.name}</p>
                    <p className="text-[14px] text-[var(--text-muted)]">{test.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={0.4}>
          <div className="mt-20 text-center">
            <button className="btn-ghost">
              WATCH MORE SUCCESS STORIES
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
