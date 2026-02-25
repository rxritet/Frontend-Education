
***

### `Lab03/task2/module-examples.js`

```js
// module-examples.js
// Three Module Pattern variations
// Reference: Osmani, Ch. 7 "The Module Pattern"

// ─────────────────────────────────────────────
// Example 1: Basic IIFE Module Pattern
// ─────────────────────────────────────────────
const counterModule = (() => {
  // Private state
  let count = 0;

  // Private helper
  const log = (msg) => console.log(`[Counter] ${msg}`);

  // Public API
  return {
    increment() { count += 1; log(`count = ${count}`); },
    decrement() { count -= 1; log(`count = ${count}`); },
    getCount()  { return count; },
    reset()     { count = 0;   log("reset"); },
  };
})();

counterModule.increment(); // [Counter] count = 1
counterModule.increment(); // [Counter] count = 2
counterModule.decrement(); // [Counter] count = 1
console.log(counterModule.getCount()); // 1

// ─────────────────────────────────────────────
// Example 2: Revealing Module Pattern
// All logic defined privately, then mapped explicitly
// ─────────────────────────────────────────────
const cartModule = (() => {
  // All private
  let items = [];

  const addItem = (item) => {
    items.push(item);
    console.log(`[Cart] Added: ${item.name}`);
  };

  const removeItem = (id) => {
    items = items.filter((i) => i.id !== id);
    console.log(`[Cart] Removed item id=${id}`);
  };

  const getTotal = () =>
    items.reduce((sum, item) => sum + item.price, 0);

  const getItems = () => [...items]; // Return copy, not reference

  // Reveal only chosen members
  return { addItem, removeItem, getTotal, getItems };
})();

cartModule.addItem({ id: 1, name: "Widget", price: 9.99 });
cartModule.addItem({ id: 2, name: "Gadget", price: 24.99 });
console.log(cartModule.getTotal()); // 34.98
cartModule.removeItem(1);
console.log(cartModule.getItems()); // [{ id: 2, ... }]

// ─────────────────────────────────────────────
// Example 3: Modern ES6 Module equivalent
// Native import/export replaces IIFE pattern
// ─────────────────────────────────────────────

// --- auth.js (would be a separate file) ---
// Private state (module scope = private by default in ES6)
let currentUser = null;

export function login(username) {
  currentUser = { username, loggedInAt: new Date() };
  console.log(`[Auth] Logged in: ${username}`);
}

export function logout() {
  currentUser = null;
  console.log("[Auth] Logged out");
}

export function getUser() {
  return currentUser ? { ...currentUser } : null;
}

// Usage (in another file):
// import { login, getUser } from './auth.js';
// login('radmir');
// console.log(getUser()); // { username: 'radmir', loggedInAt: ... }
