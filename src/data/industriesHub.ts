/** Copy + structure for the /industries overview hub. */

export const industriesHub = {
  lockupName: 'LUCI in Every Environment',
  lockupRole: 'Same platform · any property type',
  deck:
    'Gaming floors, arenas, airports — different operations, same orchestration layer. LUCI inherits your stack, maps your property, and stays accountable from day one.',
  adaptLockupName: 'How LUCI adapts',
  adaptLockupRole: 'Versatility without reinvention',
  exploreLockupName: 'Explore by vertical',
  exploreLockupRole: 'Five environments · one orchestration layer',
  adaptPoints: [
    {
      kicker: 'The stack',
      head: 'Your stack, not ours',
      detail:
        'Open APIs integrate the systems and content sources you already run — no rip-and-replace to get live.',
    },
    {
      kicker: 'The map',
      head: 'Any floor plan, one map',
      detail:
        'Map-based control scales from a single room to a whole multi-building property — same interface, your layout.',
    },
    {
      kicker: 'The team',
      head: 'One team, every vertical',
      detail:
        'The embedded operation that deploys LUCI in gaming is the same team that stays in airports and resorts — no handoff by industry.',
    },
  ],
  ctaTitle: 'See LUCI on your floor.',
} as const;

/** Bento grid placement per industry slug. */
export const bentoCells: Record<string, string> = {
  'casinos-gaming': 'ind-bento__cell--casinos',
  'sports-venues': 'ind-bento__cell--sports',
  'hotels-resorts': 'ind-bento__cell--hotels',
  'airports-transportation': 'ind-bento__cell--airports',
  'conference-convention-centers': 'ind-bento__cell--conference',
};
