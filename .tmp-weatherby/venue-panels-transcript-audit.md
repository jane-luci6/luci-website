# Venue panels — transcript audit (originals only)

**Feature:** `venue-panels` / IT item `technical-venue-panels`  
**Date:** 2026-09-24 PT  
**Method:** Opened Call Recordings `*-transcript.docx` (and Aliante interview) via `textutil -convert txt`; searched full text. **No transcript summaries or digests used.** Feature-list docs (V1/V2/Preliminary) were **not** used as primary evidence.  
**Excluded from primary evidence (per Jane/Librarian):** Mike's LUCI Pitch; 06-26 Casino AV Control Automation and Upgrade Strategy (not New LUCI).

---

## A. Current live copy (verbatim from upgradeGuide.ts)

### Customer accordion — `features[]` id `venue-panels`

- **name:** Venue panels
- **pillarId:** room-control
- **oneLiner:** In-venue tablets show only the approved controls for that space. Operators adjust what they need without full access.
- **paragraph:** Venue panels put approved controls in the space where the work happens. A panel inherits the endpoints assigned to its venue, then shows only the power, source, volume, mute, and preset controls an administrator makes available, without opening the main LUCI application.
- **benefits:**
  - Adopts the endpoints already assigned to the venue
  - Limits each panel to the controls the room needs
  - Keeps the administrative application out of view
  - Makes approved presets available in the space
  - Can be scoped to one venue or several
- **media:** placeholder — "Venue panel controls — screenshot placeholder"

### IT / technical — `technical-venue-panels`

- **summary:** *(none in upgradeGuide.ts — item has `details` only)*
- **details:**
  - Tie a panel to a point in the site hierarchy: site, building, floor, or venue.
  - Inherit the endpoints assigned to that venue, then narrow access by control surface rather than by device.
  - Load a pared-down interface with no route into the administrative application.
  - Return the panel to its paired configuration on every boot.

---

## B. Transcript evidence (originals only)

Paths below are under  
`/Users/janehaynie/Library/CloudStorage/OneDrive-LUCISystems/Marketing - Documents/Call Recordings/`  
unless noted.

### B1. `08-25 Richard New LUCI Features Disc-transcript.docx` (internal product/features with Richard, Jane, Nick)

| Quote (speaker + context) | Why it matters |
|---|---|
| **Richard (~00:10:33):** "the tool, lets you build a kiosk which can control a scoped set of devices within that area… I could put one in every room to control just the device in that room… you can make it, so it has no PIN associated with it at all… you can only change the volume on it, you can’t change the power… You’ve got mute… volume… power and… source… I can scope it so that I can only change the source… I can’t change the volume." | **Customer + IT:** Core limited-controls story; per–control-surface scoping (power / source / volume / mute); optional no-PIN. |
| **Richard (~00:11:18):** "once that panel is essentially paired to whatever that preset that preset configuration is, that panel will always boot up to control only that one thing. And then admins can of course change it." | **IT (also customer):** Pairing + boot-to-scoped-config; admin override. Matches live IT "Return the panel to its paired configuration on every boot." |
| **Richard (~00:12:02–00:13:13):** Creating a new panel "by default… will grab everything that’s associated at that scoped location" — site → buildings → floors/levels → venues (old Lucy) / locations (new Lucy). "if you create a panel in that location. By default, that panel will be able to control everything that’s also assigned to that location… admins can change it after the fact." | **Customer + IT:** Inherit endpoints from hierarchy location; admin can narrow after. |
| **Jane (~00:10:13) / Richard:** Use cases — kiosks in each cabana / pool area; high-limit areas; ballroom. | **Customer:** Placement stories (cabana, high limit, ballroom). |
| **Richard (~00:05:12+) / Jane:** Physical touch-panel hardware customers would buy; may be paid/endpoint; individually customizable (e.g. ballroom vs pool color scheme). Status of mass procurement unclear in this call. | **Customer (light) + IT/commercial:** Hardware is sellable; theming per panel. Commercial packaging was unresolved in-call — do not invent pricing. |
| **Richard / Nick (~00:13:28–00:14:45):** Product surface name is **panels** in admin. "Kiosk" ≈ public-facing / possibly no PIN; also "wall pad," "touch panel," "pad" floating around. Nick: "We just call it panels." | **IT / naming:** Prefer "panels" in product; kiosk = usage mode/terminology. |
| **Richard (~00:11:44):** Scoped panel capability "definitely is not available in Lucy" (legacy) the same way. | **Customer:** Upgrade differentiator vs old kiosk mode. |

