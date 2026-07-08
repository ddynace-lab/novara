export type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: string;
  description: string;
  pages: number;
  language: string;
  published: string;
  rating: number;
  reviews: number;
  price: number;
  featured: boolean;
};

export const books: Book[] = [
  {
    id: "1",
    title: "The Silent Dawn",
    author: "Elena Rivers",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    genre: "Fiction",
    description:
      "A gripping novel about hope, courage, and finding light after life's darkest moments.",
    pages: 384,
    language: "English",
    published: "2022",
    rating: 4.8,
    reviews: 1243,
    price: 14.99,
    featured: true,
  },
  {
    id: "2",
    title: "Beyond the Stars",
    author: "Marcus Vale",
    cover:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    genre: "Sci-Fi",
    description:
      "An epic science-fiction adventure that explores distant galaxies and the future of humanity.",
    pages: 512,
    language: "English",
    published: "2023",
    rating: 4.9,
    reviews: 2184,
    price: 18.99,
    featured: true,
  },
  {
    id: "3",
    title: "The Lost Garden",
    author: "Hana Collins",
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    genre: "Romance",
    description:
      "A heartfelt romance about second chances, healing, and unexpected love.",
    pages: 326,
    language: "English",
    published: "2021",
    rating: 4.7,
    reviews: 956,
    price: 12.99,
    featured: false,
  },
  {
    id: "4",
    title: "Deep Work Mindset",
    author: "Caleb Stone",
    cover:
      "https://images.unsplash.com/photo-1455885666463-2cb7f0c7f8b2?auto=format&fit=crop&w=600&q=80",
    genre: "Productivity",
    description:
      "Practical strategies to improve focus, eliminate distractions, and achieve meaningful work.",
    pages: 290,
    language: "English",
    published: "2024",
    rating: 4.9,
    reviews: 3418,
    price: 19.99,
    featured: true,
  },
  {
    id: "5",
    title: "Mastering TypeScript",
    author: "Sophia Bennett",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    genre: "Programming",
    description:
      "A complete guide to building scalable and type-safe applications using TypeScript.",
    pages: 468,
    language: "English",
    published: "2025",
    rating: 4.8,
    reviews: 1486,
    price: 24.99,
    featured: true,
  },
  {
    id: "6",
    title: "Atomic Success",
    author: "Daniel Brooks",
    cover:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    genre: "Self-Help",
    description:
      "Small habits, consistent actions, and powerful systems for achieving lasting success.",
    pages: 352,
    language: "English",
    published: "2023",
    rating: 4.8,
    reviews: 2754,
    price: 16.99,
    featured: false,
  },
];