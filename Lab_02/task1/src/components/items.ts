// Shared data used by multiple components.
interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

export { items };
export type { Item };
