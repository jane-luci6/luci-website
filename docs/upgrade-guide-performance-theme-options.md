# Upgrade Guide — performance theme options

Decision draft for Jane, 5 Oct 2026. The control theme stays: **putting the power of programming in your hands**. This memo places improved performance relative to the three control pillars, and homes Reporting & Analytics and WebGL, before Tunnel, Gantt, outside-change detection, and staff chat are nested.

Recommendation only. Live Upgrade Guide pages, guide data, and site navigation are unchanged.

Browser review of the same decision: `public/previews/upgrade-guide-performance-theme-options.html`.

## Pick

**Primary: scheme 1.** Address performance **before the pillars**. Do not rethink the pillars.

The headline stays the programming theme. Under it, before the pillar cards, a performance condition of at most three qualitative lines:

1. Real-time connection (the “establishing connection” / “real-time degraded” behavior Richard called out). Publish “fixed” only after he confirms the customer build. The Oct 5 demo still showed it.
2. Version-one cleanup: increased performance, fewer of the issues from version one. No counts. No load times.
3. A pointer to the map. The only place he said people should notice responsiveness is zoom and pan.

**WebGL** stays under Your view → Live map flexibility. **Reporting & Analytics** is its own section below the pillars, separate from In-product support, led by operator views rather than CoreX Health.

**Runner-up: scheme 2.** Same pillar row. The before-pillars block grows and holds Reporting & Analytics, if scheme 1’s band feels too thin for “performance is at the heart.” WebGL’s write-up still lives on the map. Keep that block shorter than the pillar row.

Schemes 3 and 4 rethink the pillars and lose to the locked theme. Scheme 5 is the publishing rule inside scheme 1: the Guide stays specific, the What’s New two-pager carries a few felt lines, and email can be warmer. Ferrari is Jane’s metaphor for this ask. It is an email framing option, not Guide copy, and it never sits next to a number Richard did not give.

## What Richard actually split apart

Oct 5, 2026 working session (Jane, Richard, Nick). No load-time, frame-rate, or percent-faster figure appears in that conversation. “Ferrari” does not appear there either.

He talked about performance as three separate things, then named a different major goal:

1. A standard release line: “increased performance, less bugs, like cleaned up a lot of the issues from version one.” No list, no measurements.
2. One place people should feel a difference: the map, because it is WebGL.
3. A stability problem he wants gone: “establishing connection” and “real-time degraded.” He said that is fixed in the latest build. Later in the same meeting the demo still showed it.

The major goal he named in the same stretch is site configuration doable in the tool, so a customer is not waiting on LUCI staff in the database backend. That is the control theme. It is not a speed claim. External wording still has to keep LUCI as the partner behind the property.

Jane’s bundle in this ask — faster load, improved real-time, bug fixes, fewer performance issues, analytics, WebGL, “the Ferrari of LUCI” — is wider than what he attested. The Guide can honor the instinct that performance belongs in the story without attesting the whole bundle.

## Fact sheet