### B2. `08-12 LUCI Demo Pt 2-transcript.docx` (live New LUCI demo — primary technical depth)

| Quote (speaker + context) | Why it matters |
|---|---|
| **Nick (~01:45:36):** Wall-mounted physical touch panel LUCI sells; install, plug in; "It boots to a Lucy IP slash panels." | **IT:** Boot URL `/panels`; dedicated wall hardware. |
| **Jane (~01:45:57) / Speaker 1:** "Can you put those in cabanas?" — Yes; also suites, arenas, stadiums. | **Customer:** Cabana / suite / arena placement. |
| **Speaker 1 (~01:46:00+):** Create panel → select location (e.g. media room) → "it already knows the endpoints that are assigned to that location… auto assign." Scoped inside venue/location; assumption "control everything what’s in that area." | **Customer + IT:** Auto-inherit endpoints at create. |
| **Nick (~01:46:51):** "dedicated to a room or maybe a couple rooms. But typically it’s like a one-to-one ratio." | **Customer:** Usually one panel ↔ one room (can be a couple). |
| **Speaker 1 (~01:47:04):** Device type **"Rock Panel Kiosk Medium"**; ~800×1200; **10" diagonal**; PIN required option; idle lock; Nick: NCLI installer model number; screen brightness; idle timeout for lock screen. | **IT:** Hardware model assumptions; PIN; idle lock; brightness/timeout. |
| **Speaker 1 / Nick (~01:48+):** Issue pairing code → type on device → panel paired → unlock with PIN → control surfaces for devices in room (sources, mute, etc.). Same PIN can be shared across panels ("other side of the wall"). | **IT + customer:** Pairing-code workflow; shared PIN across panels in a space. |
| **Nick (~01:49:28):** Caesars Palace interest in room panels ("shitty panels" replacement context). | **Customer:** Real property interest signal (not a product spec). |
| **Mike (~01:57:15):** Think of panels as alternative to "an iPad at every venue" — buy a touchscreen instead; can still build for a user. | **Customer:** iPad vs dedicated touchscreen. |
| **Speaker 1 (~01:57:30+):** **No PIN required** option; tap-to-wake / wake screen; behavior timeouts. | **Customer + IT:** Public/no-PIN mode + wake behavior. |
| **Speaker 1 (~01:58+):** Paired-device telemetry: last command + correlation ID, last seen, last locked, platform; future asset/serial; Nick: backlight; possible future mic/voice. | **IT:** Device management / inventory fields. |
| **Speaker 1 (~01:59:01):** Default endpoints = what’s in the room; admin can add/change endpoints afterward (not forced to room-only). | **Customer + IT:** Default inherit + manual endpoint edit. |
| **Nick (~01:59:49):** Panel view vs map view — e.g. slot/marketing manager who shouldn’t get map; optional toggle discussed. | **Customer:** Simplified panel/list UI vs full map. |
| **Speaker 1 (~02:00:24):** **Per endpoint**, control which surfaces show (e.g. hide power so nobody turns TVs off); favorite / restrict allowed sources (e.g. only sources 14 and 16). | **Customer + IT:** Granular control-surface + source allow-list — stronger than accordion "limits controls." |
| **Speaker 1 / Nick (~02:02:07–02:03:52):** Pairing drops a **cookie** on the machine; `/panel` always returns that interface. Old model: type PIN anywhere and get the view — **no longer**. Unpaired/incognito asks for pairing code. Admin can **revoke** pairing / reissue code. Session is browser-based so **iPads and browsers** can pair too; goal is lock to physical location. | **IT:** Pairing lock-down model; revoke/re-pair; browser/iPad support. |

