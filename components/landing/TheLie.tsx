import React from "react";

export default function TheLie() {
  return (
    <section className="section bg-[var(--bg-primary)]">
      <div className="container max-w-[900px] mx-auto space-y-24">
        
        {/* Intro */}
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
    </section>
  );
}
