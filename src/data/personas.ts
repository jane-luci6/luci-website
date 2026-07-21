/** Persona keys used for tagging + future personalization (?role=finance) */

export type PersonaId =
  | 'leadership'
  | 'operations'
  | 'technology'
  | 'finance'
  | 'marketing'
  | 'facilities';

export const personas = [
  {
    id: 'leadership' as const,
    label: 'General management',
    role: 'Set the direction',
    line: 'Your floor is already influencing guest behavior. LUCI makes that influence more targeted and activating.',
    belief:
      'The floor shapes guest behavior — LUCI makes that influence deliberate and property-wide.',
  },
  {
    id: 'operations' as const,
    label: 'Operations',
    role: 'Run the floor',
    line: 'Run a tighter operation. Automate the routine. Respond instantly to the unexpected. One team accountable for the whole outcome.',
    belief:
      'The property runs tighter with one accountable team — routine automated, unexpected handled fast.',
  },
  {
    id: 'technology' as const,
    label: 'Technology',
    role: 'Run the infrastructure',
    line: 'One interface for every system on the property — on standard network infrastructure, without proprietary hardware or specialist programming.',
    belief:
      'Enterprise AV runs as standard network infrastructure — one interface, no proprietary sprawl.',
  },
  {
    id: 'finance' as const,
    label: 'Finance',
    role: 'Own the numbers',
    line: 'Infrastructure that appreciates. One subscription replaces compounding capital costs — and year five is more capable than year one on the same line item.',
    belief:
      'Multimedia infrastructure appreciates — one subscription replaces the 5–7 year refresh cycle.',
  },
  {
    id: 'marketing' as const,
    label: 'Marketing',
    role: 'Shape the guest experience',
    line: 'Deliver the right experience, in the right zone, at exactly the right moment — every time, across the whole property.',
    belief:
      "Campaigns aren't limited to marketing's screens — schedule and coordinate across the whole property.",
  },
  {
    id: 'facilities' as const,
    label: 'Facilities',
    role: 'Keep the property running',
    line: 'See everything. Control anything. From any device. Without leaving the floor.',
    belief:
      "Property AV doesn't mean server-room runs — proactive command of one coherent system.",
  },
] as const;

export function getPersona(id: PersonaId) {
  return personas.find((p) => p.id === id);
}
