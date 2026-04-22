import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <>
      <nav className="navbar">
        <span className="nav-brand">🎓 Student Portal</span>
        <NavLink to="/" className={linkClass} end>
          Home
        </NavLink>
        <NavLink to="/courses" className={linkClass}>
          Courses
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">Student Portal 2026</footer>
    </>
  );
}

export default Layout;
