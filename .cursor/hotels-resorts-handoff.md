# Hotels & Resorts industry page — handoff (template clone)

**Last updated:** July 9, 2026  
**Review URL:** http://10.10.1.37/industries/hotels-resorts (hard-refresh: Cmd+Shift+R)  
**Deploy:** `./deploy.sh` from `luci-website` repo root

Cloned from the **Casinos & Gaming** template. Section IDs are now shared (`industry-*`) so the same `[slug].astro` layout works for every vertical with a `industryDetails` entry.

---

## Status

| Area | State |
|---|---|
| Page structure + components | ✅ Wired (same as casino) |
| Copy (`industryDetails.ts`) | ✅ Draft hotel-specific scaffold |
| Hero image | ✅ `hotels-resorts.jpg` |
| Challenge + solution photos | ⏳ **Placeholders** — all point to hero stock until generated |
| Case study callout | ✅ `HomeProof` band between Solutions and Automation |
| Proof section | ❌ Removed (casino template updated) |

---

## Page structure (top → bottom)

| Section | Chapter nav ID | Component |
|---|---|---|
| Hero (image + thesis) | `industry-thesis` | `IndustryHeroStage.astro` |
| Challenges (flip cards) | `industry-challenges` | `IndustryChallenges.astro` |
| "Sound familiar?" callout | (inside challenges) | `IndustryCallout.astro` |
| What LUCI changes | `industry-solutions` | `IndustryProblemSolution.astro` |
| Council Bluffs case study | — | `HomeProof.astro` |
| Automation & presets | `industry-automation` | `IndustryAutomationShowcase.astro` |
| CTA | `industry-cta` | inline in `[slug].astro` |

---

## Key files

- `src/data/industryDetails.ts` — `hotels-resorts` entry (copy + image paths)
- `src/pages/industries/[slug].astro` — shared layout; branches on `getIndustryDetail(slug)`
- `public/images/industries/hotel/` — challenge + solution images (generate next)

---

## Image checklist (to generate)

### Challenges
| # | Headline | File |
|---|---|---|
| 1 | Every space runs its own stack | `challenge-separate-stacks.jpg` |
| 2 | Brand standards drift property to property | `challenge-brand-drift.jpg` |
| 3 | Ballroom turnover is still a service call | `challenge-ballroom-turnover.jpg` |
| 4 | Meeting boards and wayfinding go stale by hand (**featured**) | `challenge-event-boards.jpg` |
| 5 | The integrator who built it is not there anymore | `challenge-integrator-leaves.jpg` |

### Solutions
| # | Headline | File |
|---|---|---|
| 01 | One platform spans every zone | `solution-one-platform.jpg` |
| 02 | Brand standards hold across every property | `solution-brand-standards.jpg` |
| 03 | Divisible rooms switch in one tap | `solution-ballroom-presets.jpg` |
| 04 | Boards and wayfinding stay in sync | `solution-event-boards.jpg` |
| 05 | Your team edits schedules in-house | `solution-self-service.jpg` |

Optional: hero video + poster (casino uses sportsbook MP4).

---

## Copy review notes

Draft copy is hotel/resort-specific and **research-validated** (July 2026):
- **Fragmentation across zones** — hotels grow AV organically across vendors/standards (CGS).
- **Brand drift across a portfolio** — signature hotel challenge; head office vs local teams (Mood Media, RIU's 40+ hotels centralized).
- **Divisible ballroom / room-combine programming** — Warner Center Marriott (20+ configs); Caesars Forum (5 months of DSP programming).
- **Wayfinding & event boards tied to PMS/EMS** — without PMS integration (Opera, Mews), boards go stale by hand (Strive AV, Smart Workplace Guide).
- **Integrator dependency** — acute when room-combine logic lives in one programmer's file.

**In-room entertainment intentionally excluded** (per Jane — LUCI does not do in-room).
**Resort angle** represented via pool/amenity zones (C1, S1, automation 04) and outdoor/multi-building context.

Review with Jane before locking images — several challenge/solution pairs may need tightening once visuals exist.

---

## Casino reference

See `.cursor/casinos-gaming-handoff.md` for component patterns, image generation notes, and deploy workflow.
