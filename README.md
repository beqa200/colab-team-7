# Colab Team 7

## Project Overview

Welcome to the Colab Team 7 project! This repository contains the codebase for our collaborative e-commerce webpage. The project is designed with a focus on responsive design, modern animations, and best practices for both front-end and back-end development.

## Features

### Animated Hamburger Icons

- **Library:** [hamburger-react](https://hamburger-react.netlify.app/)
- **Installation:**
  ```bash
  npm install hamburger-react
  ```
- import { Sling as Hamburger } from "hamburger-react";
- Properties & examples
  size={} duration={0.8} distance="lg" color="#4FD1C5" easing="ease-in" rounded label="Show menu" hideOutline={false}

### React Burger Menu (Hamburger)

- **Source:** [react-burger-menu](https://www.npmjs.com/package/@katasonovyp/react-burger-menu)
- **Demo:** [Demo Link](http://negomi.github.io/react-burger-menu/)
- **Installation:**
  ```bash
  npm install react-burger-menu --save
  ```
- import { slide as Menu } from 'react-burger-menu'
  for properties use link above

## accordion (mobile)

```bash
- npm install @heroicons/react (for arrows)
```

### Footer

- **Source:** [Footer] https://medium.com/@ryaddev/building-react-footer-components-with-tailwindcss-6f2c5909a9d1

```bash
npm install react-icons
```

### image Zoom ( image picker: )

- **Source:** [Image-Zoom-Gallery] https://mario-duarte.github.io/react-image-zooom/

```bash
npm i react-image-zoom
```

- choosen style: image picker

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Useful resources

- icons8.com
- დაამატეთ თქვენთვის საინტერესო რესურსები ...

#   c o l a b - t e a m - 7 
 
 
