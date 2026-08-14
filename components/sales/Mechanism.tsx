import React from 'react';
import { offer } from '../../content/ar-offer';

export default function Mechanism() {
  return (
    <section className="offer-section light">
      <div className="offer-container narrow">
        <h2 style={{ textAlign: 'center', marginBottom: '64px' }}>{offer.mechanism.title}</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            top: '0', 
            bottom: '0', 
            insetInlineStart: '27px', /* 56/2 = 28 - 1 */
            width: '2px', 
            background: 'var(--line-l)',
            zIndex: 0
          }} />
          
          {offer.mechanism.steps.map((step, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '24px', position: 'relative', zIndex: 1 }}>
              <div style={{ 
                width: '56px', 
                height: '56px', 
                flexShrink: 0,
                background: 'var(--hl)', 
                color: '#111', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: 700,
                borderRadius: '4px'
              }}>
                <span className="lat">{step.letter}</span>
              </div>
              <div style={{ paddingTop: '4px' }}>
                <div className="lat" style={{ fontSize: '15px', color: 'var(--fg-2)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
                  {step.en}
                </div>
                <h3 style={{ marginBottom: '12px', fontSize: '22px' }}>{step.ar}</h3>
                <p style={{ margin: 0 }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
