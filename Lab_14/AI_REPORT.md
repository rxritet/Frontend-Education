AI_REPORT

1. ИНФОРМАЦИЯ ОБ ИСПОЛЬЗОВАНИИ AI

ФИО студента: Абраев Радмир
Номер группы: Software Engineering 
Номер лабораторной работы: Lab_14
Дата заполнения: 23.04.2026

AI инструмент:
☑ Другой: Perplexity AI (perplexity.ai)
☐ ChatGPT (OpenAI)
☐ GitHub Copilot
☐ Microsoft Copilot
☐ Claude (Anthropic)

Версия/дата использования: Perplexity AI, 2026-04-23

2. КОНКРЕТНЫЕ ВОПРОСЫ / ПРОМПТЫ

Вопрос/Промпт 1:
Ваш вопрос:
Я прикрепил PDF-файл с заданием Lab 14 и написал: "Работай также" — имея в виду тот же формат, что и для предыдущих лабораторных (Lab 09–Lab 12): дай код каждого нужного файла и AI_REPORT сразу для двух заданий.

Что вы получили:
☑ Объяснение концепции
☑ Объяснение синтаксиса
☑ Пример использования
☑ Рекомендации

Краткое описание ответа AI:
AI дал полную структуру проекта Lab_14/task1/ и Lab_14/task2/, код всех нужных файлов (types.ts, mockData.ts, ContactsScreen.tsx, RegistrationScreen.tsx, оба App.tsx, оба README), а также черновик AI_REPORT по реальному содержанию переписки. Я проверил каждый файл, адаптировал под себя (вставил своё имя, ID, дату) и набрал код вручную.

Вопрос/Промпт 2:
Ваш вопрос:
Для предыдущих лабораторных (Lab 09–Lab 12) я также использовал тот же AI-инструмент. Общий паттерн был одинаков: я прикладывал PDF с заданием, просил дать код нужных файлов и черновик AI_REPORT по двум заданиям сразу. Код я затем вводил вручную, проверял, адаптировал, исправлял ошибки.

Что вы получили:
☑ Объяснение концепции
☑ Пример использования
☑ Рекомендации

Краткое описание ответа AI:
AI объяснял ключевые концепции каждого задания: useMemo/useCallback, React.memo, виртуализация списков (react-window, FlatList), Jest/RTL unit-тесты, Vercel deployment, GitHub Actions CI, React Native компоненты (StyleSheet, View, Text, Image), SafeAreaView, useWindowDimensions, KeyboardAvoidingView и RefreshControl. Для каждой темы AI показывал примеры кода и объяснял trade-offs. Весь код я вводил и адаптировал вручную.

3. ПРОЦЕСС НАПИСАНИЯ КОДА

Я изучил PDF Lab 14 и разделил задание на два отдельных Expo проекта: task1 для FlatList контактов и task2 для registration form.

Для task1 я создал проект через create-expo-app, вручную написал types.ts с интерфейсом Contact, utils/mockData.ts с функцией generateContacts и ContactsScreen.tsx. Ключевой момент — я понял, что для максимальной производительности FlatList нужны сразу четыре вещи: useCallback на renderItem и keyExtractor, getItemLayout с фиксированной высотой ITEM_HEIGHT=80, и правильные batch-пропсы (initialNumToRender, maxToRenderPerBatch, windowSize, removeClippedSubviews).

Для task2 я создал второй проект и написал RegistrationScreen.tsx. Самым важным было правильно совместить TouchableWithoutFeedback + KeyboardAvoidingView + ScrollView в правильном порядке вложенности. Также я разобрался с Platform-специфичным поведением: iOS требует behavior="padding" с keyboardVerticalOffset=64, Android — behavior="height". Real-time email validation через regex я реализовал в validateEmail и связал с состоянием errors.

После написания кода я запустил оба проекта через npx expo start. Для task1 проверил скролл списка, pull-to-refresh и Alert при нажатии на контакт. Для task2 проверил поведение клавиатуры, появление error text при невалидном email, и disabled-состояние кнопки.

4. ЧТО ВЫ УЗНАЛИ

1. Понял, почему FlatList быстрее ScrollView.
FlatList использует виртуализацию: монтирует только видимые элементы и размонтирует скрытые. ScrollView рендерит всё сразу, что критично при 100+ элементах.

2. Разобрался с getItemLayout и batch-пропсами.
getItemLayout позволяет FlatList рассчитать позицию любого элемента математически без измерения DOM. windowSize=5 означает, что в памяти хранится 5 экранов контента.

3. Научился правильно обрабатывать клавиатуру в React Native.
KeyboardAvoidingView решает проблему перекрытия формы клавиатурой. iOS и Android требуют разных значений behavior. TouchableWithoutFeedback закрывает клавиатуру по тапу вне поля.

4. Реализовал real-time form validation через управляемое состояние.
Validation происходит в onChangeText, state обновляется сразу, кнопка Submit блокируется пока есть ошибки или пустые поля.

5. ПРОЦЕНТ ИСПОЛЬЗОВАНИЯ AI

☐ 0-25%
☐ 26-50%
☑ 51-75%
☐ 76-100%

Ваш выбор: 60%

Пояснение:
AI помог понять структуру решения, объяснил концепции FlatList оптимизации и KeyboardAvoidingView. Код я вводил вручную, проверял на эмуляторе, исправлял TS-ошибки и тестировал поведение вручную.