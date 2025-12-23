# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Wedding Organizer

Full-stack wedding planning platform with vendor management, proposals, contracts.

## Setup

```bash
npm install
npm run dev
```

## Testing

```bash
npm run test
npm run test:ui
```

## Features

- ✅ Couple/Vendor/Guest authentication (JWT)
- ✅ Vendor listings & filtering
- ✅ Proposals & contract signing
- ✅ Guest management
- ✅ Dark mode
- ✅ Offline support (PWA)
- ✅ i18n (en/es)
- ✅ Accessibility (ARIA)
- ✅ Code splitting
- ✅ React Query caching
- ✅ Redux state management
- ✅ MSW mocking

## Stack

- Vite + React 18
- Redux Toolkit
- React Query
- Tailwind CSS + Material UI
- MSW (mocking)
- Vitest + Testing Library
- JWT auth
- i18next

## Deployment

Deploy to Vercel via GitHub Actions.