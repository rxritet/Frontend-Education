import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import type { Post } from "@/types";

type HomeProps = {
  posts: Post[];
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "2rem" }}>
      <h1>My Blog</h1>
      <p>
        Static homepage generated with SSG and refreshed using ISR every 60
        seconds.
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: "1rem",
            }}
          >
            <Link href={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
              <h2 style={{ margin: 0 }}>{post.title}</h2>
            </Link>

            <p style={{ color: "#555" }}>
              {post.date} • {post.readTime} min read
            </p>

            <p style={{ marginBottom: "0.5rem" }}>
              Tags: {post.tags.map((tag) => `#${tag}`).join(" ")}
            </p>

            <Link href={`/posts/${post.id}`}>Read post</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
    revalidate: 60,
  };
};
