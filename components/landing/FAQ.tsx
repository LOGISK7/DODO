"use client";

import { useState } from "react";
import { faq } from "@/content/faq";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section" style={{ background: "var(--bg-tertiary)" }}>
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          أسئلة <span style={{ color: "var(--accent)" }}>شائعة</span>
        </h2>

        <div className="max-w-[700px] mx-auto mt-12 reveal">
          {faq.map((item, i) => (
            <div
              key={i}
              className={`accordion-item ${openIdx === i ? "open" : ""}`}
            >
              <button
                className="accordion-trigger"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <span>{item.q}</span>
                <span className="accordion-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div className="accordion-content">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
