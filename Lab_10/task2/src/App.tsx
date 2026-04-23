import { TodoList } from "./components/TodoList";

export default function App() {
  const apiUrl = import.meta.env.VITE_API_URL || "not-set";
  const version = import.meta.env.VITE_APP_VERSION || "dev";

  return (
    <div className="page">
      <div className="meta-card">
        <h1>Lab 10 - Task 2</h1>
        <p>Production deployment demo with Vercel and GitHub Actions.</p>
        <p>API URL: {apiUrl}</p>
        <p>Version: {version}</p>
      </div>

      <TodoList />
    </div>
  );
}