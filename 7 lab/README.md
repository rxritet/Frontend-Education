# Lab 07 — Code Splitting with Suspense & Error Boundaries

**Студент:** Абраев Радмир  
**Курс:** React + TypeScript  
**Неделя:** 7 (23.02 – 01.03.2026)  
**Лабораторные:** Lab 7.1 + Lab 7.2

---

## Структура проекта

```
Lab_07/
├── task1/          # Lab 7.1 + Lab 7.2
├── AI_REPORT.md    # отчет о использовании ИИ
└── README.md       # этот файл
```

> **task2 является расширением task1.** Вся логика маршрутизации,
> lazy-загрузки и Suspense остаётся той же — добавляется только
> компонент `ErrorBoundary` поверх существующей структуры.

---

## Lab 7.1 — Lazy Loading Components

### Цель
Реализовать code splitting с помощью `lazy()` и `Suspense` для
маршрутизированного приложения с несколькими страницами.

### Что такое Code Splitting?

**Code splitting** — техника разбиения JavaScript-бандла на меньшие
чанки, которые загружаются по требованию, а не все сразу.

```tsx
// ❌ БЕЗ code splitting — всё грузится при старте
import Dashboard from "./pages/Dashboard";

// ✅ С code splitting — грузится только при переходе на страницу
const Dashboard = lazy(() => import("./pages/Dashboard"));
```

**Преимущества:**
- Быстрее первая загрузка — браузер скачивает только нужный код
- Пользователь не ждёт страницы, которую, возможно, никогда не откроет
- Лучшее кэширование — изменение одной страницы не инвалидирует весь кэш

### Зачем использовать lazy()?

`lazy()` — функция React, принимающая функцию с динамическим `import()`.
Компонент загружается только при первом рендере:

1. React встречает `<Dashboard />` в JSX
2. Вызывается `import("./pages/Dashboard")` — браузер скачивает чанк
3. Пока идёт загрузка — React "приостанавливает" (suspends) рендер
4. После загрузки компонент рендерится нормально

> **Правило:** файл должен использовать `export default`.

### Что делает Suspense?

`Suspense` — компонент-обёртка, отображающий `fallback` пока lazy-компонент
загружается:

```tsx
<Suspense fallback={<LoadingSpinner />}>
  <Dashboard />   {/* lazy компонент */}
</Suspense>
```

- `fallback` показывается только во время загрузки чанка
- Как только чанк загружен — fallback исчезает, рендерится компонент
- Каждый `lazy()` компонент **обязан** быть внутри `<Suspense>`

### Реализация (task1)

```tsx
// App.tsx
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings  = lazy(() => import("./pages/Settings"));
const Profile   = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/"          element={<h1>Home</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings"  element={<Settings />} />
        <Route path="/profile"   element={<Profile />} />
      </Routes>
    </Suspense>
  );
}
```

---

## Lab 7.2 — Error Boundaries

### Цель
Обернуть lazy-компоненты в `ErrorBoundary`, чтобы при ошибке загрузки
приложение не падало, а показывало понятный UI с возможностью повтора.

### Что такое Error Boundary?

**Error Boundary** — class-компонент React, перехватывающий JavaScript-ошибки
в дереве дочерних компонентов и отображающий fallback UI вместо белого экрана.

Без Error Boundary одна ошибка роняет весь интерфейс. С Error Boundary —
только сломанная часть заменяется на сообщение об ошибке.

### Когда использовать?

| Ситуация | Error Boundary? |
|---|---|
| Lazy-loaded компоненты (сетевые ошибки) | ✅ Да |
| Сложные виджеты, которые могут сломаться | ✅ Да |
| Обработчики событий (onClick и т.д.) | ❌ try/catch |
| Асинхронный код (fetch, setTimeout) | ❌ try/catch |

### Почему class, а не функциональный компонент?

Error Boundary требует lifecycle-методы, недоступные в hooks:
- `getDerivedStateFromError` — обновляет state для показа fallback
- `componentDidCatch` — логирует ошибку (side effects)

### Реализация (task2)

```tsx
// ErrorBoundary.tsx
class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };           // показать fallback
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Caught:", error, info);      // логирование
  }

  resetError = () => this.setState({ hasError: false, error: null });

  render() {
    if (this.state.hasError) {
      return (
        <div>
          {this.props.fallback}
          <button onClick={this.resetError}>🔄 Try Again</button>
        </div>
      );
    }
    return this.props.children;
  }
}
```

### Порядок оборачивания

```tsx
// App.tsx — task2
<ErrorBoundary fallback={<ErrorFallback />}>   {/* ← снаружи */}
  <Suspense fallback={<LoadingSpinner />}>      {/* ← внутри */}
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      ...
    </Routes>
  </Suspense>
</ErrorBoundary>
```

`ErrorBoundary` снаружи `Suspense` — так он перехватывает ошибки загрузки
lazy-компонентов.

---

## Запуск

```bash
# Task 1
cd Lab_07/task1
npm install
npm run dev

# Task 2
cd Lab_07/task2
npm install
npm run dev
```

Открыть: http://localhost:5173

---

## Технологии

- React 18 + TypeScript (`"strict": true`, zero `any`)
- Vite
- React Router DOM v6
- CSS анимация (spinner)

---

## Git история (пример)

```
feat: setup vite react-ts project with react-router
feat: add lazy loaded pages (Dashboard, Settings, Profile)
feat: add suspense with custom loading spinner
feat: add error boundary with retry functionality
```
