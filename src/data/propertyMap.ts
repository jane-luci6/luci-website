/** Property-wide hero map prototype — separate from floorControl / FloorControlStage.
 *  Stitched from two detailed screenshots (Jul 29) — top + bottom halves of the property.
 *  Label positions anchored to the stitched composite (1024x1348).
 */

export const propertyMap = {
  src: '/images/floorplan-property.png?v=14',
  alt: 'Property-wide floorplan showing lobby, porte cochere, dining, convention, pool, and guest spaces LUCI orchestrates across the site',
} as const;

/** Curated labels — non-casino spaces first. Casino kept as one secondary zone.
 *  Positions are % of the stage, anchored to actual floorplan areas. */
export const propertyMapLabels = [
  { left: 50, top: 4, name: 'Porte Cochere', priority: 'primary' },
  { left: 62, top: 20, name: 'Casino floor', priority: 'secondary' },
  { left: 28, top: 40, name: 'Sportsbar', priority: 'primary' },
  { left: 68, top: 38, name: 'Restaurant', priority: 'primary' },
  { left: 15, top: 65, name: 'Pool', priority: 'primary' },
  { left: 42, top: 78, name: 'Convention', priority: 'primary' },
  { left: 52, top: 86, name: 'Hotel Lobby', priority: 'primary' },
] as const;

/** Soft zone outlines that pulse in sequence — whole-property story without camera work yet.
 *  Boxes are centered on the label positions above. */
export const propertyMapZones = [
  { left: 42, top: 1, w: 16, h: 8, delay: 0 },
  { left: 54, top: 14, w: 20, h: 14, delay: 1 },
  { left: 20, top: 34, w: 16, h: 14, delay: 2 },
  { left: 60, top: 32, w: 16, h: 14, delay: 3 },
  { left: 7, top: 59, w: 16, h: 14, delay: 4 },
  { left: 34, top: 72, w: 16, h: 14, delay: 5 },
  { left: 44, top: 80, w: 16, h: 14, delay: 6 },
] as const;
