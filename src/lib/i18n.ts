export type Locale = "en" | "fr";

export const defaultLocale: Locale = "en";

export function localeFromPath(pathname: string): Locale {
  return pathname === "/fr" || pathname.startsWith("/fr/")
    ? "fr"
    : defaultLocale;
}

export function localizedPath(pathname: string, locale: Locale): string {
  const hashIndex = pathname.indexOf("#");
  const path = hashIndex === -1 ? pathname : pathname.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : pathname.slice(hashIndex);
  const englishPath = path.replace(/^\/fr(?=\/|$)/, "") || "/";
  const localized =
    locale === "fr"
      ? `/fr${englishPath === "/" ? "" : englishPath}`
      : englishPath;

  return `${localized || "/"}${hash}`;
}

const englishNavigation = [
  { title: "Home", href: "/" },
  { title: "Music", href: "/music" },
  { title: "Lyrics", href: "/lyrics" },
  { title: "About", href: "/about" },
  { title: "Shop", href: "/#store" },
] as const;

const frenchNavigation = [
  { title: "Accueil", href: "/" },
  { title: "Musique", href: "/music" },
  { title: "Paroles", href: "/lyrics" },
  { title: "À propos", href: "/about" },
  { title: "Boutique", href: "/#store" },
] as const;

export const translations = {
  en: {
    language: "EN",
    languageLabel: "Switch language to French",
    navigationLabel: "Main navigation",
    mobileMenuLabel: "Open navigation menu",
    menuDescription: "Explore music, lyrics, videos and the artist.",
    skipToContent: "Skip to content",
    navigation: englishNavigation,
    footer: {
      explore: "Explore",
      listen: "Listen",
      stayConnected: "Stay connected",
      morePlatforms: "More platforms coming soon.",
      comingSoon: "Coming soon",
      allRightsReserved: "All rights reserved.",
      backToTop: "Back to top",
      tagline: "Real life. Raw heart.",
      taglineSecond: "Honest music.",
    },
    home: {
      listen: "01 / THE MUSIC",
      listenTitle: "Made to be",
      listenEmphasis: "felt.",
      listenAside: "Country roots. Soulful stories.",
      listenAsideSecond: "A sound that stays with you.",
      studio: "IN THE STUDIO / EVAN CROSS",
      studioAlt: "Evan Cross recording vocals in the studio",
      pressPlay: "PRESS PLAY. STAY A WHILE.",
      country: "A little country.",
      heart: "A whole lot of heart.",
      musicDescription:
        "Songs about the lives we live, the people we love, and the courage it takes to start again.",
      exploreMusic: "Explore the music",
      words: "02 / THE WORDS",
      storyLead: "Before the music,",
      storyEmphasis: "story.",
      wordsDescription:
        "A thought that won’t let go. A memory that finds its way onto the page. Every song begins with something real.",
      behindLyrics: "Behind the lyrics",
      artist: "03 / THE ARTIST",
      realLife: "Real life.",
      honestMusic: "music.",
      artistDescription:
        "Canadian songwriter. Independent artist. Writing in English and French, from a place that’s personal.",
      artistImageAlt: "Evan Cross with his arms crossed",
      aboutLink: "Get to know Evan",
      shop: "04 / THE MERCH",
      stayConnected: "KEEP THE MUSIC CLOSE",
      stayConnectedTitle: "Let’s stay connected.",
      lyricsImageAlt: "Evan Cross writing song lyrics in the studio",
      carouselLabel: "Evan Cross stories",
      carouselNavigation: "Hero image navigation",
      imageLabel: "Image",
      backgroundVideo: "Evan Cross background video",
      timeUntilNextImage: "Time until the next hero image",
      exploreMusicHint: "EXPLORE THE MUSIC ↓",
    },
    music: {
      collection: "THE COLLECTION",
      stayForSong: "Stay for a song.",
      collectionDescription:
        "Listen to the full Evan Cross collection on SoundCloud, from quiet reflections to songs with a little more fire.",
      listenOnSoundcloud: "Listen on SoundCloud",
      watchOnYoutube: "Watch on YouTube",
      onStage: "ON STAGE",
      stageAlt: "Evan Cross performing with a band on stage",
      toast: "A TOAST BETWEEN SONGS",
      toastAlt: "Evan Cross raising a glass with his guitar among the band",
      wordsLanguages: "WORDS IN ENGLISH & FRENCH",
      everySongReal: "Every song begins with something real.",
      lyricsDescription:
        "Explore {count} published lyrics about love, family, resilience, faith, and starting again.",
      readLyrics: "Read the lyrics",
    },
    videos: {
      exploreLabel: "EXPLORE THE YOUTUBE CHANNEL",
      exploreAria: "Explore Evan Cross videos on YouTube",
      recordingAlt: "Evan Cross in the recording studio",
      headline: "The stories come to life.",
      watch: "Watch on YouTube",
    },
    platformLinks: {
      social: "Social media",
      streaming: "Streaming platforms",
    },
    about: {
      writing: "THE WRITING",
      writingTitle: "Songs that make room for the whole story.",
      writingFirst:
        "These songs are personal, but they are not sealed off from the listener. They stay with small details: a late-night question, a familiar voice, or the kind of reassurance that can carry someone through a difficult day.",
      writingSecond:
        "Some lyrics offer comfort; others let doubt remain unresolved. Together, they treat honesty as a way to connect, not a requirement to have all the answers.",
      writingLanguages: "Writing languages",
      writingLanguagesValue: "English & French",
      musicalRoots: "Musical roots",
      publishedLyrics: "Published lyrics",
      stories: "stories",
      sound: "THE SOUND",
      soundTitle: "Country roots. Soul at heart.",
      soundFirst:
        "Country storytelling gives the songs their directness. Soul and blues bring emotional weight, while Americana leaves room for rough edges and stories that do not fit neatly into one genre.",
      soundSecond:
        "The result is a sound built around the words: intimate when a story calls for quiet, and open-hearted when it needs to rise.",
      themes: "WHAT THE SONGS HOLD",
      themesTitle: "Different lives. Familiar feelings.",
      themeList: [
        {
          title: "Love, family, and care",
          songs:
            "Mon Petit Rayon de Soleil · Ça Va Bien Aller · La Vraie Force des Hommes",
          description:
            "Songs written as messages to the people who matter, holding tenderness and everyday details close.",
        },
        {
          title: "Resilience and self-worth",
          songs:
            "T'as Tout Déjà · War Inside My Bones · Un Ennemi Sous Ma Peau",
          description:
            "Stories about living through difficult seasons, finding your footing, and remembering you are more than what you face.",
        },
        {
          title: "Faith, doubt, and meaning",
          songs:
            "À Quoi Ça Sert, Mon Dieu · Est-Ce Que J’ai Le Droit ? · While I Wait On Heaven",
          description:
            "Open questions sit beside belief, grief, and the choice to reach for another person.",
        },
      ],
      stageAlt: "Evan Cross performing on stage",
      keepExploring: "KEEP EXPLORING",
      keepExploringTitle: "Find a story that stays with you.",
      listenLink: "Listen to the music",
      lyricsLink: "Read the lyrics",
    },
    lyrics: {
      archive: "THE ARCHIVE",
      songIndex: "Song index",
      all: "All",
      english: "English",
      french: "Français",
      searchLabel: "Search songs",
      searchPlaceholder: "Find a song",
      chooseSong: "Choose a song",
      noMatchingSongs: "No matching songs",
      noSongsMatch: "No songs match your search.",
      songIndexLabel: "Song index",
      englishLyrics: "LYRICS · ENGLISH",
      frenchLyrics: "PAROLES · FRANÇAIS",
      lyricsBy: "Lyrics by Yvan Junior Blanchette",
      lyricsByFrench: "Paroles de Yvan Junior Blanchette",
      chooseSongToRead: "Choose a song to read its lyrics.",
    },
    shop: {
      headline: "Wear the",
      emphasis: "songs.",
      description: "A little piece of the music,",
      descriptionSecond: "made to go wherever you do.",
      empty: "New merch is on the way. Check back soon.",
      visit: "Visit the shop",
    },
    soundcloud: {
      title: "Evan Cross music collection on SoundCloud",
      fallback: "Player not loading?",
      listen: "Listen on SoundCloud",
    },
    notFound: {
      title: "This track is missing.",
      description: "Let’s get you back to the music.",
      home: "Back home",
    },
    homeSlides: [
      ["Every song.", "A piece of me.", "Real life. Raw heart. Honest music."],
      [
        "Through the storm.",
        "Still standing.",
        "Songs about finding your strength when life changes the plan.",
      ],
      [
        "Chasing light.",
        "Finding my way.",
        "For the roads ahead, and the stories we carry with us.",
      ],
      [
        "A quiet moment.",
        "An honest song.",
        "Some things are easier to say in a song.",
      ],
      [
        "When it gets quiet.",
        "The heart speaks.",
        "Words for the feelings that stay long after midnight.",
      ],
      [
        "The hard days.",
        "The hope that stays.",
        "A little faith. A little courage. One day at a time.",
      ],
      [
        "Looking back.",
        "Moving forward.",
        "The past is part of the story. There is still more to write.",
      ],
      [
        "Ordinary moments.",
        "Everything that matters.",
        "Love lives in the little things we share.",
      ],
      [
        "My whole world.",
        "My reason why.",
        "For the people who make every tomorrow worth reaching for.",
      ],
      [
        "Different roads.",
        "The same heart.",
        "Stories connect us, wherever life takes us.",
      ],
    ],
  },
  fr: {
    language: "FR",
    languageLabel: "Passer le site en anglais",
    navigationLabel: "Navigation principale",
    mobileMenuLabel: "Ouvrir le menu de navigation",
    menuDescription:
      "Découvrez la musique, les paroles, les vidéos et l’artiste.",
    skipToContent: "Passer au contenu",
    navigation: frenchNavigation,
    footer: {
      explore: "Explorer",
      listen: "Écouter",
      stayConnected: "Restons en contact",
      morePlatforms: "D’autres plateformes bientôt.",
      comingSoon: "Bientôt disponible",
      allRightsReserved: "Tous droits réservés.",
      backToTop: "Retour en haut",
      tagline: "La vraie vie. Le cœur à nu.",
      taglineSecond: "Une musique sincère.",
    },
    home: {
      listen: "01 / LA MUSIQUE",
      listenTitle: "Une musique à",
      listenEmphasis: "ressentir.",
      listenAside: "Des racines country. Des histoires d’âme.",
      listenAsideSecond: "Une musique qui reste avec vous.",
      studio: "EN STUDIO / EVAN CROSS",
      studioAlt: "Evan Cross en train d’enregistrer en studio",
      pressPlay: "LANCEZ LA MUSIQUE. PRENEZ VOTRE TEMPS.",
      country: "Un peu country.",
      heart: "Beaucoup de cœur.",
      musicDescription:
        "Des chansons sur nos vies, les gens qu’on aime et le courage de recommencer.",
      exploreMusic: "Découvrir la musique",
      words: "02 / LES MOTS",
      storyLead: "Avant la musique,",
      storyEmphasis: "une histoire.",
      wordsDescription:
        "Une pensée qui s’accroche. Un souvenir qui se pose sur la page. Chaque chanson commence par quelque chose de vrai.",
      behindLyrics: "L’histoire des paroles",
      artist: "03 / L’ARTISTE",
      realLife: "La vraie vie.",
      honestMusic: "Une musique sincère.",
      artistDescription:
        "Auteur-compositeur canadien et artiste indépendant. Des chansons en français et en anglais, inspirées de son vécu.",
      artistImageAlt: "Evan Cross, les bras croisés",
      aboutLink: "Découvrir Evan",
      shop: "04 / LA BOUTIQUE",
      stayConnected: "RESTONS EN CONTACT",
      stayConnectedTitle: "Gardons le lien.",
      lyricsImageAlt: "Evan Cross en train d’écrire des paroles en studio",
      carouselLabel: "Les histoires d’Evan Cross",
      carouselNavigation: "Navigation des images d’accueil",
      imageLabel: "Image",
      backgroundVideo: "Vidéo d’ambiance d’Evan Cross",
      timeUntilNextImage: "Temps avant la prochaine image",
      exploreMusicHint: "DÉCOUVRIR LA MUSIQUE ↓",
    },
    music: {
      collection: "LA COLLECTION",
      stayForSong: "Restez pour une chanson.",
      collectionDescription:
        "Écoutez toute la collection d’Evan Cross sur SoundCloud, des confidences tout en douceur aux chansons plus fougueuses.",
      listenOnSoundcloud: "Écouter sur SoundCloud",
      watchOnYoutube: "Voir sur YouTube",
      onStage: "SUR SCÈNE",
      stageAlt: "Evan Cross sur scène avec son groupe",
      toast: "UN TOAST ENTRE DEUX CHANSONS",
      toastAlt:
        "Evan Cross levant son verre, guitare à la main avec son groupe",
      wordsLanguages: "DES MOTS EN FRANÇAIS ET EN ANGLAIS",
      everySongReal: "Chaque chanson commence par quelque chose de vrai.",
      lyricsDescription:
        "Découvrez {count} paroles publiées sur l’amour, la famille, la résilience, la foi et les nouveaux départs.",
      readLyrics: "Lire les paroles",
    },
    videos: {
      exploreLabel: "DÉCOUVRIR LA CHAÎNE YOUTUBE",
      exploreAria: "Découvrir les vidéos d’Evan Cross sur YouTube",
      recordingAlt: "Evan Cross en studio d’enregistrement",
      headline: "Les histoires prennent vie.",
      watch: "Voir sur YouTube",
    },
    platformLinks: {
      social: "Réseaux sociaux",
      streaming: "Plateformes d’écoute",
    },
    about: {
      writing: "L’ÉCRITURE",
      writingTitle: "Des chansons qui laissent toute la place à l’histoire.",
      writingFirst:
        "Ces chansons sont personnelles, sans pour autant exclure l’auditeur. Elles s’attachent aux petits détails : une question tard le soir, une voix familière ou quelques mots capables d’aider à traverser une journée difficile.",
      writingSecond:
        "Certaines paroles réconfortent; d’autres laissent les doutes sans réponse. Ensemble, elles font de la sincérité une façon de créer des liens, sans prétendre tout savoir.",
      writingLanguages: "Langues d’écriture",
      writingLanguagesValue: "Français et anglais",
      musicalRoots: "Racines musicales",
      publishedLyrics: "Paroles publiées",
      stories: "histoires",
      sound: "LE SON",
      soundTitle: "Des racines country. Une âme soul.",
      soundFirst:
        "La country donne aux chansons leur façon directe de raconter. La soul et le blues leur apportent une profondeur émotive, tandis que l’Americana accueille les aspérités et les histoires qui refusent les étiquettes.",
      soundSecond:
        "Un son porté par les mots : intime quand l’histoire appelle le calme, généreux quand elle prend son envol.",
      themes: "CE QUE PORTENT LES CHANSONS",
      themesTitle: "Des vies différentes. Des émotions familières.",
      themeList: [
        {
          title: "L’amour, la famille et l’attention",
          songs:
            "Mon Petit Rayon de Soleil · Ça Va Bien Aller · La Vraie Force des Hommes",
          description:
            "Des chansons comme des messages aux gens qui comptent, où la tendresse et les petits détails du quotidien ont toute leur place.",
        },
        {
          title: "La résilience et l’estime de soi",
          songs:
            "T'as Tout Déjà · War Inside My Bones · Un Ennemi Sous Ma Peau",
          description:
            "Des histoires pour traverser les saisons difficiles, retrouver son équilibre et se rappeler qu’on est plus grand que les épreuves.",
        },
        {
          title: "La foi, le doute et le sens de la vie",
          songs:
            "À Quoi Ça Sert, Mon Dieu · Est-Ce Que J’ai Le Droit ? · While I Wait On Heaven",
          description:
            "Des questions ouvertes côtoient la foi, le deuil et le choix de tendre la main à quelqu’un.",
        },
      ],
      stageAlt: "Evan Cross en spectacle sur scène",
      keepExploring: "POURSUIVRE LA DÉCOUVERTE",
      keepExploringTitle: "Trouvez une histoire qui restera avec vous.",
      listenLink: "Écouter la musique",
      lyricsLink: "Lire les paroles",
    },
    lyrics: {
      archive: "LES ARCHIVES",
      songIndex: "Index des chansons",
      all: "Tout",
      english: "Anglais",
      french: "Français",
      searchLabel: "Rechercher des chansons",
      searchPlaceholder: "Trouver une chanson",
      chooseSong: "Choisir une chanson",
      noMatchingSongs: "Aucune chanson correspondante",
      noSongsMatch: "Aucune chanson ne correspond à votre recherche.",
      songIndexLabel: "Index des chansons",
      englishLyrics: "PAROLES · ANGLAIS",
      frenchLyrics: "PAROLES · FRANÇAIS",
      lyricsBy: "Paroles de Yvan Junior Blanchette",
      lyricsByFrench: "Paroles de Yvan Junior Blanchette",
      chooseSongToRead: "Choisissez une chanson pour lire ses paroles.",
    },
    shop: {
      headline: "Portez les",
      emphasis: "chansons.",
      description: "Un petit morceau de musique,",
      descriptionSecond: "à emporter partout avec vous.",
      empty: "De nouveaux articles arrivent. Revenez bientôt.",
      visit: "Visiter la boutique",
    },
    soundcloud: {
      title: "La collection musicale d’Evan Cross sur SoundCloud",
      fallback: "Le lecteur ne charge pas?",
      listen: "Écouter sur SoundCloud",
    },
    notFound: {
      title: "Cette piste est introuvable.",
      description: "Retournons à la musique.",
      home: "Retour à l’accueil",
    },
    homeSlides: [
      [
        "Chaque chanson.",
        "Un peu de moi.",
        "La vraie vie. Le cœur à nu. Une musique sincère.",
      ],
      [
        "Au cœur de la tempête.",
        "Toujours debout.",
        "Des chansons pour retrouver sa force quand la vie change les plans.",
      ],
      [
        "À la poursuite de la lumière.",
        "Je trouve ma voie.",
        "Pour les chemins à venir et les histoires qu’on emporte avec soi.",
      ],
      [
        "Un instant de calme.",
        "Une chanson sincère.",
        "Certaines choses se disent plus facilement en chanson.",
      ],
      [
        "Quand tout se tait.",
        "Le cœur parle.",
        "Des mots pour les émotions qui restent après minuit.",
      ],
      [
        "Les jours difficiles.",
        "L’espoir qui demeure.",
        "Un peu de foi, un peu de courage. Un jour à la fois.",
      ],
      [
        "Regarder derrière soi.",
        "Aller de l’avant.",
        "Le passé fait partie de l’histoire. Il reste encore des pages à écrire.",
      ],
      [
        "Les petits moments.",
        "Tout ce qui compte.",
        "L’amour vit dans ces petits riens qu’on partage.",
      ],
      [
        "Tout mon univers.",
        "Ma raison d’avancer.",
        "Pour les gens qui donnent envie d’accueillir chaque lendemain.",
      ],
      [
        "Des chemins différents.",
        "Le même cœur.",
        "Les histoires nous rapprochent, où que la vie nous mène.",
      ],
    ],
  },
} as const;

export function getNavigation(locale: Locale) {
  return translations[locale].navigation.map((item) => ({
    ...item,
    href: localizedPath(item.href, locale),
  }));
}
