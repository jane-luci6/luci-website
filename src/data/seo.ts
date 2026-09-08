/**
 * Per-route SEO metadata — unique <title> phrase + meta description for every
 * page. BaseLayout appends " · LUCI Systems" to `title` (homepage omits `title`
 * so it renders the tagline). Descriptions are ~150 chars, voice-aligned
 * (institutional, declarative, "A/V" not "AV", no percentage claims).
 *
 * Case studies name the property (allowed by the case-study rule); all other
 * public pages stay client-anonymous per the voice rule.
 */

export interface PageSeo {
  /** Page-specific title phrase. BaseLayout appends " · LUCI Systems".
   *  Omit for the homepage so it renders the tagline as the title. */
  title?: string;
  description: string;
  /** OG image path (1200×630). Defaults to /images/og-default.png in BaseLayout. */
  ogImage?: string;
  /** Add <meta name="robots" content="noindex"> — for thank-you / utility pages. */
  noindex?: boolean;
}

/** Default OG image used when a page doesn't specify one. */
export const defaultOgImage = '/images/og-default.png';

import { site } from './site';

/** Build a BreadcrumbList JSON-LD object from an ordered list of crumbs. */
export function breadcrumb(crumbs: { name: string; path: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: site.url + (c.path === '/' ? '/' : c.path.replace(/\/+$/, '') + '/'),
    })),
  };
}

export const seoPages: Record<string, PageSeo> = {
  '/': {
    description:
      'LUCI is the orchestration engine for enterprise multimedia — one interface to control, automate, and execute A/V, signage, and building systems across casinos, hotels, sports venues, airports, and convention centers.',
  },
  '/platform': {
    title: 'Platform',
    description:
      'The LUCI orchestration engine runs every display, source, audio zone, and building system on a property from one interface — on standard network infrastructure, with an embedded team that stays.',
  },
  '/integrations': {
    title: 'Integrations',
    description:
      'LUCI connects to the A/V, signage, LED, and content systems you already run — Q-SYS, Samsung, Novastar, DirecTV, EverPass, and more — through open APIs. No rip-and-replace.',
  },
  '/about': {
    title: 'About',
    description:
      'LUCI Systems was built by integrators, operators, and owners who spent 25 years inside commercial multimedia environments. One platform that runs the property, and an embedded team that stays.',
  },
  '/who-we-serve': {
    title: 'Who we serve',
    description:
      'LUCI serves leadership, operations, technology, finance, marketing, and facilities teams at casinos, hotels, sports venues, airports, and convention centers — one platform, one accountable team.',
  },
  '/industries': {
    title: 'Industries',
    description:
      'LUCI runs the technology behind casinos, hotels, sports venues, airports, and convention centers — every display, audio zone, and system on one interface.',
  },
  '/resources': {
    title: 'Resources',
    description:
      'LUCI case studies, the Field Activation Guide, and The Signal newsletter — how properties run every system from one interface.',
  },
  '/resources/field-activation-guide': {
    title: 'Field Activation Guide',
    description:
      'The Field Activation Guide — how LUCI turns a property’s screens, audio, and lighting into coordinated, moment-driven experiences across every zone.',
  },
  '/resources/case-studies': {
    title: 'Case studies',
    description:
      'LUCI case studies — how casinos and resorts consolidated fragmented A/V onto one interface, with named systems decommissioned and an embedded team that stays.',
  },
  '/contact': {
    title: 'Contact',
    description:
      'Book a live LUCI demo. Tell us about your property and we’ll show you what one interface across every endpoint looks like on your floor.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    description:
      'LUCI Systems, LLC privacy policy — how we collect, use, and protect personally identifiable information on lucisystems.com.',
  },
  '/terms': {
    title: 'Terms of Service',
    description:
      'LUCI Systems, LLC terms of service — the terms that govern use of lucisystems.com and LUCI’s online services.',
  },
  '/accessibility': {
    title: 'Accessibility',
    description:
      'LUCI Systems’ accessibility statement — our commitment to an inclusive, WCAG-aligned experience on lucisystems.com and how to report barriers.',
  },
  '/contact/thanks': {
    title: 'Thanks',
    description: 'Thanks for requesting a LUCI demo — we’ll be in touch.',
    noindex: true,
  },
  '/blog': {
    title: 'Blog',
    description:
      'The LUCI blog — operations, technology, and guest-experience perspectives on running every property system from one interface.',
  },
};

