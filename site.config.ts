export const site = {
  name: "L'Angolo Bianco",
  legalName: "L'Angolo Bianco",
  alsoKnownAs: ["Caffe L'Angolo Bianco", "Caffè L'Angolo Bianco"],
  italian: "il bianco angolo",
  tagline: "Home made pasta. Marylebone warmth.",
  headline: "Il bianco angolo — proper Italian, quietly.",
  description:
    "Family-run Italian café-restaurant on Crawford Street, Marylebone. Home made pasta, breakfast through late lunch, book a table via TheFork or call 020 7724 5888.",
  neighbourhood: "Marylebone",
  city: "London",
  priceRange: "£10–£20",
  priceSchema: "££",
  cuisine: "Italian",
  domain: "https://langolobianco-marylebone.co.uk",
  /** Live host until the .co.uk DNS is on Netlify — WhatsApp needs this for the card. */
  liveUrl: "https://langolo-bianco-marylebone.netlify.app",
  phoneDisplay: "020 7724 5888",
  phoneIntl: "+44 20 7724 5888",
  tel: "tel:+442077245888",
  email: null as string | null,
  instagramHandle: "@langolobiancoofficial",
  instagram: "https://www.instagram.com/langolobiancoofficial/",
  thefork: {
    reserve:
      "https://www.thefork.co.uk/restaurant/l-angolo-bianco-marylebone-r860124",
    menu: "https://www.thefork.co.uk/restaurant/l-angolo-bianco-marylebone-r860124/menu",
    microcopy: "Booked via TheFork",
  },
  tripadvisor:
    "https://www.tripadvisor.com/Restaurant_Review-g186338-d8566994-Reviews-L_Angolo_Bianco-London_England.html",
  deliveroo: "https://deliveroo.co.uk/menu/london/marylebone/langolo-bianco",
  googleMapsPlace:
    "https://www.google.com/maps/place/L'Angolo+Bianco/@51.519277,-0.162964,17z",
  googleMapsReviews:
    "https://www.google.com/maps/search/?api=1&query=L%27Angolo%20Bianco%2049%20Crawford%20Street%20Marylebone",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=L%27Angolo%20Bianco%2C%2049%20Crawford%20Street%2C%20London%20W1H%201HA",
  mapsEmbed:
    "https://maps.google.com/maps?q=L'Angolo+Bianco,+49+Crawford+Street,+London+W1H+1HA&hl=en&z=17&output=embed",
  address: {
    street: "49 Crawford Street",
    neighbourhood: "Marylebone",
    city: "London",
    postcode: "W1H 1HA",
    country: "United Kingdom",
    line: "49 Crawford Street, Marylebone, London W1H 1HA",
  },
  geo: { lat: 51.519277, lng: -0.162964 },
  walk: "A few minutes from Marble Arch; a short walk from Marylebone Station.",
  people: {
    owner: "Anell",
    staff: ["Abel"],
  },
  ratings: {
    google: { rating: 4.7, count: 522, label: "500+" },
    tripadvisor: { rating: 4.9, count: 266 },
  },
} as const;

/** Absolute origin for OG / sitemap. Uses the live Netlify host until .co.uk is connected. */
export function publicOrigin() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL;
  return (fromEnv || site.liveUrl).replace(/\/$/, "");
}

/** Edit hours in one place. Schema and Visit block both read this. */
export const hours = {
  note: "Hours may vary — please call if you are travelling.",
  days: [
    { day: "Monday", short: "Mon", opens: "08:30", closes: "19:00", closed: false },
    { day: "Tuesday", short: "Tue", opens: "08:30", closes: "19:00", closed: false },
    { day: "Wednesday", short: "Wed", opens: "08:30", closes: "19:00", closed: false },
    { day: "Thursday", short: "Thu", opens: "08:30", closes: "19:00", closed: false },
    { day: "Friday", short: "Fri", opens: "08:30", closes: "19:00", closed: false },
    { day: "Saturday", short: "Sat", opens: "08:30", closes: "19:00", closed: false },
    { day: "Sunday", short: "Sun", opens: "10:00", closes: "15:30", closed: false },
  ],
  grouped: [
    { label: "Monday–Saturday", hours: "08:30–19:00" },
    { label: "Sunday", hours: "10:00–15:30" },
  ],
} as const;

export const menuNote =
  "Made fresh each morning — when it's gone, it's gone.";

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  priceNote?: string;
  featured?: boolean;
};

export type DrinkGroup = {
  heading: string;
  items: MenuItem[];
};

