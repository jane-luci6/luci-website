/** Full Ameristar Council Bluffs case study — web page + PDF download. */

export const ameristarCaseStudyDetail = {
  pdfHref: '/downloads/LUCI-Case-Study-Ameristar-Council-Bluffs.pdf',
  pdfFilename: 'LUCI-Case-Study-Ameristar-Council-Bluffs.pdf',
  heroTitle: 'Three days to a <em>future-ready platform</em>',
  property: 'Ameristar Council Bluffs Casino',
  propertyMeta: 'Council Bluffs, Iowa · Penn Entertainment',
  facts: [
    { label: 'Operator', value: 'Penn Entertainment' },
    { label: 'Location', value: 'Council Bluffs, Iowa' },
    { label: 'Retrofit completed', value: 'Under 3 days' },
  ],
  summary: [
    {
      label: 'The challenge',
      text: 'A decade-old A/V system, aging equipment, and a major casino buildout on the way.',
    },
    {
      label: 'The approach',
      text: "A full retrofit in under three days, with all A/V processing relocated to the data center on land.",
    },
    {
      label: 'The result',
      text: "A unified, scalable platform built for the property's next phase of growth.",
    },
  ],
  challenge: {
    title: 'A proven system, a bigger future',
    paragraphs: [
      'Ameristar Council Bluffs spans a land-based casino and a riverboat. Its A/V system was based on an early LUCI design that had been operating successfully since 2012.',
      'Even after more than a decade of daily use, the original system continued to support property operations and guest experience demands. But the property was preparing for a new chapter: a major casino buildout on the land side and a planned transition away from the riverboat casino.',
      'With years of ongoing upgrades, aging equipment, and that buildout approaching, Ameristar needed a more unified, scalable, and future-ready approach, one that could carry the property through its next phase of growth.',
    ],
    photo: {
      src: '/images/case-studies/ameristar-riverboat.jpg?v=3',
      alt: 'Ameristar Council Bluffs riverboat beside the Missouri River at sunset',
      caption: 'The riverboat at Ameristar Council Bluffs, with the land-side property beyond.',
    },
  },
  scopeStory: {
    titleBefore: 'Ameristar on LUCI ',
    titleAccent: 'today',
    stats: [
      { value: '146', label: 'Video endpoints' },
      { value: '50', label: 'Audio zones' },
      { value: '78', label: 'DTV channels' },
      { value: '26', label: 'CMS/signage channels' },
    ],
    outcomeBefore: 'One ',
    outcomeAccent: 'LUCI',
    outcomeAfter: ' platform',
    dek: 'Every endpoint, every zone, every channel — one interface.',
  },
  approach: {
    title: 'Modernize without disrupting the floor',
    paragraphs: [
      "LUCI's goal was to modernize the property's A/V foundation and position it for the transition ahead, without disrupting a floor that runs every day.",
      "The defining move was location. As part of the upcoming transition away from the riverboat casino, LUCI relocated all new A/V processing equipment into the property's IT data center on land. Since much of the previous system's processing was located on the boat, this single move eliminated the need to design additional A/V rooms into the new buildout, helping reduce future construction and infrastructure costs.",
      'The retrofit installation itself was completed in less than three days.',
    ],
    scope: [
      'Replaced the A/V head-end systems, amplifiers, and control infrastructure',
      "Relocated all new A/V processing into the property's IT data center",
      'Completed a full conversion and modernization of the system documentation',
    ],
    closing:
      'The result is a streamlined platform designed for years of reliable, trouble-free operation, with simplified future maintenance and expansion.',
  },
  quote: {
    text: 'Well done, LUCI team! This was the best installation — so seamless.',
    role: 'Facilities Manager',
    org: 'Ameristar Council Bluffs',
  },
  results: {
    title: 'What the property gained',
    bullets: [
      'One unified view of every endpoint',
      'Broader delegation by zone',
      'Faster response to daily needs',
      'Automated resets and scheduling',
      'Simpler maintenance and expansion',
      'Lower long-term infrastructure costs',
    ],
    paragraphs: [
      'The upgraded LUCI platform now provides unlimited operational users through any browser-based device, giving the property greater flexibility, broader delegation, and faster response times to daily operational needs.',
      'Built-in automation features let the operations team perform daily system resets, scheduled adjustments, and system-wide changes with significantly less hands-on intervention.',
      "And because the property now benefits from LUCI's evolving feature set and software enhancements without additional upgrade licensing costs, the platform continues to grow alongside the casino's future operational and guest experience needs.",
    ],
  },
  whatsNext: {
    title: 'Built for the moves ahead',
    intro: 'With the system centralized on land, the property is set up for what comes next.',
    plans: [
      {
        title: 'The boat can sail.',
        body: 'When the time comes, Ameristar can step away from the riverboat as a clean break, and keep running on LUCI.',
      },
      {
        title: 'The new build can plug in.',
        body: 'When the new construction opens, it runs on the platform already powering the property — no second install, no parallel system to stand up.',
      },
      {
        title: 'Future growth is built in.',
        body: 'As Ameristar expands, it can do so unobstructed — LUCI has removed the logistical variables and A/V complications that would otherwise pile up over time.',
      },
    ],
    bottomLine:
      'By modernizing the A/V infrastructure and centralizing system control, LUCI helped Ameristar Council Bluffs prepare for its next phase of growth, preserving operational reliability, improving efficiency, and reducing long-term infrastructure costs.',
  },
  cta: {
    body: "Curious what this looks like for your property? Let's talk.",
    aboutLabel: 'About LUCI',
    aboutStatement:
      'LUCI Systems orchestrates every layer of technology running your property — A/V, signage, building, and operational infrastructure — from a single interface your team controls from anywhere. Rather than adding layers to your stack, LUCI reduces the variables, hardware, and interfaces your team has to manage. When onsite experience and operational continuity are non-negotiable, LUCI delivers coordinated, real-time execution, end to end.',
  },
} as const;
