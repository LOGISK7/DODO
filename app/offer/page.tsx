import React from 'react';
import './offer-theme.css';
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

export default function OfferPage() {
  return (
    <div className="offer-root" dir="rtl">
      <TopBar />
      <Hero />
      <BadgeRow />
      <Problem />
      <WhatIsIt />
      <CtaBand />
      <Mechanism />
      <Bullets />
      <Deliverables />
      <CtaBand />
      <Bonuses />
      <PriceBlock />
      <Guarantee />
      <Reviews />
      <Objections />
      <Founder />
      <FinalCta />
      <TrustStrip />
      <Footer />
      <StickyCtaMobile />
    </div>
  );
}
