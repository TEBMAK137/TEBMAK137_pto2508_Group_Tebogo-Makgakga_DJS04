// ==============================
// 0. DATA (merged from provided exports)
// ==============================
const podcasts = [
  {
    id: "10716",
    title: "Something Was Wrong",
    description:
      "Something Was Wrong is an Iris Award-winning true-crime docuseries about the discovery, trauma, and recovery from shocking life events and abusive relationships.",
    seasons: 14,
    image:
      "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg",
    genres: [1, 2],
    updated: "2022-11-03T07:00:00.000Z",
  },
  {
    id: "5675",
    title: "This Is Actually Happening",
    description:
      "What if your mother left to follow a cult… or you woke up in a morgue… or if your boat got caught in a storm and began to sink -- what would you do? This is Actually Happening brings you extraordinary true stories of life-changing events told by the people who lived them.",
    seasons: 12,
    image:
      "https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png",
    genres: [2],
    updated: "2022-11-01T10:00:00.000Z",
  },
  {
    id: "5279",
    title: "American History Tellers",
    description:
      "The Cold War, Prohibition, the Gold Rush, the Space Race. Every part of your life can be traced to our history. Hosted by Lindsay Graham. From Wondery.",
    seasons: 51,
    image:
      "https://content.production.cdn.art19.com/images/a4/8f/53/79/a48f5379-a90e-4197-915c-c0645e0d9336/8d9e6ebc4d65a9575fa626318e426fcf8be7f98ea0c1b7b103de2b32def46ded57537627d80b36f55edf7c9a8ad639bd9816f68c79b56845203a0b5bc4a63a55.png",
    genres: [3],
    updated: "2022-11-02T07:01:00.000Z",
  },
  {
    id: "10539",
    title: "Scamfluencers",
    description:
      "You never really know someone…especially online. In today's world, the power of influence can be the quickest path to money and fame, and it often ends in ruin.",
    seasons: 3,
    image:
      "https://content.production.cdn.art19.com/images/19/f4/f9/af/19f4f9af-4a18-44e1-a622-726f43feb79d/539a50f79529628dbde7aa116778056619b802bfa0247cb739db907085e0b595a5521efc78faa831ebddc235d69beb27e1e36fd51f825bc888f0c11cccbd9cd8.png",
    genres: [2],
    updated: "2022-10-24T07:01:00.000Z",
  },
  {
    id: "9177",
    title: "Killer Psyche",
    description:
      "When a shocking crime occurs, people ask 'Why?' On Killer Psyche, retired FBI agent Candice DeLong draws on her decades of experience to reveal why these murderers and criminals committed these acts.",
    seasons: 2,
    image:
      "https://content.production.cdn.art19.com/images/68/4e/03/af/684e03af-29c5-4a35-b84a-d929f114caee/4f60eec3fabd62251d0cdbd1af11b79c43fb1465dbc5ec3371328fbddadee597e9f115c31b079e20266648ee07a80a93c01cecdb81ab3545d872393997594ef3.png",
    genres: [3, 2],
    updated: "2022-11-01T07:03:00.000Z",
  },
  {
    id: "6807",
    title: "Even the Rich",
    description:
      "Our lives can be crazy, but you can take a break from it all with Wondery's new series, Even the Rich, where co-hosts Brooke Siffrinn and Aricia Skidmore-Williams pull back the curtain.",
    seasons: 33,
    image:
      "https://content.production.cdn.art19.com/images/c3/55/d2/da/c355d2da-f845-47df-a4e6-22b70a5082bb/c290fe89d3a699dd5c316f5f4cfe2ca942183cef5d6ac4fc2d7d6df296690c9e7183f79422dcb0b37af7c7e7e59de0e36cddd3b01500bf066a470614c9a0af6d.png",
    genres: [4, 5, 3],
    updated: "2022-11-01T07:08:00.000Z",
  },
  {
    id: "8514",
    title: "Against The Odds",
    description:
      "Humans are resilient. In our toughest moments, we will fight, we will struggle, and we will triumph...often against the odds. From Wondery.",
    seasons: 19,
    image:
      "https://content.production.cdn.art19.com/images/a3/77/2c/e4/a3772ce4-34f7-431d-bf80-968f555b7003/6c099d5ec76b40bb54e72a75c1dcbc44c5c13a764114fb5183fe7eecd201619fca37cf3dd029c2fc320fb1a3cfab716d94297cbe7bb32ead208b779579015683.png",
    genres: [3],
    updated: "2022-11-01T07:01:00.000Z",
  },
  {
    id: "10276",
    title: "This Podcast Will Kill You",
    description:
      "This podcast might not actually kill you, but it covers so many things that can. Each episode tackles a different disease, from its history, to its biology, and finally, how scared you need to be.",
    seasons: 5,
    image:
      "https://content.production.cdn.art19.com/images/f5/16/e0/99/f516e099-4c64-4737-9fdb-55f4d45a4003/6d14be58e0a54d21128c239dd933e0f3c36ca00f85ea7294cbea91a2b214d2384361c2a765842eef66e8583b2c21302c8fd2b1eb4d32e3805481292d758f20aa.jpeg",
    genres: [1],
    updated: "2022-10-25T07:01:00.000Z",
  },
  {
    id: "8860",
    title: "British Scandal",
    description:
      "In a country obsessed with gossip, the great and the good fear one thing more than any other - scandal. British scandals change the course of history.",
    seasons: 19,
    image:
      "https://content.production.cdn.art19.com/images/be/95/68/28/be956828-0cc8-4d16-986f-b81142129bd3/bdc59126cd5707aee511313b8e246428364b62229f8243c4deab8f5721425478c9fcb4224cd0369f8001cde85dbe4c3106d31ed914e414a18208a29386e88317.png",
    genres: [2],
    updated: "2022-11-01T23:01:00.000Z",
  },
  {
    id: "5629",
    title: "Tides of History",
    description:
      "Everywhere around us are echoes of the past. Those echoes define the boundaries of states and countries, how we pray and how we fight. From Wondery, host Patrick Wyman, PhD.",
    seasons: 5,
    image:
      "https://content.production.cdn.art19.com/images/a4/b7/0e/b1/a4b70eb1-2ba8-4320-ba12-20939a9c0d13/486bc367f5acec6dbb5fdfb84d510a1ed304ba20c6e9c97da0448a62e6d4a1c5b91fb30198437f6d4db969db5f171aa63648545002fbaa81d9fcc422a2e05b9e.jpeg",
    genres: [3],
    updated: "2022-11-03T07:01:00.000Z",
  },
];

