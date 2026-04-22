import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import { getAllPosts, getAuthorById, getPostById } from "@/lib/api";
import type { Post } from "@/types";

type PostPageProps = {
  post: Post;
  author: {
    name: string;
    bio: string;
  };
};

export default function PostPage({
  post,
  author,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "2rem" }}>
      <Link href="/">← Back to home</Link>

      <article style={{ marginTop: "1rem" }}>
        <h1>{post.title}</h1>
        <p>
          By {author.name} • {post.date} • {post.readTime} min read
        </p>
        <p>{author.bio}</p>

        <hr style={{ margin: "1rem 0" }} />

        <p>{post.content}</p>

        <div style={{ marginTop: "1rem" }}>
          {post.tags.map((tag) => (
            <span key={tag} style={{ marginRight: "0.5rem" }}>
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { id: post.id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}) => {
  const id = params?.id as string | undefined;

  if (!id) {
    return { notFound: true };
  }

  const post = await getPostById(id);

  if (!post) {
    return { notFound: true };
  }

  const author = await getAuthorById(post.author);

  return {
    props: {
      post,
      author: {
        name: author?.name ?? "Unknown Author",
        bio: author?.bio ?? "No bio available.",
      },
    },
    revalidate: 60,
  };
};
