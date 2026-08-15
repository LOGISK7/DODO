"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import OldVsNew from "@/components/landing/OldVsNew";
import Mechanism from "@/components/landing/Mechanism";
import OneProductMany from "@/components/landing/OneProductMany";
import WhatsInside from "@/components/landing/WhatsInside";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatToTestNext from "@/components/landing/WhatToTestNext";
import AIDifferentiation from "@/components/landing/AIDifferentiation";
import ProductShowcase from "@/components/landing/ProductShowcase";
import Bonuses from "@/components/landing/Bonuses";
import SocialProof from "@/components/landing/SocialProof";
import CaseStudies from "@/components/landing/CaseStudies";
import WhyDifferent from "@/components/landing/WhyDifferent";
import WhoItsFor from "@/components/landing/WhoItsFor";
import ValueStack from "@/components/landing/ValueStack";
import Objections from "@/components/landing/Objections";
import Guarantee from "@/components/landing/Guarantee";
import FAQ from "@/components/landing/FAQ";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/landing/Footer";
import CtaBand from "@/components/landing/CtaBand";
import StickyCtaMobile from "@/components/landing/StickyCtaMobile";

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* 1. HERO */}
      <Hero />

      {/* 2. PROBLEM */}
      <Problem />

      {/* 3. OLD WAY VS NEW WAY */}
      <OldVsNew />

      {/* CTA */}
      <CtaBand />

      {/* 4. THE NEW MECHANISM */}
      <Mechanism />

      {/* 5. ONE PRODUCT → MANY CREATIVES */}
      <OneProductMany />

      {/* 6. WHAT'S INSIDE */}
      <WhatsInside />

      {/* CTA */}
      <CtaBand />

      {/* 7. HOW IT WORKS */}
      <HowItWorks />

      {/* 8. WHAT DO I TEST NEXT? */}
      <WhatToTestNext />

      {/* 9. AI DIFFERENTIATION */}
      <AIDifferentiation />

      {/* 10. PRODUCT SHOWCASE */}
      <ProductShowcase />

      {/* CTA */}
      <CtaBand />

      {/* 11. BONUSES */}
      <Bonuses />

      {/* 12. SOCIAL PROOF */}
      <SocialProof />

      {/* 13. CASE STUDIES */}
      <CaseStudies />

      {/* 14. WHY THIS IS DIFFERENT */}
      <WhyDifferent />

      {/* 15. WHO IT'S FOR */}
      <WhoItsFor />

      {/* 16. VALUE STACK & PRICING */}
      <ValueStack />

      {/* 17. OBJECTIONS */}
      <Objections />

      {/* 18. GUARANTEE */}
      <Guarantee />

      {/* 19. FAQ */}
      <FAQ />

      {/* 20. FINAL CTA */}
      <FinalCta />

      {/* FOOTER */}
      <Footer />

      {/* STICKY MOBILE CTA */}
      <StickyCtaMobile />
    </>
  );
}
