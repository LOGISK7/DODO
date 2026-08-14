import React from 'react';
import { offer } from '../../content/ar-offer';
import ImgBox from './ImgBox';

export default function WhatIsIt() {
  return (
    <section className="offer-section dark">
      <div className="offer-container narrow">
        <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>{offer.whatIsIt.title}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
          <p>{offer.whatIsIt.p1}</p>
          <p>{offer.whatIsIt.p2}</p>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '30px', fontWeight: 700, color: 'var(--fg-2)', marginBottom: '8px' }}>{offer.whatIsIt.line1}</div>
          <div style={{ fontSize: '40px', fontWeight: 700, color: 'var(--hl)' }}>{offer.whatIsIt.line2}</div>
        </div>

        <div style={{ border: '1px solid var(--line-d)', borderRadius: '4px', overflow: 'hidden' }}>
          <ImgBox width={1200} height={800} filename="dashboard-1.png" alt="AdLoop Dashboard 1" />
        </div>
      </div>
    </section>
  );
}
