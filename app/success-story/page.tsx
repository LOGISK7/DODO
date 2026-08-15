import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import VideoEmbed from "@/components/ui/VideoEmbed";

export default function SuccessStories() {
  const stories = [
    { name: "Dev Gadhvi", role: "CEO, Passionprenour", rev: "$6M to $10M+" },
    { name: "Fabio Tesi", role: "CEO of ONNWATER", rev: "$8M to $11M" },
    { name: "Shay Levister", role: "Master Certified Coach", rev: "Income Doubled" },
    { name: "Francesca & Michele", role: "Founders, Bali Holiday", rev: "€1.1M to €2.5M" },
    { name: "Florian Monkam", role: "Real Estate Investor", rev: "Scaling to $5M" },
    { name: "Cinzia & Stewart", role: "Founders of GCA", rev: "$748M Contract" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container text-center mb-16">
          <p className="eyebrow justify-center mb-4">The Hall of Fame</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
          <p className="text-[18px] text-[var(--text-secondary)] max-w-2xl mx-auto">
            These are the founders who broke free from their Success Prisons and achieved true Extraction.
          </p>
        </div>

        <div className="container max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <div key={idx} className="card p-6 flex flex-col gap-6">
                <VideoEmbed aspectRatio="16/9" />
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">{story.name}</h3>
                  <p className="text-[14px] text-[var(--text-muted)] mb-3">{story.role}</p>
                  <div className="inline-block px-3 py-1 bg-[var(--accent-muted)] border border-[var(--border-accent)] rounded-sm">
                    <span className="font-label text-xs uppercase tracking-widest text-[var(--accent)]">
                      {story.rev}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