const genres = [
  {
    id: 1,
    title: "Personal Growth",
    description:
      "Looking to improve yourself and reach your full potential? Look no further than our collection of personal growth podcasts!",
    shows: ["10716", "10276", "6756", "10660"],
  },
  {
    id: 2,
    title: "Investigative Journalism",
    description:
      "Looking for a collection of podcasts that will keep you on the edge of your seat?",
    shows: [
      "10716",
      "5675",
      "10539",
      "9177",
      "8860",
      "5012",
      "9054",
      "7654",
      "8256",
      "8291",
      "5718",
      "5276",
      "5964",
      "6465",
      "5320",
      "6451",
      "5692",
      "6430",
    ],
  },
  {
    id: 3,
    title: "History",
    description:
      "Experience the past like never before with our collection of history podcasts!",
    shows: [
      "5279",
      "9177",
      "6807",
      "8514",
      "5629",
      "8364",
      "5964",
      "9041",
      "5702",
      "5320",
      "6717",
      "5968",
      "8760",
    ],
  },
  {
    id: 4,
    title: "Comedy",
    description: "Get ready to laugh with our collection of comedy podcasts!",
    shows: ["6807"],
  },
  {
    id: 5,
    title: "Entertainment",
    description: "Entertainment lovers, get ready for a treat!",
    shows: ["6807", "6631", "8256", "6756", "5702", "9620", "10758"],
  },
  {
    id: 6,
    title: "Business",
    description:
      "For those who want to keep their finger on the pulse of the entertainment industry.",
    shows: ["8364", "6717", "8760"],
  },
  {
    id: 7,
    title: "Fiction",
    description:
      "Get ready to be transported to new worlds and lose yourself in captivating stories.",
    shows: ["6631", "9664", "8188", "9702", "9695", "9994", "9263", "9666"],
  },
  {
    id: 8,
    title: "News",
    description:
      "Stay informed and on top of the latest events with our collection of current news podcasts.",
    shows: ["8291", "5718"],
  },
  {
    id: 9,
    title: "Kids and Family",
    description:
      "Bring some fun and learning to your family's ears with our collection of kids and family podcasts.",
    shows: [
      "8188",
      "9687",
      "9702",
      "9665",
      "10182",
      "9994",
      "9705",
      "10934",
      "9694",
      "9693",
      "9704",
      "9739",
      "9691",
    ],
  },
];

