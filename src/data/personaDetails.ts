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
  /** Short, punchy "what you can do" — left side of the flow. */
  action: string;
  /** Short, punchy result — the outcome that feeds the guest experience. */
  outcome: string;
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
  /** One-line elaboration of the friction. */
  frictionBody: string;
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
  /** Challenges — friction → relief, grouped Daily / Strategic */
  challengesLockup: { lockupName: string; lockupRole: string };
  challenges: PersonaChallengeGroup[];
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
    heroKicker: 'Who we serve',
    heroDeck:
      "You run the floor everyone else talks about. With LUCI in your hands, you can tune the whole property to the rhythm of your guests.",
    narrativeLockup: {
      lockupName: 'The role',
      lockupRole: 'Operations, in your words',
    },
    narrative: {
      subLead: "You're the one the floor answers to.",
      moments: [
        { time: '3 PM', caption: 'You control the energy at three in the afternoon.' },
        { time: 'Jackpot', caption: 'The response when a jackpot hits.' },
        { time: 'New slot bank', caption: 'The launch of a new slot bank.' },
        { time: 'Saturday night', caption: 'The whole atmosphere of Saturday night.' },
      ],
      support:
        'LUCI hands you the controls — adjust the audio curve, the screen strategy, and the whole atmosphere — on a schedule or in real-time.',
      closing: 'You reach for one screen, not five people to make it happen.',
    },
    twoShiftsLockup: {
      lockupName: 'Two very different shifts',
      lockupRole: 'The difference you actually feel',
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
      lockupName: 'Small annoyances, until they’re not',
      lockupRole: 'What gets in your way',
    },
    challenges: [
      {
        label: 'Daily',
        items: [
          {
            friction: 'You’re the hub holding it all together',
            frictionBody:
              'Every moving part runs through you. The last thing you need is one more interface to learn or one more vendor to chase.',
            relief: 'One place to control everything guests see and hear — so it’s one less thing to chase.',
          },
          {
            friction: 'Spaces have to be ready — on schedule, every time',
            frictionBody:
              'Turnovers and conversions run on tight, repeating windows. Readiness can’t wait on someone technical to reset the room.',
            relief: 'The room becomes what the next event needs in seconds, not a service call.',
          },
          {
            friction: 'Your team is stretched, and not technical',
            frictionBody:
              'The floor runs on rotating, understaffed shifts. Anything that needs a specialist either doesn’t get done or gets done wrong.',
            relief: 'If they can use a tablet, they can run the floor. No specialist required.',
          },
          {
            friction: 'When it fails, it fails on your shift',
            frictionBody:
              'A live failure isn’t tomorrow’s ticket. It’s in front of guests, and it’s yours to solve right now.',
            relief: 'When something’s off, you see it and fix it yourself — right then, without waiting on anyone.',
          },
        ],
      },
      {
        label: 'Strategic',
        items: [
          {
            friction: 'A rising guest-experience standard, on a flat budget',
            frictionBody:
              'Guest expectations keep climbing; budgets don’t. Every investment is judged on whether it eases that squeeze or adds to it.',
            relief: 'Less spent keeping the tech alive. More spent on the guest.',
          },
          {
            friction: 'Keeping the space feeling current — without disrupting the building',
            frictionBody:
              'The building has to feel modern as expectations rise. Making it feel fresh usually implies a disruptive, expensive change.',
            relief: 'Refresh the experience without tearing the building apart.',
          },
          {
            friction: 'Safety, compliance, and audit — every day, all day',
            frictionBody:
              'Life-safety and regulatory obligations never let up. Systems that aren’t reliable or unified become a liability you personally answer for.',
            relief: 'The systems you answer for stay dependable — and you can prove it.',
          },
          {
            friction: 'An inherited patchwork you can’t take offline',
            frictionBody:
              'You inherited systems stacked up over years. Fixing it seems to mean ripping everything out — a cost and disruption you can’t absorb.',
            relief: 'Start with what you have. Expand when you’re ready. No rip-and-replace.',
          },
        ],
      },
    ],
    industryLockup: {
      lockupName: 'The stakes change. The relief doesn’t.',
      lockupRole: 'Wherever you operate',
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
    lead: "The floor's environment is now a single instrument you can play — the energy guests feel is something you set on purpose, by zone and by hour.",
    takeaway: '',
    capabilities: [
      {
        action: 'Schedule the audio curve by zone and hour',
        outcome: "the room's energy matches the crowd you actually have.",
      },
      {
        action: 'Turn every jackpot into a floor event',
        outcome: "one win becomes energy the whole floor feels.",
      },
      {
        action: 'Reconfigure the whole property in one tap',
        outcome: "Saturday night is a setting, not a shift of setup.",
      },
      {
        action: 'Point guests at a new game area',
        outcome: "traffic goes where you want it, then hands the spotlight back.",
      },
    ],
    ctaTitle: 'A/V should support your job, not block it.',
    chapters: [
      { id: 'persona-thesis', label: 'Overview' },
      { id: 'persona-narrative', label: 'The role' },
      { id: 'persona-two-shifts', label: 'The two shifts' },
      { id: 'persona-challenges', label: 'What gets in your way' },
      { id: 'persona-industries', label: 'Wherever you operate' },
      { id: 'persona-capabilities', label: 'What you can do' },
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
