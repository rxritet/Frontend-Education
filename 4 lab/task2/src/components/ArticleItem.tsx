import { useState } from "react";
import type { MouseEvent } from "react";

// Task 3: ArticleItem component with local state
// Reference: Ch. 5, "Implementing an article item component"
interface ArticleItemProps {
  article: {
    id: number;
    title: string;
    summary: string;
  };
  onClickRemove: (id: number) => void;
}

function ArticleItem({ article, onClickRemove }: ArticleItemProps) {
  // Local state for expansion — ArticleItem manages its own display
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const onClickToggle = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setIsOpened(!isOpened); // Toggle local state
  };

  return (
    <li style={{ marginTop: "20px", borderBottom: "1px solid #ccc" }}>
      {/* Title link */}
      <a
        href={`#${article.id}`}
        title="Toggle Summary"
        onClick={onClickToggle}
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

      {/* Summary — visibility controlled by local isOpened state */}
      <p style={{ display: isOpened ? "block" : "none", marginTop: "10px" }}>
        {article.summary}
      </p>
    </li>
  );
}

export default ArticleItem;
