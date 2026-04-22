import { useMemo, useState } from "react";

interface AnalyticsChartProps {
  items: string[];
}

function calculateAnalytics(items: string[]): number {
  console.time("calculateAnalytics");
  console.log("Calculating analytics...");

  let result = 0;
  for (let i = 0; i < 2_000_000; i++) {
    result += Math.sqrt(i);
  }

  console.timeEnd("calculateAnalytics");
  return Math.round(result + items.length);
}

export function AnalyticsChart({ items }: Readonly<AnalyticsChartProps>) {
  console.log("AnalyticsChart render");

  const [localValue, setLocalValue] = useState(0);

  const analytics = useMemo(() => calculateAnalytics(items), [items]);

  return (
    <div className="card">
      <h3>AnalyticsChart with useMemo</h3>
      <p>Calculated value: {analytics}</p>
      <p>Items: {items.length}</p>
      <p>Local state: {localValue}</p>
      <button onClick={() => setLocalValue((v) => v + 1)}>
        Update local state
      </button>
      <p className="muted">
        Expensive calculation should not rerun unless items change.
      </p>
    </div>
  );
}