---
id: api-reference
title: API Reference
sidebar_position: 10
---

Blazzy DOM re-exports its public surface from `blazzy-dom`.

## Top-level exports

- Rendering: `render`, `setRender`, `reRender`, `dynamicRender`
- Useful functions: `createState`, `updateState`, `useEffect`, `useScript`, `useSocket`
- Router: `setRoutes`, `navigate`
- Components: `Alert`, `Button`, `Code`, `Confirm`, `Division`, `Footer`, `Form`, `Header`, `Heading`, `Input`, `Item`, `Link`, `List`, `Paragraph`, `Prompt`, `Script`
- JSX runtime: `blazzy-dom/jsx` exposes `jsx`, `jsxs`, `Fragment`, `jsxDEV`

## Import examples

```ts
// Components & hooks
import { Division, Heading, Button, useState } from 'blazzy-dom'

// Rendering
import { render, setRender, reRender, dynamicRender } from 'blazzy-dom'

// Routing
import { setRoutes, navigate } from 'blazzy-dom'

// JSX runtime (configured via tsconfig/vite)
// import { jsx, jsxs, Fragment } from 'blazzy-dom/jsx' // rarely needed directly
```

See the detailed pages for usage and behavior.
