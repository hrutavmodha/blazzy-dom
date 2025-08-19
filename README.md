# Blazzy DOM

A tiny, batteries‑included JSX‑to‑DOM micro‑framework. No virtual DOM, no component classes — just plain functions that return real DOM nodes, a minimal hooks system, a simple client‑side router, and a small set of useful UI primitives.

[![npm (core)](https://badge.fury.io/js/blazzy-dom.svg)](https://www.npmjs.com/package/blazzy-dom)
[![npm (cli)](https://badge.fury.io/js/blazzy-cli.svg)](https://www.npmjs.com/package/blazzy-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Note: State management ergonomics are planned to improve in version 1.1.x of `blazzy-dom`.

## ✨ Features

- **Zero Virtual DOM**: Direct DOM manipulation for maximum performance
- **Tiny Size**: Minimal footprint with no unnecessary abstractions
- **JSX Support**: Full JSX syntax with TypeScript support
- **Hooks System**: React‑like hooks (`useState`, `useEffect`, `useScript`, `useSocket`)
- **Built‑in Router**: Simple client‑side routing
- **UI Primitives**: Ready‑to‑use components (Button, Input, Form, etc.)
- **No Dependencies**: Zero external runtime dependencies
- **Full TypeScript**: Complete type definitions and IntelliSense

## 📦 Monorepo overview

- `core/`: The Blazzy DOM library (published as `blazzy-dom`)
- `cli/`: Project scaffolding CLI (published as `blazzy-cli`)
- `documentation/frontend/`: Docusaurus docs site (markdown under `documentation/frontend/docs`)

## 🚀 Quick Start

### Option 1: Use the CLI (recommended)

```bash
npx blazzy-cli my-app
cd my-app
npm install
npm start
```

- Choose JavaScript or TypeScript template when prompted
- Templates include Vite, JSX config, and basic scripts

### Option 2: Manual setup

1) Create `index.html` with a root element

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Blazzy DOM App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.ts"></script>
  </body>
</html>
```

2) Create `src/App.tsx`

```tsx
import { Division, Heading, Button, useState } from 'blazzy-dom'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <Division>
      <Heading level={1}>Count: {count}</Heading>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </Division>
  )
}
```

3) Create `src/index.ts`

```ts
import { render } from 'blazzy-dom'
import App from './App'

render(App(), document.getElementById('root') as HTMLElement)
```

## ⚙️ JSX configuration

Point the JSX runtime to `blazzy-dom/jsx`.

### TypeScript template

1) `tsconfig.json`

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "blazzy-dom/jsx"
  }
}
```

2) `vite.config.js`

```js
export default {
  esbuild: {
    jsxImportSource: 'blazzy-dom/jsx',
    jsxDev: false,
  },
}
```

3) `src/vite-env.d.ts` (for importing CSS in components)

```ts
/// <reference types="vite/client" />
declare module '*.css' {
  const content: Record<string, string>
  export default content
}
```

### JavaScript template

`vite.config.js`

```js
export default {
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'blazzy-dom/jsx',
    jsxDev: false,
  },
}
```

If configuration issues persist, please open an issue with details: https://github.com/hrutavmodha/blazzy-dom

## 🎯 Core API (overview)

- **Rendering**: `render`, `setRender`, `reRender`, `dynamicRender`
- **Router**: `setRoutes`, `navigate`
- **Hooks**: `useState`, `useEffect`, `useScript`, `useSocket`
- **Components**: `Alert`, `Button`, `Code`, `Confirm`, `Division`, `Footer`, `Form`, `Header`, `Heading`, `Input`, `Item`, `Link`, `List`, `Paragraph`, `Prompt`, `Script`

See full docs in `documentation/frontend/docs`.

### Rendering

```ts
import { render, setRender, reRender, dynamicRender } from 'blazzy-dom'

// Basic render
a) render(App(), document.getElementById('root') as HTMLElement)

// Wire re-rendering
setRender(() => render(App(), document.getElementById('root') as HTMLElement))
reRender()

// Route-aware rendering
dynamicRender({ '/': App, '/about': About })
```

### Routing

```ts
import { setRoutes, navigate } from 'blazzy-dom'

setRoutes({
  '/': Home,
  '/about': About,
})

navigate('/about')
```

### Hooks

```ts
import { useState, useEffect, useScript, useSocket } from 'blazzy-dom'

const [value, setValue] = useState(0)

useEffect(() => {
  // setup
  return () => {
    // cleanup
  }
}, [value])

useScript({ path: 'https://example.com/sdk.js', async: true })

const socket = useSocket({ url: 'ws://localhost:3000' })
socket.on('message', (msg) => console.log(msg))
socket.emit('ping')
```

## 🎨 Components (high-level)

- Layout and text: `Division`, `Heading`, `Paragraph`, `Header`, `Footer`
- Inputs: `Input`, `Form`, `Button`, `Link`, `List`, `Item`
- Utilities: `Script`, `Code`
- Dialogs: `Alert` (inline notice), `Confirm` (Promise<boolean>), `Prompt` (Promise<string>)

Basic example:

```tsx
import { Division, Heading, Paragraph, Button } from 'blazzy-dom'

function Example() {
  return (
    <Division id="example">
      <Heading level={2}>Hello</Heading>
      <Paragraph>Welcome to Blazzy DOM</Paragraph>
      <Button onClick={() => console.log('clicked')}>Click me</Button>
    </Division>
  )
}
```

## 📚 Examples

Counter:

```tsx
import { useState, Division, Heading, Button } from 'blazzy-dom'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <Division>
      <Heading level={1}>Count: {count}</Heading>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </Division>
  )
}
```

More examples and guides are available under `documentation/frontend/docs`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m "feat: add amazing feature"`
4. Push branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Dev scripts are available in `core/` and docs site scripts in `documentation/frontend/`.

## 📄 License

Licensed under the [MIT License](./LICENSE).

## 🔗 Links

- [NPM: blazzy-dom](https://www.npmjs.com/package/blazzy-dom)
- [NPM: blazzy-cli](https://www.npmjs.com/package/blazzy-cli)
- [Repository](https://github.com/hrutavmodha/blazzy-dom)
