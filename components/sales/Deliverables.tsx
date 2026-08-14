import React from 'react';
import { offer } from '../../content/ar-offer';
import ImgBox from './ImgBox';

export default function Deliverables() {
  return (
    <section className="offer-section light">
      <div className="offer-container">
        <h2 style={{ marginBottom: '48px' }}>{offer.deliverables.title}</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {offer.deliverables.items.map((item, idx) => {
            const num = (idx + 1).toString().padStart(2, '0');
            return (
              <div key={idx} style={{ 
                border: '1px solid var(--line-l)', 
                borderRadius: '4px', 
                padding: '24px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '32px',
                alignItems: 'center'
              }}>
                <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ 
                    background: '#111', 
                    color: 'var(--hl)', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    padding: '4px 8px',
                    borderRadius: '2px',
                    fontSize: '15px',
                    fontWeight: 700,
                    alignSelf: 'flex-start'
                  }}>
                    <span className="lat">{num}</span>
                  </div>
                  <h3 style={{ fontSize: '20px', margin: 0 }}>{item.title}</h3>
                  <p style={{ fontSize: '17px', margin: 0 }}>{item.desc}</p>
                </div>
                <div style={{ flexShrink: 0, width: '100%', maxWidth: '320px', marginInline: 'auto' }}>
                  <ImgBox width={320} height={200} filename={`deliverable-${num}.png`} alt={`Deliverable ${num}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
