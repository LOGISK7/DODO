import React from 'react';
import { offer } from '../../content/ar-offer';
import { REVIEWS_READY } from '../../config/offer';

export default function Reviews() {
  if (!REVIEWS_READY) return null;

  return (
    <section className="offer-section dark">
      <div className="offer-container">
        <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>{offer.reviews.title}</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {offer.reviews.items.map((review, idx) => (
            <div key={idx} style={{ 
              border: '1px solid var(--line-d)', 
              borderRadius: '4px', 
              padding: '24px',
              backgroundColor: 'var(--bg-alt)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--hl)', letterSpacing: '0.1em' }}>★★★★★</span>
                <span style={{ fontSize: '14px', color: 'var(--fg-2)' }}>{review.date}</span>
              </div>
              <h3 style={{ fontSize: '18px', margin: 0 }}>{review.title}</h3>
              <p style={{ fontSize: '17px', margin: 0, flexGrow: 1 }}>{review.body}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                <div style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '50%', 
                  background: 'var(--line-d)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '16px'
                }}>
                  <span className="lat">{review.initial}</span>
                </div>
                <span style={{ fontSize: '15px', fontWeight: 600 }}>{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