### B3. `08-12 LUCI Demo Pt 1-transcript.docx`

| Quote | Why it matters |
|---|---|
| **Nick (~00:01:35):** Touch panels need theming per room aesthetics; same theming translates to panel side; managed in Lucy panel configurator; "manage the panels remotely"; customize login screen for panels. | **Customer + IT:** Per-panel theming / remote panel management (related to customization pillar but tied to panels). |

### B4. `09_28 New LUCI Mark_Mike-transcript.docx`

| Quote | Why it matters |
|---|---|
| **Jane (~00:06:21):** Among primary upgrade features: "**venue panels**. This allows control in a specific room and only seeing that room on that venue panel. It’s also valuable for us because then we get to sell more panels." | **Customer:** Confirms naming "venue panels" and room-scoped visibility as the headline customer promise. |
| **Mike (~00:09:45):** (nearby) map orientation "where the panel lives, for that room" — map feature adjacency, not panel product itself. | Cross-check only; weak for venue-panels accordion. |

### B5. `09-10 Adam_Boyd LUCI Preso 1-transcript.docx` (customer-facing New LUCI demo — added per Librarian)

| Quote | Why it matters |
|---|---|
| **Nick (~00:02:xx):** Theming "will also make sense when we show you the touch panel side of things." | **Customer:** Touch panels called out in live customer demo. |
| **Richard (~00:08:48):** iPad as control surface (zoom/scroll). | **Customer:** Tablet/iPad as control surface. |
| **Nick (~00:27:41):** General user gets "couple buttons… power on and off… either a map view and or just a basic **panel view**… on the iPad… simple **list view** where they can just choose the TV and tap their sources, and it’s just a basic touch panel." Compact/bold UI for iPad vs full desktop for managers. | **Customer:** Panel/list view for operators; power + source tap; iPad-oriented UI — strong customer language. |

### B6. Other Call Recordings searched (secondary)

| File | Result |
|---|---|
| `07-14 Cabana_Room_Event Control-transcript.docx` | **Hit (Jane recounting Will):** Small office iPads for localized control — conference room channel/device switch; **cabanas** so guests pick channel for that cabana’s screen; pool-area screens. Also event-space combine/separate via Q-SYS (Lucy hooks Q-SYS — not native panel feature). **Customer** placement/use-case. Note: Jane’s notes, not a live product walkthrough. |
| `06-02 Nick Product & Services Convo-transcript.docx` | No venue-panel / tablet-panel / kiosk hits relevant to this feature. |
| `Disc @ Aliante Mike_EJ-transcript.docx`, `EJ Aliante Desc-transcript.docx`, `07-15 Jason Aliante-interview.docx` | No in-room / tablet / panel-control discussion matching search terms. |
| `LUCI Agents with Nick_Nathan-transcript.docx` | No relevant hits. |
| Other `*-transcript.docx` in Call Recordings | Converted and searched; remaining hits were generic iPad/browser access, permissions, or Crestron comparisons — not New LUCI venue-panel product behavior. **Not used as primary evidence.** |

### Explicitly not used as primary evidence

- Mike's LUCI Pitch.docx  
- 06-26 Consultation_ Casino AV Control Automation and Upgrade Strategy-transcript.docx  
- NEW LUCI Campaign feature lists / campaign plan (duplicates of some transcripts exist in Strategy & Messaging; **Call Recordings masters used**)  
- Any AI/digest/summary of transcripts  

---

## C. Customer accordion gaps

Necessary customer detail present in originals but missing/weak in live `oneLiner` / `paragraph` / `benefits`. Draft bullets only (facts for later GPT copy):

