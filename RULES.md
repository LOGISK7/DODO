# AdLoop /offer — Build Rules
Read this file before writing any component in `components/sales/`.

## Language
- All visible copy is Arabic (Algerian Darija), RTL.
- Latin technical terms stay Latin: Meta Ads, hook rate, CTR, CPO, Notion, ChatGPT, AdLoop, T.E.S.T.
- Numbers: Latin digits, space thousands separator (6 900 / 59 000 / 18 750). Currency: دج AFTER the number.
- Never put an Arabic string inside JSX. All copy imports from `content/ar.ts`.

### Arabic typography (never violate)
- NEVER apply `letter-spacing` to Arabic text. Not negative, not positive. Arabic is a connected script and
  letter-spacing breaks the glyph joins. Any letter-spacing other than 0 on Arabic text is a bug.
- letter-spacing is allowed ONLY on Latin-only strings ("TEST #024", "NEXT TEST", "AdLoop").
- NEVER apply `text-transform: uppercase` to a mixed Arabic+Latin string. Wrap only the Latin substring.
- Arabic headlines use `text-wrap: balance` where supported.

## RTL (highest priority rule)
- Logical CSS only. FORBIDDEN: left, right, ml-, mr-, pl-, pr-, text-left, text-right, border-l, border-r.
- REQUIRED: ms-, me-, ps-, pe-, start-, end-, text-start, text-end, border-s, border-e.
- In RTL the leading edge is the RIGHT edge. Verify visually at 390px, not logically.

## Color
- Never hardcode a color. Tokens only, from `app/tokens.css`.
- Gold (`--gold`) is for hairlines, one button fill, and large display accents only.
- Never gold on text under 20px. Never a gold background section. For small gold text use `--gold-ink`.

## Visuals (Direct Response Aesthetic)
- USE heavy gradients and dark themes (navy/black backgrounds).
- USE strong drop-shadows on cards and buttons.
- Gold and Red are primary highlight colors.
- Rounded corners should be minimal to look authoritative.

## Persuasion Patterns (Required)
- ALWAYS use crossed-out original prices to anchor value (e.g., $15,000 crossed out).
- ALWAYS include a "You Save [X]" badge or line.
- Value stacks are required for bonuses.
- CTAs should be massive, bold, and high-contrast (Gold/Red).

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
