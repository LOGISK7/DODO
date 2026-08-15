export default function ProductShowcase() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title reveal" style={{ fontFamily: "var(--font-heading)" }}>
          شاهد النظام <span style={{ color: "var(--accent)" }}>من الداخل</span>
        </h2>
        <p className="section-subtitle reveal">
          واجهات تفاعلية مبنية لتحويل البيانات إلى قرارات واضحة.
        </p>

        <div className="space-y-16 mt-16">
          
          {/* Screen 1: Customer Intelligence */}
          <div className="reveal">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <span className="text-xs font-bold tracking-wider mb-2 block" style={{ color: "var(--accent)", fontFamily: "var(--font-heading)" }}>
                  الشاشة ١
                </span>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                  Customer Intelligence
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  توقف عن استهداف "الجميع". النظام يحلل مشاكل، رغبات، واعتراضات العميل بدقة لتأسيس قاعدة قوية للإعلانات القادمة.
                </p>
              </div>
              <div className="lg:w-2/3 w-full">
                <div className="rounded-md overflow-hidden p-1 shadow-2xl" style={{ background: "linear-gradient(135deg, var(--border-accent), var(--border), var(--border))" }}>
                  <div className="rounded-sm flex flex-col h-[320px]" style={{ background: "var(--bg-secondary)" }}>
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      </div>
                      <span className="text-xs font-mono text-[var(--text-muted)]">customer-profile.app</span>
                      <div />
                    </div>
                    <div className="flex flex-1 overflow-hidden">
                      {/* Sidebar */}
                      <div className="w-1/4 border-l border-[var(--border)] p-3 hidden sm:block">
                        <div className="h-6 w-3/4 rounded mb-4" style={{ background: "var(--bg-tertiary)" }} />
                        <div className="space-y-2">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="h-4 w-full rounded" style={{ background: i===1 ? "var(--accent-muted)" : "var(--bg-card)" }} />
                          ))}
                        </div>
                      </div>
                      {/* Main */}
                      <div className="flex-1 p-4 md:p-6 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                          <div className="h-5 w-1/3 rounded" style={{ background: "var(--text-primary)", opacity: 0.8 }} />
                          <div className="h-6 w-20 rounded-full" style={{ background: "var(--accent-muted)", border: "1px solid var(--border-accent)" }} />
                        </div>
                        <div className="grid grid-cols-2 gap-4 flex-1">
                          <div className="rounded p-3 flex flex-col gap-2" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                            <div className="text-xs font-bold text-[var(--text-secondary)]">المشاكل المستهدفة</div>
                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400"/><div className="h-2 w-3/4 bg-[var(--text-muted)] rounded"/></div>
                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400"/><div className="h-2 w-1/2 bg-[var(--text-muted)] rounded"/></div>
                          </div>
                          <div className="rounded p-3 flex flex-col gap-2" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                            <div className="text-xs font-bold text-[var(--text-secondary)]">الرغبات الخفية</div>
                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"/><div className="h-2 w-2/3 bg-[var(--text-muted)] rounded"/></div>
                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"/><div className="h-2 w-5/6 bg-[var(--text-muted)] rounded"/></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screen 2: Hook Generator */}
          <div className="reveal">
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="lg:w-1/3">
                <span className="text-xs font-bold tracking-wider mb-2 block" style={{ color: "var(--accent)", fontFamily: "var(--font-heading)" }}>
                  الشاشة ٢
                </span>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                  Angle & Hook Engine
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  لا مزيد من التحديق في صفحة بيضاء. اختر الزاوية، ودع النظام يولد زوايا وHooks مبنية على الألم والرغبة، جاهزة لتصبح فيديوهات قوية.
                </p>
              </div>
              <div className="lg:w-2/3 w-full">
                <div className="rounded-md overflow-hidden p-1 shadow-2xl" style={{ background: "linear-gradient(135deg, var(--border), var(--border-accent), var(--border))" }}>
                  <div className="rounded-sm flex flex-col h-[320px]" style={{ background: "var(--bg-secondary)" }}>
                    <div className="flex items-center px-4 py-3 border-b border-[var(--border)] gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-accent)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-accent)]" />
                      <span className="ms-2 text-xs font-mono text-[var(--text-muted)]">hook-engine.app</span>
                    </div>
                    <div className="p-4 flex flex-col gap-3 h-full">
                      <div className="flex gap-2 mb-2">
                        <div className="h-8 w-1/4 rounded bg-[var(--bg-card)] border border-[var(--border)]" />
                        <div className="h-8 w-1/4 rounded bg-[var(--bg-card)] border border-[var(--border)]" />
                        <div className="h-8 w-24 rounded bg-[var(--accent)] ms-auto opacity-80" />
                      </div>
                      {/* Table / List */}
                      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
                        {[1, 2, 3].map((row) => (
                          <div key={row} className="flex items-center gap-3 p-3 rounded border border-[var(--border)] bg-[var(--bg-card)]">
                            <div className="w-16 h-4 rounded bg-[var(--accent-muted)] flex-shrink-0" />
                            <div className="flex-1 flex flex-col gap-1.5">
                              <div className="h-3 w-full rounded bg-[var(--text-primary)] opacity-60" />
                              <div className="h-2 w-3/4 rounded bg-[var(--text-muted)]" />
                            </div>
                            <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
                              +
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screen 3: Analysis */}
          <div className="reveal">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <span className="text-xs font-bold tracking-wider mb-2 block" style={{ color: "var(--accent)", fontFamily: "var(--font-heading)" }}>
                  الشاشة ٣
                </span>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                  Creative Analysis
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  توقف عن إطفاء الإعلانات بشكل أعمى. حدد الأنماط والإشارات الواعدة في بياناتك لمعرفة الخطوة القادمة بالضبط.
                </p>
              </div>
              <div className="lg:w-2/3 w-full">
                <div className="rounded-md overflow-hidden p-1 shadow-2xl" style={{ background: "linear-gradient(135deg, var(--border), var(--border), var(--border-accent))" }}>
                  <div className="rounded-sm flex flex-col h-[320px]" style={{ background: "var(--bg-secondary)" }}>
                    <div className="flex justify-between items-center px-4 py-3 border-b border-[var(--border)]">
                      <span className="text-xs font-mono text-[var(--text-muted)]">analysis.app</span>
                      <div className="flex gap-1.5">
                        <div className="w-6 h-1.5 rounded-full bg-[var(--accent)]" />
                        <div className="w-2 h-1.5 rounded-full bg-[var(--border)]" />
                      </div>
                    </div>
                    <div className="p-4 md:p-6 flex-1 flex flex-col gap-4">
                      {/* Top metrics */}
                      <div className="grid grid-cols-3 gap-3">
                        {['CTR', 'CPA', 'Signals'].map(m => (
                          <div key={m} className="p-3 rounded border border-[var(--border)] bg-[var(--bg-card)] flex flex-col gap-1 text-center">
                            <span className="text-[10px] text-[var(--text-muted)]">{m}</span>
                            <div className="h-4 w-1/2 mx-auto rounded bg-[var(--text-primary)] opacity-80" />
                          </div>
                        ))}
                      </div>
                      {/* Chart area */}
                      <div className="flex-1 border border-[var(--border)] rounded bg-[var(--bg-card)] relative p-4 flex items-end gap-2">
                        {/* Mock Bar Chart */}
                        {[40, 70, 30, 85, 50, 90, 45, 60].map((h, i) => (
                          <div key={i} className="flex-1 bg-[var(--border)] rounded-t relative group transition-all" style={{ height: `${h}%` }}>
                            <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-50 transition-opacity rounded-t" />
                          </div>
                        ))}
                        {/* overlay line */}
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <polyline points="0,80 50,40 100,90 150,20 200,60 250,10 300,70" fill="none" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
