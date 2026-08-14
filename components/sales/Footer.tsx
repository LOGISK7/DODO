import React from 'react';
import Link from 'next/link';
import { offer } from '../../content/ar-offer';

export default function Footer() {
  return (
    <section className="offer-section dark" style={{ paddingBlock: '48px', borderTop: '1px solid var(--line-d)' }}>
      <div className="offer-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', fontSize: '15px' }}>
          <Link href="/terms" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>شروط الاستخدام</Link>
          <span style={{ color: 'var(--line-d)' }}>·</span>
          <Link href="/privacy" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>سياسة الخصوصية</Link>
          <span style={{ color: 'var(--line-d)' }}>·</span>
          <Link href="/refund" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>سياسة الاسترجاع</Link>
          <span style={{ color: 'var(--line-d)' }}>·</span>
          <Link href="/contact" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>اتصل بنا</Link>
        </div>
        
        <div style={{ fontSize: '14px', color: 'var(--fg-2)', maxWidth: '600px' }}>
          <p style={{ margin: '0 0 8px 0' }}>{offer.footer.disclaimer1}</p>
          <p style={{ margin: 0 }}>{offer.footer.disclaimer2}</p>
        </div>
      </div>
    </section>
  );
}
