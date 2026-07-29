/** Property-wide hero map prototype — separate from floorControl / FloorControlStage.
 *  Label positions derived from the original floorplan's own label coordinates
 *  and Jane's zoomed-in reference screenshots (Jul 29).
 */

export const propertyMap = {
  src: '/images/floorplan-property.png?v=3',
  alt: 'Property-wide floorplan showing lobby, porte cochere, dining, convention, pool, and guest spaces LUCI orchestrates across the site',
} as const;

/** Curated labels — non-casino spaces first. Casino kept as one secondary zone.
 *  Positions are % of the stage, anchored to actual floorplan areas. */
export const propertyMapLabels = [
  { left: 53, top: 6, name: 'Porte Cochere', priority: 'primary' },
  { left: 67, top: 28, name: 'Casino floor', priority: 'secondary' },
  { left: 36, top: 66, name: 'Sportsbar', priority: 'primary' },
  { left: 67, top: 58, name: 'Restaurant', priority: 'primary' },
  { left: 49, top: 72, name: 'Convention', priority: 'primary' },
  { left: 20, top: 75, name: 'Pool', priority: 'primary' },
  { left: 49, top: 83, name: 'Hotel Lobby', priority: 'primary' },
] as const;

/** Soft zone outlines that pulse in sequence — whole-property story without camera work yet.
 *  Boxes are centered on the label positions above. */
export const propertyMapZones = [
  { left: 45, top: 2, w: 16, h: 10, delay: 0 },
  { left: 57, top: 22, w: 20, h: 16, delay: 1 },
  { left: 28, top: 60, w: 16, h: 14, delay: 2 },
  { left: 60, top: 52, w: 14, h: 12, delay: 3 },
  { left: 41, top: 67, w: 16, h: 12, delay: 4 },
  { left: 12, top: 69, w: 16, h: 14, delay: 5 },
  { left: 41, top: 78, w: 16, h: 14, delay: 6 },
] as const;

/** Foot caption — same idea as the live hero zones list. */
export const propertyMapCaption = [
  'Lobby',
  'Porte Cochere',
  'Sportsbar',
  'Restaurant',
  'Convention',
  'Pool',
  'Casino floor',
  'Parking',
  'Wayfinding',
] as const;
