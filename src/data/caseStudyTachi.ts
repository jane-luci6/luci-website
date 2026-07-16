/** Full Tachi Palace case study — web page + PDF download. */

export const tachiCaseStudyDetail = {
  pdfHref: '/downloads/LUCI-Case-Study-Tachi-Palace.pdf',
  pdfFilename: 'LUCI-Case-Study-Tachi-Palace.pdf',
  heroLeadin: 'One week to a',
  heroDisplay: 'foundation for growth',
  property: 'Tachi Palace Casino Resort',
  propertyMeta: 'Lemoore, California · Tachi Yokut Tribe',
  // Web-only highlight reel (not rendered in the PDF).
  reel: {
    src: '/videos/tachi-reel.mp4',
    poster: '/images/case-studies/tachi/tachi-reel-poster.jpg',
    caption: 'Watch: one week at Tachi Palace.',
  },
  facts: [
    { label: 'Property', value: 'Tachi Palace Casino Resort' },
    { label: 'Location', value: 'Lemoore, California' },
    { label: 'Completed', value: 'One week, install to handoff' },
  ],
  summary: [
    {
      label: 'The challenge',
      text: 'A massive bingo hall — a huge draw for locals — ready for an update, with eight wall bays that had never held LED and an immersive bingo room to bring to life.',
    },
    {
      label: 'The approach',
      text: 'Consolidation, done by hand in one week — eight LED walls hung and tuned, racks of legacy gear pulled and replaced with LUCI, and every audio zone wired for full control.',
    },
    {
      label: 'The result',
      text: 'The room came alive — eight LED walls live, immersive winner moments, and the whole room running from one LUCI interface.',
    },
  ],
  challenge: {
    title: 'Bring the bingo hall alive',
    paragraphs: [
      'Tachi Palace Casino Resort in Lemoore, California, has a massive bingo hall — a huge draw for locals. The property was ready for an update: eight wall bays that had never held LED, and an immersive bingo room.',
      'That meant bringing all eight LED walls and bingo and casino audio onto one easy-to-use LUCI interface, setting the stage for the rest of the resort to come onto the platform.',
    ],
  },
  approach: {
    title: 'A week of hands-on work',
    paragraphs: [
      'LUCI’s approach was consolidation — done by hand, on site, in one week.',
      'The team hung and aligned all eight LED walls, tiled and pixel-mapped each one, and fine-tuned them until every panel displayed picture-perfect. Then they wired the room through LUCI: pulling out racks of legacy gear, installing LUCI in its place, encoding and programming each box, and testing and tuning every audio zone for full control through LUCI.',
      'Before they left, they sat down with Tachi’s team and trained them to run the room from the LUCI interface — and LUCI stays on for ongoing support as the rest of the resort comes onto the platform.',
    ],
    scope: [
      'Hung, tiled, and fine-tuned eight LED walls',
      'Pulled legacy racks and installed LUCI',
      'Encoded and programmed every box on the LUCI network',
      'Tuned every audio zone for full control through LUCI',
    ],
  },
  quote: {
    text: 'Working with LUCI was smooth and easy, the team worked well together and with us completing the 8 LED Video Walls and all of the Casino Audio all in one week. Great Job Team!',
    role: 'AV Telecom Manager',
    org: 'Tachi Palace Casino Resort',
  },
  results: {
    title: 'What Tachi Palace runs now',
    bullets: [
      'Eight LED video walls, live and controlled from one interface',
      'Bingo winner presets that fire an immersive experience when someone wins',
      'Screens that can switch to different channels outside of bingo',
      'Every audio zone mapped in one place — no more guessing which player controls which zone',
    ],
  },
  whatsNext: {
    title: 'Built for the moves ahead',
    intro: 'The bingo hall is just the start.',
    plans: [
      {
        title: 'Run it from anywhere.',
        body: 'Bingo, audio, and every screen live in one LUCI interface the team can reach from any authorized device — an iPad on the floor, a laptop, a phone from home.',
      },
      {
        title: 'Racks of gear, gone.',
        body: 'LUCI consolidated the room’s hardware down to a simplified stack — less equipment to power, cool, and maintain.',
      },
      {
        title: 'Ready for the rest of the resort.',
        body: 'As other spaces come onto LUCI, they join the platform already running the bingo hall — no second install, no parallel system to stand up.',
      },
    ],
    bottomLine:
      'By bringing the bingo hall onto LUCI, Tachi Palace turned one room into a foundation the whole resort can grow onto.',
  },
  cta: {
    body: 'Curious what this looks like for your property? Let’s talk.',
    aboutLabel: 'About LUCI',
    aboutStatement:
      'LUCI Systems orchestrates every layer of technology running your property — A/V, signage, building, and operational infrastructure — from a single interface your team controls from anywhere. Rather than adding layers to your stack, LUCI reduces the variables, hardware, and interfaces your team has to manage. When onsite experience and operational continuity are non-negotiable, LUCI delivers coordinated, real-time execution, end to end.',
  },
} as const;
