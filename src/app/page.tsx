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
import { BentoCard } from "@/components/ui/BentoCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#EDEDED] flex flex-col selection:bg-[#c5a059] selection:text-black">
      {/* N1b Canonical SaaS Navigation */}
      <Navbar />

      <main className="flex-grow flex flex-col gap-12 lg:gap-24 mb-24">
        {/* Fixed-height hero with centered display */}
        <header className="hero-fixed min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-24">
          <Hero />
        </header>

        {/* Bento Grid: Modular blocks of varying sizes */}
        <section className="bento max-w-7xl mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <BentoCard delay={0.1} className="col-span-1 md:col-span-2 lg:col-span-4 p-6 md:p-10">
            <PainPoints />
          </BentoCard>
          
          <BentoCard delay={0.2} className="col-span-1 lg:col-span-2 p-6">
            <InteractiveCalculator />
          </BentoCard>
          
          <BentoCard delay={0.3} className="col-span-1 lg:col-span-2 p-6">
            <FrameworkThreeEs />
          </BentoCard>
          
          <article className="cell col-span-1 md:col-span-2 lg:col-span-4 bg-transparent py-10">
            <ProofWall />
          </article>
          
          <BentoCard delay={0.4} className="col-span-1 md:col-span-2 p-6">
            <TestimonialsCarouselOne />
          </BentoCard>

          <BentoCard delay={0.5} className="col-span-1 md:col-span-2 p-6">
            <Qualifications />
          </BentoCard>
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