| Topic | What the transcript supports | Guide use |
| --- | --- | --- |
| Real-time degraded / establishing connection | During the theme demo he asked to run it again without “the establishing connection and real-time degraded thing going away all the time,” and said “It’s fixed in the latest one.” Later, on the dashboard, the same indicator still bothered him; he said it should read green / online. On sessions he would not screenshot active users, because he was signed in and the screen did not show him, “because of that real-time failure.” | Hold the word “fixed” |
| Version-one performance and bugs | He offered “the standard like increased performance, less bugs” as the ordinary line, then moved to the configuration goal. He did not name which issues, and he did not rank this above control. | Qualitative line only |
| Faster load | Jane’s description in this ask. He never mentioned load time and never gave seconds or a percent. | Leave out |
| WebGL | “We’re using WebGL, which uses your graphics card. People should notice that the maps are much more responsive to zoom in, zoom out, to panning… That’s a fairly significant difference… our map technology is much better.” Jane: own section under View, or wrap it into an existing map section. Real locations on a United States map are a separate map change; she said Mike had pulled that back. | Felt difference, no timings |
| Reporting vs Audit Trail | After the dashboard tour: “No, this is not part of Audit Trail… this is part of reporting and analytics.” Jane: she has live monitoring and does not have reporting and analytics, so the feature should be added. She guessed Security, then said it also has to do with View. He said it also spans guest-experience control, and maybe it goes down below. She floated a fourth pillar for in-product support plus reporting. He said they could go as their own. She landed on separate things down here. | Own section, not Audit |
| What reporting contains | Dashboard: TVs, incidents. CoreX Health: scheduling, optimizing, health events, device incidents, offline and online. He called that “nerdy stuff. Nobody needs to ever be looking at like CoreX Health. But overview, maybe,” and “if they want to.” Analytics: latency, incident counts, presets run across 24 hours, 7 days, and 30 days. Also which commands fail or work, which drivers, who sent them; when presets run; incident trends over time. System logs (user, TV, time) are the audit trail, a different screen. | Lead with operator views |
| Live monitoring vs reporting | Live monitoring is for the property too, not only for LUCI. Active incidents and recent alerts are “pretty real time.” Online/offline icons already exist; what is new is one dashboard place for status. Analytics shows some of the same information: “multiple ways to view the same sets of things.” Device-incident history keeps how long something was down. He pointed at sportsbook TVs with no count to publish. | Now vs roll-up |
| Site configuration in the tool | Major goal beside the standard performance line. Same family as bulk-adding endpoints, pulling a NovaStar config, the central display-model catalog, and licenses pushed from LUCI Hub. Jane heard “less reliant on us.” His phrase on the catalog was putting the power back in their hands, which Jane identified as Mike’s theme. | Control story, not the performance band |
| Self-serve upgrade | He wants customers to preview an upgrade and go forward. He then said that preview path is not new. Recent practice has been LUCI staff upgrading a site when a bug is fixed. Pushing upgrades is “not wired up.” | Out of this decision |
| Ferrari | Jane’s metaphor in the ask that prompted this memo. He did not use it. Fair as an internal test of “response you can feel.” Risky as customer language because it sounds measured. | Email option only, her call |
| Other demo faults the same day | Venue-panel settings save did not take. An audio move had a CoreX bug. Map framing still assumes north is up. Entra sign-in: he has never seen it turned on. | Leave out |

### Lines worth keeping in reach

> I’d really love for you to do this again without the establishing connection and real-time degraded thing going away all the time. … It’s fixed in the latest one.

Richard, ~00:33, theme demo. The dashboard and session screens later in the meeting still showed the failure.

> We’re using WebGL, which uses your graphics card. People should notice that the maps are much more responsive to zoom in, zoom out, to panning. … That’s a fairly significant difference. … Our map technology is much better.

Richard, ~01:31. Jane: own section under View, or wrap it into a map section.

> You can always put in the standard like increased performance, less bugs, like cleaned up a lot of the issues from version one. … One of the major goals … site configuration should be all doable with this tool.

Richard, ~01:32. He said he does not know how she wants to sell the configuration goal. The database-backend remark is paraphrased here; the meaning is that customers should not need LUCI staff in the backend to configure the site.

> Latency, how many incidents, how many presets were run across twenty-four hours, across seven days, across thirty days.

Richard, ~01:09, Analytics. CoreX Health, a minute earlier: nobody needs to live there; overview, maybe.

## Pillar titles

Diagrams in the HTML review use the titles on the live Guide and in the nesting comps: **Guest experience**, **Your view**, **Security**, with **In-product support** full width underneath.

The brief for this memo also names a benefit-led set from the control lock: See and secure, Program and stage, Operate deeply. Those read here as the control meaning of the release, not as a second layout. Guest experience is the program-and-stage column. View and Security are the two halves of “see and secure” (Live Map on one side; sign-in and audit on the other). This memo keeps them as two columns because WebGL has to land on the map. “Operate deeply” is not a title on the live page. This memo does not add an Operate pillar.

If the benefit-led titles have already replaced the live ones, placement still holds: performance before the pillar row, WebGL inside whichever pillar contains Live Map, Reporting below the row as its own block.

## Schemes

Structure labels are for this review. They are not customer copy.

### 0 · Baseline

Performance is nowhere. Reporting, WebGL, Tunnel, Gantt, outside-change, and staff chat are unplaced. The last four stay unplaced in every scheme here.

### 1 · Condition before the pillars — recommended

Answers the fork by addressing performance first. Pillar count stays three.

