// ক্যাটাগরি, দাম ও ভিডিও — ক্লায়েন্টের দেওয়া ডক থেকে।
// price.fahimedits.com এর সাথে এক ডেটা, তাই দুই জায়গায় দাম মেলে।

export const categories = [
  {
    slug: "event-recaps",
    name: "Event recaps",
    tag: "Events",
    price: 150,
    blurb: "A long day in one minute.",
    long: "Event recaps — the moments that mattered, cut to music, delivered while it is still news.",
    videos: [
      { file: "recap1.mp4", title: "Climate Week" },
      { file: "recap2.mp4", title: "STEM Fair" },
      { file: "recap3.mp4", title: "Casca Run" },
      { file: "recap4.mp4", title: "Baby Shower" },
      { file: "recap5.mp4", title: "Iron Games" },
    ],
  },
  {
    slug: "weddings",
    name: "Weddings",
    tag: "Big day",
    price: 300,
    blurb: "The day, as you felt it.",
    long: "Wedding films — ceremony, speeches and the quiet moments between, cut so it plays like the day felt.",
    videos: [
      { file: "wedding1.mp4", title: "Highlights" },
      { file: "wedding2.mp4", title: "Hawaii" },
      { file: "wedding3.mp4", title: "Showreel" },
      { file: "wedding4.mp4", title: "Safa & Karim" },
      { file: "wedding5.mp4", title: "Proposal" },
    ],
  },
  {
    slug: "podcast",
    name: "Podcast",
    tag: "Episodes",
    price: 120,
    blurb: "Episodes that stay listenable.",
    long: "Podcast episodes and clips — camera switching on the beat, levels balanced, filler trimmed out.",
    videos: [
      { file: "podcast1.mp4", title: "Shaun Sharabi" },
      { file: "podcast2.mp4", title: "Nutritionist" },
      { file: "podcast3.mp4", title: "Investors" },
      { file: "podcast4.mp4", title: "Cold Emailing" },
      { file: "podcast5.mp4", title: "Amber Martin" },
    ],
  },
  {
    slug: "shorts",
    name: "Shorts",
    tag: "Vertical",
    price: 60,
    blurb: "Hooks that land in three seconds.",
    long: "Vertical cuts built for the scroll — tight pacing, sound-off captions, every ratio your platforms ask for.",
    videos: [
      { file: "shorts1.mp4", title: "Hype Energy" },
      { file: "shorts2.mp4", title: "BirdieWorks" },
      { file: "shorts3.mp4", title: "Inveza" },
      { file: "shorts4.mp4", title: "Betta Finance" },
      { file: "shorts5.mp4", title: "Fitness" },
    ],
  },
  {
    slug: "long-form",
    name: "Long-form",
    tag: "Talking head",
    price: 120,
    blurb: "The full story, kept tight.",
    long: "Talking-head and long-run edits — multi-cam syncing, dialogue leveling and a pacing pass that keeps it watchable end to end.",
    videos: [
      { file: "longform1.mp4", title: "Ecommerce" },
      { file: "longform2.mp4", title: "Amazon Seller" },
      { file: "longform3.mp4", title: "NBA Trivia" },
      { file: "longform4.mp4", title: "Fit Habits" },
      { file: "longform5.mp4", title: "Fulfillment" },
    ],
  },
  {
    slug: "vlogs",
    name: "Vlogs",
    tag: "Personal",
    price: 100,
    blurb: "Your voice, no dead air.",
    long: "Travel, food and daily vlogs — trimmed hard, colour matched, so the story moves without losing your tone.",
    videos: [
      { file: "vlog1.mp4", title: "Namibia" },
      { file: "vlog2.mp4", title: "Kiara Jaye" },
      { file: "vlog3.mp4", title: "Food Tour" },
      { file: "vlog4.mp4", title: "Out Travelling" },
      { file: "vlog5.mp4", title: "Singapore" },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tag: "Property",
    price: 120,
    blurb: "Walk them through the door.",
    long: "Property films — clean moves, honest light, cut so a buyer can picture living there.",
    videos: [
      { file: "realestate1.mp4", title: "Property Reel" },
      { file: "realestate2.mp4", title: "ProDeck Tour" },
      { file: "realestate3.mp4", title: "Market Update" },
      { file: "realestate4.mp4", title: "Provo" },
      { file: "realestate5.mp4", title: "Custom House" },
    ],
  },
  {
    slug: "meta-ads",
    name: "Meta ads",
    tag: "Paid social",
    price: 60,
    blurb: "Built to be tested.",
    long: "Paid social and UGC creative — several hooks per concept so your media buyer can find the winner fast.",
    videos: [
      { file: "metaads1.mp4", title: "Texas Shades" },
      { file: "metaads2.mp4", title: "Outdoor Living" },
      { file: "metaads3.mp4", title: "Beyond Braid" },
      { file: "metaads4.mp4", title: "ClearChoice" },
      { file: "metaads5.mp4", title: "Empowered Men" },
    ],
  },
];

export const findCategory = (slug) => categories.find((c) => c.slug === slug);

export const INCLUDED = [
  "Final export in every aspect ratio you need",
  "Revisions until you approve the cut",
];

export const PHONE = "8801319242789";
