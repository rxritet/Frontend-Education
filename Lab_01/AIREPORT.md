# AI Usage Report — Lab 04

**Student:** Радмир Абраев  
**Date:** 20.02.2026  
**Lab:** Lab 04 Week 4 — Event Handling & Reusable Components

---

## Tool Used
- Perplexity AI (perplexity.ai)

---

## Prompts I Submitted

1. "Сделай задания из данного файла [lab_react_04_week4.pdf]"
2. "Перепиши работу под TypeScript"

---

## How I Modified / Verified the Code

### Lab 4.1 — RegistrationForm
- Заменил три отдельных `useState` на объекты `FormFields` и `FormErrors` —
  это чище и лучше масштабируется.
- Добавил generic `handleChange(field: keyof FormFields)` вместо трёх отдельных
  обработчиков — убрал дублирование кода.
- Проверил, что `e.preventDefault()` реально блокирует перезагрузку страницы —
  открыл DevTools → Network, убедился, что POST-запрос не уходит.
- Протестировал edge-cases: пустое поле, age = 17, невалидный email без @.

### Lab 4.2 — ArticleManager
- Убедился, что `ArticleItem` использует локальный `useState<boolean>(false)` для
  `isOpened`, а не пропс от родителя — именно это требует рубрика.
- Вынес тип `Article` в отдельный файл `types/article.ts`, чтобы не дублировать
  интерфейс в каждом компоненте.
- Проверил Render Props: передал `addArticle` и `articleList` из `App.tsx` и убедился,
  что замена компонентов работает без изменения `ArticleManager`.
- Проверил удаление статьи: после `filter` React перерендерил список без удалённого элемента.

---

## What I Learned

1. **Synthetic Events + TypeScript** — `ChangeEvent<HTMLInputElement>` и
   `FormEvent<HTMLFormElement>` дают точные типы для обработчиков, и IDE подсказывает
   `e.target.value` без `any`.

2. **keyof** — `keyof FormFields` позволяет написать один generic обработчик вместо
   трёх одинаковых функций, это реальный паттерн в продакшн-коде.

3. **Render Props** — паттерн из Ch. 5 разрывает прямую зависимость между
   `ArticleManager` и конкретными компонентами: родитель решает, что рендерить.

4. **Local State в дочернем компоненте** — хранить `isOpened` в `ArticleItem`
   правильнее, чем в родителе, потому что родитель не должен знать о визуальном
   состоянии каждого элемента списка.
