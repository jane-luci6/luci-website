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
            'With venue panels, you control what operators and guests can adjust in each room. Choose the rooms, devices, actions, and sources that appear, then require a PIN or leave the panel open.',
        },
        {
          id: 'staging',
          name: 'Staging',
          oneLiner:
            'With staging, you can prepare screens, sources, volumes, and content while the current experience keeps running. Hold the changes until you Apply, then apply them on cue or save the set as a preset.',
        },
        {
          id: 'audio-group-control',
          name: 'Audio group control',
          oneLiner:
            'With audio group control, you have more options when moving multiple zones at once. Lock the selected zones together and move them incrementally or set them all to a single volume number.',
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
            'LUCI\'s new customizable interface allows you to create a branded experience within the platform. Add property photography and marks, choose themes, and select from many more options.',
        },
        {
          id: 'live-map-flexibility',
          name: 'Live map flexibility',
          oneLiner:
            'With live map flexibility, you can load your own floor plans and rotate and orient each map to match how you look at the space.',
        },
        {
          id: 'live-screen-view',
          name: 'Live screen view',
          oneLiner:
            'With live screen view, you can check what is playing on a selected TV or LED wall. See the screen exactly as it appears live from your iPad or any browser device.',
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
            'With audit trails, you can follow who or what triggered each action, when it happened, and which device it affected. Search by device or user, filter by action type, and export the record when needed.',
        },
        {
          id: 'live-monitoring',
          name: 'Live monitoring',
          oneLiner:
            'With live monitoring, you can see the current state of devices, displays, and audio zones from one view. Filter by venue, device type, or status, follow incidents as they open and close, and carry their context into a support request.',
        },
        {
          id: 'sign-in-session-control',
          name: 'Sign-in & session control',
          oneLiner:
            'With sign-in and session control, you can give users access by email, PIN, or Microsoft Entra ID. See who is active, end a session, or post a message to everyone using LUCI.',
        },
      ],
    },
  ],

  supportSpotlight: {
    title: 'In-product support',
    oneLiner:
      'With in-product support, you can start a request from the device, incident, or error where the issue appears, with context and logs attached. You decide what to escalate, and when something on your property goes down, the LUCI team gets an alert so they can jump on it right away.',
    featureId: 'in-product-support',
  },

  features: [
    {
      id: 'venue-panels',
      pillarId: 'room-control',
      name: 'Venue panels',
      oneLiner:
        'With venue panels, you control what operators and guests can adjust in each room. Choose the rooms, devices, actions, and sources that appear, then require a PIN or leave the panel open.',
      paragraph:
        'Venue panels give you the ability to put focused controls in the room where they’re used, without giving operators or guests access to the main LUCI application. When someone should control only a specific space, assign the panel to the room or rooms it serves. Then choose which devices appear, which actions are available, and which approved sources operators can select; for example, you can hide power controls while leaving source and volume available. Show those controls in a basic panel or list.\n\nFor staff use, require a PIN. For guest-facing use, leave the panel open with tap-to-wake. The assigned controls can appear on a dedicated wall touchscreen or a paired tablet, iPad, or browser, so the person in the room sees only what they are meant to use. If the selected space should shut down automatically, set a schedule for the venue panel.',
      benefits: [
        'Show operators only the room or rooms assigned to that panel',
        'Hide individual actions, such as turning power on or off, while leaving source and volume available',
        'Limit source choices to an approved list',
        'Require a PIN for staff or leave a guest-facing panel open with tap-to-wake',
        'Use a dedicated wall touchscreen or a paired tablet, iPad, or browser',
        'Schedule automatic shut-down for venue panels in a selected space',
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
      technicalJumpId: 'technical-venue-panels',
    },
    {
      id: 'staging',
      pillarId: 'room-control',
      name: 'Staging',
      oneLiner:
        'With staging, you can prepare screens, sources, volumes, and content while the current experience keeps running. Hold the changes until you Apply, then apply them on cue or save the set as a preset.',
      paragraph:
        'Staging gives you the ability to prepare screens, sources, volumes, and content while the current experience keeps running. When you\'re preparing for an upcoming event, you can copy the current A/V settings into Staging, make the changes you need for the next event, and then hold them while the current live experience is running. The roster marks pending items in amber so you can review them while they are held; nothing changes live until you select Apply. When the event is ready, select Apply to send the staged changes together on cue.\n\nTo use the same set again, name the staged set and save it as a preset. You can apply that preset manually, or give it a time to create a scheduled preset. If the event timing may slip, leave someone ready to Apply on cue. For a scheduled event, add a lockout to hold selected screens during the event window; an administrator can override it when needed. Use the chart views to review what has run and what is coming up.',
      benefits: [
        'Holds the next set until you Apply without changing what is live',
        'Lets you Apply on demand when an event\u2019s timing slips',
        'Takes from live to start the stage, then shows the roster with pending changes marked in amber',
        'Saves a staged set as a reusable preset, or schedules it for set-and-forget timing',
        'Adds a lockout so floor staff cannot change screens during a hold window',
        'Shows past and upcoming activity across chart views',
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
      technicalJumpId: 'technical-staging-presets-schedules',
    },
    {
      id: 'audio-group-control',
      pillarId: 'room-control',
      name: 'Audio group control',
      oneLiner:
        'With audio group control, you have more options when moving multiple zones at once. Lock the selected zones together and move them incrementally or set them all to a single volume number.',
      paragraph:
        'Audio group control gives you the ability to adjust the volume of multiple zones at once while choosing whether their existing differences should stay in place. If the dining room is intentionally quieter than the bar and patio, select all three zones and lock them together. Their current levels remain visible; raise or lower the selection by the same increment, and each zone keeps its relative difference from the others.\n\nWhen the whole space should match, set the selected zones to one absolute volume number using the slider or a typed value. If only the patio needs an adjustment, move that zone alone without changing the bar or dining room.',
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
      technicalJumpId: 'technical-audio-group-control',
    },
    {
      id: 'customizable-interface',
      pillarId: 'view-control',
      name: 'Customizable interface',
      oneLiner:
        'LUCI\'s new customizable interface allows you to create a branded experience within the platform. Add property photography and marks, choose themes, and select from many more options.',
      paragraph:
        'Your operators live in this interface—so it should feel like the property from the first sign-in through every shift on the floor. Give them a branded experience that matches how the property presents itself and how teams read the work—consistent across the site, with room for individual preference where you allow it. With this capability at your fingertips, you can…',
      benefits: [
        'Put property photography and marks—logo, word mark, and icon—on sign-in and splash screens',
        'Choose curated themes matched to your brand colors',
        'Select fonts and text sizes from an approved set',
        'Apply a theme at the site level, with per-user preference where permitted',
        'Adjust splash background image blur and opacity',
        'Set endpoint status colors across the install, with familiar green, yellow, and red defaults that can be changed',
        'Run the interface in light, dark, or system mode',
        'Have LUCI design the theme, or build and tweak it at the property',
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
        'With live map flexibility, you can load your own floor plans and rotate and orient each map to match how you look at the space.',
      paragraph:
        'Live map flexibility gives you the ability to run the property on floor plans that match the real building—and to turn those plans into a live view of what’s on the floor. Load the maps your team already uses, then rotate and orient each view so it lines up with how an operator looks out at the room, including from where a panel sits. This gives your team a familiar, practical view for understanding what is happening and working with the A/V on the floor.\n\nThe full set of actions you can take in this feature include:',
      benefits: [
        'Load your own floor plans',
        'Rotate and orient maps to match how you look at the space',
        'Zoom so label and icon detail fits the floor’s density',
        'Set when endpoints, spaces, floors, and buildings appear on the map',
        'See live device state through a live connection',
        'Find a device by name and jump to it on the map',
        'Scale, pan, and save map viewports',
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
        'With live screen view, you can check what is playing on a selected TV or LED wall. See the screen exactly as it appears live from your iPad or any browser device.',
      paragraph:
        'Live screen view gives you the ability to see what is playing on a selected TV or LED wall exactly as it appears live. When you need to check a screen from the device in your hand, select it from an iPad or any browser device and view its current content.',
      benefits: [
        'Checks what is playing on a TV',
        'Checks what is playing on an LED wall',
        'Shows the screen as it appears live',
        'Makes the view available from an iPad or any browser device',
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
        'With audit trails, you can follow who or what triggered each action, when it happened, and which device it affected. Search by device or user, filter by action type, and export the record when needed.',
      paragraph:
        'Audit trails give you the ability to follow who or what triggered an action, when it happened, and which device it affected. If you need to investigate an action, search by device or user, filter by action type, and export the results as a CSV. When a device stops responding and later recovers, review when the incident opened and closed to see how long it lasted.',
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
    },
    {
      id: 'live-monitoring',
      pillarId: 'security-control',
      name: 'Live monitoring',
      oneLiner:
        'With live monitoring, you can see the current state of devices, displays, and audio zones from one view. Filter by venue, device type, or status, follow incidents as they open and close, and carry their context into a support request.',
      paragraph:
        'Live monitoring gives you the ability to see the current state of devices, displays, and audio zones from one view. When you need to find what requires attention, filter by venue, device type, or status, then follow incidents as they open and close. If an incident needs support, start a request with its context attached.',
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
    },
    {
      id: 'sign-in-session-control',
      pillarId: 'security-control',
      name: 'Sign-in & session control',
      oneLiner:
        'With sign-in and session control, you can give users access by email, PIN, or Microsoft Entra ID. See who is active, end a session, or post a message to everyone using LUCI.',
      paragraph:
        'Sign-in and session control gives you the ability to manage how users enter LUCI and what happens during an active session. When you set up access, choose email, PIN, or Microsoft Entra ID. If you need to manage current use, see who is active, end a session, or post a message to everyone using LUCI.',
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
        'With in-product support, you can start a request from the device, incident, or error where the issue appears, with context and logs attached. You decide what to escalate, and when something on your property goes down, the LUCI team gets an alert so they can jump on it right away.',
      paragraph:
        'In-product support gives you the ability to start a support request where an issue appears. If a device, incident, or error needs attention, open the request from that item so its context and relevant logs are attached, then decide what to escalate. When something on your property goes down, the LUCI team receives an alert so they can act on it right away.',
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
              'Incremental group moves preserve level differences; absolute sets selected zones to one volume; or move one zone alone.',
            details: [
              'Incremental: Up/down adds or subtracts one step across selected zones, preserving the differences between their levels.',
              'Absolute: A slider or typed number sets selected zones to the same volume.',
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
              'Review, clear, edit, or uncheck individual roster items before commands are sent.',
              'Seed a staged set from the room’s current state.',
              'Review differences against saved values before committing a preset edit.',
              'Apply a control-engine lockout window to a scheduled preset so floor operators cannot change those devices during the window, with a visible device indicator and administrator override.',
              'Live/control map mode applies changes immediately; staging/preset mode holds a pending staged set until Apply.',
              'An ephemeral untitled stage supports one-time Apply without saving as a preset.',
              'Apply dispatches the staged set to multiple devices and surfaces together, including video walls when staged as a group.',
              'Pending staged changes surface visually (chips / amber) before dispatch.',
              'Schedule history provides a run report trail with correlation into system logs.',
              'Access profiles can allow viewing and applying presets without create, edit, or delete permissions.',
            ],
          },
          {
            id: 'technical-audit-incidents-support',
            name: 'Audit trails, incidents, and support',
            details: [
              'Group device commands by the event that triggered them: a user, preset, or schedule.',
              'Record administrative actions alongside device commands.',
              'Surface out-of-band changes when the device driver reports them.',
              'Open an incident when a device stops responding and close it when the device recovers.',
              'Keep incidents distinct from support tickets; a person chooses what to escalate, and the ticket carries the relevant context and logs.',
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
