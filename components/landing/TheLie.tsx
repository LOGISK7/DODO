import React from "react";
import { Reveal } from "../ui/Reveal";

export default function TheLie() {
  return (
    <section className="section bg-[var(--bg-primary)]">
      <div className="container max-w-[900px] mx-auto space-y-24">
        
        {/* Intro */}
        <Reveal>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              If you’re nodding your head, you aren’t alone.<br />
              You’ve just fallen into a Success Prison.
            </h3>
            <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed text-left mb-6">
              You’re sprinting faster than ever, generating more than ever, and looking more “successful” than ever to everyone else... yet behind closed doors, you’re left broke, burned out, and bound to a machine you forged with your own hands to set you free.
            </p>
            <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed text-left">
              <span className="text-[var(--accent)] font-semibold">It’s the ultimate irony:</span> The bigger your business gets, the tighter the bars become. You’ve spent the last decade building a door to freedom, only to realize you accidentally built a cage and locked yourself inside.
            </p>
          </div>
        </Reveal>

        {/* The Bigger is Better Lie */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-center">
            The “Bigger is Better” Lie
          </h3>
          <div className="space-y-6 text-[17px] text-[var(--text-secondary)] leading-relaxed">
            <p>I know that sick, sinking feeling of being a “High-Income, Low-Net-Worth” person because for years. I was that person.</p>
            <p>I spent the early part of my career chasing the “Bigger” ghost. I let my ego drive the bus. I thought more revenue solved everything, so I expanded, over-leveraged, and ran faster and faster just to look successful to people I didn't even like. I was world-class at making money, but I was a total failure at the second half of the game.</p>
            <p>I almost lost everything trying to keep that “Bigger” machine alive.</p>
            <p>Here is the truth nobody tells you at the highest level of business:<br />Revenue is a drug. Just because your business is bigger doesn’t mean you are better off. Most founders are just sprinting on a high-speed treadmill, thinking the finish line is just one more million away.</p>
            <p>It’s the ultimate Success Prison. You’ve forged your own golden handcuffs, and the machine you built to set you free has turned into a monster that only eats your time, your health, and your peace of mind.</p>
          </div>
        </div>

        {/* The Metric */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            The Only Metric That Doesn’t Lie
          </h3>
          <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed text-left">
            The “business experts” are dead wrong because they’ve trained us to stare at the wrong scoreboard. They focus on sales while completely ignoring the only metric that actually buys your life back: Investable Net Worth.
          </p>
        </div>

      </div>

      {/* The 4% Rule & Certainty Number (Appended) */}
      <div className="container max-w-[900px] mx-auto mt-24 space-y-24">
        
        {/* Quote Block */}
        <Reveal>
          <div className="text-center bg-[var(--bg-card)] border border-[var(--border)] p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50" />
            <h4 className="text-2xl md:text-3xl font-serif italic font-bold mb-6">
              “Sales is vanity. Profit is sanity. Investable Net Worth is reality.”
            </h4>
            <p className="font-label text-sm uppercase tracking-widest text-[var(--accent)]">
              Dan Lok
            </p>
          </div>
        </Reveal>

        {/* 4% Rule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-[var(--accent)] block mb-2">The 4% Rule:</span>
            The "Old Money" Secret to Permanent Freedom
          </h3>
          <div className="space-y-6 text-[17px] text-[var(--text-secondary)] leading-relaxed">
            <p>Most founders think they need a billion dollars to be free. They don’t. They just need to master the 4% Rule.</p>
            <p>This is the secret wealthy families have used for centuries to stay wealthy indefinitely.</p>
            <p>
              <span className="text-[var(--accent)] font-semibold">The math is dead simple:</span> If you have a pile of capital invested in cash-flowing assets, you can safely live on 4% of that pile every year, and the pile itself stays the same size (or keeps growing) forever.
            </p>
            <p>It is a perpetual money machine. It is the only way to ensure you never have to “sprint” to fund your lifestyle ever again.</p>
          </div>
        </div>

        {/* True Wealth Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            Your “True Wealth” Number
          </h3>
          <div className="space-y-6 text-[17px] text-[var(--text-secondary)] leading-relaxed">
            <p>To make this work, we have to look at your Investable Net Worth. This isn't the "Net Worth" your accountant brags about. We aren't counting your primary residence — because you can’t eat your house — and we aren't counting "potential" business valuations that might never happen.</p>
            
            <div className="border-l-2 border-[var(--accent)] pl-6 py-2 my-8">
              <p className="font-serif italic font-bold text-xl text-[var(--text-primary)]">
                Investable Net Worth =<br/>
                (Cash + Liquid Assets + Cash-Flowing Investments)<br/>
                Minus All Debt.
              </p>
            </div>
            
            <p>This is your <strong className="text-white">True Wealth Number</strong>. It is the only number that matters because it’s the only number that is real.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
