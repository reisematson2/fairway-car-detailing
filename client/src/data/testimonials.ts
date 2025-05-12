export interface TestimonialType {
  content: string;
  author: string;
  location: string;
  rating: number;
}

export const testimonials: TestimonialType[] = [
  {
    content: "I've been taking my cars to Fairway for years. Their attention to detail is amazing, and the ceramic coating they applied has kept my car looking new for over a year now.",
    author: "Michael R.",
    location: "Columbus, OH",
    rating: 5
  },
  {
    content: "The team at Fairway is professional and knowledgeable. They restored my headlights and applied PPF to the front of my car. It looks better than when I bought it!",
    author: "Sarah T.",
    location: "Cincinnati, OH",
    rating: 5
  },
  {
    content: "I was amazed at how they transformed my 10-year-old car. The Showroom Detail was worth every penny. The interior looks and smells like new, and the paint has a depth I've never seen before.",
    author: "David L.",
    location: "Cleveland, OH",
    rating: 5
  }
];