const seasons = [
  {
    id: "10716",
    seasonDetails: [
      { title: "Season 1", episodes: 10 },
      { title: "Season 2", episodes: 8 },
      { title: "Season 3", episodes: 9 },
      { title: "Season 4", episodes: 7 },
      { title: "Season 5", episodes: 10 },
      { title: "Season 6", episodes: 7 },
      { title: "Season 7", episodes: 6 },
      { title: "Season 8", episodes: 6 },
      { title: "Season 9", episodes: 9 },
      { title: "Season 10", episodes: 10 },
      { title: "Season 11", episodes: 10 },
      { title: "Season 12", episodes: 6 },
      { title: "Season 13", episodes: 10 },
      { title: "Season 14", episodes: 4 },
    ],
  },
  {
    id: "5675",
    seasonDetails: [
      { title: "Season 1", episodes: 10 },
      { title: "Season 2", episodes: 10 },
      { title: "Season 3", episodes: 10 },
      { title: "Season 4", episodes: 10 },
      { title: "Season 5", episodes: 10 },
      { title: "Season 6", episodes: 10 },
      { title: "Season 7", episodes: 10 },
      { title: "Season 8", episodes: 10 },
      { title: "Season 9", episodes: 10 },
      { title: "Season 10", episodes: 10 },
      { title: "Season 11", episodes: 10 },
      { title: "Season 12", episodes: 10 },
    ],
  },
  {
    id: "5279",
    seasonDetails: [
      { title: "The Cold War", episodes: 7 },
      { title: "Prohibition", episodes: 7 },
      { title: "The Age of Jackson", episodes: 7 },
      { title: "The Space Race", episodes: 4 },
      { title: "American Revolution", episodes: 7 },
      { title: "National Parks", episodes: 7 },
      { title: "Civil Rights", episodes: 7 },
      { title: "Political Parties", episodes: 7 },
      { title: "The 1968 Chicago Protests", episodes: 4 },
      { title: "The Great Depression", episodes: 7 },
      { title: "J. Edgar Hoover's FBI", episodes: 7 },
      { title: "Sponsored | American Epidemics", episodes: 2 },
      { title: "Tulsa Race Massacre", episodes: 7 },
      { title: "The Bastard Brigade", episodes: 7 },
      { title: "Dutch Manhattan", episodes: 7 },
      { title: "The Triangle Shirtwaist Factory Fire", episodes: 5 },
      { title: "Kentucky Blood Feud", episodes: 2 },
      { title: "California Water Wars", episodes: 6 },
      { title: "What We Learned from the Spanish Flu", episodes: 1 },
      { title: "Rebellion in the Early Republic", episodes: 7 },
      { title: "The WWII Home Front", episodes: 2 },
      { title: "The Space Race", episodes: 4 },
      { title: "Stonewall", episodes: 5 },
      { title: "The Gilded Age", episodes: 7 },
      { title: "Political Parties", episodes: 6 },
      { title: "The Supreme Court", episodes: 8 },
      { title: "Coal Wars", episodes: 5 },
      { title: "Traditions, Crisis, and Unity", episodes: 1 },
      { title: "The Great Chicago Fire", episodes: 4 },
      { title: "America's Monuments", episodes: 7 },
      { title: "Bleeding Kansas", episodes: 5 },
      { title: "The Mystery of D.B. Cooper", episodes: 1 },
      { title: "Tulsa Race Massacre", episodes: 5 },
      { title: "Lost Colony of Roanoke", episodes: 3 },
      { title: "The Walker Affair", episodes: 3 },
      { title: "The Fight for the First U.S. Olympics", episodes: 4 },
      { title: "National Parks", episodes: 6 },
      { title: "Roaring Twenties", episodes: 5 },
      { title: "Traitors", episodes: 5 },
      { title: "Philippine-American War", episodes: 5 },
      { title: "Billy the Kid", episodes: 4 },
      { title: "The Plot to Steal Lincoln's Body", episodes: 3 },
      { title: "The Fight for Women's Suffrage", episodes: 6 },
      { title: "Lewis and Clark", episodes: 4 },
      { title: "The Great Mississippi Flood", episodes: 4 },
      { title: "The Age of Jackson", episodes: 7 },
      { title: "The Manson Murders", episodes: 3 },
      { title: "Civil War", episodes: 8 },
      { title: "The Walker Affair", episodes: 3 },
      { title: "The Age of Pirates", episodes: 4 },
      { title: "Yellow Fever Epidemic of 1793", episodes: 1 },
    ],
  },
  {
    id: "10539",
    seasonDetails: [
      { title: "Season 1", episodes: 8 },
      { title: "Season 2", episodes: 9 },
      { title: "Season 3", episodes: 9 },
    ],
  },
  {
    id: "9177",
    seasonDetails: [
      { title: "Season 1", episodes: 10 },
      { title: "Season 2", episodes: 10 },
    ],
  },
  {
    id: "6807",
    seasonDetails: [
      { title: "From Commoner to Royalty", episodes: 5 },
      { title: "A Real Life 'Succession' Story", episodes: 6 },
      { title: "American Royalty", episodes: 5 },
      { title: "The Gettys", episodes: 6 },
      { title: "The House of Versace", episodes: 5 },
      { title: "Chappaquiddick", episodes: 3 },
      { title: "JFK Jr. and Carolyn Bessette", episodes: 3 },
      { title: "#FreeBritney", episodes: 5 },
      { title: "Diana to Meghan", episodes: 5 },
      { title: "Brooke and Aricia's Big Rich Year-End Special", episodes: 1 },
      { title: "Paris Hilton", episodes: 5 },
      { title: "The Kardashians", episodes: 5 },
      { title: "Oprah Presents Meghan and Harry", episodes: 1 },
      { title: "JFK & Jackie", episodes: 4 },
      { title: "American Royalty", episodes: 5 },
      { title: "The Making of Madonna", episodes: 5 },
      { title: "The Life & Loves of Elizabeth Taylor", episodes: 5 },
      { title: "Back to Bennifer", episodes: 3 },
      { title: "The Emancipation of Mariah Carey", episodes: 5 },
      { title: "A Real Life 'Succession' Story", episodes: 5 },
      { title: "Murder in the House of Gucci", episodes: 4 },
      { title: "Blonde. Billionaire. Boss", episodes: 5 },
      { title: "The Patty Hearst Story", episodes: 5 },
      { title: "Janet vs The HalfTime Show", episodes: 3 },
      { title: "The Kardashians", episodes: 5 },
      { title: "Marilyn", episodes: 5 },
      { title: "Saint Dolly", episodes: 4 },
      { title: "Still Standing", episodes: 5 },
      { title: "Back to Bennifer", episodes: 2 },
      { title: "Fresh Prince to Fallen King", episodes: 6 },
      { title: "JFK & Jackie", episodes: 3 },
      { title: "Rewriting The Story", episodes: 5 },
      { title: "In God We Lust", episodes: 2 },
    ],
  },
  {
    id: "8514",
    seasonDetails: [
      { title: "Thai Cave Rescue", episodes: 6 },
      { title: "Kidnapped in the Desert", episodes: 4 },
      { title: "Prisoner of War", episodes: 5 },
      { title: "The Savage Mountain", episodes: 5 },
      { title: "Shipwreck on the Sahara", episodes: 5 },
      { title: "Surviving Antarctica", episodes: 6 },
      { title: "Plane Crash in the Andes", episodes: 5 },
      { title: "Chilean Mine Collapse", episodes: 5 },
      { title: "Rock Climbers Abducted", episodes: 5 },
      { title: "Disaster at Sea", episodes: 5 },
      { title: "Stranded in the Arctic", episodes: 3 },
      { title: "Kidnapped in the Desert", episodes: 3 },
      { title: "Avalanche at Tunnel Creek", episodes: 2 },
      { title: "Meltdown at Fukushima", episodes: 5 },
      { title: "Trapped on Mount Hood", episodes: 6 },
      { title: "Thai Cave Rescue", episodes: 5 },
      { title: "Crash in a Volcano", episodes: 3 },
      { title: "Wildfire in Paradise", episodes: 6 },
      { title: "The Race to Save Squalus", episodes: 1 },
    ],
  },
  {
    id: "10276",
    seasonDetails: [
      { title: "Season 1", episodes: 10 },
      { title: "Season 2", episodes: 10 },
      { title: "Season 3", episodes: 10 },
      { title: "Season 4", episodes: 10 },
      { title: "Season 5", episodes: 10 },
    ],
  },
  {
    id: "8860",
    seasonDetails: [
      { title: "The Litvinenko Affair", episodes: 5 },
      { title: "The Sexed Up Dossier", episodes: 4 },
      { title: "The Murdoch Phone Hacking", episodes: 5 },
      { title: "Breaking Barings", episodes: 4 },
      { title: "The Profumo Affair", episodes: 6 },
      { title: "The Canoe Con", episodes: 4 },
      { title: "Anarchy In The UK (Sex Pistols)", episodes: 5 },
      { title: "Lord Lucan", episodes: 4 },
      { title: "The Litvinenko Affair", episodes: 5 },
      { title: "The Coughing Major", episodes: 4 },
      { title: "Maxwell", episodes: 5 },
      { title: "Spy Cops", episodes: 4 },
      { title: "Archer", episodes: 4 },
      { title: "Hatton Garden", episodes: 4 },
      { title: "Hitler Diaries", episodes: 4 },
      { title: "Abdication", episodes: 4 },
      { title: "The Spy Who Came Back From The Dead", episodes: 4 },
      { title: "The Queen of Clean", episodes: 4 },
      { title: "Boris Johnson", episodes: 3 },
    ],
  },
  {
    id: "5629",
    seasonDetails: [
      { title: "Rise of the Modern World", episodes: 10 },
      { title: "The Later Middle Ages", episodes: 10 },
      { title: "Early Modern Explosion", episodes: 10 },
      { title: "Prehistory", episodes: 10 },
      { title: "Classic Tides", episodes: 4 },
    ],
  },
];

