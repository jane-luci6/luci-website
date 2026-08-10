import type { IndustrySlug } from './industries';

export interface IndustryChallenge {
  head: string;
  body: string;
  image: string;
  imageAlt?: string;
  imagePosition?: string;
  featured?: boolean;
}

export interface IndustrySolution {
  index: string;
  problem: string;
  headline: string;
  answer: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}

export interface IndustryAutomation {
  index: string;
  title: string;
  trigger: string;
  detail: string;
  image?: string;
  imageAlt?: string;
}

export interface IndustryDetail {
  heroVideo?: string;
  heroPoster?: string;
  heroImage?: string;
  thesis: {
    lockupName: string;
    lockupRole: string;
    deck: string;
  };
  challengesLockup: {
    lockupName: string;
    lockupRole?: string;
  };
  floorplanLockup?: {
    lockupName: string;
    lockupRole?: string;
    deck?: string;
  };
  challenges: IndustryChallenge[];
  solutionsLockup: {
    lockupName: string;
    lockupRole: string;
  };
  solutions: IndustrySolution[];
  automationLockup: {
    lockupName: string;
    lockupRole: string;
  };
  automations: IndustryAutomation[];
  tickerLocations?: string[];
  floorplan?: {
    image: string;
    imageAlt: string;
    imageWidth?: number;
    imageHeight?: number;
    imageWidthPct?: number;
    ariaLabel?: string;
    zones: {
      label: string;
      desc: string;
      plate: { side: 'left' | 'right'; left?: string; right?: string; top: string };
      delay: number;
      lines: { x1: number; y1: number; x2: number; y2: number }[];
    }[];
  };
  ctaTitle: string;
  chapters: { id: string; label: string }[];
}

