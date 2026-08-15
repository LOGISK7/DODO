export default function WhatToTestNext() {
  const expansions = [
    {
      winner: "Winning Hook",
      winnerIcon: "🪝",
      arrow: "→",
      next: "New Hooks",
      nextIcon: "🪝🪝🪝",
      desc: "خذ الـ Hook الفائز واختبر variations منه — غيّر الكلمات، النبرة، أو الأسلوب.",
    },
    {
      winner: "Winning Angle",
      winnerIcon: "🎯",
      arrow: "→",
      next: "New Executions",
      nextIcon: "🎬🎬🎬",
      desc: "الزاوية نجحت — الآن اختبر طرق مختلفة لتنفيذها: فيديو، صورة، carousel.",
    },
    {
      winner: "Winning Creative",
      winnerIcon: "⭐",
      arrow: "→",
      next: "Controlled Variations",
      nextIcon: "🔀🔀🔀",
      desc: "غيّر عنصر واحد فقط في كل مرة — Opening، CTA، أو Visual — واختبر.",
    },
    {
      winner: "Winning Opening",
      winnerIcon: "📖",
      arrow: "→",
      next: "New Messaging",
      nextIcon: "💬💬💬",
      desc: "المقدمة نجحت — الآن اختبر رسائل مختلفة بعد نفس المقدمة.",
    },
  ];

  return (
    <section className="section" style={{ background: "var(--bg-tertiary)" }}>
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          ماذا <span style={{ color: "var(--accent)" }}>أختبر</span> بعد ذلك؟
        </h2>

        {/* Big quote */}
        <div className="reveal max-w-[640px] mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl leading-relaxed mb-4" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)", fontWeight: 700 }}>
            &ldquo;الفائز ليس النهاية.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed" style={{ color: "var(--accent)", fontFamily: "var(--font-heading)", fontWeight: 700 }}>
            الفائز هو بداية الاختبار التالي.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] mx-auto reveal-stagger">
          {expansions.map((item) => (
            <div
              key={item.winner}
              className="reveal rounded-sm overflow-hidden group"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                transition: "border-color 0.4s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div className="p-6 md:p-8">
                {/* Flow indicator */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="px-4 py-2 rounded-sm text-sm font-bold"
                    style={{
                      background: "rgba(34, 197, 94, 0.1)",
                      color: "#22c55e",
                      border: "1px solid rgba(34, 197, 94, 0.2)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {item.winnerIcon} {item.winner}
                  </div>

                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, transform: "scaleX(-1)" }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>

                  <div
                    className="px-4 py-2 rounded-sm text-sm font-bold"
                    style={{
                      background: "var(--accent-muted)",
                      color: "var(--accent)",
                      border: "1px solid var(--border-accent)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {item.next}
                  </div>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-16">
          <a href="#pricing" className="btn-primary text-lg px-10 py-4">
            احصل على النظام الآن
          </a>
        </div>
      </div>
    </section>
  );
}
