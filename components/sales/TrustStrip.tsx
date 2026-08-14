import React from 'react';
import { offer } from '../../content/ar-offer';

export default function TrustStrip() {
  return (
    <section className="offer-section alt" style={{ paddingBlock: '32px' }}>
      <div className="offer-container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', fontSize: '15px', fontWeight: 700, color: 'var(--fg-2)' }}>
          {offer.trust.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--green)' }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
