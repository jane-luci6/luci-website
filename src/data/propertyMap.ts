/** Property-wide hero map prototype — separate from floorControl / FloorControlStage.
 *  Label positions derived from the original floorplan's own label coordinates,
 *  remapped to non-casino names per Jane's direction. Pool moved up between
 *  Bar & lounge and the main building.
 */

export const propertyMap = {
  src: '/images/floorplan-property.png?v=3',
  alt: 'Property-wide floorplan showing lobby, porte cochere, dining, and guest spaces LUCI orchestrates across the site',
} as const;

/** Curated labels — non-casino spaces first. Casino kept as one secondary zone.
 *  Positions are % of the stage, anchored to actual floorplan areas. */
export const propertyMapLabels = [
  { left: 53, top: 6, name: 'Porte Cochere', priority: 'primary' },
  { left: 67, top: 28, name: 'Casino floor', priority: 'secondary' },
  { left: 55, top: 42, name: 'Conference', priority: 'primary' },
  { left: 26, top: 52, name: 'Pool', priority: 'primary' },
  { left: 36, top: 66, name: 'Bar & lounge', priority: 'primary' },
  { left: 67, top: 58, name: 'Restaurant', priority: 'primary' },
  { left: 31, top: 72, name: 'Event Venue', priority: 'primary' },
  { left: 49, top: 83, name: 'Hotel Lobby', priority: 'primary' },
] as const;

/** Soft zone outlines that pulse in sequence — whole-property story without camera work yet.
 *  Boxes are centered on the label positions above. */
export const propertyMapZones = [
  { left: 45, top: 2, w: 16, h: 10, delay: 0 },
  { left: 57, top: 22, w: 20, h: 16, delay: 1 },
  { left: 47, top: 36, w: 16, h: 14, delay: 2 },
  { left: 18, top: 46, w: 16, h: 14, delay: 3 },
  { left: 28, top: 60, w: 16, h: 14, delay: 4 },
  { left: 60, top: 52, w: 14, h: 12, delay: 5 },
  { left: 24, top: 66, w: 14, h: 14, delay: 6 },
  { left: 41, top: 78, w: 16, h: 14, delay: 7 },
] as const;

/** Foot caption — same idea as the live hero zones list. */
export const propertyMapCaption = [
  'Lobby',
  'Porte Cochere',
  'Bar & lounge',
  'Restaurant',
  'Event Venue',
  'Pool',
  'Casino floor',
  'Conference',
  'Parking',
  'Wayfinding',
] as const;
