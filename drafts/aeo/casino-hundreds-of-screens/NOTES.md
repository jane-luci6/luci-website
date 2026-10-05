# Casino “hundreds of screens” AEO/GEO draft notes

Reviewers: Jane Haynie and Thaddeus

Buyer question: “How do casinos control content on hundreds of screens from one place?”

Lane: discovery / early shopping for casino and resort operations and IT

## Draft status

- `index.html` is a self-contained browser preview with inline CSS and no external assets or production dependencies.
- The preview includes `noindex, nofollow`.
- The package is outside `src/` and `public/`, so the current Astro build does not publish it.
- This is one copy direction for review. It does not change a live page, CMS entry, route, or deployment.
- The previous `drafts/aeo/casino-screen-content/` concept remains separate and unchanged on PR #10.

## Slug and placement options

### Option 1 — guide

`/resources/guides/how-casinos-control-hundreds-of-screens`

- Best match for the exact discovery question and early-shopping intent.
- Lets the source → distribution/closets → STBs/players → screens explanation lead before the product conversation.
- Can link onward to the casino industry page, platform page, Ameristar case study, and contact page.

### Option 2 — use case

`/platform/use-cases/casino-screen-control`

- Best if the page should sit closer to platform evaluation.
- Creates a direct path from the answer to a LUCI conversation, but reads as more product-led than the query itself.

**Working recommendation:** use the guide placement. Keep the exact buyer question as the page title and use the shorter `casino-screen-control` phrase for internal navigation or cross-links.

## Claim audit

| Claim in draft | Decision | Repository source / rationale |
| --- | --- | --- |
| LUCI brings screens, sources, destinations, and zones into one control interface. | **OK** | `src/data/site.ts` supports the one-interface position; `src/data/zones.ts` says users can see every screen, source, and zone on one floor plan; `src/data/industryDetails.ts` says casino screens, zones, and channels move through the same platform. |
| Authorized teams can choose what plays where, schedule routine changes, and recall saved programming. | **OK** | `src/data/features.ts` supports role/zone permissions plus presets and scheduling. Casino solutions and automations in `src/data/industryDetails.ts` support in-house schedules, presets, morning baselines, and screen/zone programming. |
| LUCI works with a property’s content sources and A/V distribution rather than requiring every connected system to be displaced. | **OK** | `src/pages/platform.astro` says open interfaces integrate systems and content sources already in use. `src/data/features.ts` supports open integration across A/V, signage, building, and content systems. |
| The plain-language path is sources → A/V/network distribution and closets → STBs/media players → screens and zones. | **OK for this requested explainer** | The task brief specifically requires this path. Repository support includes head-end/standard-IP language in `src/data/industryDetails.ts`, centralized A/V processing in `src/data/caseStudyAmeristar.ts`, and digital media players plus IPTV encoders in `public/images/diagrams/luci-system-architecture.svg`. Exact “STB” terminology should still receive Jane’s product-language check. |
| Example sources include live television, sportsbook feeds, promotions, and digital signage content. | **OK** | Casino copy in `src/data/industryDetails.ts` references live games/television, sportsbook, promotions, displays, and signage. |
| Operations can control everyday programming while permissions stay aligned by role and zone. | **OK** | `src/data/features.ts` supports role-based, zone-designated control. `src/data/whoWeServe.ts` supports programming screens by zone and moment for operations and running A/V endpoints for IT. |
| LUCI’s support and ongoing partnership remain behind the property team. | **OK** | `src/data/site.ts` defines the partnership as the team that designs, deploys, supports, refines, and partners with the property. |
| Ameristar Council Bluffs gained a unified endpoint view, broader delegation by zone, automated resets, and scheduling after LUCI centralized new A/V processing in its IT data center. | **OK** | Directly supported by `src/data/caseStudyAmeristar.ts`, especially the approach, results bullets, and results paragraphs. |
| LUCI has a stated maximum screen count, or every casino uses the same topology. | **CUT** | The repository does not establish a screen-count limit or one universal property design. The draft answers the “hundreds” question without inventing either. |
| LUCI is a content-authoring system or includes unverified analytics and content-creation features. | **CUT** | Not needed to answer the question and not established by the reviewed sources. |
| Quantified ROI, savings, performance, or market-superiority claims. | **CUT** | No supported metric is needed for this discovery answer. |
| LUCI removes the need for vendors or support, or requires wholesale replacement of connected technology. | **CUT** | Conflicts with the approved works-with and ongoing-partnership position. |
| Competitor, partner, or integration brand names. | **CUT** | Category and outcome language is sufficient for this page. |

## Open questions for Jane

1. Is “STBs & players” the right visitor-facing label, or should the page spell out “set-top boxes and media players” everywhere?
2. Does the four-step path accurately cover the common casino architectures LUCI encounters, or should “head end” or “equipment closets” be adjusted?
3. Should the final page consistently say “casino,” or keep “casino and resort” in supporting copy for mixed properties?
4. Is the source list—live television, sportsbook feeds, promotions, and digital signage content—the right discovery-level mix?
5. Should the Ameristar proof remain on-page, or should this page use a shorter proof line that links to the full case study?
6. Is “Start a conversation” the preferred soft CTA, and should it point to the general contact route or a future casino-specific route?
7. If this direction moves toward production, should the exact-question FAQ structured data remain after SEO/schema review?
