import { guarantee } from "@/content/guarantee";

export default function Guarantee() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="reveal max-w-[700px] mx-auto rounded-sm p-8 md:p-12 text-center relative"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-accent)",
            boxShadow: "0 0 60px rgba(212, 168, 67, 0.06)",
          }}
        >
          {/* Shield icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-sm flex items-center justify-center"
              style={{
                background: "var(--accent-muted)",
                border: "1px solid var(--border-accent)",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
          </div>

          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
          >
            {guarantee.title}
          </h2>

          <p
            className="text-lg leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {guarantee.body}
          </p>

          {guarantee.note !== "[تفاصيل إضافية عن سياسة الاسترجاع]" && (
            <p className="text-sm mt-4" style={{ color: "var(--text-muted)" }}>
              {guarantee.note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
