import { useState } from 'react';

export default function HighlightToggle() {
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  const onToggle = (): void => {
    setIsHighlighted((prev) => !prev);
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1>Declarative: React (TypeScript)</h1>

      <button type="button" onClick={onToggle}>
        Toggle Highlight
      </button>

      <p className={isHighlighted ? 'highlight' : ''}>
        This paragraph should be highlighted when you click the button.
      </p>
    </div>
  );
}
