/** Full Yaamava' Resort & Casino case study — web page (PDF forthcoming). */

export const yaamavaCaseStudyDetail = {
  heroLeadIn: 'Everything on the property',
  heroDisplay: 'One interface',
  property: "Yaamava' Resort & Casino",
  propertyMeta: 'Highland, California · San Manuel Band of Mission Indians',
  facts: [
    { label: 'Property', value: "Yaamava' Resort & Casino" },
    { label: 'Location', value: 'Highland, California' },
    { label: 'Operator', value: 'San Manuel Band of Mission Indians' },
  ],
  inventory: [
    { value: '290,000', label: 'sq ft of gaming floor under management' },
    { value: '1,000+', label: 'endpoints on the platform' },
    { value: '34', label: 'LED walls across seven venues' },
  ],
  summary: [
    {
      label: 'The challenge',
      text: 'Audio, video, and signage each ran on their own hardware, their own software, and their own interfaces.',
    },
    {
      label: 'The approach',
      text: 'Run audio and video over the property network, centralize control in LUCI, and build 34 LED walls looped into the same interface.',
    },
    {
      label: 'The result',
      text: 'Every audio zone, display, and network device on the property — including 34 LED walls across seven venues — managed from a single interface.',
    },
  ],
  challenge: {
    titleBefore: 'Technology that grew ',
    titleAccent: 'one piece at a time',
    paragraphs: [
      "Yaamava' Resort & Casino sits in Highland, California, owned and operated by the San Manuel Band of Mission Indians. What opened in 1986 has grown into one of the premier casino resort destinations in the country.",
      'The technology underneath it grew the same way — one piece at a time. Broadcast content, signage, audio and paging, data, displays, and everything beneath them each arrived with its own hardware, software, interface, and operating model.',
      "Then Yaamava' began remodeling and scaling the property, including 34 LED walls across seven venues. Without a different architecture, that expansion would have compounded the same problem: another control environment, more hardware, and more workflows for the team to manage.",
      'As the property improved its guest experience, its technology was becoming more fragmented.',
    ],
  },
  floorFigure: {
    src: '/images/case-studies/yaamava/sportsbook-led-web.jpg',
    alt: "The curved LED ribbon wrapping the 909 Sportsbar at Yaamava', carrying live games and odds above the bar",
    caption: 'The 909 Sportsbar — every screen in the room on the same platform.',
  },
  approach: {
    titleBefore: 'Bringing every layer ',
    titleAccent: 'onto one platform',
    paragraphs: [
      "LUCI designed and built 34 LED walls across seven remodeled venues while Yaamava' was scaling the property. Each wall was looped into LUCI as it came online, so the expansion did not create another control environment.",
      "At the same time, LUCI distributed the property's audio and video over the network and brought its existing endpoints into the same interface. The network-based architecture reduced the dedicated processors and other hardware the property had to install and maintain.",
      'The property grew while its operating model got smaller: fewer systems, less hardware, and one place to run every endpoint.',
    ],
    scopeLabel: 'What LUCI did',
    scope: [
      'Designed and built 34 LED walls across seven venues',
      'Distributed property audio and video over the network',
      'Mapped the new walls and existing endpoints into one LUCI interface',
    ],
  },
  consolidation: [
    {
      problem: 'Five technology silos',
      solution: 'one platform',
      text: 'Broadcast, signage, data, audio and paging, and displays now operate through LUCI.',
    },
    {
      problem: '34 new LED walls',
      solution: 'same interface',
      text: 'Walls across seven venues joined the property’s existing A/V and signage control instead of creating another control environment.',
    },
    {
      problem: 'Dedicated hardware',
      solution: 'network distribution',
      text: 'Audio and video run over the property network, reducing the processors, players, and rack equipment to power, cool, and maintain.',
    },
    {
      problem: 'Coordinated interfaces',
      solution: 'one operating view',
      text: 'Staff select content or channels, choose the destinations, and send them across the floor, signage, and video walls from LUCI.',
    },
  ],
  quote: {
    text: "What I love about LUCI's approach is that they really focus on how to make the operations easier for the business, and they do it in a really cost-effective manner. They look for ways to implement solutions that are easy to administer, have a reasonable cost point, and are easy to use.",
    name: 'Toni Pepper',
    role: 'CITO, San Manuel Band of Mission Indians',
  },
  results: {
    titleBefore: "What Yaamava' ",
    titleAccent: 'runs now',
    bullets: [
      'One interface for every audio zone, display, and network device',
      'Content and channels coordinated across the property from one interface',
      '34 LED walls across seven venues, running on the same platform as everything else',
      'An A/V and IT team spending its time on priorities instead of upkeep',
    ],
    body: [
      'A content or channel change that once crossed tools and teams now takes one person: open LUCI, choose the source, select the screens, and send it to the gaming floor, signage, and video walls at once.',
      'There is no second login for signage, no separate console for the 34 LED walls, no third tool for paging.',
    ],
  },
  ledFigure: {
    pair: [
      {
        src: '/images/case-studies/yaamava/gaming-floor-led-web.jpg',
        alt: "A wall-sized LED display on the Yaamava' gaming floor, behind a bank of machines",
      },
      {
        src: '/images/case-studies/yaamava/event-entry-led-web.jpg',
        alt: "LED-clad columns and soffit at the Yaamava' event center entrance",
      },
    ],
    caption:
      'LED LUCI designed and installed — the artwork on every wall changes from the same interface.',
  },
  ledger: {
    titleBefore: "Yaamava' on LUCI ",
    titleAccent: 'to date',
    stats: [
      { value: '420', label: 'Displays', icon: 'display' },
      { value: '34', label: 'LED walls', icon: 'led' },
      { value: '284', label: 'Audio zones', icon: 'audio' },
      { value: '92', label: 'DTV channels', icon: 'channel' },
      { value: '220', label: 'Digital signage endpoints', icon: 'signage' },
      { value: '14', label: 'Technologies orchestrated', icon: 'grid' },
    ],
    outcomeBefore: 'One ',
    outcomeAccent: 'LUCI',
    outcomeAfter: ' platform',
    dek: 'Every endpoint, every zone, every wall, every channel — one interface.',
  },
  whatsNext: {
    titleBefore: 'Built for ',
    titleAccent: 'the moves ahead',
    plans: [
      {
        title: 'One platform to build on.',
        body: 'As new spaces, screens, and zones come online, they join the system already running the resort — no second install, no parallel system to stand up. Thirty-four LED walls have already arrived that way.',
      },
      {
        title: 'Less to maintain, not more.',
        body: 'Consolidation removed hardware and interfaces rather than adding them. Every layer LUCI takes on is one fewer thing the team has to manage on its own.',
      },
      {
        title: 'Room to grow the experience.',
        body: 'With the property unified, a floor-wide moment is a configuration in LUCI — not a project that has to be rebuilt in every interface it touches.',
      },
    ],
    bottomLine:
      "By consolidating the property's technology onto one platform, LUCI gave Yaamava' a resort that operates as one — and a foundation it can keep building on.",
  },
  cta: {
    aboutLabel: 'About LUCI',
    aboutStatement:
      'LUCI Systems is the orchestration engine for enterprise multimedia — A/V, signage, building, and operational infrastructure — from a single interface your team controls from anywhere. LUCI reduces the variables, hardware, and interfaces your team has to manage. When onsite experience and operational continuity are non-negotiable, LUCI delivers coordinated, real-time execution, end to end.',
  },
} as const;
