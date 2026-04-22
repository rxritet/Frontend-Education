import { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

// Task 2-3: Refactored manager composed from smaller components
// Reference: Ch. 5, "Refactoring monolithic components"
interface Article {
  id: number;
  title: string;
  summary: string;
}

function ArticleManagerRefactored() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  const onClickAdd = (): void => {
    if (!title || !summary) return;

    const newArticle: Article = {
      id: Date.now(),
      title,
      summary,
    };

    setArticles([...articles, newArticle]);
    setTitle("");
    setSummary("");
  };

  const onClickRemove = (id: number): void => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onClickAdd={onClickAdd}
      />

      <ArticleList articles={articles} onClickRemove={onClickRemove} />
    </div>
  );
}

export default ArticleManagerRefactored;
