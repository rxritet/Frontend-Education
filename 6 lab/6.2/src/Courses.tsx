import { Link, useSearchParams } from "react-router-dom";
import { courses } from "./data";

function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort") ?? "asc";

  const sorted = [...courses].sort((a, b) =>
    sortOrder === "desc"
      ? b.title.localeCompare(a.title)
      : a.title.localeCompare(b.title)
  );

  const toggleSort = () => {
    setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" });
  };

  return (
    <div className="page">
      <h1>Courses</h1>
      <button className="btn sort-btn" onClick={toggleSort}>
        Sort: {sortOrder.toUpperCase()}
      </button>
      <ul className="course-list">
        {sorted.map((c) => (
          <li key={c.id} className="course-item">
            <Link to={`/courses/${c.id}`}>{c.title}</Link>
            <span className="instructor"> — {c.instructor}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
