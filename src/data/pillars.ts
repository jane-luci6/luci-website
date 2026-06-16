export const pillars = [
  {
    num: '01',
    title: 'Complete visibility and control across your property',
    body: 'One interface surfaces every endpoint, zone, and system across your property. Every team sees the same picture and acts from the same place.',
    personas: ['leadership', 'technology', 'facilities'] as const,
    topics: ['visibility', 'control'],
  },
  {
    num: '02',
    title: 'Align your teams by default',
    body: 'LUCI connects every team to the same system, so your organization can stop negotiating internally and start executing towards a shared vision.',
    personas: ['leadership', 'operations'] as const,
    topics: ['alignment'],
  },
  {
    num: '03',
    title: 'Fully activate the guest experience',
    body: 'Turn passive screens into purposeful moments by planning, programming, and responding to guest signals in real time.',
    personas: ['marketing', 'operations'] as const,
    topics: ['guest-experience'],
  },
  {
    num: '04',
    title: 'Invest in the only A/V that gets more valuable over time',
    body: "Traditional A/V depreciates and expires. LUCI doesn't. Year Five is more capable than Year One on the same line item.",
    personas: ['finance', 'leadership'] as const,
    topics: ['tco', 'subscription'],
  },
] as const;
