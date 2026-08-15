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
      {/* 1. Sticky Luxury Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. 'Ask Yourself' Pain-Point Audit List */}
        <PainPoints />

        {/* 4. Testimonial Carousel #1 (Auto-rotating verified founder stories) */}
        <TestimonialsCarouselOne />

        {/* 5. Narrative & The Success Prison Story */}
        <NarrativeSection />

        {/* 6. Pull-Quote Big Statement */}
        <BigStatement />

        {/* 7. Framework Section (Three E's of Enterprise Freedom) */}
        <FrameworkThreeEs />

        {/* 8. Testimonial Carousel #2 (Enterprise Multiple Milestones) */}
        <TestimonialsCarouselTwo />

        {/* 9. Centerpiece Interactive Certainty Calculator */}
        <InteractiveCalculator />

        {/* 10. Proof Wall (Grayscale Media & Authority Logos) */}
        <ProofWall />

        {/* 11. Qualifications (Who This Is For vs Not For) */}
        <Qualifications />

        {/* 12. 4-Step Numbered Admissions Timeline */}
        <ProcessTimeline />

        {/* 13. Founder Bio & Final Mission */}
        <FounderBio />

        {/* 14. FAQ Accordion */}
        <FAQAccordion />
      </main>

      {/* 15. Compliance Footer & Legal Disclaimers */}
      <Footer />
    </div>
  );
}
