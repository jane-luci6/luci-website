/** "LUCI controls the whole floor" floorplan visual — shared by the hero + elsewhere */

export const floorControl = {
  src: '/images/floorplan-casino.png?v=1',
  alt:
    'Casino and resort floorplan — casino floor, ballroom, theater, pool, restaurants and bars, and hotel lobby — with LUCI controlling every system across the property',
} as const;

/**
 * Control demos that hop around the floor one-by-one. Positions are % of the stage.
 * Each shows the *mechanism* of a real operator action (not the actual UI). Examples are
 * grounded in how casino/arena AV teams actually run a venue: source/segment/preset switching,
 * zone volume rides, scheduled signage, BMS setpoints, and one-button "big-moment" takeovers.
 * Note: live scores auto-populate from the scoring data feed, so the operator never types them —
 * what they change on the big board is the *content* (live -> replay).
 *   - radio:  two options; the selected dot jumps from `from` to `to` (source/segment/channel/preset/station)
 *   - slider: a handle slides from `from`% to `to`% and the fill follows; shows `value` (volume, dim, setpoint)
 *   - push:   a deploy button (`push` label) presses and confirms (`done`) — publishing designed content
 *   - select: a content picker; the field opens an `options` menu and the choice lands on `to` (CMS layout/playlist)
 *   - screen: a monitor tile whose feed flips `from` -> `to` behind a quick signal flash (route a game to a display)
 *   - toggle: a single-button trigger fires (e.g. a synchronized big-moment takeover)
 * `zone: true` draws a dashed outline around the spot to read as "this physical zone".
 */
// `group` clusters the systems into pairs that animate together (lightly staggered),
// so the floor never shows more than two cards at once — spread across the plan for
// balance. The final group is a single card; the Jackpot cascade (below) plays alone.
export const floorSystems = [
  // Each pair = one left/right side of the floor so they don't crowd each other.
  { group: 0, left: 30, top: 18, side: 'right', widget: 'radio', name: 'LED Wall', from: 'Single Game', to: 'Multi-View' },
  { group: 0, left: 66, top: 33, side: 'left', widget: 'screen', name: 'Sports Book', from: 'LAL @ BOS', to: 'KC @ BUF' },

  { group: 1, left: 49, top: 12, side: 'right', widget: 'select', name: 'Lobby Signage', from: 'Welcome', to: 'Happy Hour', options: ['Welcome', 'Happy Hour', 'Wayfinding'] },
  { group: 1, left: 12, top: 63, side: 'right', widget: 'radio', name: 'Ballroom AV', from: 'Reception', to: 'Awards Show' },

  { group: 2, left: 76, top: 22, side: 'left', widget: 'push', name: 'LED Ribbon', push: 'Push Holiday Update', done: '✓ Live' },
  { group: 2, left: 49, top: 75, side: 'right', widget: 'slider', name: 'Bar Audio', from: 45, to: 72, numFrom: 45, numTo: 72, unit: '%', zone: true },

  { group: 3, left: 58, top: 13, side: 'right', widget: 'slider', name: 'House Lights', from: 90, to: 20, numFrom: 90, numTo: 20, unit: '%', zone: true },
  { group: 3, left: 39, top: 29, side: 'right', widget: 'radio', name: 'Lounge TVs', from: 'MTV Live', to: 'Red Carpet' },

  { group: 4, left: 44, top: 40, side: 'right', widget: 'radio', name: 'Slot Zone Music', from: 'Energy Mix', to: 'Top 40', zone: true },
] as const;

/**
 * Cascades = the orchestration "moment". One trigger fans out to several endpoints at once,
 * shown with connector lines drawing outward from the trigger to each target, which then pulse.
 * `kind: 'auto'`   — an event LUCI reacts to on its own (badge tagged "Automated").
 * `kind: 'manual'` — a human action (badge tagged "Manual / push-to-talk").
 * Positions are % of the stage; targets reuse the same coordinate space as floorSystems.
 */
export const floorCascades = [
  {
    kind: 'auto',
    trigger: { left: 44, top: 40 },
    tag: 'Automated',
    event: 'Jackpot · $50,000',
    sub: 'LUCI fires the whole floor',
    targets: [
      // audio lands first — it has to come up before the floor can react to the win
      {
        left: 26, top: 46, name: 'Slot Floor Audio',
        widget: 'slider', from: 35, to: 80, numFrom: 35, numTo: 80, unit: '%',
        zone: { left: 22, top: 14, w: 44, h: 38 },
      },
      { left: 30, top: 20, name: 'LED Wall', widget: 'swap', from: 'Attract Loop', to: 'Jackpot Win' },
      { left: 58, top: 19, name: 'House Lights', widget: 'toggle', from: 'Standard', to: 'Celebration' },
      { left: 76, top: 24, name: 'LED Ribbon', widget: 'swap', from: 'Sponsor Loop', to: 'Winner Alert' },
    ],
  },
] as const;

/** Bottom ticker — icon id + label for the full control list. */
export const floorTicker = [
  { icon: 'monitor', label: 'Displays & TVs' },
  { icon: 'grid', label: 'LED Walls' },
  { icon: 'bulb', label: 'Lighting' },
  { icon: 'wave', label: 'LED Ribbon' },
  { icon: 'sign', label: 'Digital Signage' },
  { icon: 'speaker', label: 'Sound' },
  { icon: 'play', label: 'Video' },
  { icon: 'monitor', label: 'IPTV' },
  { icon: 'gear', label: 'BMS' },
  { icon: 'slider', label: 'Audio DSP' },
  { icon: 'grid', label: 'Scoreboards' },
  { icon: 'star', label: 'Event AV' },
] as const;

/** Property spaces LUCI controls — bare list shown as a static caption at the
 *  foot of the floorplan. "Every space on the property" told at a glance. */
export const propertyZones = [
  'Lobby',
  'Bar & lounge',
  'Sportsbook',
  'Ballroom',
  'Conference Room',
  'Event Venue',
  'Theater',
  'Pool',
  'Restaurant',
  'Casino floor',
  'Parking structure',
  'Wayfinding sign',
  'Marquee',
] as const;
