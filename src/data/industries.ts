export const industries = [
  {
    slug: 'casinos-gaming',
    name: 'Casinos & gaming',
    teaser: 'Gaming floors, guest experience, uptime',
    personas: ['operations', 'marketing', 'leadership'] as const,
  },
  {
    slug: 'hotels-resorts',
    name: 'Hotels & resorts',
    teaser: 'Property-wide AV, signage, ops continuity',
    personas: ['marketing', 'operations'] as const,
  },
  {
    slug: 'sports-venues',
    name: 'Sports & venues',
    teaser: 'Arenas, event spaces, game-day orchestration',
    personas: ['operations', 'facilities'] as const,
  },
  {
    slug: 'airports-transportation',
    name: 'Airports & transportation',
    teaser: 'Airports, rail/intermodal stations, transit hubs',
    personas: ['technology', 'operations'] as const,
  },
  {
    slug: 'conference-convention-centers',
    name: 'Conference & convention centers',
    teaser: 'Meeting spaces, digital signage, event turnover',
    personas: ['operations', 'facilities'] as const,
  },
  {
    slug: 'corporate-campus-properties',
    name: 'Corporate & campus properties',
    teaser: 'HQ and multi-building campuses; AV, signage, and building tech as one layer',
    personas: ['technology', 'leadership'] as const,
  },
] as const;

export type IndustrySlug = (typeof industries)[number]['slug'];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
