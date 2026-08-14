'use client';
import React from 'react';
import { offer } from '../../content/ar-offer';

// Dummy track function
const track = (event: string, data: any) => {
  console.log(event, data);
};

export default function FinalCta() {
  return (
    <section className="offer-section dark" style={{ textAlign: 'center' }}>
      <div className="offer-container" style={{ maxWidth: '760px' }}>
        <h2 style={{ fontSize: '30px', marginBottom: '16px' }}>{offer.finalCta.line1}</h2>
        <h2 style={{ fontSize: '30px', marginBottom: '48px', lineHeight: 1.4 }}>
          السؤال الوحيد: <mark>واش رايح تتعلّم حاجة</mark> من الصرف هاد، ولا لا؟
        </h2>
        
        <a 
          href={offer.cta.target} 
          className="offer-button" 
          onClick={() => track("cta_clicked", { blockNumber: 17 })}
          style={{ width: '100%', maxWidth: '480px', marginInline: 'auto' }}
        >
          {offer.finalCta.button}
        </a>
      </div>
    </section>
  );
}
