import React from 'react';
import { offer } from '../../content/ar-offer';

export default function Bullets() {
  return (
    <section className="offer-section dark">
      <div className="offer-container">
        <h2 style={{ textAlign: 'center', marginBottom: '64px' }}>{offer.bullets.title}</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '24px',
          maxWidth: '960px',
          marginInline: 'auto'
        }}>
          {offer.bullets.items.map((bullet, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--green)', fontSize: '22px', flexShrink: 0, lineHeight: 1 }}>✓</span>
              <span style={{ fontSize: '18px', lineHeight: 1.6 }}>{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
