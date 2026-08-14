import React from 'react';
import { offer } from '../../content/ar-offer';
import ImgBox from './ImgBox';
import { REVIEWS_READY } from '../../config/offer';

export default function Hero() {
  return (
    <section className="offer-section dark" style={{ textAlign: 'center' }}>
      <div className="offer-container narrow">
        <p style={{ fontSize: '14px', color: 'var(--hl)', fontWeight: 700, marginBottom: '24px' }}>
          {offer.hero.eyebrow}
        </p>
        <h1 style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
          <span>كيفاش تعرف بالضبط <mark>شنو تصوّر</mark> الأسبوع الجاي</span>
          <span>توقّف <mark>الكرياتيف الخاسر</mark> قبل ما يحرق ميزانيتك</span>
          <span>وتخلّي كل شهر يبني على اللي تعلّمتو في اللي قبلو</span>
        </h1>
        <p style={{ fontSize: '20px', color: 'var(--fg-2)', maxWidth: '620px', marginInline: 'auto', marginBottom: '48px' }}>
          {offer.hero.lead}
        </p>
        
        <div style={{ marginBottom: '48px', border: '1px solid var(--line-d)', borderRadius: '4px', overflow: 'hidden' }}>
          <ImgBox width={1200} height={750} filename="hero-product.png" alt="AdLoop Dashboard" />
        </div>

        {REVIEWS_READY && (
          <div style={{ marginBottom: '24px', fontSize: '18px', color: 'var(--hl)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span>★★★★★</span>
            <span style={{ color: 'var(--fg)' }}>[[REVIEW_COUNT]] مراجعة</span>
          </div>
        )}

        <a href={offer.cta.target} className="offer-button" style={{ width: '100%', maxWidth: '480px', marginInline: 'auto' }}>
          {offer.price.button}
        </a>
        <p style={{ fontSize: '15px', color: 'var(--fg-2)', marginTop: '16px' }}>
          {offer.hero.buttonTrial}
        </p>
      </div>
    </section>
  );
}
