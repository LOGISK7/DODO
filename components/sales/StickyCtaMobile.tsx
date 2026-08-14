'use client';
import React, { useEffect, useState } from 'react';
import { offer } from '../../content/ar-offer';

export default function StickyCtaMobile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'var(--cta)',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 50,
      borderTop: '1px solid rgba(0,0,0,0.1)',
      boxShadow: '0 -4px 12px rgba(0,0,0,0.15)'
    }}>
      {/* Mobile only styles can be applied via CSS or inline for a specific breakpoint. 
          Assuming this will be hidden on desktop via CSS, but we can do a simple media query check or just rely on global CSS. 
          We will add a class to hide on desktop. */}
      <style>{`
        @media (min-width: 768px) {
          .mobile-sticky-cta { display: none !important; }
        }
      `}</style>
      <div className="mobile-sticky-cta" style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: '#111', fontWeight: 700, fontSize: '18px' }}>
          <span className="lat">14 900</span> دج
        </div>
        <a 
          href={offer.cta.target} 
          style={{ 
            background: '#111', 
            color: 'var(--cta)', 
            padding: '12px 24px', 
            borderRadius: '4px',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '16px'
          }}
        >
          {offer.price.button}
        </a>
      </div>
    </div>
  );
}
