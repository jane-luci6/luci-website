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
        head: 'The one person who understood it leaves.',
        body:
          'Custom programming lives in one contractor\u2019s head. When they move on, so does the ability to change anything without a service call.',
        image: '/images/industries/casino/challenge-integrator-leaves.jpg?v=2',
        imageAlt: 'AV integrator walking away from a casino equipment room while staff look on',
        imagePosition: 'center 48%',
      },
      {
        head: 'The floor drifts overnight.',
        body:
          'A pit boss flips a TV to the ballgame before his shift ends. Game\u2019s over by eleven. Next morning the GM walks the floor — and Judge Judy is still on the screen. Every property has lived some version of this.',
        image: '/images/industries/casino/challenge-courtroom-tvs.jpg?v=2',
        imageAlt: 'Casino bar TVs showing mismatched content including a generic daytime courtroom show',
        imagePosition: 'center 38%',
        featured: true,
      },
      {
        head: 'Every event mode becomes a manual scramble.',
        body:
          'Fight night, holiday weekend, VIP gala — each one means juggling touch panels, remotes, audio zones, signage, and a run sheet. One missed step and the floor is wrong for the whole event.',
        image: '/images/industries/casino/challenge-event-mode-scramble.jpg?v=2',
        imageAlt: 'Casino AV desk with tablets, remotes, radios, and preview monitors for a special event',
        imagePosition: 'center 42%',
      },
      {
        head: 'Siloed workflows between AV, IT, Marketing, and Ops.',
        body:
          'Each team runs its own gear and its own schedule — so the sportsbook, the signage, and the pit move to three different beats, and nothing lands together.',
      },
      {
        head: "Can't scale to a new build or a new property.",
        body:
          'Every addition means another proprietary system, another integrator, another lead time — so the floor plan you opened with isn\u2019t the floor plan you can grow into.',
      },
      {
        head: 'Hard to manage across multiple properties.',
        body:
          'Each property runs its own stack, its own presets, its own vendor list — so the brand you promised looks different on every floor and nobody can see all of it at once.',
      },
      {
        head: 'High operational costs from fragmented systems.',
        body:
          'Redundant boxes, redundant vendors, redundant service calls — the floor costs more to run every year, and the experience doesn\u2019t get better.',
      },
      {
        head: 'No visibility into performance or guest engagement.',
        body:
          'When a screen goes dark or a zone goes quiet, you find out from a guest — not from the system. There\u2019s no data, just anecdotes.',
      },
      {
        head: 'Vulnerable to security threats and downtime.',
        body:
          'Fragmented systems on aging hardware are a target and a single point of failure — and a casino can\u2019t afford either.',
      },
      {
        head: 'Inconsistent brand experience across touchpoints.',
        body:
          'The lobby, the floor, the bar, the ballroom — each looks like a different property because each is run by a different system. The brand doesn\u2019t carry.',
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
        problem: 'The one person who understood it leaves.',
        headline: 'Your team runs presets without a programming call.',
        answer:
          'Schedules and permissions live in the platform — built and edited in-house, not waiting on the one integrator who still has the file.',
        image: '/images/industries/casino/solution-self-service.jpg?v=2',
        imageAlt: 'Casino operations team collaborating on a tablet in the hallway without outside help',
        imagePosition: 'center 48%',
      },
      {
        index: '04',
        problem: 'The floor drifts overnight.',
        headline: 'Every screen resets before doors open.',
        answer:
          'Schedule a morning baseline for every zone. Judge Judy does not make it to the executive walkthrough.',
        image: '/images/industries/casino/solution-coordinated-floor.jpg?v=2',
        imageAlt: 'Pristine casino sportsbook with every display showing coordinated on-brand content',
        imagePosition: 'center 38%',
      },
      {
        index: '05',
        problem: 'Every event mode becomes a manual scramble.',
        headline: 'Property modes become one-tap presets.',
        answer:
          'Fight night, holiday gala, weekday floor — audio, screens, and zones switch together. No juggling tablets, remotes, and run sheets.',
        image: '/images/industries/casino/solution-one-tap-modes.jpg?v=2',
        imageAlt: 'Casino operator tapping a single property-mode preset on a clean tablet interface',
        imagePosition: 'center 42%',
      },
      {
        index: '06',
        problem: 'Siloed workflows between AV, IT, Marketing, and Ops.',
        headline: 'One platform for every team.',
        answer:
          'A single unified platform that streamlines cross-departmental collaboration and execution — every team works from the same picture.',
      },
      {
        index: '07',
        problem: "Can't scale to a new build or a new property.",
        headline: 'A modular, cloud-native architecture.',
        answer:
          'A modular, cloud-native architecture that grows with your business and allows rapid deployment of new features — add a room, a wing, or a property without a rip-and-replace.',
      },
      {
        index: '08',
        problem: 'Hard to manage across multiple properties.',
        headline: 'Centralized management across the enterprise.',
        answer:
          'Centralized management and control of all AV assets and content across your entire enterprise — one view, one standard, every property.',
      },
      {
        index: '09',
        problem: 'High operational costs from fragmented systems.',
        headline: 'Automated workflows and intelligent insights.',
        answer:
          'Automated workflows and intelligent insights that optimize operational efficiency and reduce costs — the floor runs itself for the routine, and your people handle the exceptions.',
      },
      {
        index: '10',
        problem: 'No visibility into performance or guest engagement.',
        headline: 'Real-time monitoring and analytics.',
        answer:
          'Real-time monitoring and analytics that provide actionable data to improve performance and drive business outcomes — you see the floor, not just hear about it.',
      },
      {
        index: '11',
        problem: 'Vulnerable to security threats and downtime.',
        headline: 'Enterprise-grade security and reliability.',
        answer:
          'Enterprise-grade security and reliability with redundant systems and proactive monitoring — the floor stays up because the platform is built to.',
      },
      {
        index: '12',
        problem: 'Inconsistent brand experience across touchpoints.',
        headline: 'Centralized content and brand controls.',
        answer:
          'Centralized content management and brand controls ensure a consistent, engaging experience across all digital surfaces — one brand, every screen.',
      },
    ],
    automationLockup: {
      lockupName: '<em>Automation</em> & presets',
      lockupRole: 'Set it once — the floor runs itself',
    },
    automations: [
      {
        index: '01',
        title: 'Morning Reset',
        trigger: 'Every morning, automatically.',
        detail:
          'One scheduled preset returns every screen and zone to its intended state before doors open — so the GM\u2019s walkthrough never starts with Judge Judy.',
      },
      {
        index: '02',
        title: 'Jackpot Celebration',
        trigger: 'The moment a jackpot hits.',
        detail:
          'A coordinated preset fires in that zone — lighting pulses, audio swells, nearby screens celebrate — then reverts on its own, calibrated per zone.',
      },
      {
        index: '03',
        title: 'Property Mode Switching',
        trigger: 'Weekday floor. Fight night. Holiday.',
        detail:
          'Every mode your property runs becomes one full configuration of audio, screens, and lighting — switch the whole floor in a single tap.',
      },
      {
        index: '04',
        title: 'Energy That Matches the Room',
        trigger: 'Quiet morning. Peak Saturday night.',
        detail:
          'An audio schedule moves the way your floor does, each zone on its own curve, with transitions handled automatically.',
      },
      {
        index: '05',
        title: 'Revert-After-Timer',
        trigger: 'A temporary takeover.',
        detail:
          'Trigger a preset for a drawing or announcement, set it to revert after a set time, and the floor snaps back to baseline automatically.',
      },
    ],
    ctaTitle: 'See LUCI on <em>your floor</em>.',
    chapters: [
      { id: 'industry-thesis', label: 'Overview' },
      { id: 'industry-floorplan', label: 'The floor' },
      { id: 'industry-before-after', label: 'Before & after' },
      { id: 'industry-automation', label: 'Automation' },
      { id: 'industry-cta', label: 'Next step' },
    ],
  },
  'hotels-resorts': {
    heroVideo: '/videos/luci-hotel-lobby.mp4?v=12',
    heroPoster: '/images/industries/hotel/hero-lobby-poster.jpg?v=12',
    heroImage: '/images/industries/hotels-resorts.jpg?v=1',
    thesis: {
      lockupName: 'Hotels & Resorts',
      lockupRole: 'One platform for every property.',
      deck:
        'Lobby signage, ballrooms, meeting rooms, restaurants, and pool decks — every guest-facing display and zone runs through one platform. Your team runs one property from a single interface, and your brand runs the same way across every property in the portfolio.',
    },
    challengesLockup: {
      lockupName: 'Why hotel A/V <em>gets complicated</em>',
    },
    challenges: [
      {
        head: 'Every space runs its own stack.',
        body:
          'Lobby signage, ballroom DSP, meeting-room AV, restaurant systems, and pool audio — each space brought its own vendor, interface, and protocol until one property runs five systems that do not talk.',
        image: '/images/industries/hotel/challenge-separate-stacks.jpg?v=5',
        imageAlt: 'Standard hotel A/V rack room with freestanding racks sticky-note-labeled for lobby, ballroom, meeting, restaurant, and pool zones',
        imagePosition: 'center 45%',
      },
      {
        head: 'Brand standards drift property to property.',
        body:
          'Corporate sets the playbook — welcome loops, music beds, signage templates — but local teams improvise when the systems will not comply, and a five-property brand ends up looking like five different hotels.',
        image: '/images/industries/hotel/challenge-brand-drift.jpg?v=2',
        imageAlt: 'Hotel lobby displays showing inconsistent branding and off-template content across properties',
        imagePosition: 'center 40%',
      },
      {
        head: 'Ballroom turnover is still a service call.',
        body:
          'A ballroom combine or new scene means reprogramming the DSP routing, EQ, and control logic — and that file lives with one outside programmer. Every new configuration is a service ticket.',
        image: '/images/industries/hotel/challenge-ballroom-turnover.jpg?v=4',
        imageAlt: 'Hotel ballroom mid-turnover between events with overhead AV infrastructure and a technician in a lift adjusting a speaker',
        imagePosition: 'center 45%',
      },
      {
        head: 'Meeting boards and wayfinding aren’t responsive.',
        body:
          'Hotel signage is a patchwork — door tablets tied to the calendar, lobby boards and wayfinding on separate systems, only some connected to the booking platform. A last-minute room move reaches some screens automatically; the rest have to be updated in each separate system, and under day-of pressure guests arrive to the wrong room on the board.',
        image: '/images/industries/hotel/challenge-event-boards.jpg?v=4',
        imageAlt: 'Hotel pre-function corridor with a digital wayfinding kiosk and pillar screen showing legible event directions, a woman reading the kiosk with her phone',
        imagePosition: 'center 45%',
        featured: true,
      },
      {
        head: 'The integrator who built it is not there anymore.',
        body:
          'Presets, schedules, and room-combine logic live in one contractor\u2019s laptop. When they move on, every change — even a volume tweak — waits on a programming ticket.',
        image: '/images/industries/hotel/challenge-integrator-leaves.jpg?v=2',
        imageAlt: 'Hotel engineering staff waiting on an outside AV integrator for a simple preset change',
        imagePosition: 'center 48%',
      },
    ],
    solutionsLockup: {
      lockupName: 'What LUCI <em>changes</em>',
      lockupRole: '',
    },
    solutions: [
      {
        index: '01',
        problem: 'Every space runs its own stack.',
        headline: 'One platform spans every zone.',
        answer:
          'Lobby, ballroom, meeting rooms, restaurants, and pool decks map to the same orchestration layer — one head end, one interface, every zone.',
        image: '/images/industries/hotel/solution-one-platform.jpg?v=4',
        imageAlt: 'Hotel property map in LUCI showing lobby, ballroom, meeting rooms, and pool zones unified',
        imagePosition: 'center 50%',
      },
      {
        index: '02',
        problem: 'Brand standards drift property to property.',
        headline: 'Brand standards hold across every property.',
        answer:
          'Push welcome loops, music beds, and signage templates from one corporate source — permissions let local teams set the atmosphere without improvising off-brand.',
        image: '/images/industries/hotel/solution-brand-standards.jpg?v=6',
        imageAlt: 'Consistent branded welcome content across multiple hotel lobby displays',
        imagePosition: 'center 42%',
      },
      {
        index: '03',
        problem: 'Ballroom turnover is still a service call.',
        headline: 'Divisible rooms switch in one tap.',
        answer:
          'Wedding, banquet, and corporate configurations — including room combines — become saved presets. Audio, lighting, and displays switch together between events, no programming call.',
        image: '/images/industries/hotel/solution-ballroom-presets.jpg?v=2',
        imageAlt: 'Hotel events manager selecting a ballroom room-combine preset on a tablet',
        imagePosition: 'center 45%',
      },
      {
        index: '04',
        problem: 'Meeting boards and wayfinding aren’t responsive.',
        headline: 'Boards and wayfinding stay in sync.',
        answer:
          'Event boards, room signs, and wayfinding pull from your booking and property systems — so the right room is on the right screen before the first guest arrives.',
        image: '/images/industries/hotel/solution-event-boards.jpg?v=2',
        imageAlt: 'Hotel lobby event board and wayfinding screens showing correct, in-sync room assignments',
        imagePosition: 'center 38%',
      },
      {
        index: '05',
        problem: 'The integrator who built it is not there anymore.',
        headline: 'Your team edits schedules in-house.',
        answer:
          'Presets and permissions live in the platform — built and maintained by your staff, not a ticket to the contractor who still has the file.',
        image: '/images/industries/hotel/solution-self-service.jpg?v=4',
        imageAlt: 'Hotel operations team updating AV schedules and presets without outside integrator support',
        imagePosition: 'center 48%',
      },
    ],
    automationLockup: {
      lockupName: '<em>Automation</em> & presets',
      lockupRole: 'Set it once — the property runs itself',
    },
    automations: [
      {
        index: '01',
        title: 'Morning Lobby Reset',
        trigger: 'Every morning, automatically.',
        detail:
          'One scheduled preset returns lobby screens, music, and wayfinding to brand baseline before the first guest walks in.',
      },
      {
        index: '02',
        title: 'VIP Arrival Mode',
        trigger: 'The moment a flagged guest checks in.',
        detail:
          'Lobby signage, elevator screens, and welcome audio shift to the arrival preset — then revert when the window closes.',
      },
      {
        index: '03',
        title: 'Ballroom Event Switching',
        trigger: 'Wedding. Banquet. Corporate.',
        detail:
          'Every event type — and every room combine — becomes one full configuration of audio, displays, and lighting. Switch the room in a single tap.',
      },
      {
        index: '04',
        title: 'Pool & Amenity Schedules',
        trigger: 'Quiet morning. Peak afternoon.',
        detail:
          'Outdoor and amenity zones follow their own curves — music, messaging, and display brightness move automatically through the day.',
      },
      {
        index: '05',
        title: 'Revert-After-Timer',
        trigger: 'A temporary takeover.',
        detail:
          'Trigger a preset for an announcement or promotion, set it to revert after a set time, and the property snaps back to baseline automatically.',
      },
    ],
    ctaTitle: 'See LUCI on <em>your property</em>.',
    chapters: [
      { id: 'industry-thesis', label: 'Overview' },
      { id: 'industry-challenges', label: 'Challenges' },
      { id: 'industry-solutions', label: 'The fix' },
      { id: 'industry-automation', label: 'Automation' },
      { id: 'industry-cta', label: 'Next step' },
    ],
  },
  'sports-venues': {
    heroVideo: '/videos/luci-sports-arena.mp4?v=4',
    heroPoster: '/images/industries/sports-venues/hero-arena-poster.jpg?v=4',
    heroImage: '/images/industries/sports-venues.jpg?v=3',
    thesis: {
      lockupName: 'Sports & Venues',
      lockupRole: 'One platform for the hardest A/V environment there is',
      deck:
        'A venue is the hardest A/V environment there is — tens of thousands of seats, boards that read from three hundred feet, and three straight hours with no restart at halftime. LUCI puts every system behind one interface your team can run.',
    },
    challengesLockup: {
      lockupName: 'What venues actually <em>deal with</em>',
    },
    challenges: [
      {
        head: 'Too many systems, thousands of endpoints, no single view.',
        body:
          'Audio, video, lighting, controls, and signage each live in their own app. A stadium runs thousands of endpoints across concourses, suites, and control rooms — with no single view of uptime.',
        image: '/images/industries/sports-venues/challenge-fragmentation-scale.jpg?v=1',
        imageAlt:
          'Dense venue back-of-house rack room with rows of LED processors, signage players, encoders, and IPTV distribution gear',
        imagePosition: 'center 45%',
      },
      {
        head: 'Latency and sync are visible to the audience.',
        body:
          'A lag between the live action and the replay board breaks the moment. Boards, audio, lighting, and effects have to fire in sync, at low latency, to land it.',
        image: '/images/industries/sports-venues/challenge-sync-latency.jpg?v=1',
        imageAlt:
          'Arena bowl during a big in-game moment with the centerhung board, ribbon boards, and spotlights all lit together as the crowd reacts',
        imagePosition: 'center 42%',
      },
      {
        head: 'The interfaces are built for technicians. The operators are not.',
        body:
          'Day-to-day operation falls to game-day staff, part-timers, and volunteers — not engineers. But the controls were built for a technician, labeled Source 1 and DSP Preset, so the operator hesitates rather than touch it.',
        image: '/images/industries/sports-venues/challenge-operator-interface.jpg?v=1',
        imageAlt:
          'Game-day staff member hesitating at a complex AV control surface covered in technical labels in an arena control room',
        imagePosition: 'center 45%',
      },
      {
        head: 'The people who ran it last season are not here.',
        body:
          'Talent is thin and turnover runs high, so the system runs on a rotating cast with minimal training. When the one person who knew it moves on, the knowledge leaves with them.',
        image: '/images/industries/sports-venues/challenge-staffing-turnover.jpg?v=1',
        imageAlt:
          'A lone remaining technician in an arena control room with an empty operator chair and a thick training binder',
        imagePosition: 'center 50%',
      },
      {
        head: 'One building, a hundred different shows.',
        body:
          'One venue hosts basketball Friday, a concert Saturday, a graduation Sunday — each a different setup, turned around in hours. The configuration logic usually lives with the integrator who built it.',
        image: '/images/industries/sports-venues/challenge-conversion.jpg?v=1',
        imageAlt:
          'Arena floor mid-conversion from a basketball game to a concert stage with crew and a rolling AV cart',
        imagePosition: 'center 45%',
      },
    ],
    solutionsLockup: {
      lockupName: 'What LUCI <em>changes</em>',
      lockupRole: '',
    },
    solutions: [
      {
        index: '01',
        problem: 'Too many systems, thousands of endpoints, no single view.',
        headline: 'One interface for every system and every endpoint.',
        answer:
          'Bring audio, video, lighting, controls, and signage behind one layer — one pane to see thousands of endpoints, so problems get caught before the building notices.',
        image: '/images/industries/sports-venues/solution-one-platform.jpg?v=2',
        imageAlt:
          'Unified LUCI operations dashboard on a monitor showing every system and endpoint health in one pane, arena visible through the window',
        imagePosition: 'center 50%',
      },
      {
        index: '02',
        problem: 'Latency and sync are visible to the audience.',
        headline: 'Every system triggers in sync.',
        answer:
          'Orchestrate boards, audio, lighting, and effects on one timed layer — one tap fires the whole sequence in sync and at low latency, so the moment lands.',
        image: '/images/industries/sports-venues/solution-sync.jpg?v=1',
        imageAlt:
          'Venue operator tapping a LUCI moment preset on a tablet as the arena boards, audio, and lighting fire together in sync',
        imagePosition: 'center 45%',
      },
      {
        index: '03',
        problem: 'The interfaces are built for technicians. The operators are not.',
        headline: 'An interface your whole team can run.',
        answer:
          'Replace technician-level controls with role-based, plain-language presets — game-day staff tap Tipoff or Halftime, not DSP Preset 4, and the building does the right thing.',
        image: '/images/industries/sports-venues/solution-team-interface.jpg?v=1',
        imageAlt:
          'Game-day staff member confidently tapping a plain-language LUCI preset on a tablet in an arena control room',
        imagePosition: 'center 45%',
      },
      {
        index: '04',
        problem: 'The people who ran it last season are not here.',
        headline: 'An embedded team that knows your building.',
        answer:
          'LUCI comes with an embedded team that knows your building — backstopping a rotating staff with people who do not turn over, so the knowledge does not walk out the door.',
        image: '/images/industries/sports-venues/solution-embedded-team.jpg?v=1',
        imageAlt:
          'A LUCI operations team member working alongside venue staff in an arena control room',
        imagePosition: 'center 45%',
      },
      {
        index: '05',
        problem: 'One building, a hundred different shows.',
        headline: 'Every event type becomes a saved configuration.',
        answer:
          'Basketball, concert, graduation, and corporate each become a saved configuration — audio zones, displays, and lighting recall together in one tap, edited in-house, no programming ticket.',
        image: '/images/industries/sports-venues/solution-conversions.jpg?v=2',
        imageAlt:
          'Arena floor converting from a basketball court to a concert stage with a LUCI conversion preset selected on a tablet',
        imagePosition: 'center 48%',
      },
    ],
    automationLockup: {
      lockupName: '<em>Automation</em> & presets',
      lockupRole: 'Set it once — the building runs itself',
    },
    automations: [
      {
        index: '01',
        title: 'Pre-Game Sequence',
        trigger: 'On a timed countdown to tipoff.',
        detail:
          'A scheduled chain of presets walks the building from house-up through player intros — lights, music, board takeovers, and signage move in sequence with no manual cues.',
      },
      {
        index: '02',
        title: 'Game-Day Mode Switching',
        trigger: 'Tipoff. Halftime. Final buzzer.',
        detail:
          'Every game segment becomes one full configuration of boards, audio, lights, and signage — switch the whole building in a single tap, on cue.',
      },
      {
        index: '03',
        title: 'Building Conversion',
        trigger: 'Hockey. Basketball. Concert.',
        detail:
          'Each event type becomes a saved configuration — audio zones, coverage, routing, and board layouts recall together when the floor changes.',
      },
      {
        index: '04',
        title: 'Pre-Doors Health Check',
        trigger: 'Every morning, before doors.',
        detail:
          'An automated check exercises every display, player, and audio zone and flags anything off — so a dead endpoint shows up on the dashboard, not on a fan’s phone.',
      },
      {
        index: '05',
        title: 'Revert-After-Timer',
        trigger: 'A temporary takeover.',
        detail:
          'Trigger a sponsor takeover or in-game promotion, set it to revert after a set time, and the building snaps back to baseline automatically.',
      },
    ],
    ctaTitle: 'See LUCI in <em>your building</em>.',
    chapters: [
      { id: 'industry-thesis', label: 'Overview' },
      { id: 'industry-challenges', label: 'Challenges' },
      { id: 'industry-solutions', label: 'The fix' },
      { id: 'industry-automation', label: 'Automation' },
      { id: 'industry-cta', label: 'Next step' },
    ],
  },
  'airports-transportation': {
    heroVideo: '/videos/luci-airport-terminal.mp4?v=3',
    heroPoster: '/images/industries/airports-transportation/hero-terminal-poster.jpg?v=3',
    heroImage: '/images/industries/airports-transportation.jpg?v=2',
    thesis: {
      lockupName: 'Airports & Transportation',
      lockupRole: 'A/V as life-safety, not decoration',
      deck:
        'A terminal or station never closes — a 4 a.m. red-eye is as live as a 6 p.m. rush. The A/V is life-safety: paging is the fire alarm, understood over jet engines and departing trains. LUCI puts every board and speaker behind one interface your team can run.',
    },
    challengesLockup: {
      lockupName: 'What terminals and stations actually <em>deal with</em>',
    },
    challenges: [
      {
        head: 'Every screen on its own thread, and no single view.',
        body:
          'A terminal runs on a dozen back-ends — flight data, signage, paging, emergency. When one drifts, a board shows a gate that already closed, and nobody notices until a passenger’s at the wrong one.',
        image: '/images/industries/airports-transportation/challenge-fragmentation.jpg?v=1',
        imageAlt:
          'Dense airport terminal back-of-house communications room with rows of network gear, IPTV distribution, and flight-information system controllers',
        imagePosition: 'center 45%',
      },
      {
        head: 'New gear, in a building that wasn’t built for it.',
        body:
          'Terminals and stations are rarely greenfield. New displays and paging live alongside old PA gear, in conduits never sized for today’s loads — and the new gear talks to the old rather than replacing it.',
        image: '/images/industries/airports-transportation/challenge-legacy.jpg?v=1',
        imageAlt:
          'Older transit station communications room mixing legacy PA amplifiers and patch panels with newer IP-based gear',
        imagePosition: 'center 50%',
      },
      {
        head: 'The PA isn’t background noise. It’s the fire alarm.',
        body:
          'In a terminal, the paging system is the voice-alarm system. It has to cut in over everything, take priority across hundreds of zones, and meet life-safety and accessibility code — or it doesn’t pass inspection.',
        image: '/images/industries/airports-transportation/challenge-life-safety.jpg?v=1',
        imageAlt:
          'Emergency voice-alarm paging zone controller integrated with a fire panel in a terminal back-of-house room',
        imagePosition: 'center 50%',
      },
      {
        head: 'Two announcements, talking over each other.',
        body:
          'A terminal is carved into zones — gates, hold areas, concourses — and the edges bleed. A page for one gate spills into the next hold area; without a lock-out, the operator just waits.',
        image: '/images/industries/airports-transportation/challenge-zoning.jpg?v=1',
        imageAlt:
          'Two adjacent airport gate hold areas with overhead paging loudspeakers at the zone boundary where announcements overlap',
        imagePosition: 'center 45%',
      },
      {
        head: 'The building never closes, and nothing can go dark.',
        body:
          'A terminal runs 24/7/365 — a 4 a.m. red-eye is as live as a 6 p.m. rush — and one dead board or silent speaker is what people remember. A failure at rush cascades into missed connections.',
        image: '/images/industries/airports-transportation/challenge-uptime.jpg?v=1',
        imageAlt:
          'Redundant airport operations communications rack with dual power feeds, dual network paths, and green status indicators',
        imagePosition: 'center 50%',
      },
      {
        head: 'You can hear the page. You just can’t understand it.',
        body:
          'Terminals and stations are huge, hard-surfaced, and loud — engines, beepers, doors, trains — and the room bounces sound until the words smear together. A page can be loud and still unintelligible, especially for a traveler who doesn’t speak the language well. Turning it up doesn’t help. It’s a design problem — speakers, zones, tuning, the room — solved together.',
        image: '/images/industries/airports-transportation/challenge-intelligibility.jpg?v=1',
        imageAlt:
          'Cavernous hard-surface airport terminal concourse with overhead paging loudspeakers where reverberant acoustics blur announcements',
        imagePosition: 'center 50%',
        featured: true,
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
          'Bring flight data, signage, paging, and emergency messaging behind one layer — one pane — so a drifted board shows up before a passenger is at the wrong gate.',
        image: '/images/industries/airports-transportation/solution-orchestration.jpg?v=1',
        imageAlt:
          'Unified LUCI operations dashboard showing flight and transit data flowing in sync to every display, gate, and platform screen in a terminal',
        imagePosition: 'center 50%',
      },
      {
        index: '02',
        problem: 'New gear, in a building that wasn’t built for it.',
        headline: 'Modernize on top of what’s already there.',
        answer:
          'LUCI runs on standard IP and talks to the gear you already have — older PA, displays from last round — so you add capability without gutting the building.',
        image: '/images/industries/airports-transportation/solution-legacy-integration.jpg?v=1',
        imageAlt:
          'Sleek LUCI controller mounted alongside legacy PA and control-room gear in a transit station communications room, integrating existing equipment',
        imagePosition: 'center 45%',
      },
      {
        index: '03',
        problem: 'The PA isn’t background noise. It’s the fire alarm.',
        headline: 'Paging and emergency on one layer, built to pass.',
        answer:
          'Bring paging and voice-alarm behind one layer that ties straight into the fire alarm — taking priority across hundreds of zones — and meets life-safety code from the start.',
        image: '/images/industries/airports-transportation/solution-life-safety.jpg?v=1',
        imageAlt:
          'LUCI paging and voice-alarm management screen showing fire-alarm prioritization across zones in a terminal operations center',
        imagePosition: 'center 50%',
      },
      {
        index: '04',
        problem: 'Two announcements, talking over each other.',
        headline: 'The right message to the right zone, every time.',
        answer:
          'Manage zones, lock-outs, and priorities from one interface — a gate-change page hits its own zone, no collision with the concourse next door, no waiting on the adjacent page.',
        image: '/images/industries/airports-transportation/solution-zoning.jpg?v=1',
        imageAlt:
          'LUCI zone management interface on a tablet showing paging lock-outs between adjacent airport gate hold areas',
        imagePosition: 'center 45%',
      },
      {
        index: '05',
        problem: 'The building never closes, and nothing can go dark.',
        headline: 'Catch failures before the terminal notices.',
        answer:
          'An automated health check exercises every display, player, and speaker — a dead board shows up on the dashboard, not on a passenger’s phone — backed by an embedded team.',
        image: '/images/industries/airports-transportation/solution-uptime.jpg?v=1',
        imageAlt:
          'LUCI endpoint health dashboard flagging a failed display in a 24/7 terminal, with an operations team monitoring in the background',
        imagePosition: 'center 50%',
      },
      {
        index: '06',
        problem: 'You can hear the page. You just can’t understand it.',
        headline: 'Pages that land clear, not just loud.',
        answer:
          'LUCI treats intelligibility as a design problem, not a volume knob — speakers, zones, DSP, and routing on one audio layer, tuned so the words come through.',
        image: '/images/industries/airports-transportation/solution-intelligibility.jpg?v=1',
        imageAlt:
          'LUCI audio DSP and zoning tuning interface for a reverberant terminal, with overhead loudspeakers delivering clear paging',
        imagePosition: 'center 50%',
      },
    ],
    automationLockup: {
      lockupName: '<em>Automation</em> & presets',
      lockupRole: 'Set it once — the building runs itself',
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
          'Each operational state becomes one configuration of displays, paging, and wayfinding — switch the terminal between routine, irregular-operations, and emergency voice-alarm in one tap, paging taking priority.',
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
    ctaTitle: 'See LUCI in <em>your terminal or station</em>.',
    chapters: [
      { id: 'industry-thesis', label: 'Overview' },
      { id: 'industry-challenges', label: 'Challenges' },
      { id: 'industry-solutions', label: 'The fix' },
      { id: 'industry-automation', label: 'Automation' },
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
        'A convention center is not running one show — it is running many, back to back and side by side, and the same hall becomes a different technical environment every few hours. LUCI puts every room — main stage, breakouts, divisible halls, and the hybrid broadcast — behind one interface your team runs from one tap.',
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
        headline: 'Air-wall splits switch in one tap.',
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
          'A new layout, combine, or divide recalls the right audio zones, displays, and control for the next event in one tap.',
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
