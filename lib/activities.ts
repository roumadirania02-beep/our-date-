export type Activity = {
  id: string;
  emoji: string;
  title: string;
  line: string;
  // Placeholder photos from Unsplash — swap the `image` field for your own
  // photo later (put files in /public/activities/ and point here instead).
  image: string;
};

export const activities: Activity[] = [
  {
    id: "karting",
    emoji: "🏎️",
    title: "Karting",
    line: "Let's see who's actually the better driver 👀",
    image:
      "https://images.unsplash.com/photo-1547640917-26b78434b64e?w=800&q=80",
  },
  {
    id: "cinema",
    emoji: "🎬",
    title: "Cinéma",
    line: "Movie date? 🍿",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  },
  {
    id: "atelier",
    emoji: "🎨",
    title: "Atelier créatif",
    line: "Let's make something together ♡",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
  },
  {
    id: "quad",
    emoji: "🏜️",
    title: "Quad",
    line: "A little adventure?",
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80",
  },
  {
    id: "laser",
    emoji: "🔫",
    title: "Laser Game",
    line: "No mercy 😭",
    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&q=80",
  },
  {
    id: "bowling",
    emoji: "🎳",
    title: "Bowling",
    line: "Winner chooses the next thing 😌",
    image:
      "https://images.unsplash.com/photo-1538511578304-31a0e5c2a557?w=800&q=80",
  },
  {
    id: "escape",
    emoji: "🔐",
    title: "Escape Game",
    line: "Can we escape together? 👀",
    image:
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&q=80",
  },
  {
    id: "gaming",
    emoji: "🎮",
    title: "Gaming",
    line: "One more game… promise.",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80",
  },
  {
    id: "shopping",
    emoji: "🛍️",
    title: "Shopping",
    line: "Let's wander around and see what we find.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
  },
  {
    id: "sunset",
    emoji: "🌅",
    title: "Sunset Walk",
    line: "Just us, somewhere pretty ♡",
    image:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
  },
];