1. **Room-only visibility (headline)** — Jane (09_28): control in a specific room and **only seeing that room** on the venue panel. Accordion implies this via "approved controls for that space" but never states “you only see that room.”
2. **Where they go** — Transcripts repeatedly: ballroom, bar, high-limit, **cabana/pool**, conference room, suites/arenas; wall-mount or small tablet. Accordion has no placement examples.
3. **iPad *or* dedicated LUCI touchscreen** — Demo Pt2 / Adam Boyd / Mike (Demo): not tablets-only; dedicated wall panels boot to `/panels`; iPad/browser also pairable. Accordion says only “In-venue tablets.”
4. **Per-control limits with concrete examples** — Richard + Demo: hide **power** but allow volume/source; restrict **which sources** appear; mute/volume/power/source as separate surfaces. Accordion lists the surfaces but not the “bartender can’t power-off” style outcome.
5. **Optional PIN vs open/public** — No PIN / tap-to-wake for guest-facing (cabana) vs PIN for staff. Accordion silent on auth UX.
6. **Typically one panel per room (or a couple)** — Nick Demo Pt2. Benefit “scoped to one venue or several” is true but underplays typical 1:1 room deployment.
7. **Simple panel/list view (not full map / not full admin app)** — Adam Boyd + Demo: choose TV → tap sources; optional panel vs map. Accordion says admin app stays out of view; doesn’t say operators get a **basic list/panel UI**.
8. **Upgrade vs old Lucy** — Richard: this scoped panel model “definitely is not available” in old Lucy the same way (old had a weaker/unclear kiosk mode). Accordion doesn’t position as net-new.
9. **Presets on panel** — Live paragraph/benefits mention presets; transcript emphasis is stronger on power/source/volume/mute + source allow-lists. **Unclear** how prominently presets appear on the pared-down panel UI in demos — don’t oversell until confirmed.
10. **Theming/login customization per panel** — Pt1 / Richard: per-room colors/login. Belongs more in customization pillar; optional one-line cross-link only if accordion needs richness.

**Propose draft additions (bullet-level, not rewrite):**
- Add benefit or paragraph clause: “Operators only see the room (or rooms) that panel is for.”
- Add benefit: “Wall touchscreens or tablets — same limited controls in the space.”
- Add benefit: “Admins choose which actions appear (e.g. source and volume, but not power).”
- Add benefit: “PIN or open access, depending on whether staff or guests use the panel.”
- Soften or clarify “tablets” → “in-venue panels (tablet or wall touchscreen).”
- Optional use-case fragment: bars, cabanas, conference rooms, high-limit.

---

## D. IT section candidates

Compare to live `technical-venue-panels` details. Mark **already-covered** / **missing** / **unclear**.

