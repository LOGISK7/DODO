export default function FinalCta() {
  return (
    <section className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="max-w-[700px] mx-auto text-center">
          <h2
            className="reveal text-[clamp(1.75rem,4vw,2.75rem)] font-[900] leading-[1.2] mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            الإعلان الرابح القادم قد لا يكون في رأسك.
          </h2>

          <p
            className="reveal text-xl md:text-2xl mb-12 font-bold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
          >
            قد يكون داخل الاختبار القادم.
          </p>

          {/* Loop steps */}
          <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
            {["أنشئ", "اختبر", "حلل", "تعلم", "طوّر", "اختبر مرة أخرى"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span
                  className="px-4 py-2 rounded-sm text-sm font-bold"
                  style={{
                    background: i === 5 ? "var(--accent-muted)" : "var(--bg-card)",
                    border: `1px solid ${i === 5 ? "var(--border-accent)" : "var(--border)"}`,
                    color: i === 5 ? "var(--accent)" : "var(--text-primary)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {step}
                </span>
                {i < 5 && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" style={{ transform: "scaleX(-1)" }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal">
            <a href="#pricing" className="btn-primary text-xl px-14 py-5 inline-flex">
              احصل على النظام الآن
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ transform: "scaleX(-1)" }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
