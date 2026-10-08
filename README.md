# Rosemary Ndubuisi — Web Developer

A personal portfolio website built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Project structure

```text
src/
  components/   Shared interface components such as the navbar
  sections/     Page sections: hero, projects, about, and contact
  App.jsx       Composes the page sections
  index.css     Global styles and Tailwind import
  main.jsx      React entry point
```

## Build for deployment

```bash
npm run build
```

Vercel can deploy this Vite app with `npm run build` as its build command and `dist` as its output directory.
