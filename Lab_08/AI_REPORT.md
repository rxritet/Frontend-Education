# AI_REPORT — Lab 8: Server-Side Rendering with Next.js

## Общая информация

- **Студент:** YOUR_NAME
- **ID студента:** YOUR_ID
- **Дата:** 2026-03-17
- **Инструмент:** Perplexity AI
- **Задачи:** Lab 8.1 (Next.js Blog SSG/ISR) + Lab 8.2 (SSR Dashboard)

## Промпты, которые были использованы

1. **Основной запрос:**
   - "Сделай задания из файла. Дай все нужные файлы и коды для решения"

2. **Контекст запроса:**
   - Загруженный PDF с полным описанием Lab 8
   - Требования по структуре папок, типам TS, рендерингу (SSG/SSR/ISR)
   - Rubric с баллами и критериями оценки

## Что было сгенерировано

### Lab 8.1 — Next.js Blog with SSG and ISR (50 pts)

**Файлы:**
- `types/index.ts` — TypeScript интерфейсы `Post` и `Author`
- `lib/api.ts` — mock-данные постов и авторов + функции `getAllPosts()`, `getPostById()`, `getAuthorById()`
- `pages/index.tsx` — SSG домашняя страница с `getStaticProps` и `revalidate: 60` для ISR
- `pages/posts/[id].tsx` — динамические SSG-страницы с `getStaticPaths` и `fallback: "blocking"`
- `README.md` — документация с объяснением SSR vs SSG vs ISR

**Отличительные черты:**
- Статическая домашняя страница, регенерируемая каждые 60 секунд (ISR)
- Динамические посты через `getStaticPaths` с параметром `params: { id }`
- Обработка ошибок через `notFound: true` для несуществующих постов
- Никакого client-side fetching

### Lab 8.2 — SSR User Dashboard (50 pts)

**Файлы:**
- `lib/api.ts` (расширенный) — типы `User` и `Notification` + функции `getCurrentUser()`, `getUserNotifications()`, `getUserAnalytics()`
- `pages/dashboard.tsx` — SSR dashboard с `getServerSideProps`, fetches на каждый request
- `pages/about.tsx` — SSG страница с `getStaticProps` для сравнения
- `pages/about-ssr.tsx` — SSR версия той же страницы для демонстрации разницы во времени генерации
- `README.md` — сравнение производительности SSG vs SSR

**Отличительные черты:**
- Dashboard всегда показывает свежие данные (notifications, analytics)
- Две версии about-страницы для наглядного сравнения `generatedAt` timestamp
- `getServerSideProps` в dashboard гарантирует user-specific данные на каждый request
- Простая структура обработки ошибок (redirect если нет user)

## Как я модифицировал / верифицировал код

### Проверки по требованиям задания:

1. **Task 1 Rubric (50 pts):**
   - ✓ Task 1 (Setup 10 pts): `npx create-next-app@latest ... --typescript --eslint`
   - ✓ Task 2 (Types/Data 15 pts): `types/index.ts` с Post и Author, `lib/api.ts` с mock-данными
   - ✓ Task 3 (SSG Home 15 pts): `getStaticProps` работает, `revalidate: 60` настроен, посты отрендерены
   - ✓ Task 4 (Dynamic Routes 10 pts): `getStaticPaths` и `getStaticProps` в `[id].tsx`

2. **Task 2 Rubric (50 pts):**
   - ✓ Task 1 (Data Service 15 pts): User types, Notification types, функции с имитацией задержки
   - ✓ Task 2 (SSR Dashboard 20 pts): `getServerSideProps` работает, отображает user, analytics, notifications
   - ✓ Task 3 (Comparison 15 pts): `about.tsx` на SSG, `about-ssr.tsx` на SSR, разница видна в timestamps

### Проверки по Code Quality Standards:

