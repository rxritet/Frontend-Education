import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

type AboutSSRProps = {
  generatedAt: string;
};

export default function AboutSSR({
  generatedAt,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "2rem" }}>
      <h1>About This Project (SSR)</h1>
      <p>This page is generated using SSR.</p>
      <p>It has fresh data on every request, but usually costs more server work.</p>
      <p>Generated at: {generatedAt}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<AboutSSRProps> = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
  };
};
