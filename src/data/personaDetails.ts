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
  heroKicker: string;
  heroDeck: string;
  /** Narrative — "who this is", second person, as a day-arc timeline */
  narrativeLockup: { lockupName: string; lockupRole: string };
  narrative: PersonaNarrative;
  /** The two shifts — works-vs-broken contrast */
  twoShiftsLockup: { lockupName: string; lockupRole: string };
  twoShifts: PersonaTwoShifts;
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
  capabilities: PersonaCapability[];
  /** Spotlight — "the bigger picture" (optional; omitted when the closer carries the frame) */
  spotlight?: { label: string; text: string; accent: string };
  /** CTA */
  ctaTitle: string;
  chapters: { id: string; label: string }[];
}

export const personaDetails: Partial<Record<PersonaId, PersonaDetail>> = {
  operations: {
    id: 'operations',
    heroImage: '/images/who-we-serve/operations-hero.jpg',
    heroAlt: 'A casino gaming floor at evening peak, glowing signage and slot banks seen from an elevated angle',
    heroKicker: '',
    heroDeck:
      "You run the floor everyone else talks about. With LUCI in your hands, you can tune the whole property to the rhythm of your guests.",
    narrativeLockup: {
      lockupName: 'The entire property is in your hands',
      lockupRole: 'What operations has to manage',
    },
    narrative: {
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
    twoShiftsLockup: {
      lockupName: 'The difference you actually feel',
      lockupRole: 'When it works — and when it doesn’t',
    },
    twoShifts: {
      smooth: [
        'The space is ready for the next event without a service call.',
        'Any staff member changes what’s on screen in seconds.',
        'You never think about it — you’re with your guests and your team.',
      ],
      broken: [
        'A dark screen at doors-open. A dead zone at peak.',
        'Nobody on shift knows how to fix it. Who do you call?',
        'It’s in front of guests, it’s on you, and it’s happening now.',
      ],
    },
    challengesLockup: {
      lockupName: 'What gets in your way',
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
      lockupName: 'LUCI lives wherever you operate',
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
      lockupName: 'What you can do',
      lockupRole: 'Four ways to put LUCI to work',
    },
    lead: '',
    takeaway: '',
    capabilities: [
      {
        front: 'Set your floor\u2019s audio to match the room\u2019s energy, all day.',
        back:
          'Build an audio schedule that moves the way your floor does \u2014 lighter mornings, building afternoons, peaking evenings, easing back as the crowd thins. Each zone follows its own curve, and the transitions happen on their own.',
      },
      {
        front: 'Turn a signature moment into a floor event, automatically.',
        back:
          'When a big moment hits \u2014 a jackpot, a goal, a headline, a VIP arrival \u2014 a coordinated preset fires in that zone. Accent lights pulse, audio swells for a beat, nearby screens flash a celebration, then everything resets on its own.',
      },
      {
        front: 'Reconfigure the entire property in seconds.',
        back:
          'Each mode your property runs \u2014 a normal weekday, a Saturday peak, a marquee event, a holiday, a private function \u2014 becomes one complete configuration of audio, screens, and lighting. Some run on a tap; others, like a premium space, hold a standing identity that never needs a manual touch.',
      },
      {
        front: 'Direct guest attention to a new area from the moment it opens.',
        back:
          'When a new section launches \u2014 a slot bank, a retail outlet, a renovated wing, a new gate \u2014 set the surrounding zones to point toward it for the first few weeks. The ambient content and audio tune themselves to give the area its own energy, then revert automatically once it\u2019s established.',
      },
    ],
    ctaTitle: 'A/V should support your job, not block it.',
    chapters: [
      { id: 'persona-thesis', label: 'Overview' },
      { id: 'persona-narrative', label: 'What you manage' },
      { id: 'persona-challenges', label: 'What gets in your way' },
      { id: 'persona-capabilities', label: 'What you can do' },
      { id: 'persona-two-shifts', label: 'The difference' },
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
