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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLV8UMarWJuIBcZj2ZxJuNwq5kfQ2iBowHTuPre8cRJA&s=10",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlU0Gq5JeKZ_mo8oojSV0Ao5ZNp_a3rBLx1CIBxcrfg&s=10",
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
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/be/bf/c0/tamaris-bowling.jpg?w=700&h=-1&s=1",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRq6GCREwUpM2iOz1bZLY-kBYWd_wo76mFIJcSTXexw&s=10",
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
