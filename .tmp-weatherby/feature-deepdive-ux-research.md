# Feature deep-dive UX research — Upgrade Guide

**For:** Jane Haynie  
**From:** Weatherby (research only)  
**Date:** 25 Sep 2026 PT  
**Scope:** How to format/build a guided feature deep-dive (starting with Venue panels). **No copy rewrite. No live-site change. No `upgradeGuide.ts` edit.**

**Review surface:** http://10.10.1.37/luci-upgrade-guide/  
**Primary references:** `src/data/upgradeGuide.ts`, `src/pages/luci-upgrade-guide.astro`, `.tmp-weatherby/venue-panels-transcript-audit.md`

---

## Part A — Current state

### How the page is wired today

| Layer | Role | Structure |
|---|---|---|
| **Pillar pills** (`#ug-pillars`) | Teaser strip | Name + one-liner; links to `#ug-feature-{id}` and opens that accordion via JS |
| **Feature deep-dive** (`#ug-features`) | Customer path | Pillar groups → native `<details class="ug-feature">` accordions; closed = name + one-liner; open = **one paragraph + benefits list** |
| **Technical detail** (`#ug-technical`) | IT / A/V path | Separate section (“For the IT or A/V lead”); groups → `<details class="ug-tech-item">` with optional summary + details bullets |
| **Design language** | Locked | Mint-wash section lockups; deep tone on Features; Expand all / Collapse all per pillar; chevron rotate on open |

**Feature data shape (`FeatureDraft`):** `id`, `pillarId`, `name`, `oneLiner`, `paragraph`, `benefits[]`, `media` (placeholder only).  
**Important:** `media` exists in data but is **not rendered** in the Astro body today — open state is text-only (paragraph + bullets).

### Venue panels specifically

**Customer accordion (`venue-panels`):**
- **oneLiner:** operators see only the room(s) they need, with approved controls
- **paragraph:** already packs placement into prose (“wall touchscreen in a ballroom… tablet at a bar… iPad by a cabana”) plus inherit → narrow → PIN/open → basic UI
- **benefits:** 7 bullets (room visibility, inherit, power out of reach, source allow-list, PIN vs open, wall/iPad, 1:1 room typical)
- **Density when open:** high — one dense paragraph + long bullet list; use cases are **implied inside prose**, not scannable as scenarios

**IT item (`technical-venue-panels`):**
- Own accordion under “IT and A/V detail”
- Has a **summary** line + **13 detail bullets** (hierarchy, pairing `/panels`, cookie bind, revoke, PIN/idle, control surfaces, Rock Panel–class, telemetry, etc.)
- Correctly separated from customer accordion — IT does not dominate the customer path **if** the reader stays in Features

### Accordion vs IT — who does what

- **Customer accordion** = “what it means on property / for operators” (should stay the guided path).
- **IT accordion** = “how it pairs, boots, scopes, and is managed” (findable via Technical nav + own section; not mixed into the same unlabeled drawer).
- **Wall-of-words risk:** (1) open accordion dumps paragraph + 7+ bullets with no subsections; (2) placement examples buried in paragraph instead of labeled cards; (3) if IT bullets were ever folded into the same accordion without labels, cognitive load spikes. Current split is good — the gap is **guided structure inside the customer open state**, not more prose.

### Open / closed UX

- Default **closed** (good progressive disclosure).
- Closed row already persuasive (name + one-liner) — matches best practice that Level-0 must sell expand.
- Expand all exists — useful for reviewers, dangerous for first-time readers if every feature is dense; scenario structure helps even when expanded.
- Deep-link from pills works (`#ug-feature-venue-panels`).

### Candidate scenario cards (from transcript audit only — do not invent)

Pulled from `.tmp-weatherby/venue-panels-transcript-audit.md` (Richard/Jane/Nick/Demo/Cabana call). Use as **card titles / beats only**; GPT writes scenario copy later if Jane picks a thesis.

| Candidate | Evidence (audit) | Card angle (fact stub, not copy) |
|---|---|---|
| **Ballroom** | Richard/Jane use cases; theming per room | Wall panel; scoped to that event space; staff/PIN likely |
| **Cabana / pool** | Jane “put those in cabanas?”; Cabana Room Event Control call | Guest-facing / open / tap-to-wake; channel for that cabana’s screen |
| **Bar** | Live paragraph already names bar; source/volume without power | Bartender controls; hide power |
| **High-limit** | Richard/Jane placement list | Staff-scoped room; limited surfaces |
| **Conference / media room** | Demo create-panel at media room; Cabana call small office iPads | Localized room control; inherit endpoints |
| **Suite** | Demo: suites, arenas, stadiums | Room-only visibility |
| **Arena / stadium** | Demo placement list | Same pattern at larger venue — use sparingly if visual density matters |

**Suggested starter set for Venue panels (3–4 cards):** Ballroom · Cabana/pool · Bar · Conference/media room. Keep suite/arena as optional overflow, not invent new verticals.

---

## Part B — External UX patterns (feature deep-dives that avoid walls of text)

