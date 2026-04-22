import { useCallback, useMemo, useState, type ChangeEvent } from "react"
import { generateItems, type Item } from "../utils/generateItems";
import { List, type RowComponentProps } from "react-window";

interface VirtualListProps {
  readonly itemCount?: number;
  readonly height?: number;
}

interface RowProps {
  items: Item[];
}

function Row({ index, style, items }: RowComponentProps<RowProps>) {
  const item = items[index];

  return (
    <div style={style}>
      <div className="list-item">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <div className="meta">
          <span>{item.category}</span>
          <span>{item.timestamp.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export function VirtualList({ itemCount = 10000, height = 500 }: Readonly<VirtualListProps>) {
  console.log("VirtualList render");

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

  const handleFilterChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  const rowProps = useMemo<RowProps>(() => ({ items: filteredItems }), [filteredItems]);

  return (
    <div className="card">
      <h2>Virtualized list</h2>

      <input
        type="text"
        placeholder="Filter items by title or category..."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />

      <p className="muted">
        Showing {filteredItems.length} of {items.length} items
      </p>

      <List
        rowComponent={Row}
        rowCount={filteredItems.length}
        rowHeight={110}
        rowProps={rowProps}
        style={{ height, width: "100%" }}
      >
      </List>
    </div>
  );
}