/** Persona pages — /who-we-serve/[persona] */
export function getPersonaSeo(id: string): PageSeo {
  const map: Record<string, PageSeo> = {
    leadership: {
      title: 'General management',
      description:
        'For general management: run one property as one business. LUCI gives leadership one system of control and one accountable team across every endpoint.',
    },
    operations: {
      title: 'Operations',
      description:
        'For operations: run a tighter floor. LUCI automates the routine, responds instantly to the unexpected, and puts one accountable team behind the whole outcome.',
    },
    technology: {
      title: 'Technology',
      description:
        'For technology: run enterprise A/V as standard network infrastructure — one interface for every system, no proprietary hardware or specialist programming.',
    },
    finance: {
      title: 'Finance',
      description:
        'For finance: multimedia infrastructure that appreciates. One subscription replaces the 5–7 year refresh cycle and compounding capital costs.',
    },
    marketing: {
      title: 'Marketing',
      description:
        'For marketing: deliver the right experience in the right zone at the right moment — schedule and coordinate campaigns across the whole property.',
    },
    facilities: {
      title: 'A/V & Facilities',
      description:
        'For A/V and facilities: see everything, control anything, from any device — proactive command of one coherent system without server-room runs.',
    },
  };
  return (
    map[id] ?? {
      title: 'Who we serve',
      description: seoPages['/who-we-serve'].description,
    }
  );
}

/** Industry pages — /industries/[slug] */
export function getIndustrySeo(slug: string): PageSeo {
  const map: Record<string, PageSeo> = {
    'casinos-gaming': {
      title: 'Casinos & gaming',
      description:
        'LUCI runs casino floors, sportsbooks, LED video walls, odds boards, signage tickers, and every audio zone from one interface — with a team that stays.',
    },
    'hotels-resorts': {
      title: 'Hotels & resorts',
      description:
        'LUCI runs property-wide A/V, signage, and building systems for hotels and resorts — one interface, one accountable team, ops continuity across the property.',
    },
    'sports-venues': {
      title: 'Sports & venues',
      description:
        'LUCI orchestrates arenas and event spaces — game-day presets, video walls, audio zones, and signage from one interface.',
    },
    'airports-transportation': {
      title: 'Airports & transportation',
      description:
        'LUCI runs A/V, digital signage, and building systems across airports, rail, and transit hubs — one interface for every terminal and zone.',
    },
    'conference-convention-centers': {
      title: 'Conference & convention centers',
      description:
        'LUCI runs meeting spaces, digital signage, and event turnover for conference and convention centers — divisible rooms and zone control from one interface.',
    },
  };
  return (
    map[slug] ?? {
      title: 'Industries',
      description: seoPages['/industries'].description,
    }
  );
}

/** Case study pages — /resources/case-studies/[slug] */
export function getCaseStudySeo(slug: string): PageSeo {
  const map: Record<string, PageSeo> = {
    'ameristar-council-bluffs': {
      title: 'Ameristar Council Bluffs case study',
      description:
        'LUCI modernized Ameristar Council Bluffs’ A/V foundation in under three days — relocating all processing to the data center on land, without ever taking the floor down.',
    },
    'tachi-palace': {
      title: 'Tachi Palace case study',
      description:
        'LUCI brought Tachi Palace’s bingo hall alive in one week — eight LED video walls hung and tuned, every audio zone wired for control, all on one interface.',
    },
    'sams-town': {
      title: "Sam's Town case study",
      description:
        "LUCI replaced Sam's Town sportsbook TVs with one 480-square-foot LED wall — looped into the platform already running the property, with race video over existing coax.",
    },
    'aliante': {
      title: 'Aliante case study',
      description:
        "LUCI built a 106-foot curved LED wall for Aliante's sportsbook — one of the biggest in Las Vegas — and pulled fifteen racks of legacy gear down to two on the LUCI platform already running the property.",
    },
    yaamava: {
      title: "Yaamava' Resort & Casino case study",
      description:
        "LUCI consolidated Yaamava's broadcast content, signage, audio, data, and displays onto one platform, then built 34 new LED walls across seven venues into it — 420 displays and 284 audio zones run from a single interface.",
    },
  };
  return (
    map[slug] ?? {
      title: 'Case studies',
      description: seoPages['/resources/case-studies'].description,
    }
  );
}
