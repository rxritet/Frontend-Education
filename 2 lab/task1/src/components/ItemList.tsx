import { items, type Item } from "./items";

// Task 2: Mapping array to list с типизированными данными
function ItemList() {
  return (
    <ul>
      {items.map((item: Item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemList;
