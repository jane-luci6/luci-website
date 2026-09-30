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
            'With live screen view, you can check what is playing on a selected TV or LED wall and see it as it appears live—including live feed on LED walls—from your iPad or any browser device.',
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
            'With audit trails, you can see what a user did and when—plus which device it affected—and whether a person, a preset, or a schedule triggered the change, including changes made outside LUCI.',
        },
        {
          id: 'live-monitoring',
          name: 'Live monitoring',
          oneLiner:
            'With live monitoring, issues are caught in the background and show up in LUCI—on the map and in system health—so you can see what needs attention, LUCI can see it on the Hub, and you can open a support request with the context attached when you choose.',
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
      limits: [
        'Show operators only the room or rooms assigned to that panel.',
        'Hide individual actions, such as turning power on or off, while leaving source and volume available.',
        'Limit source choices to an approved list.',
        'Require a PIN for staff or leave a guest-facing panel open with tap-to-wake.',
        'Use a dedicated wall touchscreen or a paired tablet, iPad, or browser.',
        'Schedule automatic shut-down for venue panels in a selected space.',
      ],
      howItWorks: {
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
        'With live map flexibility, you can load your own floor plans and rotate and orient each map to match how you look at the space.',
      paragraph:
        'Live map flexibility gives you the ability to run the property on floor plans that match the real building—and to turn those plans into a live view of what’s on the floor. Load the maps your team already uses, then rotate and orient each view so it lines up with how an operator looks out at the room, including from where a panel sits. This gives your team a familiar, practical view for understanding what is happening and working with the A/V on the floor.\n\nThe full set of actions you can take in this feature include:',
      benefits: [
        'Load your own floor plans',
        'Rotate and orient maps to match how you look at the space',
        'Zoom so label and icon detail fits the floor’s density',
        'Move endpoint labels so they don’t overlap what you need to see',
        'Set when endpoints, spaces, floors, and buildings appear on the map',
        'See live device state through a live connection',
        'Find a device by name and jump to it on the map',
        'Scale and pan the map',
        'Lock a viewpoint for a place so it opens oriented correctly on login (e.g. bartender at the bar)',
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
        'With live screen view, you can check what is playing on a selected TV or LED wall and see it as it appears live—including live feed on LED walls—from your iPad or any browser device.',
      paragraph:
        'Live screen view gives you the ability to check what a TV or LED wall is showing without walking the floor. Select a screen in LUCI and see a live look at what’s on it from an iPad or any browser device—useful before you change a source, run a preset, or trust that the wall matches the moment. On LED walls, that live feed shows in the wall view in the app; on a sportsbook or other wall of many sets, you can see those live looks together so the whole wall is visible from the device in your hand. For processor-driven walls, sync pulls the layouts and window assignments into LUCI so the wall structure in the app matches what was designed on the processor—not rebuilt by hand—with the live feed visible in that layout.\n\nFrom a live look at the TV or LED wall, you can:',
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
        'With audit trails, you can see what a user did and when—plus which device it affected—and whether a person, a preset, or a schedule triggered the change, including changes made outside LUCI.',
      paragraph:
        'Audit trails give you the ability to see what happened on the property, who did it, and when. Every action is recorded against a person and a timestamp, including whether a person, a preset, or a schedule triggered the change—those times are especially useful when you are diagnosing an issue. When a screen is on the wrong game or a zone has been muted, search by device or by user, filter by action type, and export the results as a CSV. Changes made outside LUCI—such as someone using a remote—are noticed and recorded for most third-party device types when the device driver reports them. With this visibility, you can trace what changed and when without guessing.\n\nAudit trails can show you:',
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
        'With live monitoring, issues are caught in the background and show up in LUCI—on the map and in system health—so you can see what needs attention, LUCI can see it on the Hub, and you can open a support request with the context attached when you choose.',
      paragraph:
        'Live monitoring gives you the ability to catch issues as they happen—without waiting for someone to walk the floor and notice. It runs in the background and opens an incident when a device becomes uncontactable or unhealthy, then closes it when the device recovers so you can see how long the fault lasted. Those incidents show up in system health and as status on the map. The same picture is visible to LUCI on the Hub so the team can act alongside you. When you need help, you choose what to escalate—a support request can carry the incident context and relevant logs.\n\nLive monitoring brings you:',
      benefits: [
        'Incidents that open and close in the background as devices fail and recover',
        'Visibility in system health and on the map—not a separate email or popup alert',
        'LUCI seeing the same issues on the Hub so they can jump in',
        'A support request with context attached when you choose to escalate',
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
      howItWorks: {
        details: [
          'Use a standard Microsoft Entra ID app registration with a callback to the property’s LUCI server.',
          'Create a profile on first sign-in and assign a PIN for floor use when needed.',
          'Terminate active sessions and communicate through a site-wide banner.',
          'Consolidate outbound destinations into one encrypted connection between the on-property system and LUCI.',
          'Rotate keys on a schedule instead of leaving credentials unrotated on the local machine.',
          'Give IT one paired outbound connection to review, with no standing inbound access to the property network.',
        ],
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
      howItWorks: {
        details: [
          'Aim debug-level logging at one endpoint, driver, or module for a defined window.',
          'Capture a short reproduction window instead of increasing logging across the system.',
          'Review the output on site or send it to LUCI with a support request.',
          'The property chooses what to escalate; the request carries the relevant context and logs.',
        ],
      },
    },
  ],


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
    'Technical detail: folded into each feature as an optional How it works accordion (2026-09-30). Standalone Technical section and nav entry removed. Platform items without a feature home (add any endpoint, endpoint management, central display model catalog) are omitted from the Guide for now.',
    'Access model: still open. Per the September 17 lock, do not create a public stumble-upon self-serve upgrade page; the eventual page may remain unlisted until Jane decides.',
  ],
} as const satisfies UpgradeGuideDraft;