### Strong patterns to cite

| Pattern | How it works | Why it lowers load | Public example |
|---|---|---|---|
| **1. Progressive disclosure (accordion / levels)** | Show persuasive summary first; reveal depth on demand. Name levels: always-visible → one click → advanced → admin/IT. | Matches job to detail depth; avoids “airplane cockpit” on first glance. | [MV3 on progressive disclosure](https://www.mv3marketing.com/glossary/progressive-disclosure/); [Mool Studio disclosure levels](https://www.moolstudio.com/blog/progressive-disclosure-saas-dashboard-ux) |
| **2. Feature = Overview + How it works + Use cases + Specs** | Section order separates *what*, *how*, *where it shows up*, *IT*. Specs live last or in a labeled drawer. | Readers self-select path; IT doesn’t compete with operator story. | [Stripe Checkout](https://stripe.com/payments/checkout) — story blocks first, then explicit **Supported use cases** list, then built-in features / methods |
| **3. Scenario / room-type cards** | Small cards labeled by place or job (“huddle”, “medium room”, “ballroom”) with 1–2 outcome lines — not long prose. | Operators picture *their* floor; scanning beats reading. | [Microsoft Teams Rooms planning](https://learn.microsoft.com/en-us/microsoftteams/rooms/rooms-plan) — inventory by **room type/size** and capability templates (Focus / Small / Medium / Large) |
| **4. Feature accordion + sticky visual** | Left: stacked accordion (title + one-liner). Open: short copy + benefit checklist. Right: sticky screenshot synced to open item. | One feature at a time; visual proof without stacking every screenshot. | [shadcn Feature Accordion block](https://www.shadcn-ui-blocks.com/blocks/marketing/feature-sections/feature-accordion) |
| **5. Use-case cluster as its own subsection** | Dedicated “Use cases” / “Supported use cases” block with short labeled items (not buried in benefit soup). | Makes scenarios findable; prevents paragraph packing. | [Stripe Payments features — Use cases](https://stripe.com/payments/features); Checkout’s [Supported use cases](https://stripe.com/payments/checkout) |
| **6. Hub of named capabilities (lean index)** | Features index as cards/tiles with short promise; deep content on demand or linked pages. | Good for many features; Upgrade Guide already has pillar pills → accordion (hybrid). | [Linear Features](https://linear.app/features) — named capability tiles, short promise each |
| **7. AV / room hierarchy framing** | Spaces → floors → buildings; deploy/manage by space, not by feature essay. | Matches how properties think (and how venue panels inherit location). | [Crestron XiO Cloud](https://www.crestron.com/Products/Featured-Solutions/XiO-Cloud) — spaces/floors/buildings/campus tree |

### Anti-patterns (avoid)

1. **Long prose paragraphs** as the only open-state content — readers bounce or skim past placement examples.
2. **Burying use cases inside benefit bullet soup** — “cabana” as half a sentence inside a capability list is not a scenario.
3. **Mixing customer voice and IT in one unlabeled accordion** — pairing cookies next to “bartender can’t kill power” without labels.
4. **Expand-all + dense bodies by default** — disclosure without a scannable inner structure still feels like a wall.
5. **Invisible media** — data has placeholders but UI never shows them; visuals that never appear don’t reduce load.
6. **Too-sparse closed state** — if the one-liner doesn’t sell expand, progressive disclosure fails (closed state on Upgrade Guide is already OK).

---

## Part C — Three layout theses for LUCI (reuse across features)

All three keep: mint-wash lockups, pillar grouping, native accordion chrome, separate Technical section. None redesigns the whole Upgrade Guide. Start with Venue panels as the pilot.

---

### Thesis 1 — **“On your property” scenario cards** *(Jane’s instinct — recommended default)*

**Pattern name:** Scenario-card deep-dive (Overview → Property cards → Limits → IT link)

**Section order inside open accordion:**
1. **One-liner** (already on summary — unchanged)
2. **What it is** — short overview (trim today’s paragraph to 2–3 sentences *when copy is later approved*; research only now)
3. **On your property** / **Where it shows up** — **scenario card grid** (Ballroom, Cabana/pool, Bar, Conference/media — from audit)
4. **Limits & controls** — short checklist (what admins can restrict: surfaces, sources, PIN vs open)
5. **Optional IT drawer** — link or nested `<details>` “For IT / A/V” pointing to `#ug-tech-item-technical-venue-panels` (do not paste IT bullets into customer body)

**Where ballroom/cabana live:** Dedicated labeled subsection — Jane’s instinct. Cards, not paragraph fragments.

**How IT stays findable:** Remains in `#ug-technical`; customer body only gets a labeled jump link / compact nested drawer. Never unlabeled mix.

**Model split:**
- **Claude:** visual thesis for card chrome inside mint accordion (spacing, card border, optional tiny room icon, mobile stack)
- **GLM:** layout in existing accordion system (`FeatureDraft` + Astro body) — add optional `scenarios[]` field; render grid; wire IT jump
- **GPT:** scenario card copy (title + 1–2 lines each) from audit facts only; optional trim of overview/limits once Jane locks thesis

**Fit with mint-wash / accordion:** High — cards sit *inside* open `.ug-feature__body`; no new page chrome; Expand all still works.

---

### Thesis 2 — **“Lean story beats”** *(leaner alternative)*

**Pattern name:** Labeled story beats (minimal structure, no card grid)

**Section order:**
1. One-liner (summary)
2. What it is — 2 short sentences
3. **Where it shows up** — horizontal **chip/beat row** or 3 compact labeled lines (`Ballroom — …` / `Cabana — …` / `Bar — …`), not cards
4. What you can limit — 3–4 bullets max
5. Text link: “Technical detail →” to IT item

**Where scenarios live:** Same “Where it shows up” subsection, but as beats/chips — lighter than cards.

**IT:** Jump link only (no nested IT drawer).

**Model split:**
- **Claude:** optional — usually skip; chips can reuse existing pill/mint hairline language
- **GLM:** small Astro/CSS change + optional `beats[]` in data
- **GPT:** 3 beat lines from audit

**Fit:** Highest continuity with current density; lowest visual change. Risk: still easy to under-signal “picture it on your property” vs cards.

---

### Thesis 3 — **“Split proof + scenario rail”** *(richer alternative)*

**Pattern name:** Accordion + sticky visual + scenario rail (docs/marketing hybrid)

**Section order inside open accordion (desktop):**
1. **Left / main:** What it is → **On your property** scenario cards (2–4) → Limits checklist
2. **Right (sticky):** media panel (screenshot / placeholder framed) synced to this feature — finally use `media` in the template
3. Footer of body: “IT & pairing details” nested drawer or jump to Technical

**Where scenarios live:** Same dedicated property subsection as Thesis 1, plus visual proof beside them.

**IT:** Nested labeled drawer *or* jump; still not mixed into limits list.

**Model split:**
- **Claude:** required — split layout thesis inside accordion body (sticky media, mobile collapse order, mint-compatible frames)
- **GLM:** implement split CSS/markup; render media; scenario grid; expand-all behavior with sticky
- **GPT:** scenario copy + alt text labels for media placeholders

**Fit:** Still inside Features accordion + mint wash, but heaviest CSS. Best when screenshots exist; weaker while media is placeholder-only.

---

## Comparison snapshot

| | Thesis 1 Scenario cards | Thesis 2 Story beats | Thesis 3 Split + rail |
|---|---|---|---|
| Matches Jane’s instinct | Strong | Partial | Strong + visual |
| Cognitive load | Low–medium | Lowest | Medium (until visuals land) |
| Accordion / mint fit | High | Highest | High with more CSS |
| Needs Claude | Yes (card chrome) | Rarely | Yes (split thesis) |
| Needs GLM | Yes (layout + data shape) | Yes (small) | Yes (heavier) |
| Needs GPT | Scenario copy | Beat lines | Scenario + media labels |
| Blocked on screenshots? | No | No | Partially (placeholder OK, weaker) |

---

## Recommended default

**Pick Thesis 1 — “On your property” scenario cards.** It is the closest match to Jane’s instinct (operators need to picture ballroom / cabana / bar on *their* property), reuses the existing accordion + mint-wash language, keeps IT in its own section with a clear jump, and does not wait on screenshots the way Thesis 3 does. Thesis 2 is the right fallback if Jane wants zero new visual chrome before Screenshots Week. Thesis 3 is the upgrade path once Venue panel UI captures exist and Claude has a split-body thesis.

---

## Exact next beat (after Jane picks)

| If Jane picks… | Next artifact | Models |
|---|---|---|
| **Thesis 1** | Claude: 1-page visual thesis (card inside `.ug-feature__body`, mint tokens, mobile). Then GPT: 3–4 scenario card drafts from audit only (no invent). Then GLM: `scenarios?: { id, label, line }[]` on `FeatureDraft` + Astro render + IT jump for Venue panels only. | Claude → GPT → GLM |
| **Thesis 2** | GPT: 3 beat lines. GLM: beats row in accordion body + IT text link. Skip Claude unless Jane wants polish. | GPT → GLM |
| **Thesis 3** | Claude: split-body thesis (sticky media + scenario rail). GPT: scenarios + media alt. GLM: implement + placeholder frame. | Claude → GPT → GLM |

**Out of scope until Jane says go:** rewriting locked Venue panels paragraph/benefits, changing Technical bullets, deploy, or applying pattern to every feature at once (pilot Venue panels first).

---

## Sources checked (this brief)

- Local: `upgradeGuide.ts` (venue-panels + technical-venue-panels), `luci-upgrade-guide.astro` (deep-dive + technical markup/CSS), `venue-panels-transcript-audit.md`
- External: Stripe Checkout / Payments features; MV3 + Mool progressive disclosure; shadcn Feature Accordion; Linear Features; Microsoft Teams Rooms planning (room-type inventory); Crestron XiO Cloud (space hierarchy)

---

*Research only. Weatherby will not ping Jane; parent routes the pick.*
