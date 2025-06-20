# 🚀 Проект на React + Vite с FSD архитектурой

Этот проект создан с использованием современного стека технологий, включая **Vite**, **React**, **TypeScript**, а также архитектурный подход **Feature-Sliced Design (FSD)**. Дополнительно настроены инструменты качества кода: ESLint, Prettier, Stylelint и Husky для автоматизации проверок при коммитах.

---

## 📦 Технологии

- ⚡ **[Vite](https://vitejs.dev/)** — супербыстрый сборщик
- ⚛️ **[React](https://react.dev/)** — библиотека для создания интерфейсов
- 🧩 **[TypeScript](https://www.typescriptlang.org/)** — типизация JavaScript
- 🗂 **[Feature-Sliced Design](https://feature-sliced.design/)** — методология структурирования фронтенд-архитектуры
- 🎨 **CSS Modules** — локальные стили
- 🧹 **ESLint + Prettier + Stylelint** — линтинг и форматирование
- 🐶 **Husky + lint-staged + commitlint** — pre-commit и commit-msg хуки

⚙️ Скрипты
bash
Копировать
Редактировать
# Запуск проекта в dev-режиме
npm run dev

<<<<<<< HEAD
```js
export default tseslint.config({
    extends: [
        // Remove ...tseslint.configs.recommended and replace with this
        ...tseslint.configs.recommendedTypeChecked,
        // Alternatively, use this for stricter rules
        ...tseslint.configs.strictTypeChecked,
        // Optionally, add this for stylistic rules
        ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
        // other options...
        parserOptions: {
            project: [
                './tsconfig.node.json',
                './tsconfig.app.json',
            ],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```
=======
# Сборка проекта (включает проверку типов)
npm run build
>>>>>>> a9a214b10c888d2bf931eedd03ea21fe856b0884

# Предпросмотр production-сборки
npm run preview

<<<<<<< HEAD
```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
    plugins: {
        // Add the react-x and react-dom plugins
        'react-x': reactX,
        'react-dom': reactDom,
    },
    rules: {
        // other rules...
        // Enable its recommended typescript rules
        ...reactX.configs['recommended-typescript'].rules,
        ...reactDom.configs.recommended.rules,
    },
});
```
=======
# Линтинг JS/TS-файлов
npm run lint

# Линтинг CSS-файлов
npm run lint:css

# Линтинг и автоматическое исправление CSS
npm run lint:css:fix

# Форматирование кода через Prettier
npm run prettier

# Подготовка Husky-хуков (автоматически вызывается при установке)
npm run prepare
>>>>>>> a9a214b10c888d2bf931eedd03ea21fe856b0884
