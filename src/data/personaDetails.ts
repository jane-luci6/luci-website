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
  curve?: 'rise' | 'fall' | 'stack' | 'converge';
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
      lockupName: 'The energy curve',
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
      lockupName: 'The life of a message',
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
      lockupName: 'The true cost of property-wide A/V',
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
    hubSub: 'Lower, predictable, and defensible.',
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
      lockupName: 'What\u2019s sitting <em>off your network</em>',
      deck: 'Every A/V system on the property \u2014 displays, players, processors, controllers, audio \u2014 runs on its own proprietary infrastructure. None of it is on your network. None of it is under your control. All of it is yours to answer for when it fails.',
    },
    narrative: {
      curve: 'converge',
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
    hubSub: 'Monitored, secured, and running on your network.',
    capabilities: [
      {
        front: 'See every A/V endpoint on the property from a single dashboard.',
        back:
          'Every connected display, audio component, and device appears in one interface with its current status and health \u2014 no trip to the server room, no call to a specialist.',
      },
      {
        front: 'Know exactly what changed, and when.',
        back:
          'Every configuration change is logged with who made it, what changed, and when \u2014 a complete audit trail you can filter by date, user, or zone.',
      },
      {
        front: 'Define who can change what \u2014 by role, by zone, by team.',
        back:
          'Set role-based permissions centrally so each team controls only its lane \u2014 enforced by the platform, managed from one administrative view.',
      },
      {
        front: 'Schedule system maintenance to run automatically.',
        back:
          'Queue updates, reboots, and maintenance for overnight or low-traffic windows. The platform maintains itself on your schedule, with dashboard confirmation.',
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
};

export function getPersonaDetail(id: PersonaId) {
  return personaDetails[id];
}

export function hasPersonaDetail(id: PersonaId) {
  return Boolean(personaDetails[id]);
}