// ==============================
// 1. LOOKUP MAPS (fast genre & season resolution)
// ==============================
const genreMap = new Map(genres.map((g) => [g.id, g.title]));
const seasonMap = new Map(seasons.map((s) => [s.id, s.seasonDetails]));

// ==============================
// 2. ABSTRACT / BASE CLASSES
// ==============================
class UIComponent {
  render() {
    throw new Error("render() must be implemented");
  }
}

// ==============================
// 3. PODCAST MODEL (Encapsulation)
// ==============================
class Podcast {
  /**
   * @param {Object} raw - raw podcast object from data
   */
  constructor(raw) {
    this.id = raw.id;
    this.title = raw.title;
    this.imageUrl = raw.image;
    this.seasons = raw.seasons;
    this.genres = raw.genres; // array of genre IDs
    this.updatedAt = new Date(raw.updated);
    this.description = raw.description;
    this.seasonsList = seasonMap.get(raw.id) || []; // detailed season info
    this.popularity =
      (seasonMap.get(raw.id) || []).length * 10 + raw.seasons * 2;
  }

  /** @returns {string[]} genre titles resolved from IDs */
  getGenreTitles() {
    return this.genres.map((gid) => genreMap.get(gid) || "General");
  }
}

// ==============================
// 4. DATA STORE (Manages collection, filters, sorts)
// ==============================
class PodcastStore {
  constructor(rawPodcasts = []) {
    this._podcasts = rawPodcasts.map((raw) => new Podcast(raw));
  }

