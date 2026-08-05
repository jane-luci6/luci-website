/** Homepage section 2 — lead headline + labeled venue photo + Control·Automate·Execute */

export const homeIntroCopy = {
  headline:
    'One interface to control, automate, and execute the entire guest experience.',
  // Brochure-style headline: bold line with a key phrase in a gold accent span
  headlineLead: 'One interface to control, automate, and execute the ',
  headlineAccent: 'entire guest experience',
  headlineTail: '.',
  photoSrc: '/images/venue-guest-experience-casual.jpg?v=7',
  photoAlt:
    'Premium sportsbook lounge — lighting, a digital signage pillar running a steakhouse ad, an LED ribbon odds board, an LED video wall, and the bar, all controlled by LUCI from one interface',
  /**
   * Three steps annotate the photo. Each card sits in a people-free zone (corners) and
   * leader lines point to the element(s) it governs. Coordinates are % of the frame.
   *   - `align`   text alignment / which side the mint bar is on
   *   - `pos`     CSS inset for the card (left/right/top/bottom)
   *   - `origin`  where the leader lines leave the card
   *   - `targets` the elements the step points to (one line + dot each)
   *   - `room: true` draws the whole-room corner brackets instead of leader lines
   * The long-form `body` doubles as the stacked text on mobile.
   */
  steps: [
    {
      num: '01',
      verb: 'Control',
      body: 'Adjust lights, sound, screens, and signage — any zone, by hand or automatically.',
      align: 'left',
      pos: { left: '2.5%', top: '3%' },
      origin: { x: 22, y: 21 },
      targets: [
        { x: 11, y: 34 }, // bank of TV screens over the bar
        { x: 44, y: 6 },  // ceiling lights
        { x: 61, y: 10 }, // ceiling speakers (sound)
      ],
    },
    {
      num: '02',
      verb: 'Automate',
      body: 'Build scenes once — game time, happy hour, morning reset — and fire them on schedule or trigger.',
      align: 'right',
      pos: { right: '2.5%', top: '3.5%' },
      // origin sits at the left edge of the right-aligned card (~75% from left, ~13% from top)
      origin: { x: 74, y: 13 },
      targets: [
        { x: 39, y: 32 }, // digital signage pillar
        { x: 72, y: 36 }, // LED video wall
      ],
    },
    {
      num: '03',
      verb: 'Execute',
      body: 'The whole room delivers the moment, in sync — no staff scrambling.',
      align: 'left',
      pos: { left: '2.5%', bottom: '4%' },
      // origin sits at the card's right edge so the dotted room-leader appears
      // to emerge from the Execute box and run to the far corner bracket.
      origin: { x: 26, y: 88 },
      room: true,
    },
  ],
} as const;
