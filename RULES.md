# AdLoop /offer — Build Rules
Read this file before writing any component in `components/sales/`.

## Language
- All visible copy is Arabic (Algerian Darija), RTL.
- Latin technical terms stay Latin: Meta Ads, hook rate, CTR, CPO, Notion, ChatGPT, AdLoop, T.E.S.T.
- Numbers: Latin digits, space thousands separator (6 900 / 59 000 / 18 750). Currency: دج AFTER the number.
- Never put an Arabic string inside JSX. All copy imports from `content/ar.ts`.

## RTL (highest priority rule)
- Logical CSS only. FORBIDDEN: left, right, ml-, mr-, pl-, pr-, text-left, text-right, border-l, border-r.
- REQUIRED: ms-, me-, ps-, pe-, start-, end-, text-start, text-end, border-s, border-e.
- In RTL the leading edge is the RIGHT edge. Verify visually at 390px, not logically.

## Color
- Never hardcode a color. Tokens only, from `app/tokens.css`.
- Gold (`--gold`) is for hairlines, one button fill, and large display accents only.
- Never gold on text under 20px. Never a gold background section. For small gold text use `--gold-ink`.

## Forbidden visuals
- No gradients. No glassmorphism. No purple. No blur except the nav.
- No shadows at all in `components/sales/`. The one allowed shadow lives in the homepage hero only.
- No icon libraries. No emoji in UI. No stock photography. No AI-generated faces.
- No rounded corners above 14px except pill chips (999px).

## Forbidden persuasion patterns
- No countdown timers. No fake scarcity. No crossed-out fake prices.
- No "total value" line. No currency value next to a bonus. Ever.
- No exit popups. No modals. No interstitials. No auto-playing video or audio.

## Placeholders
- Every unverified number, quote, testimonial, photo, or seat count MUST render through `<Placeholder>` and display a visible `[XX]`.
- Invent nothing. If a value is not in `content/ar.ts`, it is a `<Placeholder>`.

## Layout
- Mobile first. Verify 390px before desktop. Body copy floor: 17px.
- Max widths: `--maxw` 1080px for wide sections, `--narrow` 760px for reading sections.
- Section padding: 80px mobile / 112px desktop / 144px for dark chapters.
- Spacing scale only: 4 8 12 16 24 32 48 64 96 112 144.

## Motion
- Entry only: opacity + 8px translateY, 320ms, fires once, 60ms stagger. Use the existing `<Reveal>`.
- Micro-response: 140ms cubic-bezier(.2,.8,.2,1).
- Respect prefers-reduced-motion. No scroll-jacking. No parallax. No looping animation.

## Component conventions
- One component per file under `components/sales/`.
- Named export, PascalCase, matching the filename.
- Props typed explicitly. No `any`. No default exports.
- Server components unless interactivity is required. Add "use client" only when needed.
