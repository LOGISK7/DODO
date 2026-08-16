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
    <div className="min-h-screen bg-black text-[#EDEDED] flex flex-col">
      {/* N1b Canonical SaaS Navigation */}
      <Navbar />

      <main className="flex-grow flex flex-col gap-12 lg:gap-24 mb-24">
        {/* Fixed-height hero with centered display */}
        <header className="hero-fixed min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-24">
          <Hero />
        </header>

        {/* Bento Grid: Modular blocks of varying sizes */}
        <section className="bento max-w-7xl mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <article className="cell col-span-1 md:col-span-2 lg:col-span-4 bg-[#111] rounded-2xl overflow-hidden p-6 md:p-10 border border-[rgba(255,255,255,0.08)]">
            <PainPoints />
          </article>
          
          <article className="cell col-span-1 lg:col-span-2 bg-[#111] rounded-2xl overflow-hidden p-6 border border-[rgba(255,255,255,0.08)]">
            <InteractiveCalculator />
          </article>
          
          <article className="cell col-span-1 lg:col-span-2 bg-[#111] rounded-2xl overflow-hidden p-6 border border-[rgba(255,255,255,0.08)]">
            <FrameworkThreeEs />
          </article>
          
          <article className="cell col-span-1 md:col-span-2 lg:col-span-4 bg-transparent py-10">
            <ProofWall />
          </article>
          
          <article className="cell col-span-1 md:col-span-2 bg-[#111] rounded-2xl overflow-hidden p-6 border border-[rgba(255,255,255,0.08)]">
            <TestimonialsCarouselOne />
          </article>

          <article className="cell col-span-1 md:col-span-2 bg-[#111] rounded-2xl overflow-hidden p-6 border border-[rgba(255,255,255,0.08)]">
            <Qualifications />
          </article>
        </section>

        {/* Long Form / Narrative Flow below the fold */}
        <section className="max-w-4xl mx-auto w-full px-4 flex flex-col gap-16 mt-16">
          <NarrativeSection />
          <BigStatement />
          <ProcessTimeline />
          <FounderBio />
          <FAQAccordion />
        </section>
        
        <section className="max-w-7xl mx-auto w-full px-4">
          <TestimonialsCarouselTwo />
        </section>
      </main>

      {/* Ft5 Statement Footer */}
      <Footer />
    </div>
  );
}