- **Above the pillars.** Control headline first. Then at most three lines: real-time connection (hold “fixed”), version-one cleanup, pointer to the map. Tunnel, Gantt, outside-change, staff chat, CoreX Health, and “you won’t need to call LUCI” stay out of the band.
- **Guest experience.** Unchanged. No speed line.
- **Your view.** WebGL is a Live map bullet: zoom and pan use the graphics card and should feel more responsive.
- **Security.** Audit trails stay audit. Live monitoring stays the “right now” view. Reporting does not join this column.
- **Below.** Reporting & Analytics as its own peer. In-product support stays its own block.

### 2 · A section before the pillars — runner-up

Same fork, thicker block. Reporting moves up into that block because Jane wants analytics next to the performance story. WebGL’s full treatment stays under View. In-product support remains below, alone.

Why it is second: it puts a feature (analytics) in the same bucket as a release claim (it runs better). Readers can remember the bucket and miss the control headline. Promote it only if scheme 1 reads as a disclaimer. Guardrail: the block stays shorter than the pillar row.

### 3 · Fourth pillar — do not pick

Performance, WebGL, and Reporting become pillar 04. This is the rethink-pillars fork, close to Jane’s mid-meeting float of support plus reporting as a fourth, with speed added. A co-equal pillar is a second theme. WebGL leaves the map, which is where someone will look for how the map behaves. Salvage the instinct that support and reporting cut across: scheme 1 keeps them below the row, where she and Richard finished (“separate things down here”).

### 4 · Weave performance through the three pillars — do not pick

Each pillar would grow a “this also runs better” beat. He did not attest a speed gain for panels, staging, or sign-in. The real-time indicator is app-wide, not a Security feature. Reporting under Security collapses it into Audit, which he rejected. Reporting under View crowds the map. The true piece — WebGL in View — is already in scheme 1.

### 5 · Performance heat leaves the Guide — publishing rule, not the structure pick

The deep dive stays on control. Felt performance moves to the What’s New two-pager and to email. WebGL and Reporting still need Guide homes because they are features. Adopt the channel split inside scheme 1. Leaving the Guide silent would skip, for existing customers, the thing Jane thinks is the heart of the release.

## Why this ranking

Scheme 1 answers the fork and still obeys the lock. Before the pillars leaves programming-in-your-hands as the theme. Richard’s order matches that: performance is the standard line, and the major goal is configuration in the tool.

The band earns its place because one attested difference is easy to feel (the map) and one stability issue stopped a demo (real-time degraded). Silence on both skips what Jane is asking to address. A pillar built out of them replaces programming with speed.

Scheme 2 honors her reason for putting analytics here: the views show what is happening and, through latency and incidents, something about pace. On this transcript they are a place to look. They are not proof the release got faster. He never said latency improved. If scheme 2 is chosen, captions say that someone can see latency and incidents over 24 hours, 7 days, and 30 days, and they stop there.

### Reporting & Analytics

Own section below the pillars, separate from In-product support. Not Audit Trail. It refused a single pillar on the call (Security, then View, then guest experience), which is why “down here” was the landing spot. A fourth pillar would make insight co-equal with programming.

Lead with the operator job: what is down, how long it was down, how many presets ran, where latency shows up, which commands are failing, across the last day, week, and 30 days. Live monitoring remains “right now.” CoreX Health is the tab he said nobody needs to live in. One subordinate line (“system detail, if you want it”), or leave it out until he says operators use it.

### WebGL

Under Your view, inside Live map flexibility, as a bullet. He described it as why the map technology is better, not as a separate product. Customer sense: zoom and pan should feel more responsive because the map uses the graphics card. No frame rate. No claim that LUCI replaces the property’s displays, walls, or controllers.

Jane’s alternative — its own card under View — stays available if a bullet cannot carry “fairly significant.” That promotion still happens inside View. Real locations on a United States map stay out of this decision.

### What stays in the control story

Site configuration in the tool, bulk add by IP, NovaStar config pull, the central display-model catalog, and licenses pushed from LUCI Hub are programming-in-your-hands. External language: more of the everyday programming sits with the property, and LUCI stays the partner behind it. The backend anecdote is internal color. It is not a line to print, and it is not a performance line.

### If scheme 1 is the pick, nesting starts from here

