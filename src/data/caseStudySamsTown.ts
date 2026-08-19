/** Full Sam's Town case study — web page (PDF forthcoming). */

export const samsTownCaseStudyDetail = {
  heroDisplay: 'An LED wall this big',
  heroTrail: "usually isn't this simple",
  property: "Sam's Town Hotel & Gambling Hall",
  propertyMeta: 'Las Vegas, Nevada · Boyd Gaming',
  facts: [
    { label: 'Property', value: "Sam's Town Hotel & Gambling Hall" },
    { label: 'Location', value: 'Las Vegas, Nevada' },
    { label: 'Install', value: 'Less than a week' },
  ],
  inventory: [
    { value: '480', label: 'sq ft LED wall (39 × 12 ft)' },
    { value: '10', label: 'race channels on existing coax' },
    { value: '6', label: 'presets across 8 video inputs' },
    { value: '3', label: 'audio zones in the sportsbook' },
  ],
  summary: [
    {
      label: 'The challenge',
      text: 'Years of accumulated sportsbook TVs due for an upgrade — and a race book that needed live video without trenching new cable.',
    },
    {
      label: 'The approach',
      text: 'Hang one continuous LED wall, loop it into the LUCI platform already running the property, and send race video out over coax already in the floor.',
    },
    {
      label: 'The result',
      text: 'Nearly forty feet of unbroken video, six presets, three audio zones, and ten race channels — all on the same interface staff already know.',
    },
  ],
  challenge: {
    titleBefore: 'The room ',
    titleAccent: 'they had',
    paragraphs: [
      "LUCI has run Sam's Town's A/V end to end for more than a year: we installed audio through the casino first, then video across the property, including the sportsbook. This year, Sam's Town decided the sportsbook screens were due for an upgrade to replace years of accumulated TVs.",
    ],
  },
  approach: {
    titleBefore: 'The wall ',
    titleAccent: 'they wanted',
    paragraphs: [
      "Sam's Town decided to replace a large portion of their screens with one 39 × 12 foot LED wall — and commissioned LUCI's team to install it. In less than a week, the LED wall, a new set of TVs, and the sportsbook's three audio zones were all live and running on LUCI. The wall drives six presets across eight video inputs, all easily controlled from a single interface.",
    ],
    scope: [
      'Hung and commissioned one 480-sq-ft LED wall',
      'Looped the wall into the existing LUCI platform',
      'Six presets across eight video inputs, one interface',
      'Three audio zones on the existing system',
    ],
  },
  raceBook: {
    titleBefore: 'Bringing the ',
    titleAccent: 'race book on board',
    paragraphs: [
      'The race book took the same approach. Rather than trench new cable out to every betting carousel, LUCI sent ten channels of its own encoded video back out over the coax already buried under the property — live racing on existing cable, with no trenching and no new wire pulled through the floor.',
    ],
  },
  beforeAfter: {
    beforeSrc: '/images/case-studies/sams-town/slider-before-web.jpg',
    afterSrc: '/images/case-studies/sams-town/slider-after-web.jpg',
    beforeAlt: "Sam's Town sportsbook before the remodel — a wall of mismatched TVs",
    afterAlt: "Sam's Town sportsbook after the remodel — one continuous LED wall running on LUCI",
    caption: 'Drag to see the wall come together.',
  },
  results: {
    titleBefore: "What Sam's Town ",
    titleAccent: 'runs now',
    bullets: [
      'A 480-sq-ft LED wall — one display where there used to be many',
      'Six presets across eight video inputs, switched from LUCI',
      'Three audio zones on the existing system',
      'Ten channels of race video over existing coax — no trenching',
    ],
  },
  scopeStory: {
    titleBefore: "Sam's Town on LUCI ",
    titleAccent: 'to date',
    stats: [
      { value: '143', label: 'Video endpoints' },
      { value: '88', label: 'Audio zones' },
      { value: '92', label: 'DTV channels' },
      { value: '45', label: 'CMS/signage channels' },
      { value: '4', label: 'Content interfaces' },
    ],
    outcomeBefore: 'One ',
    outcomeAccent: 'LUCI',
    outcomeAfter: ' platform',
    dek: 'Every endpoint, every zone, every channel — one interface.',
  },
  whatsNext: {
    titleBefore: 'Built for ',
    titleAccent: 'the moves ahead',
    intro:
      'The sportsbook was not a new install on a blank slate — it was the next room tied into LUCI on a growing property.',
    plans: [
      {
        title: 'Same login, new wall.',
        body: 'Operators run the LED wall from the LUCI interface they already use for the rest of the property.',
      },
      {
        title: 'Infrastructure stays put.',
        body: 'Race video rides existing coax; audio stays on the zones already wired — fewer pulls, fewer vendors, fewer variables.',
      },
      {
        title: 'The property keeps growing onto LUCI.',
        body: 'As more spaces come on, they join the same platform — no second system to stand up for each remodel.',
      },
    ],
    bottomLine:
      "By looping the sportsbook into the platform already running Sam's Town, LUCI turned a wall upgrade into proof that the property grows without adding parallel control.",
  },
  cta: {
    body: "Curious what this looks like for your property? Let's talk.",
    aboutLabel: 'About LUCI',
    aboutStatement:
      'LUCI Systems is the orchestration engine for enterprise multimedia — A/V, signage, building, and operational infrastructure — from a single interface your team controls from anywhere. LUCI reduces the variables, hardware, and interfaces your team has to manage. When onsite experience and operational continuity are non-negotiable, LUCI delivers coordinated, real-time execution, end to end.',
  },
} as const;
