import { useMemo, useState } from "react";
import { UserCard, UserCardWithCompare } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { ActivityFeed } from "./ActivityFeed";
import { ParentComponent } from "./Button";

interface User {
  id: number;
  name: string;
  email: string;
}

export function Dashboard() {
  console.log("Dashboard render");

  const [count, setCount] = useState(0);
  const [showComparedCard, setShowComparedCard] = useState(false);

  const user = useMemo<User>(
    () => ({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    }),
    []
  );

  const items = useMemo(() => ["item1", "item2", "item3"], []);

  return (
    <div className="page">
      <h1>Lab 9.1 Dashboard</h1>

      <div className="card">
        <h2>Parent re-render demo</h2>
        <p>Count: {count}</p>
        <div className="row">
          <button onClick={() => setCount((c) => c + 1)}>Increment</button>
          <button onClick={() => setShowComparedCard((v) => !v)}>
            Toggle compare card
          </button>
        </div>
        <p className="muted">
          Open console and watch which components re-render after increment.
        </p>
      </div>

      <div className="grid">
        <UserCard user={user} />

        {showComparedCard ? (
          <UserCardWithCompare user={user} />
        ) : (
          <div className="card">
            <h3>Custom compare card hidden</h3>
            <p>Press toggle to mount it.</p>
          </div>
        )}

        <AnalyticsChart items={items} />
        <ActivityFeed />
      </div>

      <ParentComponent />
    </div>
  );
}