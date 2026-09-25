# GLM brief — Build preview-only feature deep-dive UX mock page

**EXECUTE. Implement + deploy to .37. Do NOT change live Upgrade Guide Venue panels content/structure.**

## Goal
Create a **preview-only** Astro page Jane can hard-refresh that shows Venue panels accordion open in **three treatments**, clearly labeled. Prefer **full-width sticky thesis switcher (1 / 2 / 3)** showing one treatment at a time — OR stacked labeled sections Thesis 1/2/3. Do NOT use three unreadably narrow columns.

## Route
- New file: `src/pages/luci-upgrade-guide-feature-ux-mock.astro`
- URL: `http://10.10.1.37/luci-upgrade-guide-feature-ux-mock/`
- `noindex`, preview banner at top: **"PREVIEW MOCK — not live. Pick a thesis in chat with Weatherby."**

## Hard constraints
1. **Do NOT edit** `src/data/upgradeGuide.ts` live Venue panels copy/structure in a way that changes production output. Prefer importing read-only live `oneLiner` for closed chrome; put mock open-body stubs INLINE in the mock page (or a separate mock-only data file under `.tmp-weatherby/` or `src/data/` clearly named `upgradeGuideFeatureUxMock.ts` that is ONLY imported by the mock page).
2. **Do NOT change** `luci-upgrade-guide.astro` behavior/copy for the production path. Live `/luci-upgrade-guide/` must stay unchanged.
3. Reuse mint-wash / SectionBlock / BaseLayout / existing `.ug-feature` closed-state chrome language. Mock-specific open-body styles use `.ug-mock-*` prefixes.
4. Do NOT invent brand claims. Scenario stub lines from audit facts only; prefix or badge **MOCK COPY** where needed.
5. Follow Claude visual lock if present at `.tmp-weatherby/feature-ux-mock-claude-lock.md`. If missing, use chrome specs embedded below + research brief.

## Content stubs (MOCK — from audit facts only)

**Closed chrome (same all theses — use LIVE oneLiner):**
- name: Venue panels
- oneLiner: from live `upgradeGuide.features` venue-panels

**What it is (short — mock trim of idea, mark MOCK COPY):**
- Venue panels put approved room controls on a wall touchscreen or tablet in the space. Operators see only that room’s endpoints and the actions an admin allows — not the full LUCI app. *(MOCK COPY)*

**Scenario stubs (titles + 1–2 lines, MOCK COPY):**
1. **Ballroom** — Wall panel scoped to that event space; staff/PIN likely. Theming can match the room.
2. **Cabana / pool** — Guest-facing / open / tap-to-wake; channel for that cabana’s screen.
3. **Bar** — Bartender controls source/volume; hide power so TVs stay on.
4. **Conference / media** — Localized room control; inherits endpoints assigned to that room.

**Limits & controls checklist (MOCK COPY, from audit):**
- Hide individual actions (e.g. power) while allowing source/volume
- Limit which sources appear
- PIN for staff vs open/tap-to-wake for guests
- Typically one panel per room (or a couple)

**IT stub:** link labeled "Technical detail →" pointing to `#ug-tech-item-technical-venue-panels` on the LIVE guide (`/luci-upgrade-guide/#ug-tech-item-technical-venue-panels`) OR a local stub details on the mock page. Prefer jump to live IT item so Jane sees the real split.

## Thesis open-body structures

### Thesis 1 — "On your property" scenario cards
Order: What it is → **On your property** 2×2 card grid → Limits & controls checklist → Technical detail →

### Thesis 2 — "Lean story beats"
Order: What it is (2 short sentences) → Where it shows up as **chips/labeled beats** (not cards) → Limits 3–4 bullets → text Technical detail →

### Thesis 3 — "Split proof + scenario rail"
Desktop: main (what + scenario cards + limits) + **sticky right** framed empty "Panel UI" / media placeholder box. Mobile: stack content then frame. Foot: IT link/drawer stub.

## Chrome defaults if Claude lock missing
- Cards: white/mint-tint fill, 1px `var(--rule-light)`, ~10px radius, 14–16px pad, title bold head font, 1–2 body lines 13.5–14px
- Chips: pill border mint hairline, compact horizontal wrap
- Media frame: 16:10-ish box, dashed or soft rule, centered label "Panel UI — screenshot placeholder", sticky `top: 1.5rem` on desktop
- Subsection labels: small caps or eyebrow weight, mint accent optional
- Banner: amber/warning strip or navy bar — clearly PREVIEW, not production

## Page UX
- Sticky thesis switcher buttons: Thesis 1 · Thesis 2 · Thesis 3 (also deep-link `?thesis=1|2|3` or hash)
- Each treatment shows ONE open `<details class="ug-feature" open>` with identical closed chrome
- Optional: short labeled stacked fallback below switcher for print/compare-all (collapsed by default OR visible with clear H2s) — switcher primary
- Link back to live guide: `/luci-upgrade-guide/`

## Deploy
1. Implement mock page (+ optional mock data file)
2. Verify `luci-upgrade-guide.astro` and venue-panels in `upgradeGuide.ts` are **unchanged** (git diff should show no production content edits — only new mock files + maybe board)
3. `./deploy.sh` from luci-website repo root
4. curl -I `http://10.10.1.37/luci-upgrade-guide-feature-ux-mock/` expect 200
5. curl live guide venue panels still present unchanged
6. Commit on current branch with message: `mock: feature deep-dive UX theses (preview only)`

## Report back (stdout)
- Mock URL
- Commit hash
- Confirm live `/luci-upgrade-guide/` untouched
- How to switch theses on the page

## References
- Research: `.tmp-weatherby/feature-deepdive-ux-research.md`
- Audit: `.tmp-weatherby/venue-panels-transcript-audit.md`
- Live page: `src/pages/luci-upgrade-guide.astro` (styles ~687–801)
- Live data: `src/data/upgradeGuide.ts` venue-panels (~252–271)
- Claude lock (if written): `.tmp-weatherby/feature-ux-mock-claude-lock.md`
