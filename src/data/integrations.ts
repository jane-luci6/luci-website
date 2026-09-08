/**
 * Integrations — technologies LUCI orchestrates alongside.
 * Expand this list as official brand logos land in
 * public/images/logos/integrations/.
 *
 * `placeholder: true` = temporary wordmark SVG until an official logo file replaces it.
 */

export interface Integration {
  /** Display name */
  name: string;
  /** File under /images/logos/integrations/ */
  logo: string;
  /** Optional category for future grouping */
  category?: 'audio' | 'display' | 'led' | 'content' | 'network' | 'signage';
  /** True when the asset is a temporary wordmark, not an official logo */
  placeholder?: boolean;
}

export const integrationsHero = {
  lockupName: 'Integrations',
  lockupRole: 'The stack you already run',
  deck: 'LUCI connects to the systems and content sources on your property through open APIs — regardless of protocol, make, or model. No rip-and-replace.',
} as const;

export const integrationsGrid = {
  lockupName: 'Technologies we orchestrate',
  lockupRole: 'A growing list',
  deck: 'A starter set of the platforms, processors, displays, and content sources LUCI runs alongside. More to come.',
} as const;

export const integrations: Integration[] = [
  { name: 'Q-SYS', logo: 'q-sys.svg', category: 'audio', placeholder: true },
  { name: 'TelemetryTV', logo: 'telemetry.svg', category: 'signage', placeholder: true },
  { name: 'LG', logo: 'lg.svg', category: 'display' },
  { name: 'DirecTV', logo: 'directv.svg', category: 'content', placeholder: true },
  { name: 'Novastar', logo: 'novastar.svg', category: 'led', placeholder: true },
  { name: 'Samsung', logo: 'samsung.svg', category: 'display' },
  { name: 'Panasonic', logo: 'panasonic.svg', category: 'display' },
  { name: 'Shure', logo: 'shure.svg', category: 'audio', placeholder: true },
  { name: 'Cisco', logo: 'cisco.svg', category: 'network' },
  { name: 'EverPass', logo: 'everpass.svg', category: 'content', placeholder: true },
];

export const integrationsCta = {
  kicker: 'Next step',
  title: 'See LUCI on <em>your stack</em>.',
  sub: 'Tell us what you’re running — we’ll show you how it comes onto one interface.',
} as const;
