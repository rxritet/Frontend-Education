import { useMemo, useState, type ChangeEvent } from "react";
import { generateItems } from "../utils/generateItems";

interface RegularListProps {
  readonly itemCount?: number;
}

export function RegularList({ itemCount = 10000 }: RegularListProps) {
  console.log("RegularList render");

  const [filter, setFilter] = useState("");

  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    const normalized = filter.trim().toLowerCase();

    if (!normalized) {
      return items;
    }

    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized)
    );
  }, [items, filter]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className="card">
      <h2>Regular list</h2>

      <input
        type="text"
        placeholder="Filter items by title or category..."
        value={filter}
        onChange={handleChange}
        className="filter-input"
      />

      <p className="muted">
        Showing {filteredItems.length} of {items.length} items
      </p>

      <div className="regular-list">
        {filteredItems.map((item) => (
          <div key={item.id} className="list-item">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="meta">
              <span>{item.category}</span>
              <span>{item.timestamp.toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}