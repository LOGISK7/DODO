import React from 'react';
import { offer } from '../../content/ar-offer';

export default function CtaBand() {
  return (
    <section className="offer-section cta" style={{ textAlign: 'center' }}>
      <div className="offer-container narrow" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <a href={offer.cta.target} className="offer-button" style={{ 
          background: '#111', 
          color: 'var(--cta)', 
          border: '1px solid #111' 
        }}>
          {offer.price.button}
        </a>
      </div>
    </section>
  );
}
