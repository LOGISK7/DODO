import React from 'react';
import { offer } from '../../content/ar-offer';
import ImgBox from './ImgBox';

export default function Guarantee() {
  return (
    <section className="offer-section light">
      <div className="offer-container narrow">
        <div style={{ 
          background: '#fff', 
          border: '1px solid var(--line-l)',
          borderInlineStart: '2px solid var(--green)',
          borderRadius: '4px',
          padding: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          alignItems: 'center'
        }}>
          <div style={{ flexShrink: 0, width: '100%', maxWidth: '240px', marginInline: 'auto' }}>
            <ImgBox width={240} height={240} filename="guarantee-seal.png" alt="Guarantee Seal" />
          </div>
          <div style={{ flex: '1 1 320px' }}>
            <h3 style={{ marginBottom: '16px' }}>{offer.guarantee.title}</h3>
            <p style={{ margin: 0 }}>{offer.guarantee.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
