export function ActivityFeed() {
  console.log("ActivityFeed render");

  const activities = [
    "User logged in",
    "Analytics updated",
    "Profile viewed",
    "Settings changed",
  ];

  return (
    <div className="card">
      <h3>ActivityFeed</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
      <p className="muted">
        This component is intentionally simple for render tracking.
      </p>
    </div>
  );
}