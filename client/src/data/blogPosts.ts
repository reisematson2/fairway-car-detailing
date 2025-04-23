export interface BlogPostType {
  title: string;
  excerpt: string;
  imageSrc: string;
  slug: string;
}

export const blogPosts: BlogPostType[] = [
  {
    title: "Ceramic Coating: Myths vs. Reality",
    excerpt: "We break down the facts about ceramic coatings and what you should expect from this popular treatment.",
    imageSrc: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "ceramic-coating-myths-vs-reality"
  },
  {
    title: "5 Common Car Washing Mistakes",
    excerpt: "Learn how to avoid these common mistakes that can damage your car's paint when washing at home.",
    imageSrc: "https://images.unsplash.com/photo-1596040033229-a9821ebd111d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "common-car-washing-mistakes"
  },
  {
    title: "Winter Car Care Essentials",
    excerpt: "Protect your vehicle from salt, snow, and cold temperatures with these essential winter care tips.",
    imageSrc: "https://images.unsplash.com/photo-1562141961-b5d1735f1074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "winter-car-care-essentials"
  }
];
