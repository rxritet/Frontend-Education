import type { GetStaticProps, InferGetStaticPropsType } from "next";

type AboutProps = {
  generatedAt: string;
};

export default function About({
  generatedAt,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "2rem" }}>
      <h1>About This Project</h1>
      <p>This page is generated using SSG.</p>
      <p>It is fast because HTML is pre-rendered at build time.</p>
      <p>Generated at: {generatedAt}</p>
    </main>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
  };
};
