// FLAG: Live screen view is included from the tuned two-pager but is not present in the feature-list JSON.

export const RELEASE_DATE = 'January 2026' as const;

type MediaPlaceholder = {
  kind: 'placeholder';
  label: string;
};

type FeatureScenario = {
  id: string;
  label: string;
  line: string;
  /** Optional full-bleed photo (public path); Thesis 1 Venue panels AI photo cards */
  image?: string;
  /** object-position for keeping hand/panel above the text scrim */
  imagePosition?: string;
};

type FeatureDraft = {
  id: string;
  pillarId: 'room-control' | 'view-control' | 'security-control';
  name: string;
  oneLiner: string;
  paragraph: string;
  benefits: readonly string[];
  media: MediaPlaceholder;
  /** Thesis 1 pilot — when present, open body uses scenarios + limits instead of benefits list */
  scenariosSubsectionLabel?: string;
  scenarios?: readonly FeatureScenario[];
  limits?: readonly string[];
  /** When set, customer open body shows Technical detail jump to this tech item id */
  technicalJumpId?: string;
};

type UpgradeGuideDraft = {
  meta: {
    path: string;
    title: string;
    description: string;
    releaseDate: typeof RELEASE_DATE;
    theme: 'Putting the power of programming in your hands';
  };
  hero: {
    eyebrow: string;
    headline: {
      text: 'Putting the power of programming in your hands';
      leading: string;
      mintAccent: 'power of programming';
      trailing: string;
    };
    date: typeof RELEASE_DATE;
    ctas: readonly {
      label: string;
      href: string;
      audience: 'prospects' | 'existing-customers';
    }[];
  };
  thesis: {
    heading: string;
    paragraphs: readonly [string, string];
    media: {
      kind: 'placeholder';
      label: string;
      secondaryLabel?: string;
    };
  };
  pillars: readonly {
    id: 'room-control' | 'view-control' | 'security-control';
    number: '01' | '02' | '03';
    name: string;
    summary: string;
    featurePills: readonly {
      id: string;
      name: string;
      oneLiner: string;
    }[];
  }[];
  supportSpotlight: {
    title: string;
    oneLiner: string;
    featureId: string;
  };
  features: readonly FeatureDraft[];
  technical: {
    heading: string;
    intro: string;
    groups: readonly {
      id: string;
      heading: string;
      intro: string;
      items: readonly {
        id: string;
        name: string;
        summary?: string;
        details: readonly string[];
      }[];
    }[];
  };
  upgradePath: {
    heading: string;
    intro: string;
    timing: {
      releaseLabel: string;
      releaseDate: typeof RELEASE_DATE;
      paceLine: string;
      rolloutNote: string;
    };
    whatIsInvolved: {
      heading: string;
      paragraph: string;
      steps: readonly {
        number: '01' | '02' | '03' | '04';
        title: string;
        body: string;
      }[];
    };
  };
  faq: readonly {
    question: string;
    answer: string;
  }[];
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    contact: {
      name: string;
      role: string;
      email: string;
      phone: string;
    };
    actions: readonly {
      label: string;
      href: string;
      audience: 'prospects' | 'existing-customers';
    }[];
  };
  openFlags: readonly string[];
};

