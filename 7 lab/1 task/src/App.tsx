import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundaries";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

const ErrorFallback = () => {
  return (
    <div>
      <h2>❌ Something went wrong</h2>
      <p>The page failed to load. Please try again.</p>
      <button onClick={() => globalThis.location.reload()} style={{ marginTop: "0.5rem" }}>
        Reload Page
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#f0f0f0" }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <main style={{ padding: "2rem" }}>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<h1>🏠 Home</h1>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default App;
