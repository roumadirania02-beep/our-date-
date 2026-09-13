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
      "https://images.unsplash.com/photo-1728487933621-7cee925c9505?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGthcnRpbmd8ZW58MHx8MHx8fDA%3D",
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
      "https://images.unsplash.com/photo-1496521061024-90e1c1221555?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVhZHxlbnwwfHwwfHx8MA%3D%3D",
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
      "https://plus.unsplash.com/premium_photo-1679321795639-c9b0c9f70abb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvd2xpbmd8ZW58MHx8MHx8fDA%3D",
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
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
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
