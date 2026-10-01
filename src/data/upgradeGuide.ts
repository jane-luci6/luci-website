// FLAG: Live screen view is included from the tuned two-pager but is not present in the feature-list JSON.

export const RELEASE_DATE = 'January 19, 2027' as const;

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
  /** Optional IT/A/V disclosure. Omit when there is little beyond the customer copy. */
  howItWorks?: {
    /** Defaults to "How it works" in the page. */
    label?: string;
    details: readonly string[];
  };
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
      'Explore what is new in LUCI, dig into how each feature works, and understand the path to an upgrade.',
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
    heading: 'A more capable LUCI, built for what comes next',
    paragraphs: [
      'The new LUCI is rebuilt around the way your teams operate: more control in each space, a clearer view of the property, stronger oversight, and support tied directly to the issue. Monitoring, diagnostics, and future updates now work through the same platform.',
      'Your team can do more on its own without being left on its own. Operators gain direct control over rooms, views, and access while the LUCI team remains alongside you to monitor, diagnose, and support the system.',
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
      summary:
        'Put focused controls in each space, prepare changes before they go live, and adjust grouped audio without losing the balance between zones.',
      featurePills: [
        {
          id: 'venue-panels',
          name: 'Venue panels',
          oneLiner:
            'Put room-specific controls where the work happens. Each panel shows only its assigned spaces and approved actions, sources, and presets, with optional PIN access.',
        },
        {
          id: 'staging',
          name: 'Staging',
          oneLiner:
            'Prepare screens, sources, volumes, and content while current programming continues. Review the staged changes, then apply them together on cue or save them as a preset.',
        },
        {
          id: 'audio-group-control',
          name: 'Audio group control',
          oneLiner:
            'Adjust several audio zones together while preserving their relative levels, set them to one level, or move one zone independently.',
        },
      ],
    },
    {
      id: 'view-control',
      number: '02',
      name: 'Flexible control of your view',
      summary:
        'Bring the property into the interface, orient live maps to the physical space, and confirm what screens are showing without walking the floor.',
      featurePills: [
        {
          id: 'customizable-interface',
          name: 'Customizable interface',
          oneLiner:
            'Apply property photography, marks, colors, and approved type styles across sign-in screens, splash screens, and the operating interface.',
        },
        {
          id: 'live-map-flexibility',
          name: 'Live map flexibility',
          oneLiner:
            'Load the property’s own floor plans and orient each map to match the physical space. Live device state appears on the same view.',
        },
        {
          id: 'live-screen-view',
          name: 'Live screen view',
          oneLiner:
            'Select a TV or LED wall to confirm what is playing without walking the floor. Synced wall layouts reflect processor geometry in LUCI.',
        },
      ],
    },
    {
      id: 'security-control',
      number: '03',
      name: 'Deeper control over security',
      summary:
        'Trace changes, see device health in real time, and control who can access an active session.',
      featurePills: [
        {
          id: 'audit-trails',
          name: 'Audit trails',
          oneLiner:
            'Trace changes by time, user, device, and trigger—including presets, schedules, and supported changes made outside LUCI.',
        },
        {
          id: 'live-monitoring',
          name: 'Live monitoring',
          oneLiner:
            'See device state and incidents in real time across the map and system health. Escalate an issue to LUCI with its context and logs attached.',
        },
        {
          id: 'sign-in-session-control',
          name: 'Sign-in & session control',
          oneLiner:
            'Choose email, PIN, or Microsoft Entra ID sign-in; see active sessions, sign users out, and message everyone currently using LUCI.',
        },
      ],
    },
  ],

  supportSpotlight: {
    title: 'In-product support',
    oneLiner:
      'Start a request from the device, incident, or error itself so the relevant context and logs travel with it. Your team chooses when to escalate; LUCI remains connected and ready to act.',
    featureId: 'in-product-support',
  },

  features: [
    {
      id: 'venue-panels',
      pillarId: 'room-control',
      name: 'Venue panels',
      oneLiner:
        'Put room-specific controls where the work happens. Each panel shows only its assigned spaces and approved actions, sources, and presets, with optional PIN access.',
      paragraph:
        'Venue panels put focused controls in the room without opening the full LUCI administrative application. Assign a panel to one or more venues and it inherits the endpoints already assigned there. Then decide which controls—source, volume, mute, power, or approved presets—are available. Administrators narrow the controls instead of building another device list from scratch.\n\nRequire a PIN for staff-facing panels or leave a guest panel open. A paired wall touchscreen, tablet, iPad, or browser returns to its assigned panel configuration, keeping each user inside the spaces and actions intended for them.',
      benefits: [
        'Inherit the endpoints already assigned to a venue',
        'Limit the panel to one venue or several related venues',
        'Expose only the controls, sources, and presets approved for that panel',
        'Keep users out of the full administrative application',
        'Require a PIN for staff or leave a guest-facing panel open',
        'Pair a wall touchscreen, tablet, iPad, or browser',
      ],
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
        },
        {
          id: 'cabana-pool',
          label: 'Cabana / pool',
          line: 'Mount a touch panel or place an iPad in each cabana so guests pick the channel for that cabana\u2019s screen only. Leave it open with tap-to-wake\u2014no PIN.',
        },
        {
          id: 'bar',
          label: 'Bar',
          line: 'Keep a tablet at the bar so bartenders adjust source and volume for that space\u2019s TVs. Hide power so the TVs stay on.',
        },
        {
          id: 'conference-media',
          label: 'Conference / media room',
          line: 'Place an iPad or mount a panel so staff switch that room\u2019s channel or device from a panel that starts with the room\u2019s endpoints\u2014nothing else on the property.',
        },
      ],
      howItWorks: {
        details: [
          'Tie a panel to a point in the site hierarchy: site, building, floor, or venue.',
          'Inherit the endpoints assigned to that venue, then narrow access by control surface—power, source, volume, or mute—rather than rebuilding the device list.',
          'Load a pared-down interface with no route into the administrative application.',
          'Pair a device or browser with a code and return it to the same panel configuration on every boot.',
          'Revoke the pairing and issue a new code when a panel moves or is replaced.',
          'Make the PIN optional, with idle-lock and timeout settings for protected panels.',
          'Review paired-device status, including when it was last seen and the last command sent.',
        ],
      },
    },
    {
      id: 'staging',
      pillarId: 'room-control',
      name: 'Staging',
      oneLiner:
        'Prepare screens, sources, volumes, and content while current programming continues. Review the staged changes, then apply them together on cue or save them as a preset.',
      paragraph:
        'Build the next room configuration while the current one keeps running. Start with the live A/V settings, change the screens, sources, volumes, or content needed for the next event, and review every pending command in the staging roster. Nothing changes in the room until you select Apply.\n\nApply the set on cue, save it as a reusable preset, or assign a time to create a scheduled preset. Chart views show what has already run, what is coming next, and every preset or schedule due to affect a selected display. A scheduled preset can also hold selected screens for an event window, with administrator override when needed.',
      benefits: [
        'Holds the next set until you Apply without changing what is live',
        'Lets you Apply on demand when an event\u2019s timing slips',
        'Takes from live to start the stage, then shows the roster with pending changes marked in amber',
        'Saves a staged set as a reusable preset or scheduled preset',
        'Adds a lockout so floor staff cannot change screens during a hold window',
        'Shows past and upcoming activity across chart views and by display',
      ],
      scenariosSubsectionLabel: 'Use cases on your property',
      scenarios: [
        {
          id: 'late-running-casino-drawing',
          label: 'A drawing that starts late',
          line: 'Prepare the screens, content, sources, and audio ahead of time, keep the current experience live, then select Apply when the host is ready.',
        },
        {
          id: 'weekly-giveaway',
          label: 'The weekly giveaway',
          line: 'Save its screen, source, content, and audio setup as a preset, give it a time, and let the scheduled preset run each week.',
        },
        {
          id: 'drawing-in-progress',
          label: 'Drawing in progress',
          line: 'Keep drawing branding and results on selected screens for the event window with a scheduled preset lockout, so floor staff cannot switch them back to the game; an administrator can override the lock.',
        },
      ],
      media: {
        kind: 'placeholder',
        label: 'Staging roster and apply action — screenshot placeholder',
      },
      howItWorks: {
        details: [
          'Treat a staged set, preset, and scheduled preset as the same command set at different stages: optionally named and optionally timed.',
          'Review, clear, or edit the staged roster item by item before commands are sent.',
          'Seed a staged set from the room’s current state.',
          'Review differences against saved values before committing a preset edit.',
          'Apply a control-engine lockout window to a scheduled preset, with a visible device indicator and administrator override.',
        ],
      },
    },
    {
      id: 'audio-group-control',
      pillarId: 'room-control',
      name: 'Audio group control',
      oneLiner:
        'Adjust several audio zones together while preserving their relative levels, set them to one level, or move one zone independently.',
      paragraph:
        'Select several audio zones and choose how they should move. To preserve the tuned balance between spaces, lock the zones together and raise or lower them by the same amount. Their individual levels remain visible, and the difference between them stays intact.\n\nWhen the whole area should match, set every selected zone to one level with the slider or a typed value. You can also release one zone and adjust it without changing the rest of the group.',
      benefits: [
        'Raise or lower selected zones together',
        'Keep the volume differences between zones as they move',
        'Set selected zones to one shared volume',
        'Adjust one zone without changing the others',
      ],
      scenariosSubsectionLabel: 'Three ways to move volume',
      scenarios: [
        {
          id: 'keep-the-balance',
          label: 'Keep the balance',
          line: 'Select the bar, dining room, and patio, then raise or lower them by the same amount. Each zone keeps its current volume difference from the others.',
        },
        {
          id: 'set-them-equal',
          label: 'Set them equal',
          line: 'Set every selected zone to one volume when the whole space needs the same level.',
        },
        {
          id: 'move-one-alone',
          label: 'Move one alone',
          line: 'Adjust the patio on its own without changing the bar or dining room.',
        },
      ],
      media: {
        kind: 'placeholder',
        label: 'Audio group controls — screenshot placeholder',
      },
      howItWorks: {
        details: [
          'Move several zones proportionally so their tuned balance survives.',
          'Set every selected zone to the same level.',
          'Move one zone independently.',
        ],
      },
    },
    {
      id: 'customizable-interface',
      pillarId: 'view-control',
      name: 'Customizable interface',
      oneLiner:
        'Apply property photography, marks, colors, and approved type styles across sign-in screens, splash screens, and the operating interface.',
      paragraph:
        'Carry the property’s visual identity into the interface operators use every day. Add photography and brand marks to sign-in and splash screens, then choose a curated light or dark theme that reflects the property’s colors and typography. The result stays consistent across the installation while keeping device state easy to read.\n\nLUCI can design the theme with you, or an authorized property team can build and adjust it.',
      benefits: [
        'Put property photography and marks—logo, wordmark, and icon—on sign-in and splash screens',
        'Choose a curated light or dark theme matched to your brand colors',
        'Select typography from an approved set',
        'Adjust splash background image blur and opacity',
        'Set endpoint status colors consistently across the installation',
        'Have LUCI design the theme, or build and tweak it at the property',
      ],
      scenariosSubsectionLabel: 'Use cases on your property',
      scenarios: [
        {
          id: 'open-with-the-property',
          label: 'Open with the property',
          line: 'Before handoff, apply the property’s photography, marks, colors, and approved type to sign-in, splash, and operating screens so the interface belongs in the building on day one.',
        },
        {
          id: 'refresh-the-identity',
          label: 'Refresh the identity',
          line: 'When the property updates its look, replace photography, marks, colors, and approved type without rebuilding endpoints or changing the status colors operators rely on.',
        },
      ],
      media: {
        kind: 'placeholder',
        label: 'Customized LUCI interface — screenshot placeholder',
      },
      howItWorks: {
        details: [
          'Sign-in and splash screens are the surfaces that carry property photography and marks.',
          'Curated themes set light or dark mode, background treatments, and typography.',
          'Background treatments (backsplashes) are adjusted with blur, opacity, and position.',
          'Endpoint status colors apply across the install so the same state reads the same way.',
        ],
      },
    },
    {
      id: 'live-map-flexibility',
      pillarId: 'view-control',
      name: 'Live map flexibility',
      oneLiner:
        'Load the property’s own floor plans and orient each map to match the physical space. Live device state appears on the same view.',
      paragraph:
        'Use the property’s own floor plans as the operating map instead of forcing the building into a generic layout. Rotate and orient each plan to match the physical space and the operator’s point of view.\n\nBecause the map stays connected to device state, the same familiar floor plan shows what is on, what is off, and what needs attention.',
      benefits: [
        'Load your own floor plans',
        'Rotate and orient each map to match the physical space',
        'See live device state on the map',
        'Use the map as the monitoring surface for the property',
      ],
      scenariosSubsectionLabel: 'Use cases on your property',
      scenarios: [
        {
          id: 'match-the-operators-view',
          label: 'Match the operator’s view',
          line: 'Rotate the property floor plan to match the direction the operator is facing, then work from the same layout they see around them instead of translating a generic map.',
        },
        {
          id: 'go-straight-to-the-problem',
          label: 'Go straight to the problem',
          line: 'A device changes state on the live map. Use the familiar floor plan to see which endpoint needs attention and where it is before someone walks the floor.',
        },
      ],
      media: {
        kind: 'placeholder',
        label: 'Live property map — screenshot placeholder',
      },
      howItWorks: {
        details: [
          'Load the property’s own floor plans instead of a generic layout.',
          'Rotate and orient each map so it matches the physical space and the operator’s view.',
          'Keep the map connected to device state, so the familiar view is also the surface used to see what is happening.',
        ],
      },
    },
    {
      id: 'live-screen-view',
      pillarId: 'view-control',
      name: 'Live screen view',
      oneLiner:
        'Select a TV or LED wall to confirm what is playing without walking the floor. Synced wall layouts reflect processor geometry in LUCI.',
      paragraph:
        'Check what a TV or LED wall is showing from an iPad or any browser running LUCI. Select the screen to see its live feed before changing a source, running a preset, or confirming that the room matches the plan.\n\nFor processor-driven video walls, LUCI pulls in the wall layout and window assignments with their per-pixel geometry. The wall view matches the processor design instead of recreating it by hand, and live feeds appear in the correct windows.',
      benefits: [
        'Check what is playing on a TV',
        'Check what is playing on an LED wall, including live feed in the wall view',
        'See the screen as it appears live from an iPad or any browser device',
        'See live looks across a multi-TV or display wall without walking it',
        'Sync wall layouts and window assignments from the processor into LUCI',
        'Keep the layout in LUCI matched to the wall designed on the processor, with live feed visible in that layout',
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
          line: 'Before doors or a big game, scan each TV or LED wall from back of house or any browser. Catch a dead or wrong feed before guests do.',
        },
        {
          id: 'mid-event-swap',
          label: 'Mid-event swap',
          line: 'A promo or game changes mid-afternoon. From the office or anywhere you run LUCI, confirm that TV or LED wall is on the right feed before you switch the next one.',
        },
      ],
      media: {
        kind: 'placeholder',
        label: 'Live screen view on iPad — screenshot placeholder',
      },
      howItWorks: {
        details: [
          'Pull wall layouts and window assignments from the video wall processor.',
          'Preserve per-pixel geometry instead of rebuilding layouts by hand.',
          'Assign multi-window templates to a player and change them live.',
          'From an iPad or any browser device, select a TV or LED wall and see the feed as it appears live.',
        ],
      },
    },
    {
      id: 'audit-trails',
      pillarId: 'security-control',
      name: 'Audit trails',
      oneLiner:
        'Trace changes by time, user, device, and trigger—including presets, schedules, and supported changes made outside LUCI.',
      paragraph:
        'Audit trails record what changed, when it changed, which device was affected, and what triggered the action—a user, preset, or schedule. Search by device or user, filter by action type, and export the filtered record as a CSV.\n\nFor most third-party devices, LUCI can also record changes made outside the platform, such as a command from a remote, when the device driver reports that state change. That gives operations and support a shared record to diagnose from instead of reconstructing the event from memory.',
      benefits: [
        'What a user did and when, with a timestamp on each action',
        'Which person, preset, or schedule triggered a change',
        'Results filtered by device, user, or action type',
        'The filtered record as a CSV download',
        'Changes made outside LUCI for most third-party device types (when the driver reports them)',
      ],
      scenariosSubsectionLabel: 'Use cases on your property',
      scenarios: [
        {
          id: 'who-changed-it',
          label: 'Who changed it',
          line: 'A screen is on the wrong game or a zone has been muted. Search the record by device or user to confirm who did it and when—then fix with confidence.',
        },
        {
          id: 'user-preset-or-schedule',
          label: 'User, preset, or schedule',
          line: 'A display changed and the floor needs an answer. Trace the action to a person, a preset, or a schedule—and see the timestamp—so you know what triggered it and when.',
        },
        {
          id: 'export-for-review',
          label: 'Export for review',
          line: 'Filter the actions you care about and download a CSV that shows who did what and when—useful when ops needs a report, or when you need a clear record to share with LUCI for diagnosis.',
        },
      ],
      media: {
        kind: 'placeholder',
        label: 'Searchable audit trail — screenshot placeholder',
      },
      howItWorks: {
        details: [
          'Group device commands by the event that triggered them: a user, preset, or schedule.',
          'Record administrative actions alongside device commands.',
          'Attach a timestamp to each action so operators can diagnose issues by time.',
          'Search and filter the record by device, user, or action type.',
          'Export the filtered record as a CSV download.',
          'Surface out-of-band changes for most third-party device types when the device driver reports them.',
        ],
      },
    },

    {
      id: 'live-monitoring',
      pillarId: 'security-control',
      name: 'Live monitoring',
      oneLiner:
        'See device state and incidents in real time across the map and system health. Escalate an issue to LUCI with its context and logs attached.',
      paragraph:
        'Live monitoring shows the real-time state of devices, displays, and audio zones without waiting for someone to find the problem on the floor. When a device stops responding or reports an unhealthy state, LUCI opens an incident. Recovery closes it, creating a measured record of how long the fault lasted.\n\nIncidents appear in system health and on the property map. Filter them by venue, device type, or status, then handle the issue on property or open a support request with the incident context and relevant logs attached.',
      benefits: [
        'Incidents that open and close in the background as devices fail and recover',
        'Visibility in system health and on the map—not a separate email or popup alert',
        'Filters for venue, device type, and status',
        'A contextual support request when you choose to escalate',
      ],
      scenariosSubsectionLabel: 'Use cases on your property',
      scenarios: [
        {
          id: 'see-it-handle-it',
          label: 'See it, handle it yourself',
          line: 'A display drops offline and an incident opens in system health. You spot it on the map, bring the device back, and the incident closes—no ticket, because you chose to handle it on property.',
        },
        {
          id: 'choose-to-escalate',
          label: 'Choose to talk to support',
          line: 'The same kind of incident won’t clear. From the incident, you start a support request so LUCI gets the context and logs—you decide to escalate; the ticket is not opened automatically.',
        },
      ],
      media: {
        kind: 'placeholder',
        label: 'Live monitoring view — screenshot placeholder',
      },
      howItWorks: {
        details: [
          'Run monitoring in the background so unhealthy or uncontactable devices are detected without waiting for someone to notice.',
          'Open an incident automatically when a device stops responding; close it when the device recovers.',
          'Record how long the fault lasted (measured duration between open and close).',
          'Filter and sort system-health views by venue, device type, or status to surface what needs attention.',
          'Keep incidents distinct from support tickets—an incident is not a ticket by itself.',
          'Loop LUCI in when an issue is detected so the team can act alongside the property.',
          'Let a person choose what to escalate; a support request can carry the incident context and relevant logs.',
        ],
      },
    },
    {
      id: 'sign-in-session-control',
      pillarId: 'security-control',
      name: 'Sign-in & session control',
      oneLiner:
        'Choose email, PIN, or Microsoft Entra ID sign-in; see active sessions, sign users out, and message everyone currently using LUCI.',
      paragraph:
        'Choose the sign-in method that fits each workflow: email, a floor-ready PIN, or existing Microsoft work credentials through Entra ID. On first Entra sign-in, LUCI can create the user profile; administrators can then assign a PIN when that person also needs quick access on the floor.\n\nActive-session controls show who is signed in now. Administrators can end a session immediately or post a site-wide banner to everyone currently using LUCI. A private tunnel consolidates outbound traffic into one encrypted connection for IT to review.',
      benefits: [
        'Sign in by email, PIN, or Microsoft Entra ID',
        'See who is active in LUCI right now',
        'End an active session when someone should be signed out',
        'Post a site-wide message banner to signed-in users',
        'Consolidate outbound connections through a private tunnel',
      ],
      media: {
        kind: 'placeholder',
        label: 'Identity and active-session controls — screenshot placeholder',
      },
      scenariosSubsectionLabel: 'Use cases on your property',
      scenarios: [
        {
          id: 'cut-access-after-misuse',
          label: 'End an active session',
          line: 'A shared tablet leaves the floor or a user should no longer be signed in. Open Active Sessions and end that session immediately.',
        },
        {
          id: 'banner-a-lockout',
          label: 'Announce a maintenance window',
          line: 'Post a site-wide banner before planned maintenance or a major event so every signed-in user sees the same operational message.',
        },
      ],
      howItWorks: {
        details: [
          'Use a standard Microsoft Entra ID app registration with a callback to the property’s LUCI server.',
          'Create a profile on first Entra / Microsoft sign-in; assign a PIN for floor use when needed.',
          'Email and PIN identify a user as separate sign-in methods; Entra can create the profile that a floor PIN may later use.',
          'Review active sessions (signed in / offline) and terminate a session when required.',
          'Communicate to signed-in users through a site-wide banner.',
          'Consolidate outbound destinations through one encrypted private tunnel between the on-property system and LUCI—one paired connection for IT to review, with scheduled key rotation and no standing inbound access.',
        ],
      },
    },
    {
      id: 'in-product-support',
      pillarId: 'security-control',
      name: 'In-product support',
      oneLiner:
        'Start a support request from the device, incident, or error in front of you. Context and relevant logs are attached, so the request begins with evidence.',
      paragraph:
        'Reach the LUCI team from the issue itself instead of starting with a blank ticket. Open a support request from a device, incident, or error and the relevant context and logs travel with it. Your team decides what to escalate, while LUCI receives the information needed to begin diagnosis.\n\nFor deeper troubleshooting, diagnostic capture can collect detailed logs from one endpoint, driver, or module for a defined window instead of increasing logging across the entire system.',
      benefits: [
        'Start a support request from the device, incident, or error',
        'Attach relevant context and logs to the request',
        'Keep the decision to escalate with the property',
        'Capture scoped debug logs for a short window when you need deeper detail',
      ],
      scenariosSubsectionLabel: 'Use cases on your property',
      scenarios: [
        {
          id: 'hub-alert-property-down',
          label: 'Escalate from the incident',
          line: 'An incident will not clear on its own. Open a support request from that incident so LUCI receives the device context and logs without asking your team to reconstruct what happened.',
        },
      ],
      media: {
        kind: 'placeholder',
        label: 'In-product support request flow — screenshot placeholder',
      },
      howItWorks: {
        details: [
          'Start a support request from a device, a device incident, or an error/log context in LUCI so the request is not blank.',
          'Carry relevant context and logs with the request (including correlation context where the UI provides it).',
          'Keep incidents distinct from tickets: a person on property chooses what to escalate.',
          'Aim debug-level logging at one endpoint, driver, or module for a defined window; capture a short reproduction; review on site or send it with the support request.',
          'Send support requests and diagnostic context through the private tunnel connection between the on-property system and LUCI.',
        ],
      },
    },
  ],


  upgradePath: {
    heading: 'Your path to the new LUCI',
    intro:
      'LUCI handles each upgrade directly under your current contract. We ship a preconfigured replacement laptop rather than installing the new version on the machine running your current system. The current system stays online while your team verifies the replacement, and the LUCI team remains with you from scheduling through cutover.',
    timing: {
      releaseLabel: 'Release date',
      releaseDate: RELEASE_DATE,
      paceLine:
        'Upgrades are scheduled in coordinated weekly groups after release.',
      rolloutNote:
        'Upgrades are scheduled directly with your team in a coordinated sequence — not all at once.',
    },
    whatIsInvolved: {
      heading: 'How your upgrade works',
      paragraph:
        'A separate, preconfigured laptop lets your team verify the new LUCI without changing the system running today. LUCI coordinates the shipment, readiness review, verification, and cutover.',
      steps: [
        {
          number: '01',
          title: 'Schedule with LUCI',
          body: 'Your account team reviews site readiness, confirms the upgrade schedule, and identifies anything your IT or A/V team needs to prepare.',
        },
        {
          number: '02',
          title: 'Your laptop ships preloaded',
          body: 'LUCI builds and tests the replacement laptop, loads the new LUCI and private-tunnel configuration, and ships it prepared for your site.',
        },
        {
          number: '03',
          title: 'Plug in and verify',
          body: 'Connect and verify the replacement while the current system keeps running. Nothing is installed on the live machine.',
        },
        {
          number: '04',
          title: 'Switch when you are ready',
          body: 'Once your team has verified the replacement, LUCI completes the cutover with you. Plan on about one to two hours, with the final timing confirmed for your site.',
        },
      ],
    },
  },

  faq: [
    {
      question: 'Is this a software update or a hardware upgrade?',
      answer:
        'LUCI ships a preconfigured replacement laptop with the new platform and private-tunnel configuration already loaded. We do not install the release on the machine running your current system. That system stays online until your team verifies the replacement and is ready to switch.',
    },
    {
      question: 'How long does the upgrade take?',
      answer:
        'Plan on about one to two hours for the cutover. Shipment, readiness review, and verification happen before that window. Your account team will confirm the schedule for your site.',
    },
    {
      question: 'What happens to our current presets and configurations?',
      answer:
        'LUCI reviews your presets and configurations during readiness planning and confirms how they will be handled before cutover. The process is matched to the configuration of your site.',
    },
    {
      question: 'Is there a cost for existing LUCI clients?',
      answer:
        'The upgrade is included for existing LUCI clients under their current contract. Your account team will confirm the scope for your site during the readiness review.',
    },
    {
      question: 'Can we see the new LUCI before our upgrade?',
      answer:
        'Yes. Talk to your account team or book a demo to review the release before your site is scheduled.',
    },
    {
      question: 'What if we installed LUCI recently?',
      answer:
        'Recent installations follow the same coordinated upgrade path. Your account team will confirm when the replacement ships and schedule verification and cutover with you.',
    },
    {
      question: 'How does rollout work across multiple sites?',
      answer:
        'Multi-site upgrades are sequenced rather than completed simultaneously. LUCI works with your account team to schedule each site in an order confirmed with you.',
    },
    {
      question: 'What does our IT team need to prepare?',
      answer:
        'During the readiness review, LUCI and your IT team confirm the current environment, compatibility, access, permissions, and cutover window. Any site-specific prerequisites are identified before the upgrade is scheduled.',
    },
  ],

  cta: {
    eyebrow: 'The new version of LUCI',
    heading: 'More control for your team, with LUCI alongside you.',
    body:
      'See the release in a live demo, or talk with your account team about readiness and the upgrade schedule for your site.',
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
    'Live screen view: included from the tuned two-pager, but it is still missing from the feature-list JSON and should be confirmed before publication.',
    'Technical detail: folded into each feature as an optional How it works accordion (2026-09-30). Standalone Technical section and nav entry removed. Platform items without a feature home (add any endpoint, endpoint management, central display model catalog) are omitted from the Guide for now.',
    'Access model: still open. Per the September 17 lock, do not create a public stumble-upon self-serve upgrade page; the eventual page may remain unlisted until Jane decides.',
  ],
} as const satisfies UpgradeGuideDraft;
