# Frontend Education — React + TypeScript

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=flat&logo=reactrouter&logoColor=white)
![Status](https://img.shields.io/badge/Status-In%20Progress-orange?style=flat)

Репозиторий лабораторных работ по курсу Frontend-разработки.
Охватывает путь от основ JSX до Design Patterns, Event Handling и React Router v6.

---

## 📂 Структура репозитория

```text
Frontend-Education/
├── 1 lab/          
│   ├── task-1/     
│   ├── task-2/     
│   └── AIREPORT.md
├── 2 lab/          
│   ├── task1/      
│   ├── task2/      
│   └── AI_REPORT.md
├── 3 lab/         
│   ├── 1 task/    
│   ├── 2 task/     
│   └── AI_RERPORT.md
├── 4 lab/
│   ├── task1/
│   ├── task2/
│   └── AI_RERPORT.md
├── 5 lab/          
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── 6 lab/          
│   ├── 6.1/       
│   ├── 6.2/        
│   └── AI_REPORT.md
└── README.md
```

---

## 🗂️ Лабораторные работы

| Папка | Лаб. | Тема | Ключевые концепции | Статус |
|-------|------|------|--------------------|--------|
| `1 lab` | Lab 04 | Event Handling & Reusable Components | `useState`, `ChangeEvent`, `keyof`, Render Props | ✅ |
| `2 lab` | Lab 02 | React Basics | JSX, Fragment, `key` в `.map()`, `children`, props | ✅ |
| `3 lab` | Lab 03 | JavaScript Design Patterns | IIFE, Revealing Module, ES6 modules, GoF-документация | ✅ |
| `4 lab` | Lab 04 | Tasks | — | ✅ |
| `5 lab` | Lab 05 | Vite Project Setup | Vite config, ESLint, tsconfig, project structure | ✅ |
| `6 lab` | Lab 06 | React Router v6 | `createBrowserRouter`, `RouterProvider`, `<Outlet />`, `NavLink`, `loader` | ✅ |

---

## 🧠 Что освоено

- **React basics** — functional components, JSX, Fragment, `key` при рендере списков
- **TypeScript** — типизация пропсов, `ChangeEvent<HTMLInputElement>`, `FormEvent`, `keyof`
- **Event Handling** — `e.preventDefault()`, generic `handleChange`, объекты состояния вместо нескольких `useState`
- **Design Patterns** — Module Pattern (IIFE, Revealing, ES6), GoF-документация по Osmani Ch. 3
- **Render Props** — развязка `ArticleManager` от конкретных дочерних компонентов
- **React Router v6** — `createBrowserRouter`, Layout с `<Outlet />`, `NavLink`, `loader` до рендера компонента

---

## 🛠️ Технологии

- **React 18** — functional components, hooks
- **TypeScript** — строгая типизация
- **Vite** — сборка и dev-сервер с HMR
- **React Router DOM v6** — client-side routing, nested routes
- **ESLint** — type-aware lint rules
- **Node.js** v18+

---

## 🚀 Быстрый старт

Клонировать репозиторий:

```bash
git clone https://github.com/rxritet/Frontend-Education.git
```

Для лаб с полноценным Vite-проектом (например, `5 lab`):

```bash
cd "5 lab"
npm install
npm run dev
```

Для лаб с изолированными тасками (например, `1 lab/task-1`):

```bash
cd "1 lab/task-1"
npm install
npm run dev
```

---

## 📝 Конвенция коммитов

Все коммиты следуют [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add Lab 06 routing with createBrowserRouter
fix: resolve TypeScript type errors in RegistrationForm
docs: add AI_REPORT for Lab 03
refactor: extract Article type to types/article.ts
```

---

## 👤 Автор

**Radmir Abraev** — 2nd year CS student, Almaty 🇰🇿  
[GitHub](https://github.com/rxritet)

---

## 📄 Лицензия

Учебный репозиторий — для личного использования и портфолио.
