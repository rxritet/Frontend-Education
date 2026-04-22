import { useState } from "react";
import { VirtualList } from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

export default function App() {
  const [mode, setMode] = useState<"virtual" | "regular">("virtual");

  return (
    <div className="page">
      <h1>Lab 9.2 Virtualization</h1>

      <div className="card">
        <p>
          Compare a virtualized list with a regular list rendered using map().
        </p>
        <div className="row">
          <button onClick={() => setMode("virtual")}>Virtualized list</button>
          <button onClick={() => setMode("regular")}>Regular list</button>
        </div>
      </div>

      {mode === "virtual" ? <VirtualList itemCount={10000} /> : <RegularList itemCount={10000} />}
    </div>
  );
}