  getAll() {
    return [...this._podcasts];
  }

  /**
   * Filter & sort based on current UI state
   * @param {{ genre: string, searchTerm: string, sortBy: string }} filters
   * @returns {Podcast[]}
   */
  filterAndSort({ genre = "all", searchTerm = "", sortBy = "recent" } = {}) {
    let filtered = this._podcasts.filter((p) => {
      const matchGenre = genre === "all" || p.genres.includes(Number(genre));
      const matchSearch =
        !searchTerm.trim() ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchGenre && matchSearch;
    });

    // Polymorphic sort (Strategy pattern)
    const strategies = {
      recent: (a, b) => b.updatedAt - a.updatedAt,
      popular: (a, b) => b.popularity - a.popularity,
      newest: (a, b) => Number(b.id) - Number(a.id),
    };
    return filtered.sort(strategies[sortBy] || strategies.recent);
  }

  /** @returns {Array<{id: number, title: string}>} unique genres present in store */
  getAllGenres() {
    const seen = new Set();
    this._podcasts.forEach((p) =>
      p.genres.forEach((gid) => {
        if (genreMap.has(gid))
          seen.add(JSON.stringify({ id: gid, title: genreMap.get(gid) }));
      }),
    );
    return [...seen]
      .map((s) => JSON.parse(s))
      .sort((a, b) => a.title.localeCompare(b.title));
  }
}

