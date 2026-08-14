import React from 'react';
import { offer } from '../../content/ar-offer';

export default function Problem() {
  return (
    <section className="offer-section light">
      <div className="offer-container narrow">
        <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>{offer.problem.title}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
          <p>{offer.problem.p1}</p>
          <p>{offer.problem.p2}</p>
          <p>{offer.problem.p3}</p>
        </div>
        <div style={{ border: '1px solid var(--red)', borderRadius: '4px', padding: '24px', textAlign: 'center', color: 'var(--red)', fontWeight: 700, fontSize: '20px', backgroundColor: 'rgba(217, 48, 37, 0.05)' }}>
          {offer.problem.box}
        </div>
      </div>
    </section>
  );
}