| Candidate detail (from originals) | Status |
|---|---|
| Tie panel to site hierarchy (site → building → floor/level → venue/location) | **Already-covered** (worded as site/building/floor/venue) |
| Inherit endpoints assigned to that location; admin can narrow afterward | **Already-covered** (inherit + narrow by control surface) |
| Narrow by **control surface** (power, source, volume, mute) not only by device | **Already-covered**; transcripts also add **per-endpoint surface toggles** and **source allow-lists/favorites** → **missing** specificity |
| Pared-down UI / no route into full administrative application | **Already-covered** (as “no route into the administrative application”) |
| Boot returns to paired configuration | **Already-covered** |
| Boot URL: device boots to Lucy IP **`/panels`** (Demo Pt2) | **Missing** |
| Pairing-code issuance → enter on device → pair; cookie binds browser/device to that panel config | **Missing** |
| Pairing locked to physical device/session: PIN alone no longer unlocks the same view from arbitrary machines; unpaired `/panel` asks for code | **Missing** (important security/ops) |
| Admin revoke pairing / reissue pairing code / repair | **Missing** |
| Optional PIN required vs no PIN; named PINs; shared PIN across multiple panels in a space; idle lock / lock screen / idle timeout; tap-to-wake | **Missing** |
| Hardware: e.g. Rock Panel Kiosk Medium (~10", 800×1200); NCLI model flash; multi device-type support; iPad/browser also supported | **Missing** (hardware assumptions) |
| Panel telemetry: last command + correlation ID, last seen, last locked, platform; future serial/asset/backlight | **Missing** |
| Panel vs map view option (discussed / in progress in Demo) | **Unclear** if shipped as toggle — label carefully |
| Remote panel management / panel configurator / per-panel theming & login | **Missing** from this IT item (may live under customization/technical elsewhere) |
| Typical deploy: dedicated to one room (or couple); not whole-site on one panel | **Missing** (ops guidance) |
| Endpoint association editable after create (add/remove beyond auto-inherit) | **Partially covered** by “narrow access”; explicit add/change endpoints **missing** |
| Commercial: panels as sellable hardware / possible paid option | **Out of scope** for IT section unless commercial annex; unresolved procurement in Richard call |

**Suggested IT detail bullets to add (facts only):**
- Panels boot to the property LUCI host at `/panels` and wait to pair.
- Admin issues a pairing code; device/browser enters it; a cookie binds that client to the panel configuration until revoked.
- Revoke or reissue pairing to move or replace a panel.
- Configure PIN required or not; idle lock / timeout; optional tap-to-wake for open panels.
- After inherit, optionally hide individual control surfaces per endpoint and limit which sources appear.
- Supported clients include dedicated wall panels (e.g. Rock Panel Kiosk class) and paired browsers/iPads.
- Inventory/telemetry on paired device: last seen, last command, lock state, platform (expand as sold hardware matures).

**Suggested summary line (currently absent):**  
Something like: “Pair in-venue panels to a hierarchy location so they boot into a locked-down control surface for that space’s endpoints.”

---

## E. Sources checked

### Originals opened (full textutil → txt) and searched — Call Recordings masters

1. `08-25 Richard New LUCI Features Disc-transcript.docx` — **primary**
2. `09_28 New LUCI Mark_Mike-transcript.docx` — **primary**
3. `08-12 LUCI Demo Pt 1-transcript.docx` — **primary**
4. `08-12 LUCI Demo Pt 2-transcript.docx` — **primary**
5. `09-10 Adam_Boyd LUCI Preso 1-transcript.docx` — **primary (added)**
6. `07-14 Cabana_Room_Event Control-transcript.docx` — secondary use-case
7. `06-02 Nick Product & Services Convo-transcript.docx` — no relevant hits
8. `Disc @ Aliante Mike_EJ-transcript.docx` — no relevant hits
9. `EJ Aliante Desc-transcript.docx` — no relevant hits
10. `07-15 Jason Aliante-interview.docx` — no relevant hits
11. Also converted/searched other Call Recordings `*-transcript.docx` (Sales & Mktg, CJ Process, Jason_David Onsite, Will Go-Live, Will Automation, Penn Strategy, Mktg Capabilities, 07-21 Customer Consultation, Sam's Town, Angel of the Wind, LUCI Agents Nick_Nathan, Michael_Nick Brand Messaging, Random Discussion with Mike) for terms: venue panel, in-room, tablet, iPad, panel, limited control, operator, room control, cabana, event control, touch panel, kiosk, locked down, PIN, pairing, space-specific — **no additional New LUCI venue-panel product quotes retained as primary evidence**

### Seen but excluded from primary evidence

- Mike's LUCI Pitch.docx (excluded per steering)
- `06-26 Consultation_ Casino AV Control Automation and Upgrade Strategy-transcript.docx` (excluded — not New LUCI)
- Strategy & Messaging / NEW LUCI Campaign copies of the same transcripts (masters preferred); feature lists V1/V2/Preliminary/Campaign Plan **not** used as evidence

### Affirmation

**Did not use transcript summaries or digests.** All quotes above were taken from full converted original `.docx` body text via `textutil`.

---

*Scratch path for Weatherby / Jane. Do not edit upgradeGuide.ts from this audit alone.*