| Item | Where it goes | Still open on the nesting comps |
| --- | --- | --- |
| Performance claim | Three-line condition above the pillars. Not a feature card. | No |
| WebGL | Live map bullet under View. Own View card only if the bullet is too small. | Bullet vs own card |
| Reporting & Analytics | Peer below the pillars, not merged with support, not under Audit. | No, unless Jane promotes scheme 2 |
| In-product support | Full width below. Separate from Reporting. | No |
| Private tunnel | Not in the performance band. | Yes — intro vs security |
| Calendar Gantt | Not in the performance band. | Yes — staging vs view |
| Outside-change detection | Map plus audit, per Richard. Not a performance feature. | Yes — view vs security |
| Staff chat | Hold. He had not tested the in-app piece. | Yes — include only if a test says so |

## Guide vs What’s New vs email

| | Upgrade Guide | What’s New two-pager | Email |
| --- | --- | --- | --- |
| Job | Deep dive for existing customers. Enough detail to answer most AV-side questions. | Short orientation. Points at the Guide for control features. | Warmest and shortest. |
| Performance | Condition under the control headline. Qualitative. Real-time “fixed” only after confirmation. | A few felt lines, same limits, then the pointer into the Guide. | One or two felt lines. Map first. |
| Reporting | Own section. Operator lead. 24h / 7d / 30d. Not proof of a speed gain. | One line and a pointer. Not the dashboard tour. | Only if the email is about seeing the property, not as the speed claim. |
| WebGL | Live map bullet. Graphics card, more responsive zoom and pan. | One line someone can picture. | The concrete line. |
| Ferrari | Leave out. | Leave out. | Only if Jane chooses it. No figure next to it. |
| Partnership | More programming in the customer’s hands. LUCI stays behind them. | Same. | Same. The backend anecdote stays internal. |

## Risks

1. **Ferrari, or “faster load,” without a figure.** Both sound like a spec. Load time is not in the transcript. A customer who times the app and finds no change will trust the rest of the Guide less. Until Richard signs a number, the public word for “you can feel it” is the map sentence he already said.
2. **The condition outranks the control theme.** If the band is louder than “programming in your hands,” or if a fourth pillar ships, performance becomes the theme. Scheme 2 has the same risk if the before-block grows taller than the pillars.
3. **Reporting opens on CoreX Health.** That teaches an engineer console. Incidents, downtime, presets, and latency teach a way to run the property. Jane’s reason for including analytics survives without the health tab in the lead.
4. **“Fixed in the latest” copied straight into the Guide.** He said it, and the same meeting still showed the indicator and a missing active session. Publishing “fixed” before he confirms the customer build advertises a demo the recording contradicts.
5. **Control copy that reads as LUCI stepping back.** The internal version of the theme is that staff no longer have to configure the database. Printed, that says the partnership shrank. The external version stays in the control story, not on a speed banner.
6. **WebGL as a replacement claim, or Audit mixed with Reporting.** WebGL is how LUCI draws the map. Audit is who changed what. Reporting is the roll-up. He separated those last two on the call.

## Open questions for Jane and Richard

1. **Measurements.** Will he sign any number — load time, map responsiveness, command latency — and for which surface? Until then, Guide, two-pager, and email stay qualitative.
2. **What “real-time” means externally.** Banner gone, session presence updating, dashboard incidents staying current, or all three? Is the fix in the build this Guide describes? If he will not confirm it, scheme 1 ships with the version-one line and the map pointer only.
3. **Version-one list.** Is the general line enough, or is there a short list he will stand behind? The panel-settings save failure and the CoreX audio glitch from this meeting are not that list.
4. **CoreX Health in the Guide.** Subordinate line, or absent until operators are actually using it?
5. **The word “latency.”** Fine for this AV-side audience (his word), or pair it with “how long actions take”?
6. **WebGL weight.** Bullet on Live map, or its own card under View? The column is View either way.
7. **Ferrari.** Internal name only, or one email line Jane writes herself? Guide and two-pager stay without it.
8. **Pillar titles before anyone nests further.** Guest experience / Your view / Security, or See and secure / Program and stage / Operate deeply. Performance placement does not change. Feature-nesting labels will.
9. **Screenshots.** He did not want “establishing connection” in the picture. She planned a fan of report views. Which operator views are safe to show?
10. **Partnership sentence.** Who signs the external line for site configuration, so “more in your hands” cannot be read as reduced LUCI support?

## Sources

Richard working session, 5 Oct 2026. Current pillar-nesting comps. Locked theme: putting the power of programming in your hands. External lock: more control in the customer’s hands, LUCI partnership still behind them. LUCI does not replace other technology.
