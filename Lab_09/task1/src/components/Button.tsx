import { memo, useCallback, useState } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button = memo(function Button({ onClick, label }: ButtonProps) {
  console.log(`Button "${label}" render`);
  return <button onClick={onClick}>{label}</button>;
});

export function ParentComponent() {
  console.log("ParentComponent render");

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("button clicked");
  }, []);

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div className="card">
      <h2>useCallback demo</h2>
      <p>Count: {count}</p>
      <div className="row">
        <Button onClick={handleClick} label="Click me" />
        <Button onClick={handleIncrement} label="Increment" />
      </div>
      <p className="muted">
        Buttons are memoized, callbacks are stable via useCallback.
      </p>
    </div>
  );
}