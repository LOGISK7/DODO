import React from "react";

export default function DanLokBio() {
  return (
    <section className="section bg-[var(--bg-primary)]">
      <div className="container max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Placeholder */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[3/4] relative z-10 border border-[var(--border)] bg-[#111] overflow-hidden">
              <img 
                src="https://placehold.co/600x800/111111/444444?text=Dan+Lok+Portrait" 
                alt="Dan Lok"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -inset-4 border border-[var(--accent-muted)] z-0 hidden md:block"></div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <p className="eyebrow mb-2">Meet Dan Lok</p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2">
                Founder of DRAGON 100™
              </h2>
            </div>
            
            <div className="space-y-6 text-[16px] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Dan Lok is the founder of Dragon 100™, a private strategic advisory board for $1M – $10M+ founders who have achieved high-level success, but now find themselves trapped as the 'Chief Everything Officer' of their own Success Prison.
              </p>
              <p>
                If you look at the raw data, the numbers are high-status: Dan is the CEO of OAD.ai, a behavioral analytics platform, and the Managing Partner of DragonX Capital. His diversified portfolio generates over $120 million in annual revenue.
              </p>
              <p>
                But Dan will be the first to tell you: Don’t be impressed by those numbers. In the world of “Certainty,” total revenue is a vanity metric. It tells you how much noise a business makes, but it doesn’t tell you if the founder is free.
              </p>
              <p>
                While most entrepreneurs chase the “billionaire” tag to feed their ego, Dan focused on a different finish line: <strong className="text-white">The Certainty Number</strong>. Dan reached his Number and bought his life back 25 years ahead of the traditional retirement age.
              </p>
              <div className="border-l-2 border-[var(--accent)] pl-6 py-2 my-6">
                <p className="font-serif italic text-lg text-white font-bold">
                  "This is a legacy mission with a definitive expiration date. My final goal is to lead exactly 100 Dragons to their Certainty Number. Once that 100th finish line is crossed, the doors close forever."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
