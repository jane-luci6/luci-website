/**
 * Upgrade Guide feature deep-dives.
 *
 * Customer Staging follows Option C: three workflow scenarios plus landscape
 * product-UI slots. Technical bullets stay the covered IT set.
 * Grounded in the Staging gap brief and the copy already on this feature.
 */

export interface UpgradeGuideScenario {
  id: string;
  title: string;
  paragraphs: readonly [string, string];
}

export interface UpgradeGuideMediaSlot {
  id: string;
  /** Visible placeholder line, or the caption under a real screenshot. */
  caption: string;
  alt: string;
  /** Landscape product UI. Omit until a screenshot is ready. */
  src?: string;
}

export interface UpgradeGuideFeature {
  id: string;
  title: string;
  oneLiner: string;
  paragraph: string;
  benefits: readonly string[];
  scenarios?: readonly UpgradeGuideScenario[];
  media?: readonly UpgradeGuideMediaSlot[];
  /** Anchor of the matching technical section, when this feature has one. */
  technicalId?: string;
}

export interface UpgradeGuidePillar {
  id: string;
  /** Pillar index as shown in the guide, e.g. "01". */
  label: string;
  title: string;
  features: readonly UpgradeGuideFeature[];
}

export interface UpgradeGuideTechnicalSection {
  id: string;
  title: string;
  bullets: readonly string[];
}

const staging: UpgradeGuideFeature = {
  id: 'staging',
  title: 'Staging',
  oneLiner:
    'Prepare screens, sources, and audio levels behind the scenes, and hold that set until you are ready. Apply on cue, or save it as a preset for next time.',
  paragraph:
    'Build the next room state while the current one keeps running, with screens, sources, volumes, and content gathered into one staged set. Nothing in the room changes until you apply. Save the set as a preset for reuse, or give the preset a time and review what has run and what is coming across chart views.',
  benefits: [
    'Holds the next look until you apply, without changing the live room',
    'Shows the roster of staged changes, with pending changes marked in amber, before you apply',
    'Takes from live to start the stage, then applies the staged set on cue',
    'Saves a staged set as a reusable preset, and a timed preset as a scheduled preset',
    'Shows past and upcoming activity across chart views',
  ],
  scenarios: [
    {
      id: 'on-cue-event-change',
      title: 'On-cue event change',
      paragraphs: [
        'The room is fine as it is. Stage the next look — screens, sources, and levels — and hold it until the cue. The live room stays as it is while you wait.',
        'When the moment arrives, hit Apply and the staged set goes out together. If the start might slip, leave someone ready to hit Apply rather than scheduling it.',
      ],
    },
    {
      id: 'reusable-daypart-preset',
      title: 'Reusable daypart preset',
      paragraphs: [
        'A morning open, or an entryway that should come back to the same default, can be saved as a named preset. That preset is the staged set, kept so you can use it again.',
        'Apply it when you need that look, or give it a time so it runs on a schedule. Clear the stage when you are done, and bring the preset back later.',
      ],
    },
    {
      id: 'timed-run-lockout',
      title: 'Timed run and lockout',
      paragraphs: [
        'Give a preset a time and it runs as a scheduled preset. For that window, the scheduled preset can lock the devices it runs, with a lock indicator on the device. An administrator can override the lock.',
        'Chart views show what has run and what is still coming.',
      ],
    },
  ],
  media: [
    {
      id: 'staging-roster-apply',
      alt: 'Staging roster and Apply action',
      caption: 'Staging roster and apply action — screenshot placeholder',
    },
    {
      id: 'staging-schedule-chart',
      alt: 'Schedule chart views of past and upcoming activity',
      caption: 'Schedule chart views — screenshot placeholder',
    },
  ],
  technicalId: 'technical-staging-presets-schedules',
};

export const upgradeGuidePillars: readonly UpgradeGuidePillar[] = [
  {
    id: 'greater-control-of-the-room',
    label: '01',
    title: 'Greater control of the room',
    features: [staging],
  },
];

export const upgradeGuideTechnical: readonly UpgradeGuideTechnicalSection[] = [
  {
    id: 'technical-staging-presets-schedules',
    title: 'Staging, presets, and schedules',
    bullets: [
      'Treat a staged set, preset, and scheduled preset as the same command set at different stages: optionally named and optionally timed.',
      'Review, clear, or edit the staged roster item by item before commands are sent.',
      'Seed a staged set from the room’s current state.',
      'Review differences against saved values before committing a preset edit.',
      'Apply a control-engine lockout window to a scheduled preset, with a visible device indicator and administrator override.',
    ],
  },
];
