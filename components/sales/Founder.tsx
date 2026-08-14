import React from 'react';
import { offer } from '../../content/ar-offer';
import ImgBox from './ImgBox';

export default function Founder() {
  return (
    <section className="offer-section dark">
      <div className="offer-container">
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '48px', 
          alignItems: 'center' 
        }}>
          <div style={{ flexShrink: 0, width: '100%', maxWidth: '400px', marginInline: 'auto' }}>
            <ImgBox width={640} height={800} filename="founder.png" alt="Founder" />
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ marginBottom: '32px' }}>{offer.founder.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p>{offer.founder.p1}</p>
              <p>{offer.founder.p2}</p>
              <p>{offer.founder.p3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
