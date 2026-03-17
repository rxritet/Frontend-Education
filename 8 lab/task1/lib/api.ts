import { Author, Post } from "@/types";

const authors: Author[] = [
  {
    id: "1",
    name: "John Doe",
    bio: "Tech writer focused on frontend architecture and modern React.",
    avatar: "/avatars/john.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    bio: "React expert who writes about performance and rendering strategies.",
    avatar: "/avatars/jane.jpg",
  },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that supports server-side rendering, static generation, routing, and API integration. It helps build fast web applications with a simple developer experience.",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react"],
    readTime: 5,
  },
  {
    id: "2",
    title: "SSR vs SSG: How to Choose",
    content:
      "SSR renders pages on each request and is useful for personalized or fast-changing data. SSG builds pages ahead of time and works best for content that changes less frequently.",
    author: "2",
    date: "2026-03-03",
    tags: ["ssr", "ssg", "performance"],
    readTime: 7,
  },
  {
    id: "3",
    title: "Using ISR for Better Freshness",
    content:
      "Incremental Static Regeneration combines static performance with periodic updates. It is useful for blogs, product catalogs, and content sites that need fresh data without full rebuilds.",
    author: "1",
    date: "2026-03-05",
    tags: ["isr", "nextjs", "caching"],
    readTime: 6,
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find((post) => post.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  return authors.find((author) => author.id === id);
}
