import { bonuses } from "@/content/bonuses";

export default function Bonuses() {
  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          <span style={{ color: "var(--accent)" }}>7 هدايا</span> إضافية مع النظام
        </h2>
        <p className="section-subtitle reveal">
          كل هدية مصممة لتسريع نتائجك وتعطيك ميزة إضافية.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 reveal-stagger">
          {bonuses.map((bonus, i) => (
            <div
              key={bonus.id}
              className="reveal group rounded-sm overflow-hidden transition-all duration-500"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Top accent bar */}
              <div className="h-[2px]" style={{ background: "var(--accent)", opacity: 0.4 }} />

              <div className="p-6">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold tracking-wider px-2 py-1 rounded-sm"
                    style={{
                      background: "var(--accent-muted)",
                      color: "var(--accent)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    هدية #{i + 1}
                  </span>
                  <span className="text-2xl">{bonus.icon}</span>
                </div>

                <h3
                  className="text-base font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                >
                  {bonus.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  {bonus.desc}
                </p>

                {bonus.value !== "[VALUE]" && (
                  <div className="pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                      القيمة: <span style={{ color: "var(--accent)", fontWeight: 700 }}>{bonus.value}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