export const menu = {
  breakfast: [
    { name: "Plain croissant", price: "£2.20" },
    { name: "Pain au raisin", price: "£2.40" },
    { name: "Pain au chocolat", price: "£2.40" },
    {
      name: "Chicken sausage roll",
      description:
        "Chicken sausage and cheddar cheese served in a home-made pastry.",
      price: "£5.50",
    },
    {
      name: "House puff pastries",
      description:
        "With feta cheese and eggs, or feta cheese, spinach and eggs.",
      price: "£6.00",
    },
    {
      name: "Omelette",
      description:
        "Organic omelette made with a choice of three fillings. Cherry tomato, spring onions, spinach, salami and Parma ham.",
      price: "£11.50",
    },
    {
      name: "Bruschetta",
      description:
        "Cherry tomato, basil, parmesan cheese and olive oil on an Italian-style toast.",
      price: "£6.00",
    },
  ] satisfies MenuItem[],
  pasta: [
    {
      name: "Mushroom pasta",
      description:
        "The house legend. Guests call it the best they've ever had — and it does sell out.",
      price: "from £12.50",
      featured: true,
    },
    {
      name: "Pasta with spinach",
      priceNote: "ask the kitchen",
    },
    {
      name: "Pasta all'arrabbiata",
      priceNote: "ask the kitchen",
    },
    {
      name: "Tortelloni",
      price: "£16.50",
    },
    {
      name: "Pasta al forno",
      price: "£15.00",
    },
  ] satisfies MenuItem[],
  risotto: [
    {
      name: "Chicken and vegetables",
      price: "£15.00",
    },
  ] satisfies MenuItem[],
  sandwiches: [
    { name: "Bresaola ciabatta", price: "£15.00" },
    { name: "Parma ham ciabatta", price: "£12.50" },
    { name: "Chicken escalope", price: "£12.50" },
    { name: "Salami ciabatta", price: "£11.50" },
    { name: "Italian tuna", price: "£11.50" },
    { name: "Mozzarella", price: "£10.00" },
    { name: "Meza's special", price: "£12.50" },
  ] satisfies MenuItem[],
  salads: [
    { name: "Chicken salad", price: "£15.50" },
    { name: "Antipasto salad", price: "£16.00" },
    { name: "Italian tuna salad", price: "£11.00" },
    { name: "Greek salad", price: "£13.50" },
    { name: "Mozzarella salad", priceNote: "ask the kitchen" },
    { name: "Vegetable cheese salad", price: "£14.50" },
  ] satisfies MenuItem[],
  dolci: [
    {
      name: "Pancakes",
      description:
        "Two freshly made pancakes served with one of the following: chocolate / Nutella / honey / feta cheese / spinach.",
      price: "£8.50",
    },
    {
      name: "Tiramisu",
      description: "Traditional Italian coffee sponge cake.",
      price: "£6.00",
    },
    {
      name: "Cantuccini-style biscuit",
      description: "Filled with Nutella, walnut and rosehip jam.",
      price: "£4.00",
    },
    { name: "Cake of the day", price: "£5.00" },
  ] satisfies MenuItem[],
  drinks: [
    {
      heading: "Coffee & tea",
      items: [
        { name: "Cappuccino", price: "£3.50" },
        { name: "Caffè latte", price: "£3.50" },
        { name: "Americano", price: "£3.20" },
        { name: "Espresso — single", price: "£2.20" },
        { name: "Espresso — double", price: "£2.80" },
        { name: "Mocha", price: "£3.80" },
        { name: "Hot chocolate", price: "£3.80" },
        { name: "Tea", price: "£2.60" },
      ],
    },
    {
      heading: "Freshly squeezed",
      items: [
        { name: "Orange juice", price: "£6.50" },
        { name: "Smoothie of the day", price: "£7.50" },
      ],
    },
    {
      heading: "Soft drinks",
      items: [
        { name: "Coca-Cola", price: "£3.00" },
        { name: "San Pellegrino", price: "£3.00" },
        { name: "Acqua Panna", price: "£3.00" },
        { name: "San Benedetto", price: "£3.00" },
      ],
    },
    {
      heading: "Wine",
      items: [
        { name: "Red wine", price: "£9.50" },
        { name: "White wine", price: "£9.50" },
        { name: "Prosecco", price: "£10.00" },
      ],
    },
  ] satisfies DrinkGroup[],
} as const;

