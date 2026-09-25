# Visual chrome LOCK — feature deep-dive UX mock (preview only)

**From:** Claude (visual thesis) · **For:** GLM to apply in a mock/preview page only
**Scope:** open-body chrome for three theses. No implementation here. No production edits.
All text content in the mock is **MOCK COPY** (stub), not approved copy.

---

## 0. Shared rules (all three theses)

**Tokens — reuse only, invent none:**
`--accent-light` (mint accent, rules/bullets/labels) · `rgba(var(--mint-rgb), 0.28)` (mint hairline) · `rgba(var(--mint-rgb), 0.06)` (mint tint fill) · `--rule-light` (neutral hairline) · `--ink-strong` (titles) · `--ink` (body) · `--navy-muted` (liners, secondary) · `--font-head` (titles, labels) · `--font-body` (body).

**Shared type scale:** subsection label 11px/700/0.08em uppercase `--font-head` mint; card or beat title 14px/700 `--font-head` `--ink-strong`; body line 14px/1.5 `--font-body` `--ink`; max line length 60ch.

**Grid anchor:** every mock block lives in grid-column 2 of `.ug-feature__body` at ≥720px (same `minmax(160px,220px) 1fr 24px` the paragraph and benefits already use). Below 720px it is a plain flex column.

**Subsection rhythm:** label → 8px → content; between subsections 20px. Body row-gap stays at the existing 14px.

**Shared class names (under `.ug-mock-*`):**
- `.ug-mock-body` — wrapper inside `.ug-feature__body` for mock content
- `.ug-mock-section` — one labeled subsection
- `.ug-mock-label` — "What it is" / "On your property" / "Limits & controls" (MOCK COPY)
- `.ug-mock-lede` — short overview paragraph (MOCK COPY)
- `.ug-mock-limits` — checklist; reuses the `.ug-feature__benefits` mint check mask verbatim
- `.ug-mock-itlink` — footer "Technical detail →" text jump (MOCK COPY)
- Thesis scoping: `.ug-mock--t1` / `.ug-mock--t2` / `.ug-mock--t3` on `.ug-mock-body`

`.ug-mock-itlink`: 13px `--font-head`, 600, `--accent-light`, no button chrome, 16px top margin, underline on hover only.

---

## 1. Thesis 1 — Scenario cards

**Classes:** `.ug-mock-cards` (grid) · `.ug-mock-card` · `.ug-mock-card__title` · `.ug-mock-card__line`

- Grid: 2 columns at ≥720px, gap 12px. Cards equal height (`align-items: stretch`).
- Card: fill `rgba(var(--mint-rgb), 0.06)`, border `1px solid rgba(var(--mint-rgb), 0.28)`, radius 10px, padding 14px 16px, no shadow.
- Title 14px/700 `--ink-strong`; 6px gap; 1–2 lines at 13.5px/1.5 `--navy-muted`.
- Four cards max (MOCK COPY titles: Ballroom · Cabana/pool · Bar · Conference/media). No icons in v1 — leave the slot unused rather than invent glyphs.
- Hover: none. These are static, not links.
- Limits below cards as `.ug-mock-limits`, 4–6 items.

---

## 2. Thesis 2 — Story-beat chips

**Classes:** `.ug-mock-beats` (row) · `.ug-mock-beat` · `.ug-mock-beat__label` · `.ug-mock-beat__line`

- Row: flex, wrap, gap 8px. No card fill — this thesis must read lighter than Thesis 1.
- Chip: height 30px, padding 0 14px, radius 9999px, border `1px solid rgba(43, 158, 128, 0.4)`, background transparent — the same pill language as `.ug-expand-toggle`.
- Chip label 12px/700 `--font-head`, `--accent-light`, not uppercase (uppercase is reserved for section labels).
- Alternate allowed form: `.ug-mock-beatlines` — compact `Label — line` rows, label in mint 13px/700, line in `--ink`, 6px row gap, no borders. Pick one per mock; do not show both.
- Limits: 3–4 items max. IT: text link only, no nested drawer.

---

## 3. Thesis 3 — Split with sticky media frame

**Classes:** `.ug-mock-split` · `.ug-mock-split__main` · `.ug-mock-split__rail` · `.ug-mock-media` · `.ug-mock-media__frame` · `.ug-mock-media__caption`

- At ≥900px: `.ug-mock-split` is a 2-column grid, `minmax(0,1fr) minmax(260px, 320px)`, column gap 28px. Main holds the Thesis 1 stack (cards + limits); rail holds media.
- Rail: `position: sticky; top: 96px;` (clears the site header), `align-self: start`. Sticky only at ≥900px.
- Media frame: 16:9 aspect box, border `1px solid var(--rule-light)`, radius 10px, background `rgba(var(--mint-rgb), 0.06)`, no image. Centered placeholder label 11px/700/0.08em uppercase `--navy-muted` reading "Panel UI" (MOCK COPY).
- Caption under frame: 12.5px `--navy-muted`, 8px top margin (MOCK COPY).
- Below 900px: single column, `position: static`, media frame renders **after** the limits checklist and before the IT link, full width, capped at 420px and left-aligned.

---

## 4. Mobile breakpoints

- **<720px** — everything is one flex column at the existing `.ug-feature__body` gap. Thesis 1 cards stack full width. Thesis 2 chips still wrap in a row (they are short enough); switch to `.ug-mock-beatlines` if any chip label wraps. Thesis 3 stacks content → media frame → IT link.
- **≥720px** — mock blocks enter grid-column 2, matching the paragraph/benefits alignment. Thesis 1 grid goes 2-up.
- **≥900px** — Thesis 3 only: split columns and sticky rail activate.
- No breakpoint above 900px. Do not introduce a third card column at any width.

---

## 5. What NOT to change

- **Closed state.** `.ug-feature__summary`, `__name`, `__liner`, `__chev`, the chevron rotate, and the summary grid template stay exactly as shipped.
- **Production CSS.** Do not edit or override `.ug-feature*`, `.ug-pill*`, `.ug-tech-item*` rules. Mock styles live only in new `.ug-mock-*` selectors.
- **Mint-wash section lockups**, pillar numbering, Expand all / Collapse all, and the `#ug-feature-{id}` deep-link behavior.
- **Live `/luci-upgrade-guide/`.** Mock goes on a separate preview route; `upgradeGuide.ts` data and the Technical section stay untouched.
- **No new tokens, no new fonts, no shadows, no new accent hues.** Mint plus the two existing hairlines is the whole palette.
- **No IT bullets in the customer body** — jump link or labeled nested drawer only.

---

*Lock only. Copy stubs are MOCK COPY and are placeholders for GPT's later pass.*
