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
      "You're the one the floor reports to — the energy at three in the afternoon, the answer when a jackpot hits, the launch of a new bank. LUCI doesn't replace your judgment; it hands you the controls. The audio curve, the jackpot response, the mode that flips the whole property for a Saturday night become settings, not a shift of setup. You reach for one screen, not five people.",
    ],
    capabilitiesLockup: {
      lockupName: 'What you can do',
      lockupRole: 'Four ways to put LUCI to work',
    },
    lead: "The floor's environment is now a single instrument you can play — the energy guests feel is something you set on purpose, by zone and by hour.",
    takeaway: '',
    capabilities: [
      {
        index: '01',
        head: "Set your floor's audio to match the room's energy, all day.",
        desc: "Build an audio schedule that moves with your floor — lighter mornings, building afternoons, peaking evenings, easing back late. Each zone follows its own curve, and the transitions happen on their own.",
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
        desc: "When a jackpot hits, a coordinated preset fires in that zone — lights pulse, audio swells, nearby screens celebrate — then resets on its own, calibrated to the space.",
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
        desc: "Each mode — weekday, Saturday peak, fight night, holiday, a ballroom event — becomes a complete configuration of audio, screens, and lighting. Some run on a tap; others hold a standing identity.",
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
        desc: "When a new slot bank or table section launches, set the surrounding zones to point toward it — ambient screens, tuned audio — for the first few weeks, then revert on its own.",
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
