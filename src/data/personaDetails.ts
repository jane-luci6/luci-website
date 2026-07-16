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
  index: string;
  head: string;
  desc: string;
  benefits: string[];
  try: string;
}

export interface PersonaDetail {
  id: PersonaId;
  /** Hero */
  heroImage: string;
  heroAlt: string;
  heroKicker: string;
  heroDeck: string;
  /** Narrative — "who this is", second person */
  narrativeLockup: { lockupName: string; lockupRole: string };
  narrative: string[];
  /** Capabilities — "what you can DO" */
  capabilitiesLockup: { lockupName: string; lockupRole: string };
  lead: string;
  takeaway: string;
  capabilities: PersonaCapability[];
  /** Spotlight — "the bigger picture" */
  spotlight: { label: string; text: string; accent: string };
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
      "You run the floor everyone else talks about. LUCI puts the whole property — every zone, every signal, every response — in your hands as one instrument you can play.",
    narrativeLockup: {
      lockupName: 'Who this is',
      lockupRole: 'Operations, in your words',
    },
    narrative: [
      "You're the one the floor reports to. When the energy dips at three in the afternoon, when a jackpot hits and the room has to answer, when a new bank opens and no one's quite sure how to launch it — that's your problem to solve. You've been doing it with phone calls, walkie-talkies, and a team that knows the building better than any manual.",
      "LUCI doesn't replace your judgment. It gives you the controls. The audio curve, the jackpot response, the mode that flips the whole property for a Saturday night — they're settings now, not a shift of setup. You set the plan once and the floor holds it. And when the unexpected happens, you reach for one screen, not five people.",
    ],
    capabilitiesLockup: {
      lockupName: 'What you can do',
      lockupRole: 'Four ways to put LUCI to work',
    },
    lead: "The floor's environment is now a single instrument you can play — the energy guests feel is something you set on purpose, by zone and by hour.",
    takeaway:
      "A floor that responds to the time of day, to a jackpot, to the room you actually have keeps players engaged and the energy where you want it.",
    capabilities: [
      {
        index: '01',
        head: "Set your floor's audio to match the room's energy, all day.",
        desc: "Build an audio schedule that moves the way your floor does — lighter in the morning, building through the afternoon, peaking in the evening, and easing back after the late-night crowd thins. Each zone follows its own curve, and the transitions happen on their own.",
        benefits: [
          'Keep the room feeling alive without a manager riding the faders',
          'Match energy to the crowd you actually have at each hour',
          'Give every shift the same intended sound',
        ],
        try: 'Map your ideal audio curve for a weekday and build it as a scheduled preset.',
      },
      {
        index: '02',
        head: 'Make every jackpot a floor event, automatically.',
        desc: "When a jackpot hits, a coordinated preset fires in that zone — accent lights pulse, audio swells for a beat, nearby screens flash a celebration — then everything resets on its own. The response is calibrated per area so it fits the space.",
        benefits: [
          "Turn one guest's win into energy the whole floor feels",
          'Create a sense of action that keeps nearby players engaged',
          'Deliver it every time, without any manual effort',
        ],
        try: 'Work with A/V to build a jackpot preset for one zone, then test it in a low-traffic window.',
      },
      {
        index: '03',
        head: 'Reconfigure the entire property in seconds.',
        desc: "Each mode your property runs — normal weekday, Saturday peak, fight night, holiday, a private event in the ballroom — becomes a complete configuration of audio, screens, and lighting. Some run on a tap; others, like the high-limit room, hold a standing identity that never needs a manual touch.",
        benefits: [
          'Reconfigure the entire property in seconds, not a shift of setup',
          "Run premium spaces consistently no matter who's working",
          'Let predictable zones open and close themselves on schedule',
        ],
        try: 'Identify the three or four modes you run most often and build a preset for each.',
      },
      {
        index: '04',
        head: 'Direct guest attention to a new game area from the moment it opens.',
        desc: "When a new slot bank or table section launches, set the surrounding zones to point toward it — ambient content on nearby screens, audio tuned to give the area its own energy — for the first few weeks, then revert automatically once it's established.",
        benefits: [
          'Drive traffic to new product while it most needs the lift',
          'Make the floor itself part of the launch, not just signage',
          'Hand the spotlight back automatically when the window closes',
        ],
        try: 'Plan the A/V component of your next new-game launch before the hardware arrives.',
      },
    ],
    spotlight: {
      label: 'The bigger picture',
      text: 'The energy on your floor is no longer luck.',
      accent: "It's a setting.",
    },
    ctaTitle: 'See LUCI on your floor.',
    chapters: [
      { id: 'persona-thesis', label: 'Overview' },
      { id: 'persona-narrative', label: 'The role' },
      { id: 'persona-capabilities', label: 'What you can do' },
      { id: 'persona-spotlight', label: 'The bigger picture' },
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
