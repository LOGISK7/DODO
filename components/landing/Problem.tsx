export default function Problem() {
  const questions = [
    "أي Creative أفضل؟",
    "ما هي إشارات نجاحه؟",
    "ماذا أغير كخطوة قادمة؟",
    "ماذا أختبر الآن؟",
    "ما هي الأنماط المشتركة؟",
  ];

  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container reveal">
        <div className="max-w-[720px] mx-auto text-center">
          <h2
            className="section-title mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="block text-[clamp(1.5rem,3.5vw,2.5rem)] mb-2" style={{ color: "var(--text-secondary)" }}>
              لديك منتج.
            </span>
            <span className="block text-[clamp(1.5rem,3.5vw,2.5rem)] mb-2" style={{ color: "var(--text-secondary)" }}>
              لديك Ads.
            </span>
            <span className="block text-[clamp(1.75rem,4vw,3rem)]" style={{ color: "var(--accent)" }}>
              لكن ماذا تفعل بعد ذلك؟
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[560px] mx-auto reveal-stagger">
            {questions.map((q, i) => (
              <div
                key={i}
                className="reveal flex items-center gap-3 px-5 py-4 text-start"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: "1.25rem" }}>؟</span>
                <span
                  className="text-base font-semibold"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}
                >
                  {q}
                </span>
              </div>
            ))}
          </div>

          <p
            className="mt-12 text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            أغلب أصحاب المتاجر يصرفون على إعلانات كل يوم — لكن ما عندهم نظام
            يوضح لهم{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              الأنماط والإشارات الواعدة في إعلاناتهم 
            </strong>
            . النتيجة؟ تخمين بعد تخمين بعد تخمين.
          </p>
        </div>
      </div>
    </section>
  );
}
