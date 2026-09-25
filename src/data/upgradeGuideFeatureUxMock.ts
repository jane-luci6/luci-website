/**
 * MOCK-ONLY data for the preview page src/pages/luci-upgrade-guide-feature-ux-mock.astro
 *
 * NOT imported by any production page. NOT consumed by luci-upgrade-guide.astro.
 * The closed chrome (name + oneLiner) is pulled read-only from the live
 * `upgradeGuide.features` venue-panels entry so the mock always matches the
 * shipped summary without editing upgradeGuide.ts.
 *
 * All open-body copy below is MOCK COPY — stubs from audit facts only
 * (.tmp-weatherby/venue-panels-transcript-audit.md). Not approved copy.
 * Prefix/badge MOCK COPY where needed on the page.
 */

import { upgradeGuide } from './upgradeGuide';

const venuePanels = upgradeGuide.features.find((f) => f.id === 'venue-panels');

if (!venuePanels) {
  throw new Error('upgradeGuideFeatureUxMock: venue-panels feature missing from upgradeGuide.ts');
}

/** Closed chrome — read-only borrow of the live summary so the mock never
 *  drifts from production. Do not write back. */
export const closedChrome = {
  name: venuePanels.name,
  oneLiner: venuePanels.oneLiner,
} as const;

/** IT jump target on the LIVE guide — keeps the real customer/IT split. */
export const itLink = {
  label: 'Technical detail \u2192',
  href: '/luci-upgrade-guide/#ug-tech-item-technical-venue-panels',
} as const;

/** "What it is" — MOCK COPY, short trim of the idea (not the live paragraph). */
export const whatItIs =
  'Venue panels put approved room controls on a wall touchscreen or tablet in the space. Operators see only that room\u2019s endpoints and the actions an admin allows \u2014 not the full LUCI app.';

/** Scenario stubs — MOCK COPY, titles + 1\u20132 lines from audit facts only.
 *  Four cards max per Claude lock. */
export const scenarios = [
  {
    id: 'ballroom',
    title: 'Ballroom',
    line: 'Wall panel scoped to that event space; staff/PIN likely. Theming can match the room.',
  },
  {
    id: 'cabana-pool',
    title: 'Cabana / pool',
    line: 'Guest-facing / open / tap-to-wake; channel for that cabana\u2019s screen.',
  },
  {
    id: 'bar',
    title: 'Bar',
    line: 'Bartender controls source/volume; hide power so TVs stay on.',
  },
  {
    id: 'conference-media',
    title: 'Conference / media',
    line: 'Localized room control; inherits endpoints assigned to that room.',
  }
] as const;

/** Limits & controls checklist — MOCK COPY, from audit. 4\u20136 items per lock. */
export const limits = [
  'Hide individual actions (e.g. turning power on or off) while allowing source/volume',
  'Limit which sources appear',
  'PIN for staff vs open/tap-to-wake for guests'
] as const;

/** Thesis 2 story beats — MOCK COPY. Compact `Label \u2014 line` rows
 *  (uses .ug-mock-beatlines per lock; chips are the alternate form). */
export const beats = [
  {
    label: 'Ballroom',
    line: 'Wall panel scoped to that event space; staff/PIN likely.',
  },
  {
    label: 'Cabana / pool',
    line: 'Guest-facing / open / tap-to-wake; channel for that cabana\u2019s screen.',
  },
  {
    label: 'Bar',
    line: 'Bartender controls source/volume; power hidden so TVs stay on.',
  },
  {
    label: 'Conference / media',
    line: 'Localized room control; inherits endpoints assigned to that room.',
  }
] as const;

/** Thesis 3 media frame caption — MOCK COPY. */
export const mediaCaption =
  'Panel UI \u2014 screenshot placeholder. Sticky frame activates on desktop \u2265900px.';