// ==============================
// 5. RENDERER ABSTRACTION (Inheritance + Polymorphism)
// ==============================
class PodcastRenderer extends UIComponent {
  render(podcast) {
    throw new Error("render(podcast) not implemented");
  }
  _escape(str) {
    return String(str).replace(
      /[&<>]/g,
      (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[m],
    );
  }
}

// ---- Card Renderer ----
class CardRenderer extends PodcastRenderer {
  render(podcast) {
    const dateStr = podcast.updatedAt.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const genreTitles = podcast.getGenreTitles();
    const genrePreview = genreTitles
      .slice(0, 2)
      .map((g) => `<span class="genre-pill">${this._escape(g)}</span>`)
      .join("");
    const extraGenre =
      genreTitles.length > 2
        ? `<span class="genre-pill">+${genreTitles.length - 2}</span>`
        : "";
    return `
      <div class="podcast-card" data-id="${podcast.id}">
        <img class="card-cover" src="${podcast.imageUrl}" alt="${this._escape(podcast.title)}" loading="lazy" />
        <div class="card-body">
          <div class="card-title">${this._escape(podcast.title)}</div>
          <div class="meta-row">
            <span class="season-badge">📅 ${podcast.seasons} season${podcast.seasons !== 1 ? "s" : ""}</span>
          </div>
          <div class="genre-pills">${genrePreview}${extraGenre}</div>
          <div class="update-text">🕒 Updated ${dateStr}</div>
        </div>
      </div>
    `;
  }
}

// ---- Modal Renderer ----
class ModalRenderer extends PodcastRenderer {
  render(podcast) {
    const dateStr = podcast.updatedAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const genreTitles = podcast.getGenreTitles();
    const genreTags = genreTitles
      .map((g) => `<span class="genre-pill">${this._escape(g)}</span>`)
      .join("");

    let seasonsHTML = "";
    if (podcast.seasonsList && podcast.seasonsList.length) {
      seasonsHTML = `<div class="season-list">`;
      podcast.seasonsList.forEach((s) => {
        seasonsHTML += `<div class="season-row">
          <span class="season-name">🎧 ${this._escape(s.title)}</span>
          <span class="season-episodes">${s.episodes} episodes</span>
        </div>`;
      });
      seasonsHTML += `</div>`;
    }

    return `
      <div class="modal-header">
        <img class="modal-cover" src="${podcast.imageUrl}" alt="${this._escape(podcast.title)} cover" />
        <div class="modal-title-section">
          <div class="modal-title">${this._escape(podcast.title)}</div>
          <div class="modal-meta">
            <span class="season-badge">⭐ ${podcast.seasons} seasons</span>
            <span class="genre-pill">📅 Updated ${dateStr}</span>
          </div>
          <div class="genre-pills">${genreTags}</div>
        </div>
      </div>
      <div class="modal-description">
        <strong>📖 About</strong><br>${this._escape(podcast.description)}
      </div>
      <div class="seasons-heading">📅 Seasons & Episodes</div>
      ${seasonsHTML}
    `;
  }
}

// ==============================
// 6. CONTAINER COMPONENTS
// ==============================
class PodcastGrid extends UIComponent {
  constructor(containerElement, cardRenderer) {
    super();
    this.container = containerElement;
    this.renderer = cardRenderer;
  }

