import { useState } from "react";

interface Article {
  id: number;
  title: string;
  summary: string;
  display: "none" | "block"; // Controls summary visibility
}

// Task 1: Monolithic component (before refactoring)
// Reference: Ch. 5, "The difficulty with monolithic components"
function ArticleManager() {
  // State: articles array
  const [articles, setArticles] = useState<Article[]>([]);

  // State: form inputs
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  // Add new article to the list
  const onClickAdd = (): void => {
    if (!title || !summary) return; // Basic validation

    const newArticle: Article = {
      id: Date.now(), // Simple unique ID
      title,
      summary,
      display: "none", // Initially collapsed
    };

    setArticles([...articles, newArticle]);
    setTitle(""); // Clear form
    setSummary("");
  };

  // Remove article by ID
  const onClickRemove = (id: number): void => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  // Toggle summary display
  const onClickToggle = (id: number): void => {
    setArticles(
      articles.map((article) =>
        article.id === id
          ? { ...article, display: article.display === "none" ? "block" : "none" }
          : article
      )
    );
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      {/* Header section with form inputs */}
      <section>
        <h1>Articles</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", width: "200px" }}
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", width: "300px" }}
        />
        <button onClick={onClickAdd} style={{ padding: "8px 16px" }}>
          Add
        </button>
      </section>

      {/* List section — all articles */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {articles.map((article) => (
          <li key={article.id} style={{ marginTop: "20px", borderBottom: "1px solid #ccc" }}>
            {/* Title link — toggles summary visibility */}
            <a
              href={`#${article.id}`}
              title="Toggle Summary"
              onClick={(e) => {
                e.preventDefault();
                onClickToggle(article.id);
              }}
              style={{ fontSize: "18px", fontWeight: "bold", cursor: "pointer" }}
            >
              {article.title}
            </a>

            {/* Remove button */}
            <button
              onClick={() => onClickRemove(article.id)}
              style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
            >
              ×
            </button>

            {/* Summary — shown/hidden based on display state */}
            <p style={{ display: article.display, marginTop: "10px" }}>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleManager;
