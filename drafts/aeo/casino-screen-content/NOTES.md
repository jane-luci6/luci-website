# Casino screen-content AEO/GEO draft notes

Reviewers: Jane Haynie and Thaddeus  
Buyer question: “Is there a simpler way to manage content on screens across a casino or resort?”  
Lane: discovery for casino/resort operations and IT

## Draft status

- `index.html` is a self-contained browser preview with inline styles and no production dependencies.
- It includes `noindex, nofollow` and is outside `src/` and `public/`, so the current Astro build does not publish it.
- This is copy direction for review, not a live page or CMS entry.

## Suggested URL placement

Placement is undecided. Two options:

1. **Guides/resources hub:** `/resources/guides/simpler-casino-screen-content-management`
   - Best if the goal is to meet a broad discovery question with an educational answer.
   - Gives the page room to explain the source-to-screen model before introducing a product conversation.
2. **Product/use-case:** `/platform/use-cases/casino-resort-screen-content-management`
   - Best if the goal is to connect the question directly to LUCI’s casino/resort screen-management use case.
   - Creates a clearer path from the answer to a product conversation.

Working recommendation: start in guides/resources because the query is early-stage and category-discovery oriented. Cross-link to the casino industry and platform pages if approved.

## Claim audit

| Claim in draft | Decision | Repository support |
| --- | --- | --- |
| LUCI gives casino/resort teams one interface to manage what plays across screens and zones. | **OK** | `src/data/industryDetails.ts` casino thesis and `src/data/whoWeServe.ts` describe screens, zones, and programming from one platform/interface. `src/data/site.ts` contains the approved one-interface positioning. |
| LUCI works with sources and A/V technology the property already uses. | **OK** | `src/data/personaDetails.ts` states that LUCI runs on existing hardware and expands in phases. `src/data/industryDetails.ts` describes LUCI talking to existing gear. |
| The property handles everyday programming while LUCI continues to design, support, and refine the system. | **OK** | `src/data/site.ts` defines the partnership as a team that “designs, deploys, supports, refines, and partners with your property.” Casino copy in `src/data/industryDetails.ts` supports in-house schedule and permission editing. |
| Content can include live television, sportsbook feeds, promotions, and digital signage content. | **OK** | Casino examples in `src/data/industryDetails.ts` include live games/television, sportsbook, promotions, displays, and signage. |
| Content travels through the property’s A/V/network path, with equipment centralized in an IT data center or A/V closet. | **OK, keep property-specific in sales follow-up** | `src/data/caseStudyAmeristar.ts` documents A/V processing centralized in the IT data center. `src/data/industryDetails.ts` describes a central head end and standard IP. The preview avoids claiming that every property has the same topology. |
| Authorized users can select destinations, schedule changes, save setups, and return screens to a baseline. | **OK** | `src/data/industryDetails.ts` documents schedules, permissions, saved configurations/presets, morning resets, and programming by screen/zone. |
| LUCI absorbs control into one interface while connected sources and equipment continue doing their jobs. | **OK** | Existing-hardware support appears in `src/data/personaDetails.ts` and `src/data/industryDetails.ts`; one-interface control is canonical in `src/data/site.ts`. This wording avoids a full technology-displacement claim. |
| Access can be organized by role and zone. | **OK** | `src/data/caseStudyAmeristar.ts` supports operational users and delegation by zone; `src/data/industryDetails.ts` supports schedules and permissions in the platform. |
| Ameristar received a unified endpoint view, delegated zone access, automated resets, and scheduling after LUCI modernized and relocated its A/V processing. | **OK** | Directly supported by `src/data/caseStudyAmeristar.ts`. |
| Ameristar Facilities Manager quote. | **OK, confirm final publication approval** | The same attributed quote appears in `src/data/caseStudyAmeristar.ts` and `src/data/site.ts`. |
| Quantified ROI, percentage savings, guaranteed operational outcomes, or a market-superiority claim. | **CUT** | Not needed to answer the buyer question; no such claim is included. |
| Claims that LUCI removes the need for support partners or requires full technology displacement. | **CUT** | Conflicts with the approved partnership and existing-technology position; no such claim is included. |
| Unverified feature specifics such as content authoring, analytics, screen-count limits, or named integrations. | **CUT** | Not established by the reviewed repository sources; no such claim is included. |

## Open questions for Jane

1. Should this page keep “casino or resort” broad, or should the final version focus on casino operations and link resort/hotel visitors elsewhere?
2. Is the source list—live television, sportsbook feeds, promotions, and digital signage content—the right discovery-level mix, or should any source be removed or renamed?
3. Is “IT data center or an A/V closet” the preferred plain-language description for the middle of the source-to-screen path?
4. Can the Ameristar proof and Facilities Manager quote be reused on this page, or should proof link to the case study without repeating the quote?
5. Which destination should the soft CTA use: the general contact page, a casino inquiry route, or a future guided demo?
6. If this moves toward production, should the one-question FAQ structured data remain, and which team owns final schema review?
