---
id: intro
title: Blazzy DOM
sidebar_position: 1
---

Blazzy DOM is a tiny, batteries‑included JSX‑to‑DOM micro‑framework. No virtual DOM, no component classes — just plain functions that return real DOM nodes, a minimal hooks system, a simple client‑side router, and a small set of useful UI primitives.

## Features

- **Zero Virtual DOM**: Direct DOM manipulation for maximum performance
- **Tiny Size**: Minimal footprint with no unnecessary abstractions
- **JSX Support**: Full JSX syntax with TypeScript support
- **Hooks System**: React‑like hooks (`useState`, `useEffect`, `useScript`, `useSocket`)
- **Built‑in Router**: Simple client‑side routing
- **UI Primitives**: Ready‑to‑use components (e.g., `Button`, `Input`, `Form`)
- **No Dependencies**: Zero external runtime dependencies
- **Full TypeScript**: Complete type definitions and IntelliSense

## Install

```bash
npm install blazzy-dom
```

## Quick Look

```jsx
import { render, Division, Heading, Button, useState } from 'blazzy-dom'

function App() {
    const [count, setCount] = useState(0)
    return (
        <Division>
            <Heading level={1}>Count: {count}</Heading>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </Division>
  )
}

render(App(), document.getElementById('root'))
```

> **Note:** The state management has been changed successfully from the end-user's point.

- Now, users can use `createState()` and `updateState()` for managing their state instead of using single `useState()`

## What’s in this documentation

- Getting started and JSX configuration
- Core APIs: rendering, hooks, routing
- Component reference
- CLI usage and templates
- Examples

Links:

- [GitHub](https://github.com/hrutavmodha/blazzy-dom)
- [NPM (core package)](https://www.npmjs.com/package/blazzy-dom)
- [NPM (CLI tool)](https://www.npmjs.com/package/blazzy-cli)
