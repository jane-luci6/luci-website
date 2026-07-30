/** Canonical copy — sourced from IA wireframe + _project-context.md in luci-design */

export const site = {
  name: 'LUCI Systems',
  url: 'https://lucisystems.com',
  tagline: 'The Orchestration Engine for Enterprise Multimedia',
  subTagline: 'One interface to control, automate, and execute the entire guest experience.',
  /** Homepage entry section — Syncopate headline + tagline left, map right (full viewport) */
  heroHeadline: 'Control your whole property.',
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

export const aboutStory = {
  heroLead:
    'Built in Las Vegas by integrators, operators, and owners who ran these floors before they built the software.',
  paragraphs: [
    'LUCI was built in Las Vegas, near the Strip, inside the casino industry — the most demanding multimedia environments in the world. Casinos run every system at once, around the clock, with no room for downtime. That is where the company learned what “non-negotiable” actually means.',
    'The work that built this company was integration work — stitching together vendors, processors, and interfaces that each made sense on their own and failed together. The pattern was always the same: environments don’t break because of what they lack. They break because of what they accumulate.',
    'That conviction became LUCI — one platform, one embedded team, one accountable owner. Today LUCI runs at casinos, hotels and resorts, sports venues, airports, and convention centers — anywhere a property runs many systems as one.',
  ],
  industries: [
    'Casinos & gaming',
    'Hotels & resorts',
    'Sports & venues',
    'Airports & transportation',
    'Conference & convention centers',
  ],
} as const;

export const leadership = [
  {
    name: 'Michael Epstein',
    title: 'CEO',
    blurb:
      'Decades as an integrator, operator, and owner of multimedia environments. Leads LUCI’s product and field execution.',
  },
  {
    name: 'Nickolas Jensen',
    title: 'CITO',
    blurb:
      'Owns LUCI’s technology and information strategy — the platform architecture, security, and engineering standards behind every deployment.',
  },
] as const;

export const portfolioLine =
  'LUCI runs at some of the largest, most operationally complex properties in gaming and hospitality — where guest experience and operational uptime are not optional.';

export const ameristarCaseStudy = {
  title: 'Three days to a future-ready platform',
  dek: "LUCI completed a full retrofit of Ameristar Council Bluffs' AV infrastructure in under three days, modernizing a system that had run since 2012 and centralizing control on land to prepare the property for its next phase of growth.",
  slug: 'ameristar-council-bluffs',
  property: 'Ameristar Council Bluffs',
  location: 'Council Bluffs, Iowa',
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
  homeEyebrow: 'LUCI in Action',
  homeBandKicker: 'LUCI in Action',
  homeCta: 'Read the full case study',
  logoSrc: '/images/logos/ameristar-council-bluffs.svg',
  logoSrcDark: '/images/logos/ameristar-logo-white.png',
  cardMedia: '/images/logos/ameristar-council-bluffs-white.svg',
  pdfHref: '/downloads/LUCI-Case-Study-Ameristar-Council-Bluffs.pdf',
  moveDiagramSrc: '/images/case-relocation.svg?v=1',
} as const;

// Tachi Palace Casino Resort — bingo hall LED + audio refresh (Issue 02 field story).
export const tachiCaseStudy = {
  title: 'One week to a foundation for growth',
  dek: "LUCI brought Tachi Palace's bingo hall alive in one week — eight new LED video walls, audio under one interface, and an immersive room that sets the stage for the rest of the resort.",
  slug: 'tachi-palace',
  property: 'Tachi Palace Casino Resort',
  location: 'Lemoore, California',
  poster: '/images/case-studies/tachi/tachi-reel-poster.jpg',
  logoSrc: '/images/logos/tachi-palace.png',
  pdfHref: '/downloads/LUCI-Case-Study-Tachi-Palace.pdf',
} as const;

// Trust strip under the hero callout — real client logos, scrolling marquee.
export const homeTrust = {
  eyebrow: 'Trusted on live properties',
  strips: [
    { src: '/images/logos/client-logos-1.png', alt: 'Caesars Entertainment, Boyd Gaming, Yaamava\u2019 Resort & Casino, Osage Casino' },
    { src: '/images/logos/client-logos-2.png', alt: 'Chinook Winds Casino Resort, Snoqualmie Casino, Stanly Ranch Auberge, Choctaw Casinos & Resorts' },
    { src: '/images/logos/client-logos-3.png', alt: 'Rio Las Vegas, Valley View Casino & Hotel, Santa Ana Star Casino Hotel, Spotlight 29 Casino' },
    { src: '/images/logos/client-logos-4.png', alt: 'Horseshoe Lake Charles, Chumash Casino Resort, The Point Casino & Hotel, Ameristar Casino Resort Spa' },
    { src: '/images/logos/client-logos-5.png', alt: 'Suncoast, Cache Creek Casino Resort, Caesars Sportsbook, Harrah\u2019s Columbus' },
  ],
} as const;

// Consolidation ledger — canonical "The Collapse" graphic (software + hardware funnel,
// then network / service / code rows). Rendered as the website's own SVG copy.
export const homeLedger = {
  kicker: 'Consolidation you can see',
  headingLead: 'Less hardware. Fewer vendors. ',
  headingAccent: 'Your team in control.',
  lede:
    'LUCI collapses four or more multimedia systems, five or more racks, and one hundred plus devices into one interface and one equipment rack — then carries that same consolidation through your network, service model, and code.',
  ctaLabel: 'See it on your floor',
  ctaHref: '/contact',
} as const;
