export const features = [
  {
    title: 'Map-based dashboard',
    body: 'Live visual map of every display, audio zone, and system endpoint across the property',
    personas: ['technology', 'facilities', 'operations'] as const,
  },
  {
    title: 'Open API integration',
    body: 'Connects to any A/V, signage, building, or content system',
    personas: ['technology'] as const,
  },
  {
    title: 'PIN-delegated control',
    body: 'Every user controls only their designated zones',
    personas: ['operations', 'marketing', 'facilities'] as const,
  },
  {
    title: 'Predictive monitoring & alerts',
    body: 'Surfaces and resolves common issues automatically, before the guest notices',
    personas: ['technology', 'facilities'] as const,
  },
  {
    title: 'Mobile control from any device',
    body: 'Full property control from any authorized device, on or off property',
    personas: ['leadership', 'operations', 'facilities'] as const,
  },
  {
    title: 'Scalable by architecture',
    body: 'Add venues, floors, or sister properties without replacing the core',
    personas: ['technology', 'leadership'] as const,
  },
] as const;
