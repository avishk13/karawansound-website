/* ============================================================
   EDIT THIS FILE TO UPDATE THE WEBSITE.
   Everything on both pages is generated from the data below.
   - Add a project  -> add an object to `projects`
   - Add a video    -> add an object to a section's `items`
   - Add a section  -> add an object to `sections` (becomes a carousel)
   YouTube: paste the full link or just the video ID. The thumbnail is fetched automatically.
   Images: put files in /images and use e.g. "images/my-pic.jpg". Leave "" for a placeholder.
   Text can contain links written as [link text](https://address). Use "#id" or "projects.html" for links inside this site.

   All text below on the home page was copied from https://www.karawansound.com/
   ============================================================ */

window.SITE = {
  name: "Avishai Karawan",
  role: "Sound Designer & Technical Sound Designer",

  social: {
    YouTube: "https://www.youtube.com/@avishk13",
    LinkedIn: "https://www.linkedin.com/in/avishaikarawan",
    Airwiggles: "https://www.airwiggles.com/u/f19c717e",
  },
  email: "avishk13@gmail.com",

  /* Showreels at the top of the home page, shown side by side. `title` is the badge above each video. */
  showreels: [
    { title: "Technical Sound Design Reel", youtube: "e9gGj8jJprA" },
    { title: "Sound Design Reel", youtube: "DrsSPhh2FJM" },
  ],

  about: {
    heading: "Hi, I'm Avishai Karawan",
    /* Collage of 4, in this order: tall left, top right, small bottom left, large bottom right. Not clickable. */
    photos: [
      "images/about/a1.jpg",
      "images/about/a3.jpg",
      "images/about/a2.jpg",
      "images/about/a4.jpg",
    ],
    /* NOTE: index.html also holds a plain copy of this heading and these paragraphs, so search engines see them without running
       any JavaScript. If you change the text here, change that copy too (the #about section in index.html). */
    paragraphs: [
      "I specialize in creating custom tools and workflows that make designing and implementing audio easy, intuitive, and efficient.",
      "Right now I'm the Sound Designer on [Tattered Banners](https://store.steampowered.com/app/1355900/Tattered_Banners/), where I design, implement and mix all of the game's audio. I also work as a Sound Designer and Technical Sound Designer at [Candivore](https://candivore.io/), creating sounds and maintaining audio pipelines across their live mobile games.",
      "Before that, I was a Sound Designer on [Dwarven Realms](https://store.steampowered.com/app/2015240/Dwarven_Realms/) and a Technical Sound Designer on [HUNTERS: Uprising](https://store.steampowered.com/app/2561660/HUNTERS_Uprising/), building tools and using them to implement audio. You can see some of them [here](#breakdowns). I also spent four years as a Sound Designer at [Artlist](https://artlist.io/), recording and designing SFX for the catalog, which you can hear [here](#sfx).",
      "I'm always looking for new ideas and ways to grow, and I've loved sharing what I know as a lecturer at [Just Music College](https://www.justmusic.co.il/).",
      "Thank you for your interest in my work!",
    ],
    /* Skill tags: each inner list is one line. */
    skills: [
      ["Unreal Engine 5", "Unity"],
      ["Wwise & FMOD Implementation", "Blueprints", "MetaSounds", "Lua"],
      ["Reaper", "Pro Tools"],
      ["Sound Design & Field/Studio Recording"],
    ],
    /* Short descriptions of the four photos, same order as above (read by screen readers and search engines). */
    photoAlts: [
      "Recording on location with a boom microphone",
      "Stereo microphones set up beside a stream",
      "A dog and a microphone during a recording session",
      "Working in the studio at the monitors",
    ],
    cv: "Avishai-Karawan-CV.pdf",
  },

  /* Each section on the home page is a carousel.
     rows: 2 -> two rows of videos, scrolling sideways with the arrows.
     featured: true on an item -> shown big in a fixed top row, the rest scroll below.
     tiles: true -> big thumbnail + title; description is revealed on hover.
     A section can use `items` (one carousel) or `tracks` (several labelled carousels). */
  sections: [
    {
      id: "breakdowns",
      title: "Technical Sound Design Breakdowns",
      nav: "Technical Breakdowns",
      intro: "Taking a deeper look into my technical audio tools, implementation and thought process",
      tiles: true,   /* thumbnail + title only; the description appears when you hover a tile */
      items: [        /* `featured: true` = big tile in the fixed top row; the others scroll in the carousel below */
        { title: "Multiplayer Metasounds Spaceship", youtube: "3Z7YCW8xcUA", featured: true,
          caption: "Breakdown of a multiplayer-ready spaceship audio system built in Unreal Engine with MetaSounds. Designed for scalability and modularity, includes Doppler simulation, Granular Synth engine layer, and more" },
        { title: "ReaperToWwise ReDesign - Ghostrunner 2", youtube: "8OZpakIwdkw", featured: true,
          caption: "Breakdown of a non-linear redesign using [ReaperToWwise](https://github.com/mhasselbalch/ReaperToWwise), a ReaScript that links Reaper's timeline notes directly to a Wwise project. All sounds are triggered dynamically from Wwise" },
        { title: "\"AmbZone\" Tool Breakdown", youtube: "ADLkrI0LgfM",
          caption: "A flexible spline-based \"Ambient Zone\" for playing 2D sounds in a defined shape, including non-convex shapes." },
        { title: "PCG 3DEmitter Tracker", youtube: "HZmHDNF5Skg",
          caption: "A PCG (Procedural Content Generation) based tool that's able to track pre-defined foliage/ mesh, and spawn, update location, or delete 3DEmitters according to map changes" },
        { title: "Sci-Fi Weapon SFX - Workflow Breakdown", youtube: "rQJ--iSfvek",
          caption: "A video demonstrating sound design workflow using multiple Reaper scripts and tools" },
        { title: "UE4 & Wwise C++/BP demo", youtube: "9lFbV7PFKZo",
          caption: "Audio implementation demo in a game created in C++ step-by-step with a [GameDev.tv](https://www.udemy.com/course/unrealcourse/) course" },
      ],
    },
    {
      id: "community",
      title: "Interviews & Community Projects",
      intro: "Some of my social and community activity",
      wide: true,
      tiles: true,
      items: [
        { title: "The Game Audio Implementournament", youtube: "jen86HuVALc",
          caption: "An event I organized and led hosted at [Airwiggles](https://www.airwiggles.com/), sponsored by [Kilohearts](https://kilohearts.com/) & [Dynamedion \"We Love Indies\"](https://www.weloveindies.com/en/sounds-for-games). The goal was to encourage sound designers to explore the technical side of game audio. We did that by creating an [accessible, well-structured Unreal Engine project](https://www.airwiggles.com/c/general/the-airwiggles-asteroids-unreal-engine-project) tailored for first-time UE users." },
        { title: "Aircon Talk - Wearing Many Hats in Audio: Interview With Joonas Turner", image: "images/community/aircon.png",
          href: "https://www.airwiggles.com/c/live-replays/wearing-many-hats-in-audio-interview-with-joonas-turner-joonas-turner-avishai-karawan", cta: "Watch the replay",
          caption: "A live [AirCon 2025](https://www.airwiggles.com/c/conference/aircon25-starts-today) talk I hosted with [Joonas Turner](https://www.linkedin.com/in/joonas-turner-ba302947/), covering his multidisciplinary approach, favorite sound design methods, and memorable stories from his career." },
      ],
    },
    {
      id: "sfx",
      title: "SFX Packs",
      intro: "A selection of SFX packs recorded & designed for the [Artlist](https://artlist.io/royalty-free-music/artist/deankr/1739) catalog",
      cover: true,   /* square cover-art tiles */
      tracks: [
        { label: "Recorded SFX", items: [
          { title: "Heavy Machines", image: "images/packs/heavy-machines.jpg", link: "https://artlist.io/sfx/pack/heavy-machines/9600" },
          { title: "Metal Foley", image: "images/packs/metal-foley.jpg", link: "https://artlist.io/sfx/pack/metal-foley/9601" },
          { title: "Skateboarding Vol. 2", image: "images/packs/skateboarding-vol-2.jpg", link: "https://artlist.io/sfx/pack/skateboarding-vol-2/9244" },
          { title: "Crowd Reactions", image: "images/packs/crowd-reactions.jpg", link: "https://artlist.io/sfx/pack/crowd-reactions/9293" },
          { title: "Toy Guns Vol. 1", image: "images/packs/toy-guns-vol-1.jpg", link: "https://artlist.io/sfx/pack/toy-guns-vol-1/9594" },
          { title: "Just Skidding", image: "images/packs/just-skidding.png", link: "https://artlist.io/sfx/pack/just-skidding/10374" },
          { title: "Rural Expedition", image: "images/packs/rural-expedition.jpg", link: "https://artlist.io/sfx/pack/rural-expedition/10142" },
        ] },
        { label: "Designed SFX", items: [
          { title: "Shoot Out", image: "images/packs/shoot-out.jpg", link: "https://artlist.io/sfx/pack/shoot-out/9599" },
          { title: "Braamagog", image: "images/packs/braamagog.png", link: "https://artlist.io/sfx/pack/braamagog/10295" },
          { title: "Fire Motion", image: "images/packs/fire-motion.jpg", link: "https://artlist.io/sfx/pack/fire-motion/9499" },
          { title: "Designed Motion", image: "images/packs/designed-motion.png", link: "https://artlist.io/sfx/pack/designed-motion/9936" },
          { title: "Water Motion", image: "images/packs/water-motion.jpg", link: "https://artlist.io/sfx/pack/water-motion/9500" },
          { title: "Basic Stutters", image: "images/packs/basic-stutters.png", link: "https://artlist.io/sfx/pack/basic-stutters/10375" },
        ] },
      ],
    },
  ],

  /* Free download block shown after the SFX packs. */
  freePack: {
    badge: "Free Ambiances Pack",
    title: "North-American Ambiances",
    text: [
      "25 ambiance recordings, from remote nature reserves to crowded malls and urban spaces: an \"audio diary\" of my trip through the US & Canada, shared free of charge. The sounds may be used in commercial projects.",
      "Technical details and licensing information are included with the pack.",
    ],
    /* Slideshow next to the text (auto-advances; arrows and dots too). */
    images: [
      { src: "images/ambience/amb1.jpg", caption: "009 - Jasper, Maligne Lake, calm waves, mid day, no people" },
      { src: "images/ambience/amb2.jpg", caption: "023 - Korea Town Mall Foodcourt, mid day, crowded" },
      { src: "images/ambience/amb3.jpg", caption: "007 - Jasper, Athabasca Falls, mid day, no people" },
      { src: "images/ambience/amb4.jpg", caption: "014 - Lake Louise entry crowd" },
      { src: "images/ambience/amb5.jpg", caption: "025 - Minneapolis Hoagie's family restaurant, mid day, crowded" },
      { src: "images/ambience/amb6.jpg", caption: "021 - Santa Monica beach under amusement park bridge" },
      { src: "images/ambience/amb7.jpg", caption: "022 - Santa Monica Pacific Park amusement park" },
      { src: "images/ambience/amb8.jpg", caption: "017 - Banff, Healy Pass trail creek, mid day, light wind, no people" },
    ],
    button: "Download 25 Ambiance Files",
    /* Still points at the Wix-hosted zip - swap for the new location when the zip moves. */
    link: "https://www.karawansound.com/_files/archives/8ad990_b927c5080f90409ea3ae833e12188d98.zip?dn=North%20American%20Ambiences%20-%20Avishai%20Karawan.zip",
  },

  /* Faint background motion per section (the top reels and About keep their own).
     "ring-tl" / "ring-tr" / "ring-bl" / "ring-br" = slow rings spreading from that corner, so only a quarter of the circle shows.
     "wave" = a very faint audio wave drifting along the bottom.  "none" turns a section's motion off. */
  deco: { breakdowns: "ring-tl", community: "ring-br", sfx: "wave", freepack: "ring-bl" },

  /* "Get in touch" block. Each button: label, icon (mail | linkedin | chat | youtube | facebook), href.
     "email" as the href opens an email to the address above. */
  contact: {
    heading: "Let's make something sound great",
    text: "Have a project, a question, or an idea to talk through? Get in touch whichever way suits you best.",
    buttons: [
      { label: "Send an email", icon: "mail", href: "email", primary: true },
      { label: "Message me on LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/avishaikarawan" },
    ],
  },

  /* The project history timeline (projects.html). The order below is the order shown.
     title: project or studio   role: the badge   sub: studio / dates, the small line under the title
     summary: the short tagline   did: up to 3 short bullets   youtube: trailer link or ID (leave "" for the placeholder)
     links: buttons under the card, e.g. [{ label: "View project", href: "https://..." }]   (or link: "https://..." for one "View project")
     image + href (+ optional cta): a clickable picture instead of a video - leave out link/links on those, the picture is the link. */
  projects: [
    {
      title: "Tattered Banners",
      year: 2025,
      role: "Sound Designer",
      sub: "CookieByte Entertainment \u00b7 Dec 2025 \u2013 Present",
      tags: ["Game", "Technical"],
      youtube: "6qnodep4P3U",
      image: "",
      links: [
        { label: "View project", href: "https://store.steampowered.com/app/1355900/Tattered_Banners/" },
        { label: "Read about the win", href: "https://www.i24news.tv/en/news/innov-nation/artc-israel-s-indie-game-developers-win-first-ever-gameis-grants" },
      ],
      summary: "Sound design and mixing for a turn-based tactics RPG, taken from silence to a full game.",
      did: [
        "Designed, implemented and mixed all of its audio in Unity and FMOD",
        "Made the sound for the announcement trailer and directed its voice actor",
        "The game took 1st place at Israel's first GameIS indie grants",
      ],
    },
    {
      title: "Candivore",
      year: 2025,
      role: "Sound Designer / Technical Sound Designer",
      sub: "Freelance \u00b7 Dec 2025 \u2013 Present",
      tags: ["Game", "Mobile", "Technical"],
      youtube: "",
      image: "images/projects/candivore.png",
      href: "https://candivore.io/",
      cta: "Visit Candivore",
      summary: "Created sound design and maintained audio pipelines across live mobile games.",
      did: [
        "Designed hero, gameplay and UI sounds",
        "Led Unity-to-FMOD migrations, rebuilding audio systems from scratch",
        "Recorded and directed voice-over for in-game characters",
      ],
    },
    {
      title: "Mini Macro Maker",
      year: 2026,
      role: "Product & QA Lead",
      sub: "Freelance · Pluglet · Feb – May 2026",
      tags: ["Plugin", "Technical"],
      youtube: "Maba_s4ePik",
      image: "",
      links: [{ label: "Visit the website", href: "https://www.pluglet.net/mini-macro-maker" }],
      summary: "Responsible for product design and QA for a modulation plugin built exclusively for REAPER.",
      did: [
        "Planned and designed the plugin with the Pluglet team",
        "Ran QA and iterated on builds together with the community",
        "One macro can drive parameters across tracks, effects and sends, with LFOs and patches",
      ],
    },
    {
      title: "Dwarven Realms",
      year: 2024,
      role: "Sound Designer",
      sub: "Crater Studios \u00b7 Aug 2024 \u2013 Jan 2025",
      tags: ["Game", "Technical"],
      youtube: "PAbBBXd-2lc",
      image: "",
      link: "https://store.steampowered.com/app/2015240/Dwarven_Realms/",
      summary: "Joined this action RPG just ahead of launch and left its audio polished and ready for release.",
      did: [
        "Sound design for spells, weapons, enemies and boss fights",
        "Recorded and implemented the tutorial NPC's voice lines",
        "Standardized the mix and documented the audio pipeline",
      ],
    },
    {
      title: "HUNTERS: Uprising",
      year: 2023,
      role: "Technical Sound Designer",
      sub: "Wolf's Den Games \u00b7 Aug 2023 \u2013 Aug 2024",
      tags: ["Game", "Technical"],
      youtube: "SIs-FcSO64U",
      image: "",
      link: "https://store.steampowered.com/app/2561660/HUNTERS_Uprising/",
      summary: "Handled technical sound design and built audio tools for a PvP extraction shooter.",
      did: [
        "Custom tools for procedural, modular ambience",
        "Implemented and mixed everything in UE5 with Wwise",
        "Tracked down and fixed issues in gameplay and audio behavior",
      ],
    },
    {
      title: "Artlist",
      year: 2021,
      role: "Sound Designer",
      sub: "Full-time \u00b7 Apr 2021 \u2013 Apr 2025",
      tags: ["SFX", "Technical"],
      youtube: "o_nNzFyMZ0g",
      image: "",
      links: [{ label: "Visit Artlist's website", href: "https://artlist.io/royalty-free-music/artist/deankr/1739" }],
      summary: "Four years of recording, designing, automating and post-producing sound for Artlist's catalog.",
      did: [
        "Recorded, edited and mastered 1,500+ SFX assets",
        "Wrote custom REAPER scripts to automate big workflows",
        "Sound for 100+ video projects with the production team",
      ],
    },
    {
      title: "Just Music College",
      year: 2019,
      role: "Music & Sound Lecturer",
      sub: "Part-time \u00b7 Jun 2019 \u2013 Sep 2022",
      tags: ["Teaching"],
      youtube: "",
      image: "images/projects/justmusic.png",
      href: "https://www.justmusic.co.il/",
      cta: "Visit Just Music",
      summary: "Taught Ableton, music production and synthesis.",
      did: [
        "Weekly classes, built around my own course materials",
        "Hands-on assignments with regular, practical feedback",
      ],
    },
  ],
};
