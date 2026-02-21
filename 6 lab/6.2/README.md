# Lab 6.2 — Student Portal (Extended)

## Route Structure

| Path           | Component    | Description                        |
|----------------|--------------|------------------------------------|
| `/`            | Home         | Welcome page                       |
| `/courses`     | Courses      | Course list with `?sort=asc\|desc` |
| `/courses/:id` | CourseDetail | Dynamic detail page by course ID   |
| `/about`       | About        | About the program                  |
| `*`            | NotFound     | 404 fallback                       |

## useParams vs useSearchParams

**`useParams`** — читает динамический **сегмент пути** (`/courses/:id` → `{ id: "2" }`).
Используй, когда значение **идентифицирует конкретный ресурс**.

**`useSearchParams`** — читает **строку запроса** (`?sort=asc`).
Используй для фильтров, сортировки, пагинации.

| Сценарий                 | Инструмент         |
|--------------------------|--------------------|
| Открыть конкретный курс  | URL param `:id`    |
| Сортировать список       | Query `?sort=`     |
| Пагинация                | Query `?page=`     |

## Run

```bash
npm install && npm run dev