export const industryDetails: Partial<Record<IndustrySlug, IndustryDetail>> = {
  'casinos-gaming': {
    heroVideo: '/videos/luci-led-sportsbook.mp4?v=2',
    heroPoster: '/images/industries/casino/hero-sportsbook-poster.jpg?v=2',
    thesis: {
      lockupName: 'Casinos & Gaming',
      lockupRole: 'One platform for the whole floor',
      deck:
        'Casinos are one of the most complex A/V environments in the world. They run 24/7/365 with zero tolerance for downtime. LUCI orchestrates all of it as one coordinated environment, the connective tissue of your experience-and-loyalty business.',
    },
    challengesLockup: {
      lockupName: 'Why casino floors <em>get complicated</em>',
    },
    challenges: [
      {
        head: 'Racks and racks of proprietary gear.',
        body:
          'Every new project brings another vendor, another box, another protocol — until one property runs four or five systems that don\u2019t talk to each other.',
        image: '/images/industries/casino/challenge-messy-racks.jpg?v=1',
        imageAlt: 'Four casino AV racks packed with proprietary hardware and tangled cabling',
        imagePosition: 'center 45%',
      },
      {
        head: 'Nobody owns the whole outcome.',
        body:
          'Signage runs through one vendor, gaming displays through another, sound through a third — so when something breaks, everyone points at someone else.',
        image: '/images/industries/casino/challenge-no-owner.jpg?v=3',
        imageAlt: 'Casino operations staff gathered around a display issue with no clear owner',
        imagePosition: 'center 40%',
      },
      {
        head: 'When someone leaves, they take their technical knowledge with them.',
        body:
          'Custom programming lives in one contractor\u2019s head. When they move on, so does the ability to change anything without a service call \u2014 and the people left to run it aren\u2019t programmers.',
        image: '/images/industries/casino/challenge-integrator-leaves.jpg?v=2',
        imageAlt: 'AV integrator walking away from a casino equipment room while staff look on',
        imagePosition: 'center 48%',
      },
      {
        head: 'Every property reinvents the wheel.',
        body:
          'Each property runs its own stack, presets, and vendor list \u2014 so the brand looks different on every floor and nobody can see all of it at once. Add a room, a wing, or a property and it\u2019s another rip-and-replace.',
      },
      {
        head: 'Technical issues disrupt the guest experience.',
        body:
          'A dark screen, a dead zone, a frozen board \u2014 fragmented systems don\u2019t surface it until a guest flags it. The floor finds out from the guest, not the system, and by then the experience is already broken.',
      },
    ],
    solutionsLockup: {
      lockupName: 'What LUCI <em>changes</em>',
      lockupRole: '',
    },
    solutions: [
      {
        index: '01',
        problem: 'Racks and racks of proprietary gear.',
        headline: 'One head end replaces racks of hardware.',
        answer:
          'Consolidate on standard IP — a quarter-rack of LUCI hardware instead of single-purpose boxes stacked floor to ceiling.',
        image: '/images/industries/casino/solution-clean-rack.jpg?v=7',
        imageAlt: 'One populated LUCI head-end rack beside a row of empty server cabinets in a modest equipment room',
        imagePosition: 'center 50%',
      },
      {
        index: '02',
        problem: 'Nobody owns the whole outcome.',
        headline: 'One partner owns diagnosis to resolution.',
        answer:
          'When a screen goes dark at peak, there is no vendor chain to trace. LUCI owns the whole outcome end to end.',
        image: '/images/industries/casino/solution-one-owner.jpg?v=3',
        imageAlt: 'LUCI field engineer deep in diagnosis inside a back-of-house equipment rack, single work-light',
        imagePosition: 'center 38%',
      },
      {
        index: '03',
        problem: 'When someone leaves, they take their technical knowledge with them.',
        headline: 'Even non-technical users can navigate the platform with ease',
        answer:
          'Schedules and permissions live in one interface any non-technical operator can run \u2014 built and edited in-house, no programming, no specialist on call. The team you already have runs it.',
        image: '/images/industries/casino/solution-self-service.jpg?v=2',
        imageAlt: 'Casino operations team collaborating on a tablet in the hallway without outside help',
        imagePosition: 'center 48%',
      },
      {
        index: '04',
        problem: 'Every property reinvents the wheel.',
        headline: 'One platform, one standard, across every property.',
        answer:
          'A single unified platform you grow with \u2014 add a room, a wing, or a property without a rip-and-replace, and run every property to one standard.',
      },
      {
        index: '05',
        problem: 'Technical issues disrupt the guest experience.',
        headline: 'Fix it before the guest notices.',
        answer:
          'LUCI surfaces performance issues across the estate the moment they happen \u2014 so the team can fix them before they reach a guest, not after.',
      },
    ],
    automationLockup: {
      lockupName: 'What you can <em>do with LUCI</em>',
      lockupRole: 'Set it once — the floor runs itself',
    },
    automations: [
      {
        index: '01',
        title: 'Morning Reset',
        trigger: 'Every morning, automatically.',
        image: '/images/industries/casino/capability-morning-reset.png?v=3',
        imageAlt: 'Empty casino gaming floor at dawn, every screen and ribbon board on a clean coordinated baseline, a single staffer walking the far aisle',
        detail:
          'One scheduled preset returns every screen and zone to its intended state before doors open — so the GM\u2019s walkthrough never starts with Judge Judy.',
      },
      {
        index: '02',
        title: 'Jackpot Celebration',
        trigger: 'The moment a jackpot hits.',
        image: '/images/industries/casino/capability-jackpot-celebration.png?v=2',
        imageAlt: 'A guest celebrating a slot jackpot win as the surrounding zone lights up in a coordinated gold celebration',
        detail:
          'A coordinated preset fires in that zone — lighting pulses, audio swells, nearby screens celebrate — then reverts on its own, calibrated per zone.',
      },
      {
        index: '03',
        title: 'Property Mode Switching',
        trigger: 'Weekday floor. Fight night. Holiday.',
        image: '/images/industries/casino/capability-property-mode-switching.png?v=1',
        imageAlt: 'A casino sportsbook floor switching into fight-night event mode, crowd gathering in front of a massive LED wall',
        detail:
          'Every mode your property runs becomes one full configuration of audio, screens, and lighting — switch the whole floor in a few taps.',
      },
      {
        index: '04',
        title: 'Energy That Matches the Room',
        trigger: 'Quiet morning. Peak Saturday night.',
        image: '/images/industries/casino/capability-energy-matches-room.png?v=1',
        imageAlt: 'A packed casino bar at peak Saturday night, overhead lighting and screens matched to the crowd energy',
        detail:
          'An audio schedule moves the way your floor does, each zone on its own curve, with transitions handled automatically.',
      },
      {
        index: '05',
        title: 'Revert-After-Timer',
        trigger: 'A temporary takeover.',
        image: '/images/industries/casino/capability-revert-after-timer.png?v=2',
        imageAlt: 'Guests pausing at a casino bar as the zone screens take over with a temporary promotional drawing moment',
        detail:
          'Trigger a preset for a drawing or announcement, set it to revert after a set time, and the floor snaps back to baseline automatically.',
      },
    ],
    tickerLocations: [
      'Ribbon Boards',
      'Gaming Floor',
      'Sportsbook',
      'Poker Room',
      'VIP Lounges',
      'Lobby',
      'Ballrooms',
      'Nightclub',
      'Restaurants & Bars',
      'Meeting Rooms',
      'Pre-Function',
      'Conference Center',
      'Exhibit Hall',
      'Retail Shops',
      'Pool Area',
      'Spa & Fitness',
      'Parking',
    ],
    floorplanLockup: {
      lockupName: 'Create purposeful moments that <em>drive spend</em>',
      lockupRole: 'The business beyond the floor',
      deck:
        'Gaming isn\u2019t the whole business anymore — non-gaming amenities drive the revenue, and your multimedia is what moves guests toward them. Set the tone at arrival, drive the floor, and celebrate the jackpot the instant it hits.',
    },
    floorplan: {
      image: '/images/industries/casino/casino-floorplan.png?v=2',
      imageAlt:
        'Architectural floorplan of a resort and casino: casino floor, ballroom, pool, restaurants and bars, theater, hotel lobby and parking.',
      imageWidth: 790,
      imageHeight: 1024,
      imageWidthPct: 65.83,
      ariaLabel: 'Casino zones LUCI orchestrates',
      zones: [
        {
          label: 'Set the tone on arrival',
          desc: 'Every screen, speaker, and light at the door sets the tone for the visit.',
          plate: { side: 'right', right: '1%', top: '29%' },
          delay: 0,
          lines: [{ x1: 79, y1: 29, x2: 72, y2: 36 }],
        },
        {
          label: 'Drive energy on the floor',
          desc: 'The gaming floor should feel like something — energy, momentum, the right game on the right screen.',
          plate: { side: 'right', right: '1%', top: '62.5%' },
          delay: 3.5,
          lines: [{ x1: 79, y1: 62.5, x2: 63.75, y2: 54.2 }],
        },
        {
          label: 'Move guests toward amenities',
          desc: 'Dining, entertainment, the pool — the spaces that now pay the bills, on cue.',
          plate: { side: 'left', left: '1%', top: '52%' },
          delay: 7,
          lines: [
            { x1: 21, y1: 52, x2: 28.3, y2: 17.6 },
            { x1: 21, y1: 52, x2: 29.2, y2: 39.1 },
            { x1: 21, y1: 52, x2: 29.2, y2: 67.4 },
          ],
        },
        {
          label: 'Extend loyalty across every space',
          desc: 'The right moment, in the right place, at the right time — everywhere.',
          plate: { side: 'left', left: '1%', top: '14%' },
          delay: 10.5,
          lines: [
            { x1: 21, y1: 14, x2: 50.4, y2: 14.6 },
            { x1: 21, y1: 14, x2: 63.75, y2: 52.7 },
          ],
        },
      ],
    },
    ctaTitle: 'See LUCI on <em>your floor</em>.',
    chapters: [
      { id: 'industry-thesis', label: 'Overview' },
      { id: 'industry-floorplan', label: 'The floor' },
      { id: 'industry-before-after', label: 'Before & after' },
      { id: 'industry-automation', label: 'Capabilities' },
      { id: 'industry-cta', label: 'Next step' },
    ],
  },
  'hotels-resorts': {
    heroVideo: '/videos/luci-hotel-lobby.mp4?v=12',
    heroPoster: '/images/industries/hotel/hero-lobby-poster.jpg?v=12',
    heroImage: '/images/industries/hotels-resorts.jpg?v=1',
    thesis: {
      lockupName: 'Hotels & Resorts',
      lockupRole: 'One seamless stay, end to end',
      deck:
        'Hotels no longer sell rooms \u2014 they sell the stay. The experience is the product, and a growing share of the revenue lives in F&B, spa, wellness, and events. LUCI orchestrates every screen, speaker, and light across the whole property as one coordinated environment, so the stay feels as seamless and on-brand as you promised.',
    },
    challengesLockup: {
      lockupName: 'Why hotel A/V <em>gets complicated</em>',
    },
    challenges: [
      {
        head: 'Every hotel team runs a separate technology stack.',
        body:
          'The lobby, the ballroom, the restaurants, and the pool each came with their own vendor and their own protocol, until one hotel team is running a dozen separate technology stacks that don’t talk to each other.',
      },
      {
        head: 'A stale screen in a premium lobby causes brand damage.',
        body:
          'Dozens of screens across the property need coordinated, scheduled, rule-based content management, and the properties that skip it end up with last month’s promotions or error messages in the lobby.',
      },
      {
        head: 'Brand standards drift across hotel and resort spaces.',
        body:
          'Corporate sets the playbook — welcome loops, music beds, signage templates — but when each area runs its own system, the lobby, the restaurant, and the ballroom end up looking like three different brands inside one property.',
      },
      {
        head: 'Software and hardware has a sprawling footprint across the property.',
        body:
          'A resort spans multiple buildings, outdoor spaces, pools, and event floors — each with its own conditions — and it all has to feel like one property while a lean team runs it.',
      },
      {
        head: 'Static screens can’t respond to an upsell opportunity.',
        body:
          'Growth is in F&B, spa, wellness, and events, driven by in-the-moment, contextual promotion — and disconnected, manually-updated screens can’t surface the right offer at the right time.',
      },
    ],
    solutionsLockup: {
      lockupName: 'What LUCI <em>changes</em>',
      lockupRole: '',
    },
    solutions: [
      {
        index: '01',
        problem: 'Every hotel team runs a separate technology stack.',
        headline: 'Every team works together through a unified platform.',
        answer:
          'LUCI puts every display, audio zone, and light across the whole property behind one interface, so the team works together through a unified platform instead of a dozen disconnected systems.',
      },
      {
        index: '02',
        problem: 'A stale screen in a premium lobby causes brand damage.',
        headline: 'Your team controls every screen, keeping everything on-brand and in sync.',
        answer:
          'LUCI puts scheduled, rule-based content control across every screen in one interface, so your team controls every screen and keeps every touchpoint on-brand and in sync without adding a full-time content coordinator.',
      },
      {
        index: '03',
        problem: 'Brand standards drift across hotel and resort spaces.',
        headline: 'Your team stays on top of every multimedia source, 24/7.',
        answer:
          'LUCI holds one standard across every space from one source, so your team stays on top of every multimedia source across the property, around the clock.',
      },
      {
        index: '04',
        problem: 'Software and hardware has a sprawling footprint across the property.',
        headline: 'You have one interface and one rack of hardware that runs the whole place.',
        answer:
          'LUCI brings what ran on 4+ systems, 5+ racks, and 100+ devices into one interface and one rack, so you have one interface and one rack of hardware that runs the whole place — indoor and out, every building.',
      },
      {
        index: '05',
        problem: 'Static screens can’t respond to an upsell opportunity.',
        headline: 'You provide the right offer, in the right space, at the right moment.',
        answer:
          'LUCI programs and triggers the right content by space, time, and guest context, so you can promote the spa at dusk and breakfast at dawn and surface the right upsell where it matters.',
      },
      {
        index: '06',
        problem: 'Disorientation hits the moment guests enter the parking garage.',
        headline: 'Media orients them from arrival to their room.',
        answer:
          'LUCI drives wayfinding content from the parking garage through the lobby to the guest floor, so media orients guests the moment they arrive and carries them to their room without a wrong turn.',
      },
    ],
    automationLockup: {
      lockupName: 'What you can <em>do with LUCI</em>',
      lockupRole: 'Set it once — the property runs itself',
    },
    automations: [
      {
        index: '01',
        title: 'VIP Arrival Mode',
        trigger: 'The moment a flagged guest checks in.',
        image: '/images/industries/hotel/capability-vip-arrival.png?v=1',
        imageAlt: 'A hotel host welcoming a guest into a warm luxury lobby, elevator bank glowing ahead',
        detail:
          'Lobby signage, elevator screens, and welcome audio shift to the arrival preset — then revert when the window closes.',
      },
      {
        index: '02',
        title: 'Pool & Amenity Schedules',
        trigger: 'Quiet morning. Peak afternoon.',
        image: '/images/industries/hotel/capability-pool-amenity.png?v=1',
        imageAlt: 'A luxury resort pool deck at golden hour, cabanas and an outdoor LED screen showing ambient content',
        detail:
          'Outdoor and amenity zones follow their own curves — music, messaging, and display brightness move automatically through the day.',
      },
      {
        index: '03',
        title: 'Weather Alert Broadcast',
        trigger: 'The moment a warning is issued.',
        image: '/images/industries/hotel/capability-weather-alert.png?v=1',
        imageAlt: 'A resort pool deck as a storm approaches, an outdoor screen broadcasting a weather alert, guests heading for shelter',
        detail:
          'Broadcast weather warnings, pool closures, and lightning alerts across every screen, speaker, and zone at once — then auto-revert when the all-clear hits.',
      },
      {
        index: '04',
        title: 'Wayfinding Sync on Room Change',
        trigger: 'When a room or location changes.',
        image: '/images/industries/hotel/capability-wayfinding-sync.png?v=1',
        imageAlt: 'A guest glancing at a backlit wayfinding sign showing room floorplans and arrows in a hotel conference corridor',
        detail:
          'Update every wayfinding screen across the property the moment an event moves rooms or a session relocates, so guests never walk up to the wrong door.',
      },
      {
        index: '05',
        title: 'Immersive Experience Mode',
        trigger: 'A themed evening across the property.',
        image: '/images/industries/hotel/capability-immersive-experience.png?v=1',
        imageAlt: 'A couple at a candlelit terrace at dusk, a video wall mirroring the sunset across the resort',
        detail:
          'Coordinate audio, lighting, and video across the lobby, restaurants, and pool into one immersive, themed experience that drives guest spend.',
      },
    ],
    tickerLocations: [
      'Hotel Lobby',
      'Arrival Court',
      'Guest Elevators',
      'Corridor Signage',
      'Wayfinding',
      'Restaurants & Bars',
      'Pool Deck',
      'Spa & Fitness',
      'Ballroom',
      'Meeting Rooms',
      'Retail',
      'Outdoor Audio',
      'Background Music',
    ],
    floorplanLockup: {
      lockupName: 'Your entire <em>property</em> at your fingertips',
      lockupRole: 'Every touchpoint, one brand',
      deck:
        'The guest journey is a chain of touchpoints \u2014 arrival, lobby, restaurants, spa, pool, the event floor, the grounds \u2014 and at each one, screens, audio, and lighting shape the impression and carry the message. LUCI orchestrates them all as one, so the right moment lands in the right space at the right time.',
    },
    floorplan: {
      image: '/images/industries/hotel/floorplan.png?v=1',
      imageAlt:
        'Architectural floorplan of a hotel and resort podium: arrival court, lobby, retail, restaurants and bars, pool deck, spa and fitness, guest tower core, ballroom, meeting rooms, service and back of house, loading, and parking.',
      imageWidth: 1024,
      imageHeight: 768,
      imageWidthPct: 78,
      ariaLabel: 'Hotel and resort zones LUCI orchestrates',
      zones: [
        {
          label: 'Set the tone on arrival',
          desc: 'Welcome and orient the guest with signage, wayfinding, and music.',
          plate: { side: 'right', right: '-4%', top: '80%' },
          delay: 0,
          lines: [{ x1: 84, y1: 80, x2: 50, y2: 87 }],
        },
        {
          label: 'Move guests toward amenities',
          desc: 'Promote the spa at dusk and breakfast at dawn \u2014 the right offer at the right moment.',
          plate: { side: 'left', left: '-4%', top: '74%' },
          delay: 3.5,
          lines: [{ x1: 16, y1: 74, x2: 25, y2: 48 }],
        },
        {
          label: 'Switch the event floor in a few taps',
          desc: 'Wedding, banquet, and corporate room A/V can combine or split in a matter of minutes.',
          plate: { side: 'right', right: '-4%', top: '30%' },
          delay: 7,
          lines: [{ x1: 84, y1: 30, x2: 73, y2: 18 }],
        },
        {
          label: 'Hold one brand across the property',
          desc: 'Every media interaction reinforces your marketing messages without drift.',
          plate: { side: 'left', left: '-4%', top: '22%' },
          delay: 10.5,
          lines: [{ x1: 16, y1: 22, x2: 50, y2: 26 }],
        },
      ],
    },
    ctaTitle: 'See LUCI on <em>your property</em>.',
    chapters: [
      { id: 'industry-thesis', label: 'Overview' },
      { id: 'industry-floorplan', label: 'The property' },
      { id: 'industry-before-after', label: 'Before & after' },
      { id: 'industry-automation', label: 'Capabilities' },
      { id: 'industry-cta', label: 'Next step' },
    ],
  },
  'sports-venues': {
    heroVideo: '/videos/luci-sports-arena.mp4?v=4',
    heroPoster: '/images/industries/sports-venues/hero-arena-poster.jpg?v=4',
    heroImage: '/images/industries/sports-venues.jpg?v=3',
    thesis: {
      lockupName: 'Sports & Venues',
      lockupRole: 'One platform for the whole building',
      deck:
        'Most venues don\u2019t have a hardware problem. They have a coordination problem. LED, audio, lighting, and the control room run as separate silos \u2014 held together by manual handoffs and good timing, and that works until it doesn\u2019t. LUCI orchestrates all of it as one coordinated environment, so the whole venue reacts to the moment, live.',
    },
    challengesLockup: {
      lockupName: 'What venues actually <em>deal with</em>',
    },
    challenges: [
      {
        head: 'LED, audio, lighting, and the control room run as separate silos.',
        body:
          'Each works in isolation. Making them act as one falls to manual handoffs and good timing \u2014 and the unspoken second half of that sentence is what keeps operators up at night.',
      },
      {
        head: 'At home they get 4K, instant replay, and real-time stats.',
        body:
          'The at-home product sets fan expectations the venue has to beat. More screens haven\u2019t closed the gap \u2014 coordinated, immersive moments are what does.',
      },
      {
        head: 'Sponsor moments are stuck behind manual production.',
        body:
          'Every screen is a revenue asset, and sponsors now pay for moments \u2014 the emotional peaks of the game. But with LED, audio, and signage on separate platforms, a coordinated activation across the whole bowl means a stack of manual handoffs that can\u2019t fire on cue. So the inventory sits untapped.',
      },
      {
        head: 'The A/V lives in a sprawl of racks and headends.',
        body:
          'Running the building takes a stack of separate systems, racks, and headends \u2014 each its own silo, its own maintenance contract, its own refresh clock. The hardware is insane, and the rack room keeps growing.',
      },
      {
        head: 'The people who ran it last season aren\u2019t here.',
        body:
          'Seasoned broadcast engineers are retiring faster than they\u2019re replaced, and venues now run on younger IT staff, students, and volunteers. Each platform demands its own deep specialist \u2014 and on game day there\u2019s no rehearsal and no do-over.',
      },
    ],
    solutionsLockup: {
      lockupName: 'What LUCI <em>changes</em>',
      lockupRole: '',
    },
    solutions: [
      {
        index: '01',
        problem: 'LED, audio, lighting, and the control room run as separate silos.',
        headline: 'One coordinated production environment.',
        answer:
          'LUCI orchestrates your video boards, sound, and lighting from one platform over the infrastructure you already have \u2014 so they act as one.',
      },
      {
        index: '02',
        problem: 'At home they get 4K, instant replay, and real-time stats.',
        headline: 'Deliver the one thing the couch can\u2019t.',
        answer:
          'Synchronized, immersive moments across the whole bowl in real time \u2014 the whole building reacting as one, live.',
      },
      {
        index: '03',
        problem: 'Sponsor moments are stuck behind manual production.',
        headline: 'Turn every screen into a sponsor moment.',
        answer:
          'LUCI fires one synchronized activation across every screen and zone from a single interface \u2014 on cue, on demand, no handoffs. The moments sponsors pay for, delivered every time.',
      },
      {
        index: '04',
        problem: 'The A/V lives in a sprawl of racks and headends.',
        headline: 'One rack. One interface.',
        answer:
          'LUCI brings what ran on 4+ systems, 5+ racks, and 100+ devices into one interface and one rack \u2014 the same production from a fraction of the footprint.',
      },
      {
        index: '05',
        problem: 'The people who ran it last season aren\u2019t here.',
        headline: 'One interface any trained operator can run.',
        answer:
          'LUCI gives every team one consistent interface over the whole production, so a trained operator \u2014 not a specialist per system \u2014 runs the show. The Systems, our embedded operation, stands behind it when there\u2019s no room to fail.',
      },
    ],
    automationLockup: {
      lockupName: 'What you can <em>do with LUCI</em>',
      lockupRole: 'Set it once — the building runs itself',
    },
    automations: [
      {
        index: '01',
        title: 'Pre-Game Sequence',
        trigger: 'On a timed countdown to tipoff.',
        image: '/images/industries/sports/capability-pre-game-sequence.png?v=1',
        imageAlt:
          'Empty arena bowl during the pre-game build-up, the centerhung board showing a player intro graphic as house lights dim to a dramatic show-lighting look',
        detail:
          'A scheduled chain of presets walks the building from house-up through player intros — lights, music, board takeovers, and signage move in sequence with no manual cues.',
      },
      {
        index: '02',
        title: 'Game-Day Mode Switching',
        trigger: 'Tipoff. Halftime. Final buzzer.',
        image: '/images/industries/sports/capability-game-day-mode-switching.png?v=2',
        imageAlt:
          'LED ribbon and dasher boards lit in coordinated game-day mode — score, stats, and team graphics firing together across the bowl as the crowd rises behind',
        detail:
          'Every game segment becomes one full configuration of boards, audio, lights, and signage — switch the whole building in a few taps, on cue.',
      },
      {
        index: '03',
        title: 'Control From Anywhere',
        trigger: 'On the floor, in the concourse — anywhere on property.',
        image: '/images/industries/sports/capability-control-from-anywhere.png?v=2',
        imageAlt:
          'An operator walking the arena concourse with a tablet showing the full venue floorplan and every A/V zone ready to control',
        detail:
          'The entire floorplan sits on a tablet — every zone, board, and audio path at your fingertips, so you can walk the floor to handle something in person and still run the whole building.',
      },
      {
        index: '04',
        title: 'Endpoint Status at a Glance',
        trigger: 'Every morning, before doors.',
        image: '/images/industries/sports/capability-pre-doors-health-check.png?v=3',
        imageAlt:
          'An AV technician on the empty concourse before doors, reviewing the live status of every display, player, and audio zone on a tablet',
        detail:
          'The status of every display, player, and audio zone is available at a glance — so the moment something stops working, it shows up on your dashboard, not on a fan’s phone.',
      },
      {
        index: '05',
        title: 'Revert-After-Timer',
        trigger: 'A temporary takeover.',
        image: '/images/industries/sports/capability-revert-after-timer.png?v=1',
        imageAlt:
          'Packed arena during a temporary 50/50 raffle drawing announcement on the centerhung board with a countdown timer, fans holding up phones',
        detail:
          'Trigger a sponsor takeover or in-game promotion, set it to revert after a set time, and the building snaps back to baseline automatically.',
      },
    ],
    floorplanLockup: {
      lockupName: 'Turn every moment into <em>revenue</em>',
      lockupRole: 'The business beyond the ticket',
      deck:
        'Every screen in the building is a revenue asset \u2014 but only if it moves with the moment. LUCI turns your boards, sound, and lighting into coordinated moments the whole bowl feels: bring the bowl to life on a big play, fire a sponsor activation on cue, and switch the whole building between events in a few taps.',
    },
    tickerLocations: [
      'Centerhung Board',
      'Ribbon Boards',
      'Dasher Boards',
      'Concourse Displays',
      'Suite Displays',
      'Club Lounge',
      'Bowl Audio',
      'Concourse Audio',
      'Show Lighting',
      'Control Room',
      'Press Box',
      'Broadcast Booth',
      'Locker Rooms',
      'VIP Lobby',
      'Main Concourse',
      'Loading Dock',
      'Back of House',
    ],
    floorplan: {
      image: '/images/industries/sports/floorplan.png?v=1',
      imageAlt:
        'Architectural floorplan of a multi-purpose sports arena configured for basketball: court and bowl, main concourse, suites and club, locker rooms, media area, VIP lobby, back of house, and loading dock.',
      imageWidth: 1024,
      imageHeight: 768,
      imageWidthPct: 78,
      ariaLabel: 'Sports venue zones LUCI orchestrates',
      zones: [
        {
          label: 'Bring the bowl to life',
          desc: 'A big play, and the whole bowl reacts as one \u2014 boards, audio, and lighting fire together in sync.',
          plate: { side: 'right', right: '-4%', top: '26%' },
          delay: 0,
          lines: [{ x1: 84, y1: 26, x2: 52, y2: 50 }],
        },
        {
          label: 'Turn every screen into a moment',
          desc: 'Sponsors don\u2019t want placements \u2014 they want moments. Turn every screen into a sponsor activation, on demand.',
          plate: { side: 'right', right: '-4%', top: '72%' },
          delay: 3.5,
          lines: [{ x1: 84, y1: 72, x2: 54, y2: 28 }],
        },
        {
          label: 'Reset the building between events',
          desc: 'Basketball tonight, a concert tomorrow \u2014 the building\u2019s full A/V environment switches for any event, in moments.',
          plate: { side: 'left', left: '-4%', top: '64%' },
          delay: 7,
          lines: [
            { x1: 16, y1: 64, x2: 50, y2: 48 },
            { x1: 16, y1: 64, x2: 50, y2: 24 },
            { x1: 16, y1: 64, x2: 52, y2: 76 },
          ],
        },
        {
          label: 'Run the whole show from one place',
          desc: 'Every display, zone, and light in the building can be controlled from one interface.',
          plate: { side: 'left', left: '-4%', top: '20%' },
          delay: 10.5,
          lines: [{ x1: 16, y1: 20, x2: 50, y2: 70 }],
        },
      ],
    },
    ctaTitle: 'See LUCI in <em>your building</em>.',
    chapters: [
      { id: 'industry-thesis', label: 'Overview' },
      { id: 'industry-floorplan', label: 'The building' },
      { id: 'industry-before-after', label: 'Before & after' },
      { id: 'industry-automation', label: 'Capabilities' },
      { id: 'industry-cta', label: 'Next step' },
    ],
  },
  'airports-transportation': {
    heroVideo: '/videos/luci-airport-terminal.mp4?v=3',
    heroPoster: '/images/industries/airports-transportation/hero-terminal-poster.jpg?v=3',
    heroImage: '/images/industries/airports-transportation.jpg?v=2',
    thesis: {
      lockupName: 'Airports & Transportation',
      lockupRole: 'One change. The whole terminal in sync',
      deck:
        'In most terminals the flight displays, paging, and wayfinding run as separate systems — so when a gate changes, the screens and the announcements don’t agree. LUCI orchestrates them as one, so a single update reaches every passenger touchpoint at once, around the clock.',
    },
    challengesLockup: {
      lockupName: 'What terminals and stations actually <em>deal with</em>',
    },
    challenges: [
      {
        head: 'Every screen on its own thread, and no single view.',
        body:
          'A terminal runs on a dozen back-ends — flight data, signage, paging, emergency. When one drifts, a board shows a gate that already closed, and nobody notices until a passenger’s at the wrong one.',
      },
      {
        head: 'The building never closes, and nothing can go dark.',
        body:
          'A terminal runs 24/7/365 — a 4 a.m. red-eye is as live as a 6 p.m. rush — and one dead board or silent speaker is what people remember. A failure at rush cascades into missed connections.',
      },
      {
        head: 'The PA isn’t background noise. It’s the fire alarm.',
        body:
          'In a terminal, the paging system is the voice-alarm system. It has to cut in over everything, take priority across hundreds of zones, and meet life-safety and accessibility code — or it doesn’t pass inspection.',
      },
      {
        head: 'Two announcements, talking over each other.',
        body:
          'A terminal is carved into zones — gates, hold areas, concourses — and the edges bleed. A page for one gate spills into the next hold area; without a lock-out, the operator just waits.',
      },
      {
        head: 'A sprawling footprint, upgraded in phases.',
        body:
          'A vast terminal runs on decades of gear, upgraded in phases aligned to budget and contract cycles rather than all at once — and a lean, understaffed team holds it together across a sprawling footprint.',
      },
    ],
    solutionsLockup: {
      lockupName: 'What LUCI <em>changes</em>',
      lockupRole: '',
    },
    solutions: [
      {
        index: '01',
        problem: 'Every screen on its own thread, and no single view.',
        headline: 'One interface for every board, screen, and speaker.',
        answer:
          'LUCI brings flight data, signage, paging, and emergency messaging behind one interface, so a drifted board shows up before a passenger is at the wrong gate.',
      },
      {
        index: '02',
        problem: 'The building never closes, and nothing can go dark.',
        headline: 'Catch failures before the terminal notices.',
        answer:
          'An automated health check exercises every display, player, and speaker — a dead board shows up on the dashboard, not on a passenger’s phone — backed by an embedded team.',
      },
      {
        index: '03',
        problem: 'The PA isn’t background noise. It’s the fire alarm.',
        headline: 'Paging and emergency on one layer, built to pass.',
        answer:
          'LUCI brings paging and voice-alarm behind one interface that ties straight into the fire alarm — taking priority across hundreds of zones — and meets life-safety code from the start.',
      },
      {
        index: '04',
        problem: 'Two announcements, talking over each other.',
        headline: 'The right message to the right zone, every time.',
        answer:
          'Manage zones, lock-outs, and priorities from one interface — a gate-change page hits its own zone, no collision with the concourse next door, no waiting on the adjacent page.',
      },
      {
        index: '05',
        problem: 'A sprawling footprint, upgraded in phases.',
        headline: 'One interface and one rack that runs the whole terminal.',
        answer:
          'LUCI brings what ran on 4+ systems, 5+ racks, and 100+ devices into one interface and one rack, so you have one interface and one rack that runs the whole terminal — and it improves on a predictable annual line item.',
      },
    ],
    automationLockup: {
      lockupName: 'What you can <em>do with LUCI</em>',
      lockupRole: 'Set it once — the terminal runs itself',
    },
    automations: [
      {
        index: '01',
        title: 'Pre-Operations Health Check',
        trigger: 'Every morning, before the first departure.',
        detail:
          'An automated check exercises every display, player, speaker, and paging path — so a dead board or a silent speaker shows up on the dashboard, not on the concourse.',
      },
      {
        index: '02',
        title: 'Gate-Change Page',
        trigger: 'A gate change or boarding call.',
        detail:
          'One preset updates the gate screen, departure board, and wayfinding, fires the page to the right zone with a lock-out, and reverts when boarding closes.',
      },
      {
        index: '03',
        title: 'Operations Mode Switching',
        trigger: 'Normal. Irregular. Emergency.',
        detail:
          'Each operational state becomes one configuration of displays, paging, and wayfinding — switch the terminal between routine, irregular-operations, and emergency voice-alarm in a few taps, paging taking priority.',
      },
      {
        index: '04',
        title: 'Emergency Voice-Alarm Override',
        trigger: 'A fire or evacuation event.',
        detail:
          'An emergency preset seizes paging on fire-alarm input, mutes routine channels, and broadcasts the coded or live voice-alarm to the affected zones — prioritized, zoned, logged.',
      },
      {
        index: '05',
        title: 'Data-Sync Monitor',
        trigger: 'Continuous, in the background.',
        detail:
          'The system keeps every board, gate, and platform display in sync with the live data — and the moment one drifts, points it back before a passenger reads the wrong gate.',
      },
    ],
    tickerLocations: [
      'Departures Hall',
      'Arrivals Hall',
      'Concourse A',
      'Concourse B',
      'Concourse C',
      'Gate Screens',
      'Boarding Displays',
      'Wayfinding',
      'Paging & PA',
      'Voice-Alarm',
      'FIDS Displays',
      'Retail & Duty-Free',
      'Advertising',
      'Curbside',
      'Ground Transportation',
      'Hearing Loop',
      'Background Music',
    ],
    floorplanLockup: {
      lockupName: 'Your entire <em>terminal</em> at your fingertips',
      lockupRole: 'Every touchpoint, one message',
      deck:
        'In a terminal, information is everything — and your screens, speakers, and signage are how passengers get it. That makes multimedia the layer that guides the journey, drives revenue, and carries the messages that matter most.',
    },
    floorplan: {
      image: '/images/industries/airports-transportation/floorplan.png?v=1',
      imageAlt:
        'Architectural floorplan of an airport terminal: departures hall, arrivals hall, concourses A/B/C, airline lounges, administration, parking, hotel and conference center, departure curbside, and ground transportation.',
      imageWidth: 1024,
      imageHeight: 682,
      imageWidthPct: 78,
      ariaLabel: 'Airport terminal zones LUCI orchestrates',
      zones: [
        {
          label: 'Set the tone at arrival',
          desc: 'The first screens a passenger sees shape the whole journey — calm, oriented, on-brand from the curb.',
          plate: { side: 'right', right: '-4%', top: '80%' },
          delay: 0,
          lines: [{ x1: 84, y1: 80, x2: 50, y2: 62 }],
        },
        {
          label: 'Turn dwell time into revenue',
          desc: 'The time between security and boarding is your best commercial inventory — the right offer, at the right gate, at the right moment.',
          plate: { side: 'left', left: '-4%', top: '76%' },
          delay: 3.5,
          lines: [{ x1: 16, y1: 76, x2: 23, y2: 48 }],
        },
        {
          label: 'Give passengers the right info at the right time',
          desc: 'Keep wayfinding and gate information clear, current, and consistent.',
          plate: { side: 'right', right: '-4%', top: '30%' },
          delay: 7,
          lines: [{ x1: 84, y1: 30, x2: 50, y2: 56 }],
        },
        {
          label: 'Keep the whole terminal in sync',
          desc: 'One consistent message across every screen and speaker — so passengers always know what’s happening, especially when plans change.',
          plate: { side: 'left', left: '-4%', top: '24%' },
          delay: 10.5,
          lines: [{ x1: 16, y1: 24, x2: 50, y2: 45 }],
        },
      ],
    },
    ctaTitle: 'See LUCI in <em>your terminal or station</em>.',
    chapters: [
      { id: 'industry-thesis', label: 'Overview' },
      { id: 'industry-floorplan', label: 'The terminal' },
      { id: 'industry-before-after', label: 'Before & after' },
      { id: 'industry-automation', label: 'Capabilities' },
      { id: 'industry-cta', label: 'Next step' },
    ],
  },
  'conference-convention-centers': {
    heroVideo: '/videos/luci-convention-center.mp4?v=1',
    heroPoster: '/images/industries/conference-convention-centers/hero-main-stage-poster.jpg?v=1',
    heroImage: '/images/industries/conference-convention-centers.jpg?v=1',
    thesis: {
      lockupName: 'Conferences & Convention Centers',
      lockupRole: 'One platform for a building that reconfigures every few hours',
      deck:
        'A convention center is not running one show — it is running many, back to back and side by side, and the same hall becomes a different technical environment every few hours. LUCI puts every room — main stage, breakouts, divisible halls, and the hybrid broadcast — behind one interface your team runs with ease.',
    },
    challengesLockup: {
      lockupName: 'What convention centers actually <em>deal with</em>',
    },
    challenges: [
      {
        head: 'The reset is never the time the brochure promised.',
        body:
          'A teardown is not moving chairs — it is re-cabling, re-testing, and reconfiguring audio, displays, and control for the next format. Sales promises thirty minutes; the real flip runs long when crews reset complex layouts across rooms.',
        image: '/images/industries/conference-convention-centers/challenge-turnover.jpg?v=1',
        imageAlt: 'Convention hall mid-turnover between events with crew re-cabling displays and audio while the next event load-in waits',
        imagePosition: 'center 45%',
      },
      {
        head: 'Many rooms at once, none in sync.',
        body:
          'Juggling presentations, audio, and video in one room is hard enough; across breakouts, main stage, and overflow, every screen needs the right content and every speaker heard — or teams end up physically running between rooms.',
        image: '/images/industries/conference-convention-centers/challenge-multi-room.jpg?v=1',
        imageAlt: 'Convention center corridor with multiple breakout room doors and a technician checking a tablet while moving between rooms',
        imagePosition: 'center 42%',
      },
      {
        head: 'Air walls move, and the A/V does not follow.',
        body:
          'Rooms combine and divide through operable air walls, and the A/V has to follow the wall — one system serving either a combined presentation or two independent sessions. Most partitions leak audibly between rooms.',
        image: '/images/industries/conference-convention-centers/challenge-divisible-bleed.jpg?v=1',
        imageAlt: 'Operable air wall splitting a convention hall into two sessions with overhead loudspeakers at the partition where audio bleeds between rooms',
        imagePosition: 'center 50%',
      },
      {
        head: 'Every room is now a broadcast facility.',
        body:
          'Events are now live productions with a remote audience, and one failure plays to the whole room. Quality streaming needs real upload speed and redundancy most venues were never built for.',
        image: '/images/industries/conference-convention-centers/challenge-hybrid-broadcast.jpg?v=1',
        imageAlt: 'Convention general session stage with a camera, encoder, and streaming setup serving a remote hybrid audience',
        imagePosition: 'center 45%',
      },
      {
        head: 'Who touches the A/V is a minefield.',
        body:
          'Cameras, switchers, encoders, and streaming come from different vendors while the venue still owns network, power, and rigging. Get the boundaries wrong and load-in stalls while the teams sort out who runs what.',
        image: '/images/industries/conference-convention-centers/challenge-vendor-tension.jpg?v=1',
        imageAlt: 'Convention center load-in with outside vendor AV gear alongside in-house crew and a tense discussion over who controls what',
        imagePosition: 'center 48%',
      },
      {
        head: 'A session happens once — no second take.',
        body:
          'A faulty cable, a software glitch, or a presenter who changed a setting can undo a well-built system mid-session — so on-site support and backup gear are risk management, not a luxury.',
        image: '/images/industries/conference-convention-centers/challenge-reliability.jpg?v=1',
        imageAlt: 'Convention general session with a presenter at the lectern and a backup mic and playback rig staged at the front of house',
        imagePosition: 'center 50%',
      },
    ],
    solutionsLockup: {
      lockupName: 'What LUCI <em>changes</em>',
      lockupRole: '',
    },
    solutions: [
      {
        index: '01',
        problem: 'The reset is never the time the brochure promised.',
        headline: 'Room turnovers become saved configurations.',
        answer:
          'A new layout, a combine, a new event format — audio, displays, and control recall as one preset, edited in-house. The flip is the time you said it would be, not fifty minutes of re-cabling.',
        image: '/images/industries/conference-convention-centers/solution-turnover.jpg?v=1',
        imageAlt: 'Convention operations team recalling a room-turnover preset on a tablet as displays and audio reconfigure together',
        imagePosition: 'center 45%',
      },
      {
        index: '02',
        problem: 'Many rooms at once, none in sync.',
        headline: 'Every room runs from one interface.',
        answer:
          'Centralized control puts every breakout, main stage, and overflow on the same layer — one pane, consistent mic, screen, and presentation setups, and a schedule that keeps every room on time. No one physically running between rooms.',
        image: '/images/industries/conference-convention-centers/solution-multi-room.jpg?v=1',
        imageAlt: 'Unified LUCI operations dashboard showing every convention breakout and main-stage room in sync on one pane',
        imagePosition: 'center 50%',
      },
      {
        index: '03',
        problem: 'Air walls move, and the A/V does not follow.',
        headline: 'Air-wall splits switch in a few taps.',
        answer:
          'Divided and open modes become saved presets; DSP-tuned audio zones recalibrate for the partition, so two simultaneous sessions stay independent without cross-room bleed — and the A/V follows the wall, not the other way around.',
        image: '/images/industries/conference-convention-centers/solution-divisible-bleed.jpg?v=1',
        imageAlt: 'Convention operations team tapping a divisible-room preset on a tablet as an air wall splits audio zones cleanly',
        imagePosition: 'center 45%',
      },
      {
        index: '04',
        problem: 'Every room is now a broadcast facility.',
        headline: 'Hybrid runs like a broadcast facility, with redundancy.',
        answer:
          'Streaming, ISO recording, and the broadcast audio mix sit on the same layer as the room; redundant encoders, dual circuits, and bonded cellular are part of the build, so a single failure does not take the whole audience with it.',
        image: '/images/industries/conference-convention-centers/solution-hybrid-broadcast.jpg?v=1',
        imageAlt: 'LUCI broadcast and streaming management screen showing redundant encoders and ISO recording for a convention hybrid session',
        imagePosition: 'center 50%',
      },
      {
        index: '05',
        problem: 'Who touches the A/V is a minefield.',
        headline: 'One platform, one owner, end to end.',
        answer:
          'Define in writing which party provides which equipment — and LUCI owns the layer that ties them, so house labor and outside vendors stay in their lanes without a load-in standoff.',
        image: '/images/industries/conference-convention-centers/solution-vendor-tension.jpg?v=1',
        imageAlt: 'LUCI operations dashboard unifying in-house and outside-vendor convention AV gear behind one accountable layer',
        imagePosition: 'center 45%',
      },
      {
        index: '06',
        problem: 'A session happens once — no second take.',
        headline: 'On-site support and backup, built in.',
        answer:
          'An embedded team with backup mics, playback, and switching, and a system resilient to a presenter who changed a setting — so a session that happens once does not need a second take to fix it.',
        image: '/images/industries/conference-convention-centers/solution-reliability.jpg?v=1',
        imageAlt: 'LUCI embedded engineer with backup AV gear staged at the front of house of a convention general session',
        imagePosition: 'center 50%',
      },
    ],
    automationLockup: {
      lockupName: '<em>Automation</em> & presets',
      lockupRole: 'Set it once — the venue runs itself',
    },
    automations: [
      {
        index: '01',
        title: 'Morning Reset',
        trigger: 'Every morning, before doors.',
        detail:
          'A scheduled preset returns every hall\u2019s displays, audio, and wayfinding to baseline before the first session.',
      },
      {
        index: '02',
        title: 'Room Turnover',
        trigger: 'A new event format.',
        detail:
          'A new layout, combine, or divide recalls the right audio zones, displays, and control for the next event in a few taps.',
      },
      {
        index: '03',
        title: 'Divisible-Room Split',
        trigger: 'Air walls open or close.',
        detail:
          'Divided and open modes switch audio zones and DSP calibration together, so two sessions stay independent without bleed.',
      },
      {
        index: '04',
        title: 'Hybrid Pre-Stream Check',
        trigger: 'Before every streamed session.',
        detail:
          'An automated check exercises encoders, uplink, and ISO recording, and flags a failing path before the remote audience sees it.',
      },
      {
        index: '05',
        title: 'Revert-After-Timer',
        trigger: 'A temporary takeover.',
        detail:
          'Trigger a preset for an award cue or announcement, set it to revert after a set time, and the room snaps back to baseline automatically.',
      },
    ],
    ctaTitle: 'See LUCI in <em>your venue</em>.',
    chapters: [
      { id: 'industry-thesis', label: 'Overview' },
      { id: 'industry-challenges', label: 'Challenges' },
      { id: 'industry-solutions', label: 'The fix' },
      { id: 'industry-automation', label: 'Automation' },
      { id: 'industry-cta', label: 'Next step' },
    ],
  },
};

export function getIndustryDetail(slug: IndustrySlug) {
  return industryDetails[slug];
}
