/** Content for the /who-we-serve hub — the cross-industry "LUCI brings your teams
 * together" landing page. Visually-driven; copy stays tight. The thesis: LUCI looks
 * like an A/V solution but is really a guest/customer-experience solution. Every
 * onsite team works the same floor, toward the same guest — across industries.
 */

export interface WhoWeServeTeam {
  id: string;
  label: string;
  role: string;
  /** One cross-industry line: what this team does on the shared floor. */
  line: string;
  icon: string;
}

export interface WhoWeServeIndustry {
  slug: string;
  name: string;
  image: string;
  /** One line: what "teams together" looks like in this vertical. */
  line: string;
}

export const whoWeServe = {
  hero: {
    lockupName: 'One platform for every team.',
    lockupRole: 'LUCI helps you deliver a singular guest experience',
  },
  reframe: {
    line1: 'Every team negotiating its own priorities.',
    line2: 'Every team executing toward one guest experience.',
    close:
      'LUCI aligns your teams by default — so the A/V infrastructure you already run becomes a strategic tool for revenue, retention, and brand, not a stack of separate systems everyone has to work around.',
  },
  teamsLockup: {
    lockupName: 'Your teams, on the same floor',
    lockupRole: 'Six functions, one platform, one guest',
  },
  industriesLockup: {
    lockupName: 'Across every environment',
    lockupRole: 'What teams-together looks like in your world',
  },
  personasLockup: {
    lockupName: 'Choose your role',
    lockupRole: 'Open yours to see what you can do',
  },
  teams: [
    {
      id: 'marketing',
      label: 'Marketing',
      role: 'CMO',
      line:
        "Programs every screen on the property by zone and moment — a casino's dining daypart, a hotel's event board, an airport's retail push.",
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 9v6l10 5V4L4 9z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M14 8c1.8 1.2 1.8 6.8 0 8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
    },
    {
      id: 'operations',
      label: 'Operations',
      role: 'COO / Gaming Director',
      line:
        "Sets the floor's energy by zone and hour — a casino's evening peak, an arena's game-day flip, a convention center's room turnover.",
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 8h11M19 8h1M4 16h4M12 16h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="16" cy="8" r="2.2" stroke="currentColor" stroke-width="1.7"/><circle cx="9" cy="16" r="2.2" stroke="currentColor" stroke-width="1.7"/></svg>`,
    },
    {
      id: 'technology',
      label: 'Technology',
      role: 'CIO / IT Director',
      line:
        'Runs every A/V endpoint as standard network infrastructure — visible, permissioned, and logged, on a casino floor or across an airport terminal.',
      icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7"/><path d="M7 7h.01M7 17h.01" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
    },
    {
      id: 'finance',
      label: 'Finance',
      role: 'CFO',
      line:
        'Trades a lumpy refresh cycle for one predictable line — and measures A/V as a revenue contributor, not just a cost.',
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><rect x="6" y="13" width="3" height="5" stroke="currentColor" stroke-width="1.6"/><rect x="11" y="9" width="3" height="9" stroke="currentColor" stroke-width="1.6"/><rect x="16" y="6" width="3" height="12" stroke="currentColor" stroke-width="1.6"/></svg>`,
    },
    {
      id: 'facilities',
      label: 'Facilities',
      role: 'A/V Manager',
      line:
        "Manages the whole property from a tablet — closing service calls without a walk, on a hotel floor or a sports concourse.",
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    {
      id: 'leadership',
      label: 'General management',
      role: 'CEO / GM',
      line:
        'Sees and directs the whole guest experience from one screen — and makes sure no team leaves capability on the table.',
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 4l2.2 4.9 5.3.5-4 3.5 1.2 5.2L12 15.6 7.3 18.6l1.2-5.2-4-3.5 5.3-.5L12 4z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
    },
  ] as WhoWeServeTeam[],
  industries: [
    {
      slug: 'casinos-gaming',
      name: 'Casinos & gaming',
      image: '/images/industries/casinos-gaming.jpg',
      line:
        "Marketing, gaming ops, and A/V run one floor-energy strategy — jackpot to jackpot, shift to shift.",
    },
    {
      slug: 'hotels-resorts',
      name: 'Hotels & resorts',
      image: '/images/industries/hotels-resorts.jpg',
      line:
        'Banquet, A/V, and front-of-house flip a ballroom in a few taps — and reset it on their own.',
    },
    {
      slug: 'sports-venues',
      name: 'Sports & venues',
      image: '/images/industries/sports-venues.jpg',
      line:
        'Ops, broadcast, and signage sync a game-day flip in seconds, across the whole concourse.',
    },
    {
      slug: 'airports-transportation',
      name: 'Airports & transportation',
      image: '/images/industries/airports-transportation.jpg',
      line:
        'IT, ops, and life-safety coordinate one intelligible PA and signage layer across every terminal.',
    },
    {
      slug: 'conference-convention-centers',
      name: 'Conference & convention centers',
      image: '/images/industries/conference-convention-centers.jpg',
      line:
        'A/V, ops, and sales reconfigure divisible rooms without a teardown — and turn the floor over in minutes.',
    },
  ] as WhoWeServeIndustry[],
  support: {
    lockupName: 'How LUCI supports your role',
    lockupRole: 'From silos to one platform',
    deck: "Today's venue and property teams work in silos. LUCI flips the script: one platform where every team can strategize and tackle the guest experience together.",
    points: [
      {
        kicker: 'The map',
        head: 'One map of the property',
        detail:
          "Every function works from the same live map — zones, screens, audio, and signals in one place — so marketing, ops, and A/V see the same floor, not three versions of it.",
      },
      {
        kicker: 'The schedule',
        head: 'Schedule every zone',
        detail:
          "Each zone runs its own timeline lane — screens, audio, and modes by moment — all on one platform, so a campaign in one zone and A/V setup in another stay aligned instead of colliding.",
      },
      {
        kicker: 'The team',
        head: 'One team, planning together',
        detail:
          "Your teams become one team because they finally have the tools to plan together — set presets, schedule events, and talk through strategy on one platform — instead of reacting to each other's changes after the fact.",
      },
    ],
  },
  ctaTitle: 'See what <em>your team</em> can do.',
} as const;
