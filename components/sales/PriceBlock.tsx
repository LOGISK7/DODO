'use client';
import React, { useState } from 'react';
import { offer } from '../../content/ar-offer';

export default function PriceBlock() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="offer-section alt" style={{ textAlign: 'center' }}>
      <div className="offer-container narrow" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ 
          background: 'var(--hl)', 
          color: '#111', 
          fontSize: '14px', 
          fontWeight: 700, 
          padding: '4px 12px', 
          borderRadius: '999px',
          marginBottom: '24px'
        }}>
          {offer.price.badge}
        </div>
        
        <h2 style={{ marginBottom: '24px' }}>{offer.price.title}</h2>
        
        <div style={{ fontSize: '20px', color: 'var(--red)', textDecoration: 'line-through', marginBottom: '8px' }}>
          {offer.price.anchor}
        </div>
        
        <div style={{ 
          fontSize: 'clamp(64px, 8vw, 76px)', 
          fontWeight: 700, 
          color: 'var(--fg)', 
          lineHeight: 1,
          marginBottom: '8px'
        }}>
          <span className="lat">14 900</span> دج <span style={{ fontSize: 'clamp(32px, 4vw, 38px)' }}>/ سنة</span>
        </div>
        
        <div style={{ fontSize: '16px', color: 'var(--fg-2)', marginBottom: '32px' }}>
          {offer.price.locked}
        </div>

        {/* Toggle - must not shift layout height, reserving space */}
        <div style={{ height: '40px', marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', background: 'var(--bg)', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--line-d)' }}>
            <button 
              onClick={() => setIsAnnual(true)}
              style={{ 
                padding: '8px 16px', 
                border: 'none', 
                background: isAnnual ? 'var(--hl)' : 'transparent',
                color: isAnnual ? '#111' : 'var(--fg-2)',
                fontWeight: isAnnual ? 700 : 400,
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              سنوي
            </button>
            <button 
              onClick={() => setIsAnnual(false)}
              style={{ 
                padding: '8px 16px', 
                border: 'none', 
                background: !isAnnual ? 'var(--hl)' : 'transparent',
                color: !isAnnual ? '#111' : 'var(--fg-2)',
                fontWeight: !isAnnual ? 700 : 400,
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              شهري
            </button>
          </div>
        </div>

        <a href={offer.cta.target} className="offer-button" style={{ width: '100%', maxWidth: '480px', marginBottom: '16px' }}>
          {offer.price.button}
        </a>
        
        <div style={{ fontSize: '15px', color: 'var(--fg)', marginBottom: '16px' }}>
          {offer.price.payment}
        </div>
        
        <div style={{ fontSize: '15px', color: 'var(--hl)', fontWeight: 700 }}>
          {offer.price.seats}
        </div>
      </div>
    </section>
  );
}