export const upgradeGuide = {
  meta: {
    path: '/luci-upgrade-guide',
    title: 'New LUCI Upgrade Guide | LUCI Systems',
    description:
      'Explore what is new in LUCI, review the technical detail, and understand the path to an upgrade.',
    releaseDate: RELEASE_DATE,
    theme: 'Putting the power of programming in your hands',
  },

  hero: {
    eyebrow: 'A new version of LUCI is on the way',
    headline: {
      text: 'Putting the power of programming in your hands',
      leading: 'Putting the ',
      mintAccent: 'power of programming',
      trailing: ' in your hands',
    },
    date: RELEASE_DATE,
    ctas: [
      {
        label: 'Book a demo',
        href: '/contact',
        audience: 'prospects',
      },
      {
        label: 'Talk to your account team',
        href: 'mailto:mepstein@lucisystems.com',
        audience: 'existing-customers',
      },
    ],
  },

  thesis: {
    heading: 'The only A/V that scales and improves is about to get even better',
    paragraphs: [
      'We rebuilt LUCI from the ground up around the capabilities, functionality, and performance you asked for—making monitoring, support, and future upgrades easier. You gain more control, with the LUCI team still right there when you need us.',
      'We’ve been building toward this: <strong>a more capable LUCI</strong> with new ways to control rooms, shape the interface, see live status, govern access, and reach support with better context. It’s a major step forward for a platform designed to <strong>scale with your needs</strong> and improve over time.',
    ],
    media: {
      kind: 'placeholder',
      label: 'Platform walkthrough — coming soon',
      secondaryLabel: 'Reserved media slot',
    },
  },

  pillars: [
    {
      id: 'room-control',
      number: '01',
      name: 'Greater control of the guest experience',
      summary: 'Tune in-room panels, stage events, and group audio zones.',
      featurePills: [
        {
          id: 'venue-panels',
          name: 'Venue panels',
          oneLiner:
            'Venue panels let operators and guests adjust what they need in only the room—or rooms—they should control, with only the actions approved for that space.',
        },
        {
          id: 'staging',
          name: 'Staging',
          oneLiner:
            'Prepare screens, sources, and audio levels behind the scenes. Apply the change on cue, or save it as a preset for next time.',
        },
        {
          id: 'audio-group-control',
          name: 'Audio group control',
          oneLiner:
            'Move several audio zones together: apply the same incremental change to keep their balance, or set them all to one volume.',
        },
      ],
    },
    {
      id: 'view-control',
      number: '02',
      name: 'Flexible control of your view',
      summary: 'Adjust the interface to reflect your brand and customize your view.',
      featurePills: [
        {
          id: 'customizable-interface',
          name: 'Customizable interface',
          oneLiner:
            'Make LUCI your own with brand colors, light and dark modes, backsplashes, and more.',
        },
        {
          id: 'live-map-flexibility',
          name: 'Live map flexibility',
          oneLiner:
            'Upload your own floor plan maps, rotate them to match your view, and see every device’s status update live.',
        },
        {
          id: 'live-screen-view',
          name: 'Live screen view',
          oneLiner:
            'See what’s playing on any TV or LED wall from your iPad or any browser device, shown exactly as it appears live.',
        },
      ],
    },
    {
      id: 'security-control',
      number: '03',
      name: 'Deeper control over security',
      summary: 'See activity, govern access, and bring support closer.',
      featurePills: [
        {
          id: 'audit-trails',
          name: 'Audit trails',
          oneLiner:
            'Trace each action to a person, preset, or schedule and export the record when needed.',
        },
        {
          id: 'live-monitoring',
          name: 'Live monitoring',
          oneLiner:
            'See device, display, and audio status live, including when a device stops responding.',
        },
        {
          id: 'sign-in-session-control',
          name: 'Sign-in & session control',
          oneLiner:
            'Use email, PIN, or Microsoft for sign-in, end sessions on command, or message everyone in the platform.',
        },
      ],
    },
  ],

  supportSpotlight: {
    title: 'In-product support',
    oneLiner:
      'Raise a request from a device, incident, or error with context and logs attached—and when something on your property goes down, the LUCI team gets an alert so they can jump on it right away.',
    featureId: 'in-product-support',
  },

  features: [
    {
      id: 'venue-panels',
      pillarId: 'room-control',
      name: 'Venue panels',
      oneLiner:
        'Venue panels let operators and guests adjust what they need in only the room—or rooms—they should control, with only the actions approved for that space.',
      paragraph:
        'Put focused room control where the work happens. Each panel starts with the endpoints assigned to its venue, then an administrator chooses which devices, actions, and sources appear.\n\nStaff panels can require a PIN, while guest-facing panels can stay open. Operators and guests adjust what they need from a basic panel or list interface—without access to the main LUCI application—scoped to the room or rooms that panel is for. Scheduling allows automatic shut-down for venue panels in a selected space.',
      benefits: [],
      media: {
        kind: 'placeholder',
        label: 'Venue panel controls — screenshot placeholder',
      },
      scenariosSubsectionLabel: 'Use cases on your property',
      scenarios: [
        {
          id: 'ballroom',
          label: 'Ballroom',
          line: 'Mount a wall panel so event staff control only that event space\u2019s endpoints. Require a PIN, then expose approved controls such as source, volume, mute, or power as the room needs.',
          image: '/images/upgrade-guide/venue-panels/use-case-ballroom.jpg',
          imagePosition: '50% 30%',
        },
        {
          id: 'cabana-pool',
          label: 'Cabana / pool',
          line: 'Mount a touch panel or place an iPad in each cabana so guests pick the channel for that cabana\u2019s screen only. Leave it open with tap-to-wake\u2014no PIN.',
          image: '/images/upgrade-guide/venue-panels/use-case-cabana-pool.jpg',
          imagePosition: '50% 32%',
        },
        {
          id: 'bar',
          label: 'Bar',
          line: 'Keep a tablet at the bar so bartenders adjust source and volume for that space\u2019s TVs. Hide power so the TVs stay on.',
          image: '/images/upgrade-guide/venue-panels/use-case-bar.jpg',
          imagePosition: '50% 30%',
        },
        {
          id: 'conference-media',
          label: 'Conference / media room',
          line: 'Place an iPad or mount a panel so staff switch that room\u2019s channel or device from a panel that starts with the room\u2019s endpoints\u2014nothing else on the property.',
          image: '/images/upgrade-guide/venue-panels/use-case-conference-media.jpg',
          imagePosition: '50% 30%',
        },
      ],
      limits: [
        'Show operators only the room or rooms assigned to that panel.',
        'Hide individual actions, such as turning power on or off, while leaving source and volume available.',
        'Limit source choices to an approved list.',
        'Require a PIN for staff or leave a guest-facing panel open with tap-to-wake.',
        'Use a dedicated wall touchscreen or a paired tablet, iPad, or browser.',
        'Schedule automatic shut-down for venue panels in a selected space.',
      ],
      technicalJumpId: 'technical-venue-panels',
    },
    {
      id: 'staging',
      pillarId: 'room-control',
      name: 'Staging',
      oneLiner:
        'Prepare screens, sources, and audio levels behind the scenes. Apply the change on cue, or save it as a preset for next time.',
      paragraph:
        'Build the next room state while the current one keeps running, with screens, sources, volumes, and content gathered into one staged set. Apply it when the event is ready, save it as a preset for reuse, or give the preset a time and review what has run and what is coming.',
      benefits: [
        'Prepares the next look without changing the live room',
        'Applies the staged set on cue',
        'Saves staged sets as reusable presets',
        'Turns a timed preset into a scheduled preset',
        'Shows past and upcoming activity across chart views',
      ],
      media: {
        kind: 'placeholder',
        label: 'Staging roster and apply action — screenshot placeholder',
      },
    },
    {
      id: 'audio-group-control',
      pillarId: 'room-control',
      name: 'Audio group control',
      oneLiner:
        'Move several audio zones together: apply the same incremental change to keep their balance, or set them all to one volume.',
      paragraph:
        'Adjust several audio zones as a group without giving up the way the room has been tuned. Move every selected zone by the same increment to preserve its relative balance, set all selected zones to one level, or adjust one zone on its own.',
      benefits: [
        'Moves selected zones by the same increment',
        'Preserves the tuned balance between zones',
        'Sets a group to one shared level',
        'Allows an individual zone to move alone',
      ],
      media: {
        kind: 'placeholder',
        label: 'Audio group controls — screenshot placeholder',
      },
    },
    {
      id: 'customizable-interface',
      pillarId: 'view-control',
      name: 'Customizable interface',
      oneLiner:
        'Make LUCI your own with brand colors, light and dark modes, backsplashes, and more.',
      paragraph:
        'Shape LUCI around the property’s own identity and operating cues. Sign-in and splash screens can carry property photography and marks, while curated themes, light and dark modes, background treatments, typography, and endpoint status colors give the interface a familiar look.',
      benefits: [
        'Uses property photography and marks on sign-in and splash screens',
        'Offers light and dark modes with curated themes',
        'Adjusts background blur, opacity, and position',
        'Applies recognizable endpoint status colors across the install',
        'Can be designed by LUCI or adjusted by the property',
      ],
      media: {
        kind: 'placeholder',
        label: 'Customized LUCI interface — screenshot placeholder',
      },
    },
    {
      id: 'live-map-flexibility',
      pillarId: 'view-control',
      name: 'Live map flexibility',
      oneLiner:
        'Upload your own floor plan maps, rotate them to match your view, and see every device’s status update live.',
      paragraph:
        'Use the property’s own floor plans instead of a generic layout, then rotate and orient each map to match the physical space. The map remains connected to device state, so the view operators recognize is also the surface they use to see what is happening.',
      benefits: [
        'Loads the property’s own floor plans',
        'Rotates and orients maps to match the physical space',
        'Updates device state through a live connection',
        'Shows every device’s state from the map',
      ],
      media: {
        kind: 'placeholder',
        label: 'Live property map — screenshot placeholder',
      },
    },
    {
      id: 'live-screen-view',
      pillarId: 'view-control',
      name: 'Live screen view',
      oneLiner:
        'See what’s playing on any TV or LED wall from your iPad or any browser device, shown exactly as it appears live.',
      paragraph:
        'Live screen view shows what is playing on a selected TV or LED wall from an iPad or any browser device, exactly as it appears live. It gives the operator a direct visual check of the current screen from the device in hand.',
      benefits: [
        'Checks what is playing on a TV',
        'Checks what is playing on an LED wall',
        'Shows the screen as it appears live',
        'Makes the view available from an iPad or any browser device',
      ],
      scenariosSubsectionLabel: 'Use cases on your property',
      scenarios: [
        {
          id: 'sportsbook-call',
          label: 'Sportsbook call',
          line: 'Someone radios that a screen looks wrong. From the desk, back of house, or an iPad, open LUCI, select that TV or LED wall, and see what is live without walking to it.',
        },
        {
          id: 'pre-shift-wall',
          label: 'Pre-shift wall check',
          line: 'Before doors or a big game, scan each TV or LED wall from back of house or any browser. Catch a dead or wrong feed before guests do, without walking the wall.',
        },
        {
          id: 'mid-event-swap',
          label: 'Mid-event swap',
          line: 'A promo or game changes mid-afternoon. From the office or anywhere you run LUCI, confirm that TV or LED wall is on the right feed before you switch the next one, without standing in front of it.',
        },
      ],
      media: {
        kind: 'placeholder',
        label: 'Live screen view on iPad — screenshot placeholder',
      },
    },
    {
      id: 'audit-trails',
      pillarId: 'security-control',
      name: 'Audit trails',
      oneLiner:
        'Trace each action to a person, preset, or schedule and export the record when needed.',
      paragraph:
        'Follow the record behind each action: who or what triggered it, when it happened, and which device it affected. Search by device or user, filter by action type, export the results, and review incident duration when a device stops responding and later returns.',
      benefits: [
        'Records actions against a person and a time',
        'Identifies a person, preset, or schedule as the trigger',
        'Searches by device or user and filters by action type',
        'Exports the record as a CSV',
        'Opens and closes incidents as devices stop responding and recover',
      ],
      media: {
        kind: 'placeholder',
        label: 'Searchable audit trail — screenshot placeholder',
      },
      technicalJumpId: 'technical-audit-trails',
    },
    {
      id: 'live-monitoring',
      pillarId: 'security-control',
      name: 'Live monitoring',
      oneLiner:
        'See device, display, and audio status live, including when a device stops responding.',
      paragraph:
        'See the current state of devices, displays, and audio zones from one view, including what is on, what is off, and what has a fault. Filter the view to find what needs attention, follow incidents as they open and close, and raise a support request with the relevant incident context attached.',
      benefits: [
        'Shows live device, display, and audio-zone state',
        'Surfaces incidents when a device stops responding',
        'Closes an incident when the device recovers',
        'Filters by venue, device type, or status',
        'Carries incident context into a support request',
      ],
      media: {
        kind: 'placeholder',
        label: 'Live monitoring view — screenshot placeholder',
      },
      technicalJumpId: 'technical-live-monitoring',
    },
    {
      id: 'sign-in-session-control',
      pillarId: 'security-control',
      name: 'Sign-in & session control',
      oneLiner:
        'Use email, PIN, or Microsoft for sign-in, end sessions on command, or message everyone in the platform.',
      paragraph:
        'Give users the sign-in method that fits their work, from email and PIN access to Microsoft credentials through Entra ID. Administrators can see who is active, end a session, and post a message banner to everyone currently using LUCI.',
      benefits: [
        'Supports email, PIN, and Microsoft Entra ID sign-in',
        'Shows who is active in the platform',
        'Lets administrators terminate active sessions',
        'Posts a site-wide message to signed-in users',
        'Consolidates outbound connections through a private tunnel',
      ],
      media: {
        kind: 'placeholder',
        label: 'Identity and active-session controls — screenshot placeholder',
      },
    },
    {
      id: 'in-product-support',
      pillarId: 'security-control',
      name: 'In-product support',
      oneLiner:
        'Raise a request from a device, incident, or error with context and logs attached—and when something on your property goes down, the LUCI team gets an alert so they can jump on it right away.',
      paragraph:
        'Start a support request from the device, incident, or error where the issue appears. The request carries what happened, what changed, and the relevant logs, while the property decides what to escalate and the LUCI team remains available to act on the fuller context. When something on your property goes down, the LUCI team gets an alert so they can jump on it right away.',
      benefits: [
        'Starts the request from the device, incident, or error',
        'Attaches relevant context and logs',
        'Keeps the decision to escalate with the property',
        'Gives the LUCI team better context when support is needed',
        'Alerts the LUCI team when something on your property goes down so they can jump on it right away',
      ],
      media: {
        kind: 'placeholder',
        label: 'In-product support request flow — screenshot placeholder',
      },
    },
  ],

  technical: {
    heading: 'Technical detail',
    intro:
      'A deeper view for the IT or A/V lead: how LUCI manages endpoints, layouts, identity, diagnostics, and property connections behind the release features.',
    groups: [
      {
        id: 'platform-capabilities',
        heading: 'Platform capabilities',
        intro:
          'Technical capabilities that support the platform without carrying one of the three release-pillar arguments.',
        items: [
          {
            id: 'technical-audio-group-control',
            name: 'Audio group control',
            summary:
              'Move several zones proportionally, set every zone to the same level, or move one alone.',
            details: [
              'Move several zones proportionally so their tuned balance survives.',
              'Set every selected zone to the same level.',
              'Move one zone independently.',
            ],
          },
          {
            id: 'add-any-endpoint',
            name: 'Add any endpoint from LUCI',
            summary:
              'Every device type added through the interface — one at a time or twenty at once.',
            details: [
              'Add every device type through the LUCI interface.',
              'Add one endpoint from the map or create a batch with incrementing addresses.',
              'Receive a warning when an endpoint record already exists.',
            ],
          },
          {
            id: 'video-wall-layout-sync',
            name: 'Video wall layout sync',
            summary:
              'Wall layouts pulled from the processor with per-pixel geometry, not rebuilt by hand.',
            details: [
              'Pull wall layouts and window assignments from the video wall processor.',
              'Preserve per-pixel geometry instead of rebuilding layouts by hand.',
              'Assign multi-window templates to a player and change them live.',
            ],
          },
          {
            id: 'central-display-model-catalog',
            name: 'Central display model catalog',
            summary:
              'New display models added centrally and pushed to the property — no on-site configuration edits.',
            details: [
              'Add new hospitality display models centrally.',
              'Push model support to the property.',
              'Avoid editing configuration files on site when a new model is purchased.',
            ],
          },
        ],
      },
      {
        id: 'it-av-detail',
        heading: 'IT and A/V detail',
        intro:
          'The implementation detail behind the pillar features, identity controls, property connection, and diagnostics.',
        items: [
          {
            id: 'technical-venue-panels',
            name: 'Venue panels',
            summary:
              'Pair each in-venue panel to a hierarchy location so it boots into a locked-down control surface for that space’s endpoints.',
            details: [
              'Tie a panel to a point in the site hierarchy: site, building, floor, or venue.',
              'Inherit the endpoints assigned to that venue, then narrow access by control surface rather than by device.',
              'Load a pared-down interface with no route into the administrative application.',
              'Return the panel to its paired configuration on every boot.',
              'Load `/panels` from the property’s LUCI host as the panel boot URL.',
              'Issue a pairing code for the device or browser; a cookie binds that client to its panel configuration until an administrator revokes the pairing.',
              'Revoke a pairing and issue a new code when a panel is moved or replaced.',
              'Make the PIN optional, with idle lock and timeout settings for PIN-protected panels and tap-to-wake behavior for open panels.',
              'Configure control-surface visibility per endpoint and restrict sources with allow-lists or favorites.',
              'Use dedicated wall panels, including Rock Panel–class devices, or pair a browser or iPad.',
              'Review paired-device telemetry including last seen, last command, lock state, and platform.',
              'Edit the endpoint set after creation, including adding or changing endpoints beyond the automatically inherited set.',
              'Deploy panels primarily for one room, or sometimes a couple of rooms, rather than using one panel for the whole site.',
            ],
          },
          {
            id: 'technical-staging-presets-schedules',
            name: 'Staging, presets, and schedules',
            details: [
              'Treat a staged set, preset, and scheduled preset as the same command set at different stages: optionally named and optionally timed.',
              'Review, clear, or edit the staged roster item by item before commands are sent.',
              'Seed a staged set from the room’s current state.',
              'Review differences against saved values before committing a preset edit.',
              'Apply a control-engine lockout window to a scheduled preset, with a visible device indicator and administrator override.',
            ],
          },
          {
            id: 'technical-audit-trails',
            name: 'Audit trails',
            details: [
              'Group device commands by the event that triggered them: a user, preset, or schedule.',
              'Record administrative actions alongside device commands.',
              'Surface out-of-band changes when the device driver reports them.',
              'Search the record by device or user and filter by action type.',
              'Export the results as a CSV.',
            ],
          },
          {
            id: 'technical-live-monitoring',
            name: 'Live monitoring',
            details: [
              'Show the current state of devices, displays, and audio zones, including what is on, what is off, and what has a fault.',
              'Filter the view by venue, device type, or status.',
              'Open an incident when a device stops responding and close it when the device recovers, so the fault has a duration.',
              'Keep incidents distinct from support tickets; a person chooses what to escalate.',
              'Attach the incident’s context and logs to the support request.',
              'Loop the LUCI team in on that request so they can act with the incident context.',
            ],
          },
          {
            id: 'endpoint-management',
            name: 'Endpoint management',
            details: [
              'Create all device types through the interface, including LUCI-supplied hardware.',
              'Use bulk creation, incrementing addresses, and duplicate detection.',
            ],
          },
          {
            id: 'identity-sessions',
            name: 'Identity and sessions',
            details: [
              'Use a standard Microsoft Entra ID app registration with a callback to the property’s LUCI server.',
              'Create a profile on first sign-in and assign a PIN for floor use when needed.',
              'Terminate active sessions and communicate through a site-wide banner.',
            ],
          },
          {
            id: 'private-tunnel',
            name: 'Private tunnel',
            details: [
              'Consolidate outbound destinations into one encrypted connection between the on-property system and LUCI.',
              'Rotate keys on a schedule instead of leaving credentials unrotated on the local machine.',
              'Give IT one paired outbound connection to review, with no standing inbound access to the property network.',
            ],
          },
          {
            id: 'scoped-diagnostic-capture',
            name: 'Scoped diagnostic capture',
            details: [
              'Aim debug-level logging at one endpoint, driver, or module for a defined window.',
              'Capture a short reproduction window instead of increasing logging across the system.',
              'Review the output on site or send it to LUCI with a support request.',
            ],
          },
        ],
      },
    ],
  },

  upgradePath: {
    heading: 'Your path to the new LUCI',
    intro:
      'Your upgrade is fulfilled one-to-one with LUCI under your current contract through a new, preconfigured laptop shipped directly to you—not a download installed on your live machine. Your current system keeps running until your team has verified the new one and is ready to switch. Plan on about an hour or two for the cutover itself, with the LUCI team alongside you from scheduling through the switch.',
    timing: {
      releaseLabel: 'Release date',
      releaseDate: RELEASE_DATE,
      paceLine:
        'About 10 customers a week once upgrades are underway (approximate; Jane will dial in).',
      rolloutNote:
        'Upgrades are scheduled directly with your team in a coordinated sequence — not all at once.',
    },
    whatIsInvolved: {
      heading: 'How your upgrade works',
      paragraph:
        'A separate, preconfigured laptop lets your team verify the new LUCI without changing the system running today. LUCI coordinates the fulfillment and stays with you through the switch.',
      steps: [
        {
          number: '01',
          title: 'Schedule with LUCI',
          body: 'Your account team confirms your upgrade schedule and coordinates what your team should expect.',
        },
        {
          number: '02',
          title: 'Your laptop ships preloaded',
          body: 'LUCI builds and tests your new laptop, loads the new LUCI and security tunnel stack, and ships it preconfigured for internet and VPN connection.',
        },
        {
          number: '03',
          title: 'Plug in and verify',
          body: 'Connect the new laptop and verify it while your current system keeps running untouched. Nothing is downloaded onto the live machine.',
        },
        {
          number: '04',
          title: 'Switch when you are ready',
          body: 'Once your team is satisfied, LUCI helps complete the switch. Plan on about an hour or two for the upgrade itself, with timing confirmed for your site.',
        },
      ],
    },
  },

  faq: [
    {
      question: 'Is this a software update or a hardware upgrade?',
      answer:
        'The upgrade is fulfilled with a new laptop shipped by LUCI, with the new LUCI and security tunnel stack already loaded. It is not a download applied to your live machine; your current system keeps running until you have verified the new laptop and are ready to switch.',
    },
    {
      question: 'How long does the upgrade take?',
      answer:
        'Plan on about an hour or two for the upgrade itself. Your account team will confirm the timing for your site when your shipment and switch are scheduled.',
    },
    {
      question: 'What happens to our current presets and configurations?',
      answer:
        'Existing presets and configurations are reviewed as part of your upgrade plan. The LUCI team will explain how they will be handled before the upgrade is scheduled, rather than assume every configuration follows the same path.',
    },
    {
      question: 'Is there a cost for existing LUCI clients?',
      answer:
        'The upgrade is free for existing LUCI clients. Your account team will confirm the scope for your site during the readiness review.',
    },
    {
      question: 'Can we see the new LUCI before our upgrade?',
      answer:
        'Talk to your account team or book a demo. The LUCI team can confirm the appropriate preview path and availability for your site.',
    },
    {
      question: 'What if we installed LUCI recently?',
      answer:
        'Recent installations follow the same scheduled fulfillment path. Your account team will confirm when your preconfigured laptop ships and coordinate verification and switch timing with you.',
    },
    {
      question: 'How does rollout work across multiple sites?',
      answer:
        'Rollout is ordered rather than simultaneous. LUCI works with your account team to sequence sites on a schedule confirmed with you; this page does not promise a universal timeline.',
    },
    {
      question: 'What does our IT team need to prepare?',
      answer:
        'IT should be ready to review the current environment, compatibility, access, permissions, and scheduling with LUCI. Any site prerequisites will be identified during readiness review before the work is scheduled.',
    },
  ],

  cta: {
    eyebrow: 'The new version of LUCI',
    heading: 'More control in your hands, with the LUCI team still there when you need us.',
    body:
      'See the release in a live demo, or talk with your account team about readiness and the upgrade path for your site.',
    contact: {
      name: 'Michael Epstein',
      role: 'CEO',
      email: 'mepstein@lucisystems.com',
      phone: '833.333.5868',
    },
    actions: [
      {
        label: 'Book a demo',
        href: '/contact',
        audience: 'prospects',
      },
      {
        label: 'Talk to your account team',
        href: 'mailto:mepstein@lucisystems.com',
        audience: 'existing-customers',
      },
    ],
  },

  openFlags: [
    'Past-improvements timeline: Jane is leaning toward skipping it; thesis opens with Jane’s locked rebuild intro, then the capability paragraph; no timeline.',
    'Live screen view: included from the tuned two-pager, but it is still missing from the feature-list JSON.',
    'Technical detail format: accessible accordions are proposed instead of tabs; CoS should flag the recommendation for Jane.',
    'Access model: still open. Per the September 17 lock, do not create a public stumble-upon self-serve upgrade page; the eventual page may remain unlisted until Jane decides.',
  ],
} as const satisfies UpgradeGuideDraft;
