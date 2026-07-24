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
   */
  curve?: 'rise' | 'fall';
  /** Sub-lead that opens the arc. */
  subLead: string;
  /** The moments along the day-arc. */
  moments: PersonaNarrativeMoment[];
  /** Supporting line beneath the arc. */
  support: string;
  /** Closing tagline. */
  closing: string;
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
    narrative: {
      chapterLabel: 'The energy curve',
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
    narrativeDeck:
      'You can push a campaign to email, social, and web in minutes. But the property \u2014 where your most engaged guests already are \u2014 takes a request, a hand-off, and a wait.',
    narrative: {
      chapterLabel: 'The life of a message',
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
};

export function getPersonaDetail(id: PersonaId) {
  return personaDetails[id];
}

export function hasPersonaDetail(id: PersonaId) {
  return Boolean(personaDetails[id]);
}
