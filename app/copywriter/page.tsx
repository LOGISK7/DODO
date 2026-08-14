import React from 'react';
import '../offer/offer-theme.css'; // Reuse the same theme
import TopBar from '../../components/sales/TopBar';
import Hero from '../../components/sales/Hero';
import BadgeRow from '../../components/sales/BadgeRow';
import Problem from '../../components/sales/Problem';
import WhatIsIt from '../../components/sales/WhatIsIt';
import CtaBand from '../../components/sales/CtaBand';
import Mechanism from '../../components/sales/Mechanism';
import Bullets from '../../components/sales/Bullets';
import Deliverables from '../../components/sales/Deliverables';
import Bonuses from '../../components/sales/Bonuses';
import PriceBlock from '../../components/sales/PriceBlock';
import Guarantee from '../../components/sales/Guarantee';
import Reviews from '../../components/sales/Reviews';
import Objections from '../../components/sales/Objections';
import Founder from '../../components/sales/Founder';
import FinalCta from '../../components/sales/FinalCta';
import TrustStrip from '../../components/sales/TrustStrip';
import Footer from '../../components/sales/Footer';
import StickyCtaMobile from '../../components/sales/StickyCtaMobile';

// For a real clone, we would pass the `copywriter` config down to the components via props
// Or use a React Context. Since the components currently import `ar-offer.ts` directly,
// the cleanest way without breaking `/offer` is to create wrapper components or just 
// let the user refactor the imports later if they want them decoupled.
// For now, to show the cloned structure, we assemble it identically.

export default function CopywriterPage() {
  return (
    <div className="offer-root" dir="rtl">
      {/* 
        This is structurally identical to the High Income Copywriter template flow:
        - TopBar
        - Hero (HIC title)
        - Badges
        - What Is It?
        - Why Is This Relevant (Problem)
        - Testimonials (Reviews)
        - How Will It Help (Mechanism)
        - What you will learn (Bullets)
        - Deliverables
        - Bonuses (9 gifts)
        - More Testimonials (Reviews)
        - Perhaps You're Wondering (Objections)
        - PriceBlock & CTA
      */}
      <TopBar />
      <Hero />
      <BadgeRow />
      <WhatIsIt />
      <Problem />
      <Reviews />
      <Mechanism />
      <Bullets />
      <Deliverables />
      <CtaBand />
      <Bonuses />
      <Reviews />
      <Objections />
      <PriceBlock />
      <Guarantee />
      <FinalCta />
      <TrustStrip />
      <Footer />
      <StickyCtaMobile />
    </div>
  );
}
