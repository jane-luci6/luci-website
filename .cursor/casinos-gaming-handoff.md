# Casinos & Gaming industry page — session handoff

**Last updated:** July 8, 2026  
**Review URL:** http://10.10.1.37/industries/casinos-gaming (always hard-refresh: Cmd+Shift+R)  
**Deploy:** `./deploy.sh` from `luci-website` repo root → rsyncs to `luci@10.10.1.37:/var/www/luci`

This page is the **template vertical** for other industries. Other slugs in `industries.ts` still use the old scaffold until `industryDetails` entries are added.

---

## Page structure (top → bottom)

| Section | Chapter nav ID | Component | Notes |
|---|---|---|---|
| Hero (video + thesis) | `casino-thesis` | `IndustryHeroStage.astro` | Video: `luci-led-sportsbook.mp4` |
| Challenges (flip cards) | `casino-challenges` | `IndustryChallenges.astro` | 5 cards; #4 featured (wide) |
| **"Sound familiar?" callout** | (inside challenges) | `IndustryCallout.astro` | Lives **after** flip cards, **before** solutions |
| What LUCI changes | `casino-solutions` | `IndustryProblemSolution.astro` | Before/After rows + scroll reveal |
| Automation & presets | `casino-automation` | `IndustryAutomationShowcase.astro` | 5 flip cards |
| Proof | `casino-proof` | inline in `[slug].astro` | Ameristar case study + Yaamava stat |
| CTA | `casino-cta` | inline in `[slug].astro` | |

---

## Key files

### Data
- `src/data/industryDetails.ts` — all copy, images, lockups, chapters for `casinos-gaming`
- `src/data/industries.ts` — slug list / hub cards

### Components (industry-specific)
- `src/components/IndustryHeroStage.astro`
- `src/components/IndustryChallenges.astro` — accepts optional `callout` prop
- `src/components/IndustryCallout.astro` — shared gold-bar quote block (scroll reveal)
- `src/components/IndustryProblemSolution.astro` — image + Before/After panel rows
- `src/components/IndustryAutomationShowcase.astro`
- `src/components/PlatformChapterNav.astro` — sticky chapter nav

### Page
- `src/pages/industries/[slug].astro` — branches on `getIndustryDetail(slug)`; casino path uses full layout above

### Images (website)
- `public/images/industries/casino/` — all challenge + solution photos
- Canonical copies also in: `luci-design/LUCI Systems Design System/assets/industries/casino/`

---

## Challenge images (finalized)

| # | Headline | File | Cache |
|---|---|---|---|
| 1 | Racks and racks of proprietary gear | `challenge-messy-racks.jpg` | v1 |
| 2 | Nobody owns the whole outcome | `challenge-no-owner.jpg` | v3 |
| 3 | The one person who understood it leaves | `challenge-integrator-leaves.jpg` | v2 |
| 4 | The floor drifts overnight (**featured**) | `challenge-courtroom-tvs.jpg` | v2 — fictional courtroom, not Judge Judy |
| 5 | Every event mode becomes a manual scramble | `challenge-event-mode-scramble.jpg` | v1 — tablets/remotes/radios |

Judge Judy appears in **copy only** (callout + solution #04 body), not in challenge photos.

---

## Solution images (finalized)

| # | File | Cache | Concept |
|---|---|---|---|
| 01 | `solution-clean-rack.jpg` | **v3** | Full rack top-to-bottom; hardware upper-middle; real server room (v4 gen) |
| 02 | `solution-one-owner.jpg` | v2 | LUCI handshake; plain back-of-house corridor |
| 03 | `solution-self-service.jpg` | v2 | Casino team only (incl. woman); no LUCI employee; eye contact |
| 04 | `solution-coordinated-floor.jpg` | **v2** | All sports screens — use `casino-solution-04-all-sports-screens-v2.jpg` from assets if re-copying |
| 05 | `solution-one-tap-modes.jpg` | v2 | iPad with LUCI preset UI (user screenshot) |

**No index numbers on solution images** — badges removed July 8.

### Solution copy structure (each row)
- **Before** — muted problem line (matches challenge headline)
- **Headline** — short punchy takeaway (Space Grotesk bold)
- **Body** — one supporting sentence (normal weight)

---

## Design decisions locked in (July 8)

1. **Challenges:** photo-front flip cards; headline on front, body on back
2. **Solutions:** alternating image L/R on desktop; mint-tinted copy panel; scroll-reveal animation (Before → arrow → After headline + rule → body)
3. **Callout:** moved from bottom of solutions to bottom of **challenges** section
4. **Solutions lockup:** `lockupRole` is empty string (no subhead rule under "What LUCI changes")
5. **Section padding:** `#casino-challenges` and `#casino-solutions` both use `clamp(48px, 8vw, 96px)` block padding

---

## Generated assets folder (source copies)

Cursor-generated JPGs live at:
```
/Users/janehaynie/.cursor/projects/Users-janehaynie-Documents-Cursor-Projects-luci-design/assets/
```
Useful filenames if re-deriving:
- `casino-solution-01-quarter-rack-v4.jpg` → rack (latest)
- `casino-solution-02-handshake-luci-v3.jpg`
- `casino-solution-03-casino-team-v3.jpg`
- `casino-solution-04-all-sports-screens-v2.jpg`
- `casino-solution-05-luci-preset-screenshot-v3.jpg`

After copying into `public/images/industries/casino/`, bump `?v=N` in `industryDetails.ts` and run `./deploy.sh`.

---

## Unused / stale files in casino image folder

Not referenced in data — safe to delete eventually:
- `challenge-judge-judy-tvs.jpg`, `challenge-rack-ratsnest.png`
- `solution-morning-floor.jpg`, `solution-interface-training.jpg`, `solution-partnership.jpg`, `solution-rack-clean.jpg`, `solution-rack-luci.png`, `solution-signage-headend.jpg`

---

## Likely next steps

- [x] Ameristar Council Bluffs case study — full page at `/resources/case-studies/ameristar-council-bluffs` + PDF at `/downloads/LUCI-Case-Study-Ameristar-Council-Bluffs.pdf` (homepage proof CTA links here)
- [ ] Jane review pass on **Automation** section (flip cards — not heavily edited today)
- [ ] Jane review pass on **Proof** + **CTA** copy
- [ ] Clone pattern to next vertical (hotels-resorts, sports-venues, etc.) — add `industryDetails` entry + industry images
- [ ] Industries hub page (`/industries`) — may need card copy/image alignment with detail pages
- [ ] Optional: add Inter font for solution body copy (site currently uses Space Grotesk for all text tiers)

---

## Quick commands

```bash
# Build + deploy to review VM
cd "/Users/janehaynie/Documents/Cursor Projects/luci-website"
./deploy.sh

# Local dev (not the deliverable — Jane reviews .37)
npm run dev
```

---

## Agent context

- Full conversation transcript: `luci-design` agent transcripts folder, session `3f62cc53-0e35-44ef-b746-b6581acea100`
- Workspace rules: `luci-design/.cursor/rules/luci-website-review-deploy.mdc` (deploy to .37, not localhost)
- Canonical asset rules: `luci-design/.cursor/rules/luci-canonical-assets.mdc`

When starting a new Cursor tab, point the agent at this file:
> Read `.cursor/casinos-gaming-handoff.md` in luci-website for current state on the Casinos & Gaming vertical page.
