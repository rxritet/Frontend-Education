import Card from "./Card";

// Тип продукта
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Widget", price: 9.99 },
  { id: 2, name: "Gadget", price: 24.99 },
  { id: 3, name: "Doohickey", price: 4.49 },
];

// Task 2: Map products с типизированным массивом
function ProductList() {
  return (
    <div className="product-list">
      {products.map((product: Product) => (
        <Card key={product.id} title={product.name} className="product-card">
          <p>Price: ${product.price}</p>
        </Card>
      ))}
    </div>
  );
}

export default ProductList;
export type { Product };
