import ArticleItem from "./ArticleItem";

// Task 3: ArticleList component
// Reference: Ch. 5, "Implementing an article list component"
interface Article {
  id: number;
  title: string;
  summary: string;
}

interface ArticleListProps {
  articles: Article[];
  onClickRemove: (id: number) => void;
}

function ArticleList({ articles, onClickRemove }: ArticleListProps) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} onClickRemove={onClickRemove} />
      ))}
    </ul>
  );
}

export default ArticleList;
