/** Rich per-persona page content for /who-we-serve/[persona].
 *
 * Source material: the Field Activation Guide (ui_kits/sales/field-activation-guide.html)
 * — each persona's "what you can DO with LUCI" use cases, benefits, and a try-it task.
 * Voice is second-person and personal: the reader should recognize themselves.
 * Leans a little more on text than the industry pages, but keeps an interactive thread
 * (the capabilities accordion) so the page is not a flat wall of copy.
 */

import type { PersonaId } from './personas';

export interface PersonaCapability {
  /** Front: one descriptive sentence — what you can DO, clear enough to stand alone. */
  front: string;
  /** Back: 1–2 narrative sentences with a little more detail. */
  back: string;
}

export interface PersonaNarrativeMoment {
  /** Short time/trigger label on the arc, e.g. "3 PM", "Jackpot", "Saturday night". */
  time: string;
  /** One-line caption for that moment. */
  caption: string;
}

export interface PersonaNarrative {
  /** Optional chapter label above the arc, e.g. "The energy curve", "The life of a message". */
  chapterLabel?: string;
  /**
   * Shape of the four-point graphic.
   * - `rise` — Ops energy curve (builds to a peak)
   * - `fall` — Marketing message journey (idea → hand-off → wait → miss), then the payoff flips it
   * - `stack` — Finance cost accumulation (purchase → vendors → upkeep → refresh), then the payoff resolves it
   * - `converge` — IT network convergence (island → move → surface → page), scattered nodes loading onto a network line
   */
  curve?: 'rise' | 'fall' | 'stack' | 'converge' | 'iconcards' | 'climb' | 'rollup';
  /** Sub-lead that opens the arc. */
  subLead: string;
  /** The moments along the day-arc. */
  moments: PersonaNarrativeMoment[];
  /** Supporting line beneath the arc. */
  support: string;
  /** Closing tagline. */
  closing: string;
  /** Optional supporting line under the closing "With LUCI" payoff. */
  closingSupport?: string;
  /** Optional custom SVG markup per stage (for 'iconcards' curve). Falls back to default icons. */
  icons?: string[];
}

/** "The two shifts" — the works-vs-broken contrast that names the friction. */
export interface PersonaTwoShifts {
  /** "When it just works" — the calm shift. */
  smooth: string[];
  /** "When it doesn't" — the shift where A/V becomes the crisis. */
  broken: string[];
}

/** One challenge row: friction (their terms) → relief ("With LUCI"). */
export interface PersonaChallenge {
  /** Short headline of the friction, in the operator's terms. */
  friction: string;
  /** Optional one-line elaboration of the friction (omitted on the compact persona layout). */
  frictionBody?: string;
  /** The "With LUCI" relief line, in their currencies. */
  relief: string;
}

/** A grouped band of challenges (e.g. Daily / Strategic). */
export interface PersonaChallengeGroup {
  /** Small label for the group, e.g. "Daily", "Strategic". */
  label: string;
  items: PersonaChallenge[];
}

/** Per-industry stakes for the industry switcher. */
export interface PersonaIndustryStake {
  slug: string;
  name: string;
  image: string;
  /** Brief callout — what a failure costs here. */
  callout: string;
  /** The solution emphasis — how LUCI shows up for this industry. */
  emphasis: string;
}

export interface PersonaDetail {
  id: PersonaId;
  /** Hero */
  heroImage: string;
  heroAlt: string;
  /** Optional looping hero video (industry-style ambient cover). Falls back to heroImage. */
  heroVideo?: string;
  heroPoster?: string;
  heroKicker: string;
  heroDeck: string;
  /** Narrative — "who this is", second person, as a day-arc timeline */
  narrativeLockup: { lockupName: string; lockupRole: string };
  /** Optional intro deck under the narrative lockup. */
  narrativeDeck?: string;
  /** Graph section header + deck (introduces the visual specifically) */
  graphLockup: { lockupName: string; deck: string };
  narrative: PersonaNarrative;
  /** Challenges — friction → relief, flat list (compact: friction headline + always-visible LUCI relief) */
  challengesLockup: { lockupName: string; lockupRole: string };
  challenges: PersonaChallenge[];
  /** Industry switcher — per-industry stakes + solution */
  industryLockup: { lockupName: string; lockupRole: string };
  industryStakes: PersonaIndustryStake[];
  /** Capabilities — "what you can DO" */
  capabilitiesLockup: { lockupName: string; lockupRole: string };
  lead: string;
  takeaway: string;
  /** Hub label in the capabilities convergence graphic. Defaults to "The Guest Experience". */
  hubLabel?: string;
  /** Optional payoff line under the hub label. */
  hubSub?: string;
  capabilities: PersonaCapability[];
  /** Spotlight — "the bigger picture" (optional; omitted when the closer carries the frame) */
  spotlight?: { label: string; text: string; accent: string };
  /** Industry switcher photo kicker. Defaults to "What a failure costs here". */
  industryKicker?: string;
  /** CTA */
  ctaTitle: string;
  /** Optional CTA deck under the title. */
  ctaDeck?: string;
  chapters: { id: string; label: string }[];
}

