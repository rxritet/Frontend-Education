import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const onIncrement = (): void => setCount((c) => c + 1);
  const onDecrement = (): void => setCount((c) => c - 1);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1>Counter</h1>

      <p>Value: {count}</p>

      <button type="button" onClick={onIncrement}>
        Increment
      </button>

      <button type="button" onClick={onDecrement} style={{ marginLeft: 8 }}>
        Decrement
      </button>
    </div>
  );
}
