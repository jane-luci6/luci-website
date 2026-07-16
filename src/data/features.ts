/** Platform capabilities — six that define the platform (capabilities doc p05). */

export const features = [
  {
    title: 'Map-based dashboard',
    body: 'Live visual map of every display, audio zone, and system endpoint across the property.',
  },
  {
    title: 'Open integration',
    body: 'Connects to any A/V, signage, building, or content system through open APIs — regardless of protocol, make, or model.',
  },
  {
    title: 'PIN-delegated control',
    body: 'Every user controls only their designated zones. Permissions follow roles, not device-by-device configuration.',
  },
  {
    title: 'Predictive monitoring & alerts',
    body: 'The platform surfaces and resolves common issues automatically — before the guest notices.',
  },
  {
    title: 'Presets & scheduling',
    body: 'Save and schedule scenes so daily transitions run without manual intervention across every zone.',
  },
  {
    title: 'Automation & triggers',
    body: 'Listen for external events — jackpot alerts, player data, weather, emergency systems — and fire coordinated responses in real time.',
  },
] as const;