export const personaDetails: Partial<Record<PersonaId, PersonaDetail>> = {
  operations: {
    id: 'operations',
    heroImage: '/images/who-we-serve/operations-hero.jpg?v=2',
    heroAlt: 'Two operations professionals coordinating on a property floor — one with a tablet, one with a radio — against soft digital displays in the background',
    heroKicker: '',
    heroDeck:
      "You run the floor everyone else talks about. With LUCI in your hands, you can tune the whole property to the rhythm of your guests.",
    narrativeLockup: {
      lockupName: 'The entire property <em>is in your hands</em>',
      lockupRole: 'What operations has to manage',
    },
    graphLockup: {
      lockupName: 'The <em>energy curve</em>',
      deck: 'Your day builds from quiet to peak. Here\u2019s where the energy lives \u2014 and where it strains.',
    },
    narrative: {
      curve: 'rise',
      subLead: '',
      moments: [
        {
          time: 'Doors open',
          caption: 'You make sure the property is ready before the first guest walks in.',
        },
        {
          time: 'Event trigger',
          caption:
            'You are the energy orchestrator for the moment — a goal scores, a jackpot hits, a flight delays.',
        },
        {
          time: 'Room turnover',
          caption:
            'You flip the switch so the space becomes what the next event needs, on schedule.',
        },
        {
          time: 'Saturday night',
          caption:
            'You hold the atmosphere for a sold-out show, packed floor, or high-traffic rush.',
        },
      ],
      support: '',
      closing:
        '<span class="pnt__luci">With LUCI</span>, you reach for <em>ONE</em> screen to coordinate sound, video, and lighting.',
      closingSupport: 'You run the floor everyone else talks about.',
    },
    challengesLockup: {
      lockupName: 'What gets in <em>your way</em>',
      lockupRole: 'Friction you feel every shift',
    },
    challenges: [
      {
        friction: 'You have to prioritize the guest experience, but coordinating media gets in the way.',
        relief:
          'LUCI brings your screens, sound, and lighting under one interface, so you switch things up with a button push or an automated preset — instead of coordinating people and technology.',
      },
      {
        friction: 'Turning a room over is a logistical and technical scramble.',
        relief:
          'LUCI recalls the right setup for any event instantly, so the space is ready on schedule.',
      },
      {
        friction: 'Your team already has too many platforms and vendors to chase.',
        relief:
          'LUCI is simple enough that any staff member can run it, without adding another specialist.',
      },
      {
        friction: 'When something breaks mid-event, it’s live, in front of guests, and hard to fix fast.',
        relief:
          'LUCI’s map-based interface surfaces issues immediately so you can fix them before they disrupt your attendees.',
      },
      {
        friction: 'Your setup is an aging patchwork that’s expensive and disruptive to replace.',
        relief:
          'LUCI runs on the hardware you already have and expands in phases, so there’s no rip-and-replace.',
      },
    ],
    industryLockup: {
      lockupName: 'LUCI lives <em>wherever you operate</em>',
      lockupRole: 'The stakes change. The relief doesn’t',
    },
    industryStakes: [
      {
        slug: 'casinos-gaming',
        name: 'Casinos & gaming',
        image: '/images/industries/casinos-gaming.jpg',
        callout:
          'A dead zone or the wrong message during a peak night isn’t cosmetic — it reads as lost revenue, and can touch the emergency messaging you personally answer for to a regulator.',
        emphasis: 'Reliable around the clock · runnable by any shift · never an embarrassment in front of a regulator or a high-value guest.',
      },
      {
        slug: 'hotels-resorts',
        name: 'Hotels & resorts',
        image: '/images/industries/hotels-resorts.jpg',
        callout:
          'A disjointed or dated environment breaks the premium, cohesive experience the whole property is selling.',
        emphasis: 'One control layer across every outlet · consistent on-brand ambiance everywhere · staff freed for guest-facing service.',
      },
      {
        slug: 'sports-venues',
        name: 'Sports & venues',
        image: '/images/industries/sports-venues.jpg',
        callout:
          'A failure is public and instant — tens of thousands of people, and often broadcast, see it immediately.',
        emphasis: 'Rock-solid reliability under live pressure · instant recall of the right environment per event · recover fast when seconds count.',
      },
      {
        slug: 'airports-transportation',
        name: 'Airports & transportation',
        image: '/images/industries/airports-transportation.jpg',
        callout:
          'Intelligibility and display failures cascade into missed flights, safety exposure, and regulatory findings.',
        emphasis: 'Dependable always-on messaging and audio · clarity in tough acoustic spaces · one control layer across a sprawling facility.',
      },
      {
        slug: 'conference-convention-centers',
        name: 'Conference & convention centers',
        image: '/images/industries/conference-convention-centers.jpg',
        callout:
          'A botched changeover or inconsistent room directly damages a client’s event and the venue’s reputation with planners.',
        emphasis: 'Instant, foolproof room turnover · consistent control across many simultaneous spaces · readiness on schedule, every time.',
      },
    ],
    capabilitiesLockup: {
      lockupName: 'What you <em>can do</em>',
      lockupRole: 'Four ways to put LUCI to work',
    },
    lead: '',
    takeaway: '',
    capabilities: [
      {
        front: 'Set your property\u2019s audio to match the room\u2019s energy, all day.',
        back:
          'Build an audio schedule that moves with your property \u2014 lighter mornings, building afternoons, peaking evenings. Transitions happen on their own.',
      },
      {
        front: 'Turn a signature moment into a localized event, automatically.',
        back:
          'When a big moment hits \u2014 a jackpot, a touchdown, a headline, a VIP arrival \u2014 a coordinated preset fires. Lights, audio, and screens celebrate for a beat, then reset.',
      },
      {
        front: 'Reconfigure the entire property in seconds.',
        back:
          'Weekday, Saturday peak, marquee event, holiday \u2014 each becomes one configuration of audio, screens, and lighting. Some run on a tap; premium spaces keep a standing identity.',
      },
      {
        front: 'Reconfigure a video wall for a tournament, tip-off, or keynote \u2014 with a tap.',
        back:
          'Presets switch the wall between a full layout and zoned views with a tap or on a schedule. When the event ends, one tap restores the everyday layout.',
      },
    ],
    ctaTitle: 'A/V should <em>support your job</em>, not block it.',
    ctaDeck:
      'Let us show you what it looks like when it isn’t — on your floor, with your team, on your existing setup.',
    chapters: [
      { id: 'persona-thesis', label: 'Overview' },
      { id: 'persona-narrative', label: 'What you manage' },
      { id: 'persona-challenges', label: 'What gets in your way' },
      { id: 'persona-capabilities', label: 'What you can do' },
      { id: 'persona-industries', label: 'Wherever you operate' },
      { id: 'persona-cta', label: 'Next step' },
    ],
  },
  marketing: {
    id: 'marketing',
    heroImage: '/images/who-we-serve/marketing-hero.jpg',
    heroAlt:
      'A luxury lobby at dusk with a large digital welcome display beside the reception desk',
    heroKicker: '',
    heroDeck:
      "You own the brand and the message across the whole property. It\u2019s your biggest channel \u2014 and the one you can\u2019t publish to yourself. LUCI hands you the keys.",
    narrativeLockup: {
      lockupName: 'Your property is your best channel. <em>Run it like one.</em>',
      lockupRole: 'What marketing is accountable for',
    },
    graphLockup: {
      lockupName: 'The life of a <em>message</em>',
      deck: 'Every message you send to the property takes a journey. Here\u2019s what happens between the idea and the screen.',
    },
    narrativeDeck:
      'You can push a campaign to email, social, and web in minutes. But the property \u2014 where your most engaged guests already are \u2014 takes a request, a hand-off, and a wait.',
    narrative: {
      curve: 'fall',
      subLead: '',
      moments: [
        {
          time: 'The idea',
          caption:
            'You have the offer, the promotion, the moment \u2014 and you know exactly where it should show up: the concourse screens, the lobby wall, the floor.',
        },
        {
          time: 'The hand-off',
          caption:
            'You file the request and send the assets to whoever controls the displays. Now it\u2019s out of your hands.',
        },
        {
          time: 'The wait',
          caption:
            'Days pass. You\u2019re not sure it\u2019s on brand, on the right screens, or even live yet.',
        },
        {
          time: 'The miss',
          caption:
            'By the time it\u2019s up, the moment has passed \u2014 or the screen is still showing last week\u2019s message.',
        },
      ],
      support: '',
      closing:
        '<span class="pnt__luci">With LUCI</span>, the whole property becomes a channel you publish to yourself \u2014 in <em>minutes</em>, on brand, from one screen.',
      closingSupport:
        'You own the brand and the message across the whole property. It\u2019s your biggest channel \u2014 and the one you can\u2019t publish to yourself.',
    },
    challengesLockup: {
      lockupName: 'What gets in <em>your way</em>',
      lockupRole: 'Friction between you and your guests',
    },
    challenges: [
      {
        friction:
          'Your property is your highest-impact channel, but you can\u2019t publish to it directly.',
        relief:
          'LUCI lets you push content to every screen and zone yourself \u2014 like any other channel, in minutes, without filing a ticket or waiting on another team.',
      },
      {
        friction: 'Content goes stale, and a stale screen makes your brand look neglected.',
        relief:
          'LUCI schedules and updates everything centrally, so every display shows what\u2019s happening now \u2014 never last week\u2019s promo.',
      },
      {
        friction: 'With so many screens and so many hands, the brand drifts across the property.',
        relief:
          'LUCI holds one look and one message across every display, on brand everywhere, with control over what stays locked.',
      },
      {
        friction:
          'Big moments like a jackpot, a touchdown, or a headline act feel stale because the property isn\u2019t wired to react to them.',
        relief:
          'LUCI turns a moment into a property-wide event instantly, bringing screens, sound, and lighting together the second it happens.',
      },
      {
        friction:
          'Your most valuable channel is also your least accountable \u2014 you can\u2019t show what it drives.',
        relief:
          'LUCI makes the property a channel you actually run \u2014 scheduled, controlled, and finally visible alongside the rest of your marketing.',
      },
    ],
    industryLockup: {
      lockupName: 'LUCI lives <em>wherever you operate</em>',
      lockupRole: 'The message changes. The control doesn\u2019t',
    },
    industryKicker: 'What control unlocks here',
    industryStakes: [
      {
        slug: 'casinos-gaming',
        name: 'Casinos & gaming',
        image: '/images/industries/casinos-gaming.jpg',
        callout:
          'Your promotions, jackpots, and player-club messaging change by the hour. LUCI lets you turn a jackpot into floor-wide energy the instant it hits, keep every offer current across the floor, and finally run the gaming floor as the revenue channel it already is.',
        emphasis:
          'Real-time promo and jackpot moments \u00b7 on-brand loyalty messaging on every screen \u00b7 the floor as a channel you control.',
      },
      {
        slug: 'hotels-resorts',
        name: 'Hotels & resorts',
        image: '/images/industries/hotels-resorts.jpg',
        callout:
          'Your brand has to feel premium and consistent across the lobby, restaurants, meeting space, and amenities. LUCI keeps every space on brand, promotes the right offer in the right place at the right time, and turns your displays into on-property revenue.',
        emphasis:
          'Consistent upscale brand everywhere \u00b7 in-the-moment upsell and cross-sell \u00b7 displays that never look stale.',
      },
      {
        slug: 'sports-venues',
        name: 'Sports & venues',
        image: '/images/industries/sports-venues.jpg',
        callout:
          'Gameday runs on energy and sponsor commitments. LUCI orchestrates crowd moments across the bowl instantly, delivers and documents sponsor placements, and keeps every concourse and zone on one message.',
        emphasis:
          'Live moment orchestration \u00b7 sponsor activation you can prove \u00b7 one brand voice across the whole venue.',
      },
      {
        slug: 'airports-transportation',
        name: 'Airports & transportation',
        image: '/images/industries/airports-transportation.jpg',
        callout:
          'Your commercial and brand messaging spans a huge, multi-tenant footprint. LUCI lets you manage advertising and brand content across terminals from one place and keep it current \u2014 turning the display network into non-aeronautical revenue.',
        emphasis:
          'Ad and commercial revenue from the display network \u00b7 consistent brand across every terminal \u00b7 current content with no deployment bottleneck.',
      },
      {
        slug: 'conference-convention-centers',
        name: 'Conference & convention centers',
        image: '/images/industries/conference-convention-centers.jpg',
        callout:
          'Every client and event needs the space to look like theirs, and every day the schedule changes. LUCI rebrands spaces per event in a tap, keeps wayfinding and promo content correct across simultaneous events, and shows planners a venue that\u2019s modern and in control.',
        emphasis:
          'Instant per-event branding \u00b7 correct content across concurrent events \u00b7 a venue brand that sells itself.',
      },
    ],
    capabilitiesLockup: {
      lockupName: 'What you <em>can do</em>',
      lockupRole: 'Four ways to run the property as a channel',
    },
    lead: '',
    takeaway: '',
    capabilities: [
      {
        front: 'Push a message to every screen in under two minutes.',
        back:
          'Edit on your own device, send it to the whole floor or a set of zones, and it\u2019s live in moments \u2014 then drop back to the scheduled plan.',
      },
      {
        front: 'Daypart restaurant promotions to catch guests at the decision point.',
        back:
          'Run a dining spot across the floor before lunch and dinner \u2014 when guests decide whether to stay \u2014 then reset automatically. Set it once; it repeats every day.',
      },
      {
        front: 'Run customized content by zone from one control panel.',
        back:
          'Sports book, main floor, bar, and marquee each run their own schedule from the same place \u2014 including outdoor signage. Program each space for what it needs.',
      },
      {
        front: 'Build an event campaign that escalates automatically.',
        back:
          'Grow an event\u2019s presence \u2014 more zones, more frequency \u2014 as the date approaches, and fill slow dayparts with loyalty and dining offers. Build it once; it ramps and resets on its own.',
      },
    ],
    ctaTitle: 'Your property is your best channel. <em>Run it like one.</em>',
    ctaDeck:
      'Let us show you what it looks like to publish to the property yourself \u2014 on brand, in the moment, without waiting on anyone.',
    chapters: [
      { id: 'persona-thesis', label: 'Overview' },
      { id: 'persona-narrative', label: 'What you manage' },
      { id: 'persona-challenges', label: 'What gets in your way' },
      { id: 'persona-capabilities', label: 'What you can do' },
      { id: 'persona-industries', label: 'Wherever you operate' },
      { id: 'persona-cta', label: 'Next step' },
    ],
  },
  finance: {
    id: 'finance',
    heroImage: '/images/who-we-serve/finance-hero.jpg?v=1',
    heroAlt:
      'A finance executive reviewing cost data and dashboards on large wall-mounted displays in a dimly lit modern office',
    heroKicker: '',
    heroDeck:
      'You answer for what the property spends \u2014 and the technology that runs it is a tangle of vendors, contracts, and hidden costs.',
    narrativeLockup: {
      lockupName: 'Turn a tangled web of hardware and vendor costs into <em>predictable, defensible spend</em>',
      lockupRole: 'What finance is accountable for',
    },
    graphLockup: {
      lockupName: 'The true cost of <em>property-wide A/V</em>',
      deck: 'Every screen, speaker, and control system came with its own vendor, its own contract, and its own service line. The sticker price was just the beginning.',
    },
    narrative: {
      curve: 'stack',
      subLead: '',
      moments: [
        {
          time: 'The purchase',
          caption:
            'You approve the displays, the sound, the signage. The quote looks clear enough.',
        },
        {
          time: 'The vendors',
          caption:
            'Each system arrives with its own contract, service agreement, and support line to fund.',
        },
        {
          time: 'The upkeep',
          caption:
            'Maintenance, integration, and licensing costs accumulate quietly across every system.',
        },
        {
          time: 'The refresh',
          caption:
            'Every 5\u201310 years, the proprietary hardware ages out \u2014 and the whole stack starts over. The biggest cost of all.',
        },
      ],
      support: '',
      closing:
        '<span class="pnt__luci">With LUCI</span>, many systems and vendors become <em>one</em> platform on the hardware you already own \u2014 a total cost you can see, plan, and defend.',
    },
    challengesLockup: {
      lockupName: 'What gets in <em>your way</em>',
      lockupRole: 'The cost of a fragmented property',
    },
    challenges: [
      {
        friction:
          'The true cost of the property\u2019s technology is scattered across too many systems and vendors to see clearly.',
        relief:
          'LUCI consolidates them into one platform over your existing hardware, so the total cost of ownership is finally one number you can see and control.',
      },
      {
        friction: 'Every technology request is hard to justify when the return isn\u2019t clear.',
        relief:
          'LUCI reduces vendor, maintenance, and support spend and extends the life of what you own \u2014 a payback you can defend to leadership.',
      },
      {
        friction:
          'Spend is reactive \u2014 systems age out, fail, and become emergencies at the worst time.',
        relief:
          'LUCI removes failure points and supports planned lifecycle spend, so capital surprises become predictable budgeting.',
      },
      {
        friction:
          'Proprietary, hardware-bound systems lock you in and strip your negotiating leverage.',
        relief:
          'LUCI is hardware-agnostic and software-first, so you keep your leverage and avoid the lock-in.',
      },
      {
        friction:
          'Keeping the property modern requires ripping out and replacing expensive hardware.',
        relief:
          'LUCI runs on the infrastructure you already have and scales in phases \u2014 no forklift replacement, no capital event.',
      },
    ],
    industryLockup: {
      lockupName: 'LUCI lives <em>wherever you operate</em>',
      lockupRole: 'The budget changes. The discipline doesn\u2019t',
    },
    industryKicker: 'What consolidation unlocks here',
    industryStakes: [
      {
        slug: 'casinos-gaming',
        name: 'Casinos & gaming',
        image: '/images/industries/casinos-gaming.jpg',
        callout:
          'The floor runs on a stack of separate display, audio, and signage systems, each with its own cost. LUCI consolidates them into one lower-TCO platform, gives you spend you can defend to your board or council, and keeps you off proprietary lock-in for expensive floor hardware.',
        emphasis:
          'Lower total cost across a complex floor \u00b7 defensible ROI for boards and councils \u00b7 no lock-in on major capital assets.',
      },
      {
        slug: 'hotels-resorts',
        name: 'Hotels & resorts',
        image: '/images/industries/hotels-resorts.jpg',
        callout:
          'Owners and management companies hold you to disciplined CapEx across renovation cycles and, often, multiple properties. LUCI gives you one platform across many spaces, extends the life of AV assets between PIP cycles, and makes spend predictable enough to survive ownership budget reviews.',
        emphasis:
          'Portfolio-level cost visibility \u00b7 asset-life extension between renovations \u00b7 predictable, defensible CapEx.',
      },
      {
        slug: 'sports-venues',
        name: 'Sports & venues',
        image: '/images/industries/sports-venues.jpg',
        callout:
          'Your LED and sound systems are major capital assets tied to real revenue. LUCI helps you get more revenue-generating life out of them, consolidates the cost of controlling them, and ties the spend to the sponsor revenue it enables.',
        emphasis:
          'Maximized return on big-ticket AV capital \u00b7 consolidation savings \u00b7 revenue-linked justification.',
      },
      {
        slug: 'airports-transportation',
        name: 'Airports & transportation',
        image: '/images/industries/airports-transportation.jpg',
        callout:
          'Public procurement and budget scrutiny run deep, and asset lifecycles are long. LUCI consolidates vendor and maintenance spend across a huge footprint, stays hardware-agnostic to fit anti-lock-in procurement standards, and supports revenue-generating use of the display network.',
        emphasis:
          'Vendor and maintenance consolidation at scale \u00b7 hardware-agnostic for procurement \u00b7 defensible public spend.',
      },
      {
        slug: 'conference-convention-centers',
        name: 'Conference & convention centers',
        image: '/images/industries/conference-convention-centers.jpg',
        callout:
          'Your flexible AV has to serve many event types and earn its keep across all of them. LUCI maximizes the utilization and life of those assets, lets you modernize without a forklift replacement, and lowers the operating cost of serving each event.',
        emphasis:
          'Utilization and ROI on flexible AV capital \u00b7 modernize without a capital event \u00b7 lower cost per event.',
      },
    ],
    capabilitiesLockup: {
      lockupName: 'What you <em>can do</em>',
      lockupRole: 'Four ways LUCI improves the bottom line',
    },
    lead: '',
    takeaway: '',
    hubLabel: 'Total Cost of Ownership',
    capabilities: [
      {
        front: 'Replan the capital you\u2019d reserved for the next A/V refresh.',
        back:
          'Proprietary hardware that needed a full refresh every five to seven years becomes a software platform on a predictable annual line. Capability arrives through software updates, not capital purchases.',
      },
      {
        front: 'Cut or renegotiate the vendor and integration contracts LUCI replaces.',
        back:
          'Much of A/V\u2019s old operating cost lived in vendor contracts that existed because the expertise didn\u2019t. That control is internal now \u2014 yours to consolidate or end.',
      },
      {
        front: 'Start measuring A/V as a revenue contributor, not just a cost.',
        back:
          'Dining dayparts, loyalty pushes, and event countdowns through LUCI become traceable campaigns. Pair them with performance data to measure against baseline periods.',
      },
      {
        front: 'Document and defend your A/V spend with platform data.',
        back:
          'For the first time there\u2019s an auditable record beneath the investment \u2014 what\u2019s running, what it costs, how it\u2019s used. When ownership asks, the data is there.',
      },
    ],
    ctaTitle: 'One platform, <em>one predictable cost</em>.',
    ctaDeck:
      'Let us walk through the total cost of ownership with you \u2014 what you\u2019re spending across systems and vendors now, and what one platform on your existing hardware would change.',
    chapters: [
      { id: 'persona-thesis', label: 'Overview' },
      { id: 'persona-narrative', label: 'What you manage' },
      { id: 'persona-challenges', label: 'What gets in your way' },
      { id: 'persona-capabilities', label: 'What you can do' },
      { id: 'persona-industries', label: 'Wherever you operate' },
      { id: 'persona-cta', label: 'Next step' },
    ],
  },
  technology: {
    id: 'technology',
    heroImage: '/images/who-we-serve/it-hero.jpg?v=1',
    heroAlt:
      'An IT professional monitoring network topology and system health dashboards in a dimly lit network operations center',
    heroKicker: '',
    heroDeck:
      'A/V used to be someone else\u2019s island. Now it\u2019s on your network \u2014 more endpoints to secure, more vendors to integrate, more that pages you when it breaks.',
    narrativeLockup: {
      lockupName: 'Make A/V <em>behave like the rest of your stack</em>',
      lockupRole: 'What IT is accountable for',
    },
    graphLockup: {
      lockupName: 'The tangle on <em>your network</em>',
      deck: 'Every A/V system on the property \u2014 displays, players, processors, controllers, audio \u2014 runs on its own proprietary infrastructure. None of it is on your network. None of it is under your control. All of it is yours to answer for when it fails.',
    },
    narrative: {
      curve: 'iconcards',
      subLead: '',
      moments: [
        {
          time: 'The silos',
          caption:
            'A/V runs on separate, proprietary systems \u2014 each one a black box you can\u2019t see into.',
        },
        {
          time: 'The blind spot',
          caption:
            'You can\u2019t monitor what\u2019s running, what\u2019s exposed, or what\u2019s failing \u2014 because it\u2019s not on your network.',
        },
        {
          time: 'The vendors',
          caption:
            'Each system came with its own vendor, contract, and support line \u2014 and none of them talk to each other.',
        },
        {
          time: 'The page',
          caption:
            'When any of it fails, it\u2019s your phone that rings \u2014 and you have no way to diagnose it.',
        },
      ],
      support: '',
      closing:
        '<span class="pnt__luci">With LUCI</span>, all of it comes <em>onto your network</em> \u2014 one platform, standards-based, hardware-agnostic, monitored and secured within the controls you already run.',
    },
    challengesLockup: {
      lockupName: 'What gets in <em>your way</em>',
      lockupRole: 'The cost of a fragmented network',
    },
    challenges: [
      {
        friction:
          'A/V lands on your network as more endpoints to secure and support \u2014 that you didn\u2019t design.',
        relief:
          'LUCI consolidates A/V control into one software platform on your existing infrastructure, so it\u2019s managed to your standards, not bolted on as an island.',
      },
      {
        friction:
          'When something on the floor fails, it\u2019s your phone that rings \u2014 with no single view to diagnose it.',
        relief:
          'LUCI gives you one console to monitor and control every display and zone, so you see what\u2019s wrong and fix it fast instead of troubleshooting blind.',
      },
      {
        friction: 'Every A/V vendor is a separate integration, contract, and support line.',
        relief:
          'LUCI is hardware-agnostic and standards-based, so many proprietary systems become one integration you actually control.',
      },
      {
        friction:
          'Every networked A/V device expands the attack surface you\u2019re accountable for.',
        relief:
          'LUCI consolidates the systems and management surfaces you have to secure, and runs within the controls you already operate \u2014 fewer ways in, inside your perimeter.',
      },
      {
        friction:
          'A/V is one more fragmented silo fighting the consolidation and control you\u2019re building toward.',
        relief:
          'LUCI unifies a scattered A/V estate into one controllable platform, so A/V joins your converged environment instead of pulling against it.',
      },
    ],
    industryLockup: {
      lockupName: 'LUCI lives <em>wherever you operate</em>',
      lockupRole: 'The stakes change. The control doesn\u2019t',
    },
    industryKicker: 'What control unlocks here',
    industryStakes: [
      {
        slug: 'casinos-gaming',
        name: 'Casinos & gaming',
        image: '/images/industries/casinos-gaming.jpg',
        callout:
          'Your network runs a regulated, 24/7 floor with zero tolerance for downtime and strict security regimes. LUCI brings floor A/V under the same secured, monitored umbrella as the rest of your gaming IT, cuts the number of unmanaged endpoints on a regulated network, and makes A/V one more system you control rather than one more risk you carry.',
        emphasis:
          'Compliance-grade security and control \u00b7 reliability on a regulated 24/7 network \u00b7 A/V consolidated into the gaming IT estate.',
      },
      {
        slug: 'hotels-resorts',
        name: 'Hotels & resorts',
        image: '/images/industries/hotels-resorts.jpg',
        callout:
          'A lean team supports guest-facing systems across many spaces, often across multiple properties. LUCI gives you one platform to manage and monitor displays everywhere \u2014 lobby, F&B, meeting space, amenities \u2014 with fewer vendors and endpoints to support and full remote visibility.',
        emphasis:
          'Manage a large footprint with a lean team \u00b7 consolidation and remote visibility \u00b7 secure guest-facing systems.',
      },
      {
        slug: 'sports-venues',
        name: 'Sports & venues',
        image: '/images/industries/sports-venues.jpg',
        callout:
          'You manage hundreds to thousands of endpoints across concourses, suites, and fascia \u2014 and all of it has to be live before doors open. LUCI centralizes monitoring and orchestration across that estate, so you diagnose fast during live events and keep A/V unified on your converged network.',
        emphasis:
          'Endpoint scale and centralized monitoring \u00b7 event-day reliability \u00b7 converged-network control.',
      },
      {
        slug: 'airports-transportation',
        name: 'Airports & transportation',
        image: '/images/industries/airports-transportation.jpg',
        callout:
          'You run never-off systems across a huge, multi-tenant footprint under public-sector security and procurement standards \u2014 where some A/V doubles as passenger-information infrastructure. LUCI consolidates vendor and endpoint sprawl across terminals, fits standards-based and hardware-agnostic procurement, and keeps network-critical systems secure and monitored.',
        emphasis:
          'Security and standards for public-sector IT \u00b7 consolidation at scale \u00b7 reliability of network-critical systems.',
      },
      {
        slug: 'conference-convention-centers',
        name: 'Conference & convention centers',
        image: '/images/industries/conference-convention-centers.jpg',
        callout:
          'You reconfigure many rooms constantly and support outside event and production vendors on your network. LUCI lets you reconfigure and monitor A/V across every space from one platform, keeps clean boundaries between house systems and visiting gear, and makes setup fast and reliable without per-room specialist work.',
        emphasis:
          'Multi-room control and fast reconfiguration \u00b7 secure separation of house vs. visiting systems \u00b7 reliability across simultaneous events.',
      },
    ],
    capabilitiesLockup: {
      lockupName: 'What you <em>can do</em>',
      lockupRole: 'Four ways LUCI brings A/V under control',
    },
    lead: '',
    takeaway: '',
    hubLabel: 'One System Under Control',
    capabilities: [
      {
        front: 'Add an endpoint to LUCI \u2014 video, audio, or lighting.',
        back:
          'Bring new displays, speaker zones, or lighting onto LUCI yourself \u2014 no integrator truck roll. Enter the device\u2019s IP, name it, assign it to a venue, and it\u2019s on the map for every authorized user to reach.',
      },
      {
        front: 'Keep every config, backup, and guide for your system in one place.',
        back:
          'Config files, backups, user guides, and walkthrough videos live in one spot your team can reach any time \u2014 so you clear common issues yourself, without a call to your integrator or a ticket into a vendor queue.',
      },
      {
        front: 'Define who can change what \u2014 by role, by zone, by team.',
        back:
          'Set role-based permissions centrally so Marketing controls content, A/V controls schedules and levels, and no one reaches outside their lane \u2014 enforced by the platform, managed from one administrative view.',
      },
      {
        front: 'See device health across the property at a glance.',
        back:
          'Zoom out on the map and LUCI clusters every endpoint into one colored circle \u2014 green is all online, yellow means one offline, red means one powered off. Click a cluster to see exactly which device needs attention.',
      },
    ],
    ctaTitle: 'Bring A/V <em>under control</em>.',
    ctaDeck:
      'Let us walk through how LUCI fits your network \u2014 one platform, standards-based and hardware-agnostic, monitored and secured within the controls you already run.',
    chapters: [
      { id: 'persona-thesis', label: 'Overview' },
      { id: 'persona-narrative', label: 'What you manage' },
      { id: 'persona-challenges', label: 'What gets in your way' },
      { id: 'persona-capabilities', label: 'What you can do' },
      { id: 'persona-industries', label: 'Wherever you operate' },
      { id: 'persona-cta', label: 'Next step' },
    ],
  },
  facilities: {
    id: 'facilities',
    heroImage: '/images/who-we-serve/av-facilities-hero.jpg?v=1',
    heroAlt:
      'An A/V and facilities technician at a control desk monitoring displays and audio zones across a property',
    heroKicker: '',
    heroDeck:
      'You keep it all running \u2014 the screens, the sound, the systems behind the building. LUCI puts the whole estate in one place, so your expertise goes where it matters instead of into the legwork.',
    narrativeLockup: {
      lockupName: 'Put the whole estate <em>in one place</em>',
      lockupRole: 'What A/V & Facilities is accountable for',
    },
    graphLockup: {
      lockupName: 'The estate you keep <em>running</em>',
      deck: 'Displays, audio, lighting, signage, the systems behind the walls \u2014 you install it, calibrate it, run it live, and keep it alive. When any of it fails, the fix is yours, right now.',
    },
    narrative: {
      curve: 'climb',
      subLead: '',
      moments: [
        {
          time: 'The estate',
          caption:
            'Screens, audio, lighting, signage, building systems \u2014 all of it is yours to keep running.',
        },
        {
          time: 'The sprawl',
          caption:
            'Each one has its own interface, its own vendor, its own quirks. No shared view.',
        },
        {
          time: 'The legwork',
          caption:
            'When something\u2019s off, you\u2019re tracing it by hand \u2014 rack to rack, room to room.',
        },
        {
          time: 'The clock',
          caption:
            'And when it fails live, the fix is yours immediately, in front of the room.',
        },
      ],
      support: '',
      closing:
        '<span class="pnt__luci">With LUCI</span>, the whole estate is in <em>one place</em> \u2014 so you see it, control it, and fix it from where you stand, and your expertise goes where it counts.',
      icons: [
        '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><rect x="14" y="12" width="36" height="44" rx="3" fill="rgba(104,227,190,0.06)"/><rect x="20" y="18" width="10" height="7" rx="1.5" fill="rgba(104,227,190,0.12)"/><rect x="34" y="18" width="10" height="7" rx="1.5" fill="rgba(104,227,190,0.12)"/><circle cx="25" cy="34" r="3" fill="rgba(104,227,190,0.12)"/><circle cx="39" cy="34" r="3" fill="rgba(104,227,190,0.12)"/><rect x="22" y="42" width="20" height="8" rx="1.5" fill="rgba(104,227,190,0.12)"/></svg>',
        '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><rect x="6" y="10" width="18" height="13" rx="2" fill="rgba(141,211,181,0.1)"/><rect x="40" y="10" width="18" height="13" rx="2" fill="rgba(141,211,181,0.1)"/><rect x="23" y="38" width="18" height="13" rx="2" fill="rgba(141,211,181,0.1)"/><line x1="24" y1="23" x2="26" y2="32" stroke-dasharray="2 4" opacity="0.3"/><line x1="40" y1="23" x2="38" y2="32" stroke-dasharray="2 4" opacity="0.3"/></svg>',
        '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M 10 50 Q 20 40 18 30 Q 16 20 28 18 Q 40 16 42 28 Q 44 40 54 36" stroke-dasharray="4 4" fill="none" opacity="0.6"/><rect x="4" y="46" width="14" height="12" rx="2" fill="rgba(188,174,122,0.1)"/><rect x="46" y="32" width="14" height="12" rx="2" fill="rgba(188,174,122,0.1)"/><ellipse cx="20" cy="38" rx="3" ry="2" fill="currentColor" opacity="0.4"/><ellipse cx="30" cy="22" rx="3" ry="2" fill="currentColor" opacity="0.4"/></svg>',
        '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><circle cx="32" cy="32" r="20" fill="rgba(237,208,134,0.08)"/><line x1="32" y1="32" x2="32" y2="18" stroke-width="2.5"/><line x1="32" y1="32" x2="42" y2="36" stroke-width="2.5"/><path d="M 14 14 Q 8 32 14 50" fill="none" opacity="0.4"/><path d="M 50 14 Q 56 32 50 50" fill="none" opacity="0.4"/><text x="32" y="40" text-anchor="middle" fill="currentColor" stroke="none" font-size="13" font-family="Inter, sans-serif" font-weight="700">!</text></svg>',
      ],
    },
    challengesLockup: {
      lockupName: 'What gets in <em>your way</em>',
      lockupRole: 'The work behind keeping it running',
    },
    challenges: [
      {
        friction:
          'Finding a problem means chasing it by hand across disconnected systems.',
        relief:
          'LUCI shows every display, zone, and system in one place, so you find the issue without walking every rack and room.',
      },
      {
        friction:
          'When something fails live, you have to fix it now \u2014 often without a fast way to see what\u2019s wrong.',
        relief:
          'LUCI gives you real-time visibility and control from one place, so you spot it and fix it the moment it happens, even mid-event.',
      },
      {
        friction:
          'Every system speaks its own language, so you\u2019re the one making them work together by hand.',
        relief:
          'LUCI brings A/V, lighting, and signage into one platform, so the systems work together without you bridging them manually.',
      },
      {
        friction:
          'Getting ahead of equipment failures is hard when you can\u2019t see system health in one place.',
        relief:
          'LUCI puts equipment status in one view, so you can catch small issues early and protect the gear instead of chasing failures.',
      },
      {
        friction:
          'The estate keeps growing, but there are only so many hours and so many hands.',
        relief:
          'LUCI extends your reach across every space and system from one place, so your expertise covers more ground without the miles.',
      },
    ],
    industryLockup: {
      lockupName: 'LUCI lives <em>wherever you operate</em>',
      lockupRole: 'The environment changes. The control doesn\u2019t',
    },
    industryKicker: 'What control unlocks here',
    industryStakes: [
      {
        slug: 'casinos-gaming',
        name: 'Casinos & gaming',
        image: '/images/industries/casinos-gaming.jpg',
        callout:
          'You keep a dense, 24/7 floor of screens, signage, and audio zones running with no maintenance window and no room for a dark display. LUCI gives you one view of the whole floor, so you diagnose and fix without walking the property and stay ahead of failures on equipment that can never fully go dark.',
        emphasis:
          'Whole-floor visibility and reach \u00b7 fast fixes on a 24/7 floor \u00b7 proactive upkeep on always-on equipment.',
      },
      {
        slug: 'hotels-resorts',
        name: 'Hotels & resorts',
        image: '/images/industries/hotels-resorts.jpg',
        callout:
          'You cover many distinct spaces \u2014 lobby, restaurants, meeting space, pool, amenities \u2014 often with a lean team across a large or multi-property footprint. LUCI puts all of it in one place, so you keep every space guest-ready and extend your team\u2019s reach without living in a golf cart.',
        emphasis:
          'Reach across a large footprint \u00b7 consistent guest-facing quality everywhere \u00b7 a lean team covering more ground.',
      },
      {
        slug: 'sports-venues',
        name: 'Sports & venues',
        image: '/images/industries/sports-venues.jpg',
        callout:
          'You bring hundreds to thousands of displays and zones live before doors open, then troubleshoot under the clock during the event. LUCI lets you monitor and control the whole estate from one position, fix fast when seconds count, and recall the right setup per event without reconfiguring everything by hand.',
        emphasis:
          'Scale and central control \u00b7 event-day speed under pressure \u00b7 fast, reliable turnover.',
      },
      {
        slug: 'airports-transportation',
        name: 'Airports & transportation',
        image: '/images/industries/airports-transportation.jpg',
        callout:
          'You keep never-off systems running across a vast footprint \u2014 some of it passenger-information and life-safety \u2014 in tough light and noise. LUCI gives you one view across terminals, faster response on systems that can\u2019t be down, and proactive maintenance across a huge, always-on estate.',
        emphasis:
          'Always-on reliability across a huge footprint \u00b7 fast response on critical systems \u00b7 proactive upkeep at scale.',
      },
      {
        slug: 'conference-convention-centers',
        name: 'Conference & convention centers',
        image: '/images/industries/conference-convention-centers.jpg',
        callout:
          'You reconfigure rooms constantly, run simultaneous events, and support outside production teams \u2014 and every setup has to be right on schedule. LUCI lets you configure and verify many rooms from one place, recall setups instantly, and keep simultaneous spaces correct without running between them.',
        emphasis:
          'Fast multi-room setup and turnover \u00b7 instant configuration recall \u00b7 control across simultaneous events.',
      },
    ],
    capabilitiesLockup: {
      lockupName: 'What you <em>can do</em>',
      lockupRole: 'Four ways LUCI keeps up with you',
    },
    lead: '',
    takeaway: '',
    hubLabel: 'The Whole Estate, In Hand',
    capabilities: [
      {
        front: 'Build the whole property\u2019s schedule in one session, then let it run.',
        back:
          'Configure audio, displays, and zone behavior for every daypart from one place. Once it\u2019s built it runs itself \u2014 a locked baseline keeps the floor consistent, and you update any piece in real time without taking the rest offline.',
      },
      {
        front: 'Resolve service requests from wherever you are \u2014 including after hours.',
        back:
          'Open the flagged zone from your phone, adjust the level, and confirm it\u2019s right \u2014 on property or off. Physical presence is reserved for genuinely physical problems, and every change logs itself.',
      },
      {
        front: 'Swap any source without a truck roll.',
        back:
          'Edit the source on the map yourself when a channel changes or you want to repurpose a screen. One edit propagates to every display using that source \u2014 no integrator visit, no truck roll, no waiting on a vendor.',
      },
      {
        front: 'Configure a private event once, then activate it and let it revert on its own.',
        back:
          'Build the full A/V setup as a named preset \u2014 custom audio mix, branded content, zone settings \u2014 and set the minutes until it reverts. It runs the event and returns the property to baseline on its own.',
      },
    ],
    ctaTitle: 'The whole estate, finally <em>in one place</em>.',
    ctaDeck:
      'Let us show you what it looks like to see, control, and maintain everything you\u2019re responsible for from one interface \u2014 on the systems you already run.',
    chapters: [
      { id: 'persona-thesis', label: 'Overview' },
      { id: 'persona-narrative', label: 'What you manage' },
      { id: 'persona-challenges', label: 'What gets in your way' },
      { id: 'persona-capabilities', label: 'What you can do' },
      { id: 'persona-industries', label: 'Wherever you operate' },
      { id: 'persona-cta', label: 'Next step' },
    ],
  },
  leadership: {
    id: 'leadership',
    heroImage: '/images/who-we-serve/who-we-serve-hero.jpg?v=1',
    heroAlt:
      'A senior property executive overlooking a wide property floor from a high vantage point',
    heroDeck:
      'The whole property is yours to answer for \u2014 every department, every result. But it runs on a patchwork of disconnected systems that never gives you one clear view. LUCI helps the property run like one business, not many parts.',
    narrativeLockup: {
      lockupName: 'Build full property A/V around <em>one strategy and one team</em>',
      lockupRole: 'What general management is accountable for',
    },
    graphLockup: {
      lockupName: 'It all <em>rolls up to you</em>',
      deck: 'Operations, marketing, finance, technology, facilities \u2014 every function is trying to pull toward one strategy. You\u2019re the one who has to make them move as a single business, and answer for the result.',
    },
    narrative: {
      curve: 'rollup',
      subLead: '',
      moments: [
        {
          time: 'Operations',
          caption: 'The floor, the shifts, the live experience.',
        },
        {
          time: 'Marketing',
          caption: 'The message, the brand, every screen.',
        },
        {
          time: 'Finance',
          caption: 'The numbers, the capital, the return.',
        },
        {
          time: 'Technology',
          caption: 'The infrastructure, the systems, the uptime.',
        },
        {
          time: 'A/V & Facilities',
          caption: 'The rooms, the gear, the live moments.',
        },
      ],
      support: '',
      closing:
        '<span class="pnt__luci">With LUCI</span>, the guest environment across the whole property becomes <em>one system</em> you can see and control \u2014 one concrete step toward running it all as a single business.',
    },
    challengesLockup: {
      lockupName: 'What gets in <em>your way</em>',
      lockupRole: 'The cost of a property that doesn\u2019t run as one',
    },
    challenges: [
      {
        friction:
          'You answer for the whole property, but you don\u2019t have a comprehensive view of what\u2019s happening in real time.',
        relief:
          'LUCI gives you one view and one point of control over the property\u2019s guest environment, so you\u2019re leading with a clear picture instead of a patchwork.',
      },
      {
        friction:
          'Coordinating departments and vendors that don\u2019t connect turns your team into the glue.',
        relief:
          'LUCI consolidates many systems and vendors into one platform, so there\u2019s less to coordinate and more that simply works together.',
      },
      {
        friction:
          'Keeping the property modern and competitive usually means disruptive, expensive, property-wide change.',
        relief:
          'LUCI keeps the whole property current and on brand through software, on the infrastructure you already own \u2014 no tearing it apart.',
      },
      {
        friction:
          'Every major investment has to be defensible to the owners, board, or council you answer to.',
        relief:
          'LUCI consolidates spend, runs on what you already have, and scales in phases \u2014 a capital story you can stand behind.',
      },
      {
        friction:
          'Running more than one property means every building works differently, with no consistent way to see or run them.',
        relief:
          'LUCI deploys as one consistent platform across every property, so you can run them all to one standard catered to property-specific strategies.',
      },
    ],
    industryLockup: {
      lockupName: 'LUCI lives <em>wherever you operate</em>',
      lockupRole: 'The business changes. The accountability doesn\u2019t',
    },
    industryKicker: 'What coherence unlocks here',
    industryStakes: [
      {
        slug: 'casinos-gaming',
        name: 'Casinos & gaming',
        image: '/images/industries/casinos-gaming.jpg',
        callout:
          'You own the P&L, the floor\u2019s performance, and the property\u2019s integrity \u2014 and you report all of it to owners, a board, or a council. LUCI gives you one view and control of the guest environment across a complex floor, fewer vendors and silos to coordinate, and a modern, competitive property you can steward with efficient, defensible capital.',
        emphasis:
          'Whole-property coherence and control \u00b7 defensible capital and compliance integrity for boards and councils \u00b7 a competitive, modern property.',
      },
      {
        slug: 'hotels-resorts',
        name: 'Hotels & resorts',
        image: '/images/industries/hotels-resorts.jpg',
        callout:
          'You\u2019re the CEO of the property \u2014 and often several \u2014 accountable to owners for a cohesive premium brand across every outlet. LUCI gives you one consistent guest environment across every space and property, less coordination overhead for a lean team, and a coherent brand that protects rate and loyalty.',
        emphasis:
          'Cohesive brand across the property and portfolio \u00b7 coordination and consistency \u00b7 defensible capital to owners.',
      },
      {
        slug: 'sports-venues',
        name: 'Sports & venues',
        image: '/images/industries/sports-venues.jpg',
        callout:
          'You answer for the business of a huge, complex building \u2014 to owners, leagues, and often the public. LUCI gives you coherent control of a massive guest environment, one standard across a portfolio if you operate many buildings, and efficient capital on the infrastructure your show depends on.',
        emphasis:
          'Whole-venue coherence at scale \u00b7 portfolio consistency for operators \u00b7 defensible capital and stakeholder reporting.',
      },
      {
        slug: 'airports-transportation',
        name: 'Airports & transportation',
        image: '/images/industries/airports-transportation.jpg',
        callout:
          'You run a vast, multi-tenant facility under public accountability, balancing experience, revenue, and long-horizon capital. LUCI gives you one coherent view and control of a sprawling environment, consolidation that fits public governance, and defensible, consistent capital across terminals.',
        emphasis:
          'Coherence and oversight across a huge multi-tenant facility \u00b7 defensible public capital \u00b7 consistency across terminals.',
      },
      {
        slug: 'conference-convention-centers',
        name: 'Conference & convention centers',
        image: '/images/industries/conference-convention-centers.jpg',
        callout:
          'Your business runs on client satisfaction and rebooking, often across a portfolio of venues. LUCI gives you one coherent, flexible environment that presents a modern venue to clients, one standard across every building you operate, and efficient capital on high-utilization infrastructure.',
        emphasis:
          'A modern, coherent venue that wins and keeps clients \u00b7 portfolio consistency \u00b7 defensible, efficient capital.',
      },
    ],
    capabilitiesLockup: {
      lockupName: 'What you <em>can do</em>',
      lockupRole: 'Four ways LUCI helps the business run as one',
    },
    lead: '',
    takeaway: '',
    hubLabel: 'One Coherent Business',
    capabilities: [
      {
        front: 'See and control the guest environment from one place.',
        back:
          'One platform over the property\u2019s screens, sound, and spaces \u2014 so the environment you\u2019re judged on isn\u2019t a patchwork you piece together.',
      },
      {
        front: 'Coordinate less, because more simply works together.',
        back:
          'Fewer systems and vendors to align, so your team spends its energy on the business instead of being the glue between disconnected parts.',
      },
      {
        front: 'Keep the property modern without tearing it apart.',
        back:
          'Software-driven, on-brand control on the infrastructure you already own \u2014 a current, competitive property without a disruptive overhaul.',
      },
      {
        front: 'Run every property to one standard.',
        back:
          'One consistent platform across your portfolio, so consistency and oversight scale with you instead of breaking down building by building.',
      },
    ],
    ctaTitle: 'Run it as <em>one business</em>.',
    ctaDeck:
      'Let us show you what it looks like to see and control the whole property\u2019s guest environment from one platform \u2014 in one building, or across every property you run.',
    chapters: [
      { id: 'persona-thesis', label: 'Overview' },
      { id: 'persona-narrative', label: 'What you manage' },
      { id: 'persona-challenges', label: 'What gets in your way' },
      { id: 'persona-capabilities', label: 'What you can do' },
      { id: 'persona-industries', label: 'Wherever you operate' },
      { id: 'persona-cta', label: 'Next step' },
    ],
  },
};

export function getPersonaDetail(id: PersonaId) {
  return personaDetails[id];
}

export function hasPersonaDetail(id: PersonaId) {
  return Boolean(personaDetails[id]);
}
