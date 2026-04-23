export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality Bluetooth headphones with noise cancellation and 30-hour battery life.',
    price: 199.99,
    category: 'Electronics',
    image: 'https://via.placeholder.com/300/0066cc/ffffff?text=Headphones',
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor, GPS, and 7-day battery.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://via.placeholder.com/300/6600cc/ffffff?text=SmartWatch',
  },
  {
    id: '3',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole and breathable mesh upper.',
    price: 129.99,
    category: 'Sports',
    image: 'https://via.placeholder.com/300/cc6600/ffffff?text=Shoes',
  },
  {
    id: '4',
    name: 'Coffee Maker',
    description: 'Automatic drip coffee maker with programmable timer and thermal carafe.',
    price: 79.99,
    category: 'Home',
    image: 'https://via.placeholder.com/300/cc0066/ffffff?text=Coffee',
  },
  {
    id: '5',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand with adjustable height and angle.',
    price: 49.99,
    category: 'Office',
    image: 'https://via.placeholder.com/300/00cc66/ffffff?text=Stand',
  },
  {
    id: '6',
    name: 'Mechanical Keyboard',
    description: 'Compact TKL mechanical keyboard with RGB backlight and tactile switches.',
    price: 149.99,
    category: 'Office',
    image: 'https://via.placeholder.com/300/333399/ffffff?text=Keyboard',
  },
];