export const reviews = [
  {
    id: "coley",
    quote:
      "I had the mushroom pasta with salad and it is by far the best pasta I have ever had. The staff are so helpful — nothing is too much for them.",
    name: "Coley Cole",
    source: "Google",
    stars: 5,
  },
  {
    id: "abel",
    quote:
      "The food was simply brilliant, and Abel was incredibly friendly and welcoming. The mushroom pasta is an absolute must-try.",
    name: "Guest",
    source: "TripAdvisor",
    stars: 5,
  },
  {
    id: "anell",
    quote:
      "Amazing food and atmosphere. The young owner Anell made me feel like I'm at home with my nonno. Would recommend this place to family and friends.",
    name: "Guest",
    source: "TripAdvisor",
    stars: 5,
  },
  {
    id: "last-plate",
    quote:
      "I had the last mushroom pasta of the day — honestly, it was worth fighting over. Every mouthful an explosion of flavour. It gave me that warm, part-of-the-family feeling.",
    name: "Guest",
    source: "TripAdvisor",
    stars: 5,
  },
  {
    id: "blueberry",
    quote:
      "From the moment we entered we were captivated by the warmth. I especially enjoyed the lemon blueberry cake. The owner is definitely a people's person — so warm, friendly and kind. A few minutes from Marble Arch.",
    name: "Rudolph Juman",
    source: "Google",
    stars: 5,
  },
  {
    id: "fresh",
    quote:
      "The food is incredible and all made fresh each morning. Friendly, funny people. L'Angolo Bianco is why people love family-run restaurants.",
    name: "Harvey Westwood",
    source: "Google",
    stars: 5,
  },
  {
    id: "friend",
    quote:
      "The food is prepared by family with ingredients from the heart. You are treated like an old friend. We went back the next day.",
    name: "BinaryJoe",
    source: "Google",
    stars: 5,
  },
  {
    id: "carrot",
    quote:
      "As promised by Anell — the mushroom pasta was delicious. Very welcoming and authentic. We even got offered to try two different cakes. I can definitely recommend the one with carrot inside.",
    name: "Guest",
    source: "Public review",
    stars: 5,
  },
] as const;

export type GalleryImage = {
  src: string;
  alt: string;
  credit: string;
  placeholder?: boolean;
};

export const gallery: GalleryImage[] = [
  {
    src: "/images/gmaps-hero.jpg",
    alt: "The white corner shopfront of Caffè L'Angolo Bianco on Crawford Street — hanging plants, roses and pavement tables",
    credit: "Public Google Maps photo",
  },
  {
    src: "/images/gmaps-window.jpg",
    alt: "The Crawford Street facade — Caffè L'Angolo Bianco sign, checkered pavement and the open door",
    credit: "Public Google Maps photo",
  },
  {
    src: "/images/mindtrip-2.webp",
    alt: "Pavement tables, colourful chairs and hanging plants outside L'Angolo Bianco",
    credit: "Public listing photo",
  },
  {
    src: "/images/ta-homemade-2.jpg",
    alt: "Mushroom pasta with parmesan, basil and parsley at L'Angolo Bianco, Marylebone",
    credit: "Public guest / TripAdvisor photo",
  },
  {
    src: "/images/ta-interior-1.jpg",
    alt: "Spaghetti with tomato, herbs and a cherry tomato at L'Angolo Bianco",
    credit: "Public TripAdvisor photo",
  },
  {
    src: "/images/ta-interior-2.jpg",
    alt: "Rigatoni Bolognese with grated cheese at L'Angolo Bianco",
    credit: "Public TripAdvisor photo",
  },
  {
    src: "/images/ta-caption.jpg",
    alt: "Plated rigatoni with a balsamic swirl at L'Angolo Bianco",
    credit: "Public TripAdvisor photo",
  },
  {
    src: "/images/ta-salad.jpg",
    alt: "Chicken escalope sandwich on ciabatta with salad at L'Angolo Bianco",
    credit: "Public TripAdvisor photo",
  },
  {
    src: "/images/yelp-pasta.jpg",
    alt: "Two plates of home made pasta with parmesan and basil",
    credit: "Public Yelp photo",
  },
];

export const heroImage = {
  src: "/images/gmaps-hero.jpg",
  alt: "The white corner shopfront of Caffè L'Angolo Bianco on Crawford Street — hanging plants, roses and pavement tables",
  credit: "Public Google Maps photo",
};

export const storyImage = {
  src: "/images/ta-homemade-2.jpg",
  alt: "Home made mushroom pasta with basil and parmesan at L'Angolo Bianco",
  credit: "Public guest / TripAdvisor photo",
};

export const pastryImage = {
  src: "/images/mindtrip-4.webp",
  alt: "Berry cake on a stand at L'Angolo Bianco",
  credit: "Public listing photo",
};
