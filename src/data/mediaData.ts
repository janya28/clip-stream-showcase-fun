
export interface MediaItem {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category: string;
}

export const mediaCollection: MediaItem[] = [
  {
    id: 1,
    title: "Cosmic Wonders",
    description: "Explore the mysteries of deep space in this captivating documentary.",
    thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    videoUrl: "https://www.example.com/videos/cosmic-wonders.mp4",
    duration: "45:30",
    category: "Documentary"
  },
  {
    id: 2,
    title: "Ocean Life",
    description: "Dive deep into the mesmerizing world beneath the ocean's surface.",
    thumbnailUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
    videoUrl: "https://www.example.com/videos/ocean-life.mp4",
    duration: "32:15",
    category: "Nature"
  },
  {
    id: 3,
    title: "Cozy Living",
    description: "Discover tips and tricks to create a comfortable living space.",
    thumbnailUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    videoUrl: "https://www.example.com/videos/cozy-living.mp4",
    duration: "28:45",
    category: "Lifestyle"
  },
  {
    id: 4,
    title: "Feline Friends",
    description: "Get to know the fascinating world of domestic cats.",
    thumbnailUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    videoUrl: "https://www.example.com/videos/feline-friends.mp4",
    duration: "36:20",
    category: "Pets"
  },
  {
    id: 5,
    title: "Digital Art Fundamentals",
    description: "Learn the basics of creating stunning digital artwork.",
    thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    videoUrl: "https://www.example.com/videos/digital-art.mp4",
    duration: "42:10",
    category: "Education"
  },
  {
    id: 6,
    title: "Wildlife Safari",
    description: "Embark on a virtual safari through the African savannah.",
    thumbnailUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
    videoUrl: "https://www.example.com/videos/wildlife-safari.mp4",
    duration: "53:25",
    category: "Nature"
  }
];
