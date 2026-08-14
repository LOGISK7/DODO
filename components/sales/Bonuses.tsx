import React from 'react';
import { offer } from '../../content/ar-offer';
import ImgBox from './ImgBox';

export default function Bonuses() {
  return (
    <section className="offer-section dark">
      <div className="offer-container">
        <h2 style={{ color: 'var(--hl)', marginBottom: '48px', maxWidth: '800px' }}>{offer.bonuses.title}</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {offer.bonuses.items.map((bonus, idx) => {
            const num = (idx + 1).toString().padStart(2, '0');
            return (
              <div key={idx} style={{ 
                border: '1px solid var(--line-d)', 
                borderRadius: '4px', 
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                backgroundColor: 'var(--bg-alt)'
              }}>
                <div style={{ color: 'var(--red)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <span className="lat">BONUS #{idx + 1}</span>
                </div>
                <h3 style={{ fontSize: '20px', margin: 0 }}>{bonus.title}</h3>
                <p style={{ fontSize: '17px', margin: 0, flexGrow: 1 }}>{bonus.body}</p>
                <div style={{ marginTop: '16px', alignSelf: 'center', width: '100%' }}>
                  <ImgBox width={400} height={260} filename={`bonus-${num}.png`} alt={`Bonus ${num}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
