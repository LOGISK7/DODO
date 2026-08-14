'use client';
import React from 'react';
import { offer } from '../../content/ar-offer';

// Dummy track function, replace with real analytics later
const track = (event: string, data: any) => {
  console.log(event, data);
};

export default function Objections() {
  return (
    <section className="offer-section light">
      <div className="offer-container narrow">
        <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>{offer.objections.title}</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {offer.objections.items.map((item, idx) => {
            const isLast = idx === offer.objections.items.length - 1;
            return (
              <details 
                key={idx} 
                open={idx === 0}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) {
                    track("faq_opened", { index: idx });
                  }
                }}
                style={{
                  borderBottom: '1px solid var(--line-l)',
                  background: isLast ? 'rgba(0, 0, 0, 0.03)' : 'transparent',
                  padding: isLast ? '24px' : '0',
                  borderRadius: isLast ? '4px' : '0',
                  border: isLast ? '1px solid var(--line-l)' : undefined,
                  marginBottom: isLast ? '0' : '0' // To offset standard borders
                }}
              >
                <summary style={{ 
                  paddingBlock: '24px', 
                  fontSize: '18px', 
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  listStyle: 'none'
                }}>
                  <span>{item.q}</span>
                  <span style={{ opacity: 0.5 }}>▼</span>
                </summary>
                <div style={{ 
                  paddingBottom: '24px', 
                  fontSize: '17px', 
                  lineHeight: 1.85, 
                  color: 'var(--ink)' 
                }}>
                  {item.a}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
