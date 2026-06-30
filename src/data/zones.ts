/** Mint primary · gold secondary — one accent pair site-wide. */

export type ZoneId = 'platform' | 'proof' | 'partnership';

export const zones: Record<ZoneId, { label: string }> = {
  platform: { label: 'Platform' },
  proof: { label: 'Proof' },
  partnership: { label: 'Partnership' },
};

export const capabilityItems = [
  {
    label: 'Map every endpoint',
    body: 'See every screen, source, and zone on one floor plan.',
  },
  {
    label: 'Preset any moment',
    body: 'Schedule and trigger experiences across the property.',
  },
  {
    label: 'One team owns it',
    body: 'The engineers who deploy LUCI stay for the life of the relationship.',
  },
] as const;
