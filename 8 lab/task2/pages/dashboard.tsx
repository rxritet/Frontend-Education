import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  getCurrentUser,
  getUserAnalytics,
  getUserNotifications,
  type Notification,
  type User,
} from "@/lib/api";

type DashboardProps = {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
};

export default function Dashboard({
  user,
  notifications,
  analytics,
  currentTime,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <h1>Welcome, {user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </header>

      <section
        style={{
          marginBottom: "1.5rem",
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: "1rem",
        }}
      >
        <h2>Analytics</h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <div>Page Views: {analytics.pageViews.toLocaleString()}</div>
          <div>Sessions: {analytics.sessions.toLocaleString()}</div>
          <div>Bounce Rate: {analytics.bounceRate.toFixed(1)}%</div>
        </div>
      </section>

      <section
        style={{
          marginBottom: "1.5rem",
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: "1rem",
        }}
      >
        <h2>Notifications ({unreadCount} unread)</h2>

        <ul style={{ paddingLeft: "1.25rem" }}>
          {notifications.map((notif) => (
            <li key={notif.id} style={{ marginBottom: "0.75rem" }}>
              <strong>[{notif.type.toUpperCase()}]</strong> {notif.message} —{" "}
              {notif.read ? "Read" : "Unread"} ({notif.createdAt})
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <p>Last updated: {currentTime}</p>
      </footer>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<DashboardProps> = async () => {
  const user = getCurrentUser();

  if (!user) {
    return {
      redirect: {
        destination: "/about",
        permanent: false,
      },
    };
  }

  const [notifications, analytics] = await Promise.all([
    getUserNotifications(user.id),
    getUserAnalytics(user.id),
  ]);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};
