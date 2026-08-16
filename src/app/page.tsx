import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import TestimonialsCarouselOne from "@/components/sections/TestimonialsCarouselOne";
import NarrativeSection from "@/components/sections/NarrativeSection";
import BigStatement from "@/components/sections/BigStatement";
import FrameworkThreeEs from "@/components/sections/FrameworkThreeEs";
import TestimonialsCarouselTwo from "@/components/sections/TestimonialsCarouselTwo";
import InteractiveCalculator from "@/components/sections/InteractiveCalculator";
import ProofWall from "@/components/sections/ProofWall";
import Qualifications from "@/components/sections/Qualifications";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FounderBio from "@/components/sections/FounderBio";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-secondary)] flex flex-col font-sans overflow-x-hidden selection:bg-[var(--accent-cobalt)] selection:text-white">
      {/* N5 Floating pill */}
      <Navbar />

      <main className="flex-grow flex flex-col mb-24">
        {/* Marquee Hero Macrostructure */}
        <header className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-card)]">
          <Hero />
          
          {/* Marquee Background Element */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none z-0">
            <span className="text-[15vw] font-bold tracking-tighter uppercase font-heading">
              DIGITAL COMMERCE MASTERY
            </span>
          </div>
        </header>

        {/* Linear Flow / Workbench Section */}
        <div className="w-full bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
          <section className="max-w-5xl mx-auto w-full px-4 py-20 flex flex-col gap-12">
            <PainPoints />
          </section>
        </div>

        {/* Feature & Proof Sections */}
        <section className="max-w-5xl mx-auto w-full px-4 py-24 flex flex-col gap-24">
          <InteractiveCalculator />
          
          <div className="border-l-2 border-[var(--accent-cobalt)] pl-6 md:pl-10">
            <FrameworkThreeEs />
          </div>
        </section>

        {/* Social Proof Strip */}
        <div className="w-full bg-[var(--bg-card-elevated)] border-y border-[var(--border-subtle)] py-20">
          <section className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-16">
            <ProofWall />
            <TestimonialsCarouselOne />
          </section>
        </div>

        {/* Deep Narrative Flow */}
        <section className="max-w-3xl mx-auto w-full px-4 py-24 flex flex-col gap-20">
          <Qualifications />
          <NarrativeSection />
          <BigStatement />
          <ProcessTimeline />
          <FounderBio />
        </section>

        {/* Final CTA / FAQ */}
        <div className="w-full bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] py-24">
          <section className="max-w-4xl mx-auto w-full px-4 flex flex-col gap-20">
            <FAQAccordion />
            <TestimonialsCarouselTwo />
          </section>
        </div>
      </main>

      {/* Ft2 Brutal Minimal Footer */}
      <Footer />
    </div>
  );
}
