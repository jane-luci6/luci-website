/** Canonical copy — sourced from IA wireframe + _project-context.md in luci-design */

export const site = {
  name: 'LUCI Systems',
  url: 'https://lucisystems.com',
  tagline: 'The Orchestration Engine for Enterprise Multimedia',
  subTagline: 'One interface to control, automate, and execute the entire guest experience.',
  /** Homepage entry section — Syncopate headline + tagline left, map right (full viewport) */
  heroHeadline: 'Control the whole floor.',
  taglineDisplay: {
    lead: 'The ',
    accent: 'Orchestration Engine',
    tail: ' for Enterprise Multimedia',
  },
  heroVisualDescriptor: 'Map-based control for every display, source, and zone — with a team that stays.',
  ctaPrimary: 'Request a conversation',
  ctaSecondary: 'See LUCI in action',
} as const;

export const valueProp =
  'LUCI Systems orchestrates every layer of technology running your property — AV, signage, building, and operational infrastructure — from a single interface your team controls from anywhere. Rather than adding layers to your stack, LUCI reduces the variables, hardware, and interfaces your team has to manage. When onsite experience and operational continuity are non-negotiable, LUCI delivers coordinated, real-time execution, end to end.';

export const oneOffering = {
  summary: 'One platform, one embedded team, one outcome.',
  platform: 'The multimedia orchestration engine your team runs day to day.',
  partnership:
    'The team that designs, deploys, supports, refines, and partners with your property — built in, not bolted on.',
  offering:
    'LUCI is a fully managed A/V operating platform — software, hardware, operating model, and an embedded engineering team — deployed as a complete system your team takes over from day one.',
} as const;

export const variableReduction = {
  headline: "Complexity isn't solved by a better interface. It's solved by a shorter list of things to manage.",
  accumulation:
    "Complex environments don't fail because of what they lack. They fail because of what they accumulate.\n\nEvery property runs on a stack of vendors, processors, interfaces, and workarounds that each made sense at the time, but create downstream challenges.",
  subtraction:
    "LUCI doesn't address this with an additional tool; it addresses this with the principle of subtraction. By removing variables. Its success is evidenced by the number of things our clients no longer have to think about.",
} as const;

export const portfolioLine =
  'LUCI runs at some of the largest, most operationally complex properties in gaming and hospitality — where guest experience and operational uptime are not optional.';

export const ameristarCaseStudy = {
  title: 'Three days to a future-ready platform',
  dek: "LUCI completed a full retrofit of Ameristar Council Bluffs' AV infrastructure in under three days, modernizing a system that had run since 2012 and centralizing control on land to prepare the property for its next phase of growth.",
  slug: 'ameristar-council-bluffs',
  // Short homepage tease — validates the single-interface promise on a real property.
  homeHeadline: 'Three days to a future-ready platform',
  homeDek:
    'Ameristar Council Bluffs was facing a major buildout and a planned exit from their riverboat location — LUCI modernized the whole A/V foundation in one three-day retrofit — without ever taking the floor down.',
  homeStat: { value: '3 days', label: 'Full retrofit, floor never closed' },
  homeMove:
    'Most of the property’s A/V processing lived on the riverboat. LUCI moved all of it into the IT data center on land — so control is centralized, and the new buildout needs no separate A/V rooms.',
  homeQuote: 'Well done, LUCI team! This was the best installation — so seamless.',
  homeQuoteAttribution: 'Facilities Manager · Ameristar Council Bluffs',
  homeOutcomes: [
    { title: 'The boat can sail', body: 'Control lives on land, so Ameristar can retire the riverboat as a clean break and keep running on LUCI.' },
    { title: 'The new build plugs in', body: 'New construction runs on the platform already powering the property — no second install.' },
    { title: 'Growth is built in', body: 'The property keeps expanding without the A/V complications that pile up over time.' },
  ],
  homeEyebrow: 'Customer story',
  homeCta: 'Read the full case study',
  logoSrc: '/images/logos/ameristar-council-bluffs.svg',
  moveDiagramSrc: '/images/case-relocation.svg?v=1',
} as const;

// Trust strip under the hero callout — real client logos, scrolling marquee.
export const homeTrust = {
  eyebrow: 'Trusted on live casino & hospitality floors',
  strips: [
    { src: '/images/logos/client-logos-1.png', alt: 'Caesars Entertainment, Boyd Gaming, Yaamava\u2019 Resort & Casino, Osage Casino' },
    { src: '/images/logos/client-logos-2.png', alt: 'Chinook Winds Casino Resort, Snoqualmie Casino, Stanly Ranch Auberge, Choctaw Casinos & Resorts' },
    { src: '/images/logos/client-logos-3.png', alt: 'Rio Las Vegas, Valley View Casino & Hotel, Santa Ana Star Casino Hotel, Spotlight 29 Casino' },
    { src: '/images/logos/client-logos-4.png', alt: 'Horseshoe Lake Charles, Chumash Casino Resort, The Point Casino & Hotel, Ameristar Casino Resort Spa' },
    { src: '/images/logos/client-logos-5.png', alt: 'Suncoast, Cache Creek Casino Resort, Caesars Sportsbook, Harrah\u2019s Columbus' },
  ],
} as const;

// Consolidation ledger — Option A: a "Today / With LUCI" before→after ledger.
// All six canonical figures (capabilities brochure p.04). The "before" figure is
// shown large but muted/ghosted (the heavy old way); the LUCI figure is bright.
export const homeLedger = {
  kicker: 'Consolidation you can see',
  headingLead: 'Less hardware. Fewer vendors. ',
  headingAccent: 'One team in control.',
  lede:
    'LUCI collapses the stack of platforms, receivers, and racks you manage today into a single orchestration layer your own team runs.',
  ctaLabel: 'See it on your floor',
  ctaHref: '/contact',
  rows: [
    { icon: 'hex',    fromNum: '3+',      fromLabel: 'control platforms',                fromUnit: '',   num: '1',     to: 'orchestration platform' },
    { icon: 'sat',    fromNum: '15+',     fromLabel: 'satellite receivers',              fromUnit: '',   num: '3',     to: 'rack units' },
    { icon: 'rack',   fromNum: '5+',      fromLabel: 'equipment racks',                  fromUnit: '',   num: '1',     to: 'standardized rack' },
    { icon: 'code',   fromNum: '10+',     fromLabel: 'control languages & programmers',  fromUnit: '',   num: '1',     to: 'standard, run by one team' },
    { icon: 'wrench', fromNum: '$1,000s', fromLabel: 'per change in truck rolls',        fromUnit: '',   num: 'No',    to: 'truck roll for routine changes', q: true },
    { icon: 'lock',   fromNum: 'Locked',  fromLabel: 'code held hostage by the programmer', fromUnit: '', num: 'Yours', to: 'standardized, documented, owned', q: true },
  ],
} as const;
