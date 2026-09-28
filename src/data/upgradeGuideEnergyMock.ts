/**
 * Upgrade Guide first-section ENERGY MOCK — preview-only data.
 *
 * Imported ONLY by `src/pages/luci-upgrade-guide-energy-mock.astro`.
 * Does NOT touch production `upgradeGuide.ts`. Hero + thesis copy is the
 * GPT RECOMMENDED set (verbatim, per GLM brief). The slot label is a layout
 * mechanic — Jane supplies the platform video later; the plate is a labeled
 * empty placeholder today. No video files are referenced.
 */

export const ENERGY_MOCK_RELEASE_DATE = 'January 19' as const;

export const ENERGY_MOCK_SLOT_LABEL = 'Platform walkthrough — coming soon' as const;

type EnergyThesisId = 'A' | 'B' | 'C';

type EnergyHeroCta = {
  label: string;
  href: string;
  audience: 'prospects' | 'existing-customers';
};

type EnergyThesisMeta = {
  id: EnergyThesisId;
  /** Switcher letter */
  label: string;
  /** Switcher name */
  name: string;
  /** Switcher sublabel — energy source */
  sublabel: string;
};

export type EnergyThesis = EnergyThesisMeta & {
  hero: {
    eyebrow: string;
    headline: {
      leading: string;
      mintAccent: string;
      trailing: string;
    };
    date: typeof ENERGY_MOCK_RELEASE_DATE;
    ctas: readonly EnergyHeroCta[];
  };
  thesis: {
    heading: string;
    paragraphs: readonly [string, string];
    media: {
      kind: 'placeholder';
      label: string;
    };
  };
};

/** GPT RECOMMENDED copy — shared verbatim across all three theses. */
const sharedHero = {
  eyebrow: 'A new version of LUCI is on the way',
  headline: {
    leading: 'Putting the ',
    mintAccent: 'power of programming',
    trailing: ' in your hands',
  },
  date: ENERGY_MOCK_RELEASE_DATE,
  ctas: [
    { label: 'Book a demo', href: '/contact', audience: 'prospects' as const },
    {
      label: 'Talk to your account team',
      href: 'mailto:mepstein@lucisystems.com',
      audience: 'existing-customers' as const,
    },
  ],
} as const;

const sharedThesisCopy = {
  heading: 'The only A/V that scales and improves is about to get even better',
  paragraphs: [
    'We\u2019ve been building toward this: a more capable LUCI with new ways to control rooms, shape the interface, see live status, govern access, and reach support with better context. It\u2019s a major step forward for a platform designed to scale with your needs and improve over time.',
    'This release puts more day-to-day control in your hands, giving your property greater autonomy to move faster. When support is needed, the LUCI team stays in the loop\u2014with better context to help keep everything running smoothly.',
  ],
} as const;

export const upgradeGuideEnergyMock = {
  slotLabel: ENERGY_MOCK_SLOT_LABEL,
  theses: [
    {
      id: 'A',
      label: 'A',
      name: 'Release masthead',
      sublabel: 'Type does the work',
      hero: sharedHero,
      thesis: {
        ...sharedThesisCopy,
        media: {
          kind: 'placeholder' as const,
          label: ENERGY_MOCK_SLOT_LABEL,
        },
      },
    },
    {
      id: 'B',
      label: 'B',
      name: 'Product plate',
      sublabel: 'The release has a face',
      hero: sharedHero,
      thesis: {
        ...sharedThesisCopy,
        media: {
          kind: 'placeholder' as const,
          label: ENERGY_MOCK_SLOT_LABEL,
        },
      },
    },
    {
      id: 'C',
      label: 'C',
      name: 'Release sheet',
      sublabel: 'Structure & asymmetry',
      hero: sharedHero,
      thesis: {
        ...sharedThesisCopy,
        media: {
          kind: 'placeholder' as const,
          label: ENERGY_MOCK_SLOT_LABEL,
        },
      },
    },
  ] as const satisfies readonly EnergyThesis[],
};
