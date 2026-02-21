# Lab 6.1 — Student Portal

## Route Structure

| Path       | Component  | Description                      |
|------------|------------|----------------------------------|
| `/`        | Home       | Welcome page with hero section   |
| `/courses` | Courses    | Hardcoded list of 4 courses      |
| `/about`   | About      | About the program                |
| `*`        | NotFound   | 404 fallback for any unknown URL |

All routes are nested under `Layout`, which provides a shared `<nav>` and `<footer>`.
`<Outlet />` inside Layout is replaced with the matched child component.

## Run

```bash
npm install && npm run dev
