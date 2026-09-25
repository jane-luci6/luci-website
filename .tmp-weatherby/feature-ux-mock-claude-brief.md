# Claude brief — Feature deep-dive UX mock visual chrome (preview only)

**Role:** Open visual thesis lock for THREE accordion open-state treatments. Do NOT implement. Do NOT edit live files. Output a short lock GLM can apply.

**Context:** Jane wants to compare three layout theses for Venue panels deep-dive inside the existing Upgrade Guide accordion language (mint-wash / `.ug-feature`). Research: `.tmp-weatherby/feature-deepdive-ux-research.md`. Audit facts: `.tmp-weatherby/venue-panels-transcript-audit.md`.

**Existing chrome to reuse (do not redesign whole page):**
- `.ug-feature` / `__summary` / `__name` / `__liner` / `__chev` / `__body` from `luci-upgrade-guide.astro`
- Mint accent (`--accent-light`), hairline rules (`--rule-light`), navy muted liner, mint checkmark bullets
- Closed state stays: name + one-liner (same for all three)

**Deliver a lock covering ONLY open-body chrome differences:**

### Thesis 1 — Scenario cards ("On your property")
- Card grid inside `.ug-feature__body`: 2×2 desktop, stack mobile
- Card: soft mint-tint or white fill, 1px rule, 8–10px radius, title (Ballroom / Cabana·pool / Bar / Conference·media) + 1–2 stub lines
- Subsection labels: "What it is" / "On your property" / "Limits & controls"
- Limits = checklist (reuse mint check bullets)
- Footer: "Technical detail →" text jump stub

### Thesis 2 — Lean story beats
- NO cards. Horizontal chip/beat row OR compact labeled lines (`Ballroom — …`)
- Chips: pill/mint-hairline language already used on Upgrade Guide pillars
- Limits: 3–4 bullets max (shorter than T1)
- Text IT link only

### Thesis 3 — Split proof + scenario rail
- Desktop: main column (what + scenario cards + limits) + sticky right framed empty "Panel UI" media box (use media placeholder pattern)
- Mobile: stack — content then media frame
- IT link/drawer stub at foot

**Output format (short):**
1. Token/spacing notes (padding, gap, card border, chip height)
2. Class names GLM should invent under `.ug-mock-*` (do not touch live `.ug-feature` production CSS beyond reuse)
3. Mobile breakpoints
4. What NOT to change (closed chrome, mint wash section, live `/luci-upgrade-guide/`)

Stop after lock. No production copy. Mark stubs MOCK COPY.
