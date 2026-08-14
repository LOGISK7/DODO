import React from 'react';
import { offer } from '../../content/ar-offer';

export default function BadgeRow() {
  return (
    <section className="offer-section alt" style={{ paddingBlock: '32px', borderTop: '1px solid var(--line-d)', borderBottom: '1px solid var(--line-d)' }}>
      <div className="offer-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
        {offer.badges.map((badge, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600 }}>
            <span style={{ color: 'var(--green)' }}>✓</span>
            <span>{badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