  render(podcasts) {
    if (!podcasts.length) {
      this.container.innerHTML =
        '<p style="text-align:center; padding:2rem;">No podcasts match your filters.</p>';
      return;
    }
    this.container.innerHTML = podcasts
      .map((p) => this.renderer.render(p))
      .join("");
  }
}

class ModalManager {
  constructor(overlay, contentDiv, closeBtn, modalRenderer) {
    this.overlay = overlay;
    this.contentDiv = contentDiv;
    this.closeBtn = closeBtn;
    this.renderer = modalRenderer;
    this._initEvents();
  }

  _initEvents() {
    this.closeBtn.addEventListener("click", () => this.close());
    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });
  }

  open(podcast) {
    this.contentDiv.innerHTML = this.renderer.render(podcast);
    this.overlay.classList.add("active");
    this.overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  close() {
    this.overlay.classList.remove("active");
    this.overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    this.contentDiv.innerHTML = "";
  }
}

// ==============================
// 7. APP INITIALIZATION
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  // ---- Store ----
  const store = new PodcastStore(podcasts);

  // ---- DOM ----
  const gridContainer = document.getElementById("podcastGrid");
  const genreSelect = document.getElementById("genreFilter");
  const sortSelect = document.getElementById("sortFilter");
  const searchInput = document.getElementById("searchInput");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.getElementById("closeModalBtn");

  // ---- Populate genre dropdown ----
  store.getAllGenres().forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre.id;
    option.textContent = genre.title;
    genreSelect.appendChild(option);
  });

  // ---- Instantiate renderers (polymorphism) ----
  const cardRenderer = new CardRenderer();
  const modalRenderer = new ModalRenderer();

  // ---- Instantiate grid & modal ----
  const grid = new PodcastGrid(gridContainer, cardRenderer);
  const modal = new ModalManager(
    modalOverlay,
    modalContent,
    closeBtn,
    modalRenderer,
  );

  // ---- Re-render grid based on current filters ----
  function refreshGrid() {
    const filtered = store.filterAndSort({
      genre: genreSelect.value,
      searchTerm: searchInput.value,
      sortBy: sortSelect.value,
    });
    grid.render(filtered);
  }

  // ---- Event listeners ----
  genreSelect.addEventListener("change", refreshGrid);
  sortSelect.addEventListener("change", refreshGrid);
  searchInput.addEventListener("input", refreshGrid);

  // Event delegation for card clicks
  gridContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".podcast-card");
    if (!card) return;
    const id = card.dataset.id;
    const podcast = store.getAll().find((p) => p.id === id);
    if (podcast) modal.open(podcast);
  });

  // Initial render
  refreshGrid();
});
