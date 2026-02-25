import type { ChangeEvent } from "react";

// Task 2: Extract AddArticle component
// Reference: Ch. 5, "Implementing an AddArticle component"
interface AddArticleProps {
  name: string; // Section title
  title: string;
  summary: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSummary: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickAdd: () => void;
}

function AddArticle({
  name,
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}: AddArticleProps) {
  return (
    <section>
      <h1>{name}</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={onChangeTitle}
        style={{ padding: "8px", marginRight: "10px", width: "200px" }}
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={onChangeSummary}
        style={{ padding: "8px", marginRight: "10px", width: "300px" }}
      />
      <button onClick={onClickAdd} style={{ padding: "8px 16px" }}>
        Add
      </button>
    </section>
  );
}

export default AddArticle;
