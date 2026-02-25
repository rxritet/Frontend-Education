import ItemList from "./ItemList";
import { items } from "./items";

// Task 3: Combined fragment — title + list + dynamic total
function ItemSection() {
  return (
    <>
      <h2>Fruit List</h2>
      <ItemList />
      <p>Total: {items.length} items</p>
    </>
  );
}

export default ItemSection;
