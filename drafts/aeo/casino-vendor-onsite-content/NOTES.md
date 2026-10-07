# Casino vendor on-site content-change draft notes

Buyer question: “Do we still need a vendor on-site every time we change content on casino screens?”

Audience: casino/resort operations, IT, and property teams evaluating everyday screen control.

## Draft status

- `index.html` is a self-contained visitor-first preview with inline CSS and no external assets or production dependencies.
- It includes `noindex, nofollow`.
- The package is outside `src/` and `public/`, so the Astro site does not publish it.
- This is review copy only. It does not add a route, CMS entry, deployment, or production change.

## Open decision: site placement

Placement is intentionally **undecided**.

### Guide option

`/resources/guides/change-casino-screen-content`

- Best match for an early buyer question seeking a practical explanation.
- Lets the answer and source-to-screen path lead before the product conversation.

### Use-case option

`/platform/use-cases/casino-screen-content-control`

- Best if the page should sit closer to product evaluation.
- Creates a shorter path from routine programming needs to a LUCI conversation.

Jane to decide whether this belongs in the guide or use-case lane. No recommendation is soft-locked yet.

## Open decision: proof treatment

The draft mirrors the light Ameristar pattern used in the existing casino AEO drafts:

- one short property example;
- no quote;
- no performance, savings, or ROI claim;
- three repository-supported operational outcomes.

Jane to decide whether to keep this on-page proof, reduce it to a single line linking to the Ameristar case study, or remove proof from this answer page.

## Open decision: CTA target

The preview uses **Start a conversation** and points to the general contact page.

Jane to choose the final target:

1. general contact;
2. a casino-specific inquiry route;
3. a future guided demo or consultation route.

## Wording for Jane to soft-lock

Please review and, if approved, soft-lock these external-facing lines:

1. **Direct answer:** “No. LUCI Systems is designed so authorized property teams can handle routine content changes themselves from one interface.”
2. **Product definition:** “LUCI is the AV-over-IP system: the rack or LUCI box and the software that distribute content over the property network and control what plays where.”
3. **Architecture:** “On a LUCI install, a traditional matrix switcher is not required.”
4. **Partnership:** “Property teams handle routine content changes. LUCI remains the partner behind the system for support, refinement, and work beyond everyday programming.”
5. **Visitor terminology:** confirm whether “LUCI rack,” “LUCI box,” “wall plates,” and “STB or player” are the preferred plain-language labels.

## Claim and guardrail check

| Draft statement | Treatment |
| --- | --- |
| LUCI provides the rack or LUCI box and software as the AV-over-IP system. | Required product framing; included in the first screenful. |
| Content travels over the property network and LUCI controls what plays where. | Required product framing; included in the opener and explainer. |
| LUCI works with existing content sources. | Included without a technology-displacement claim. |
| A traditional matrix switcher is not required on a LUCI install. | Included as an architecture fact, without replacement language. |
| Property teams can make routine content changes themselves. | Framed as more everyday control, not reduced support. |
| LUCI remains available for support and deeper work. | Repeated in the opener and audience section. |
| Ameristar unified endpoint visibility, delegated zone control, resets, and scheduling. | Mirrors the repository-supported proof pattern in the prior AEO drafts. |
| Competitor names, exclusivity claims, guaranteed outcomes, and quantified savings. | Excluded. |

## Final review questions

1. Should the supporting copy consistently say “casino,” or retain “casino and resort” for mixed properties?
2. Is “vendor on-site” the preferred phrasing in the title, or should the final headline use “service visit” while retaining the exact question in structured data?
3. Does the high-level path—sources → LUCI rack/wall plates → property network → STB or player → HDMI → TV—match the visitor explanation Jane wants?
4. Should FAQ structured data remain if this direction moves toward production?
