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