- **TypeScript:** Все типы явно указаны, нет `any`, используются `InferGetStaticPropsType` и `InferGetServerSidePropsType`
- **ESLint:** Структура соответствует Best Practices Next.js, типы на границах (API functions)
- **Error handling:** `notFound: true` для несуществующих постов, структура для redirect в dashboard
- **Naming:** Функции названы ясно (`getAllPosts`, `getPostById`, `getUserNotifications`), компоненты — PascalCase
- **Documentation:** Все компоненты и функции имеют контекст в комментариях
- **No client-side fetching:** Все данные fetched в SSG/SSR functions

### Проверки по Git Discipline:

- **Folder Structure:** Используется точная структура `Lab_08/task1/` и `Lab_08/task2/`
- **Conventional Commits:** Предложены коммиты с префиксами `feat:`, `docs:` (пример выше в шагах)
- **Incremental History:** Минимум 3 meaningful commits per task (setup → implementation → docs)

### Проверки по Правилам Оценки:

- ❌ **Не использовано** client-side fetching для SSG страниц (иначе -15 pts)
- ✓ **Включено** error handling через `notFound: true` (иначе -5 pts)
- ✓ **Не использовано** `getStaticProps` для user dashboard (иначе -20 pts)
- ✓ **README включен** с объяснением SSR vs SSG (иначе -10 pts за документацию)

## Что я узнал / переучил из процесса

### Ключевые моменты:

1. **SSG vs SSR vs ISR выбор:**
   - SSG: домашняя страница блога (большинство читают, редко меняется) → быстрая, кешируется
   - SSR: dashboard (personalized, user-specific, меняется часто) → свежие данные
   - ISR: посты (статические, но может появиться новый) → `revalidate: 60` регенерирует в фоне

2. **`getStaticPaths` + `fallback`:**
   - `fallback: "blocking"` = если нет страницы в paths, Next.js генерирует на лету (хорошо для динамических маршрутов)
   - `fallback: false` = вернёт 404 если нет в paths (хорошо если знаешь ВСЕ маршруты)

3. **TypeScript + Next.js типы:**
   - `InferGetStaticPropsType<typeof getStaticProps>` — автоматически выводит тип props из function return
   - Избегает дублирования типов между function и component

4. **Performance трейдофф:**
   - SSG: быстро на client (TTFB = Time To First Byte), но старые данные
   - SSR: медленнее на client, но всегда свежие данные
   - ISR: лучший компромисс для контента, который не меняется каждую секунду

5. **Mock API / Delay:**
   - `await new Promise(resolve => setTimeout(resolve, 100))` — имитирует задержку API
   - Полезна для демонстрации различия между SSG (нет задержки) и SSR (есть задержка)

### Практические insights:

- **Для блога:** SSG + ISR оптимально — читатели видят максимально быструю страницу, автор может update посты и они обновятся в течение ISR-интервала
- **Для dashboard:** SSR необходимо — каждый юзер видит свои данные, обновляются при каждом визите
- **Для e-commerce:** ISR идеален — товары статичны, но регулярно обновляются (новые товары, изменение цены)

## Что было использовано из prompt и как это помогло

- Загруженный PDF файл содержал **точные требования**, **rubric с баллами**, **примеры кода** — это дало полное понимание expectations
- Структура требований ("Task 1", "Task 2", "Task 3") позволила убедиться, что каждый элемент покрыт
- Примеры из задания (структура `types/index.ts`, сигнатуры функций) использованы как базис, но значительно расширены для полноты

## Как проверить, что всё работает правильно

### Локально:

```bash
# Task 1
cd Lab_08/task1
npm install
npm run dev
# Проверить:
# 1. http://localhost:3000 загружается статичная страница с постами
# 2. http://localhost:3000/posts/1 загружается и показывает пост
# 3. HTML source содержит весь контент (не fetch на клиенте)

# Task 2
cd ../task2
npm install
npm run dev
# Проверить:
# 1. http://localhost:3000/dashboard загружается с SSR (timestamp меняется при reload)
# 2. http://localhost:3000/about (SSG) имеет один timestamp
# 3. http://localhost:3000/about-ssr (SSR) имеет другой timestamp
