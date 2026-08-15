import { modules } from "@/content/modules";

export default function WhatsInside() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          ماذا <span style={{ color: "var(--accent)" }}>بداخل</span> النظام؟
        </h2>
        <p className="section-subtitle reveal">
          10 وحدات متكاملة — كل وحدة تغطي جزء من دورة الإنشاء والاختبار والتحليل والتحسين.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 reveal-stagger">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="reveal group relative overflow-hidden rounded-sm transition-all duration-500"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Hover accent border */}
              <div
                className="absolute inset-y-0 start-0 w-[3px] transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: "var(--accent)" }}
              />

              <div className="p-6 md:p-8 flex gap-5">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span
                    className="block text-3xl font-[900] leading-none"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--border)",
                      transition: "color 0.4s",
                    }}
                  >
                    {mod.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{mod.icon}</span>
                    <h3
                      className="text-lg font-bold"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {mod.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm font-semibold mb-2"
                    style={{ color: "var(--accent)" }}
                  >
                    {mod.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {mod.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
