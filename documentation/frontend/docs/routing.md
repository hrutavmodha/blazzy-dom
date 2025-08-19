---
id: routing
title: Routing
sidebar_position: 6
---

Blazzy DOM ships with a tiny client-side router.

## setRoutes + navigate

```ts
import { setRoutes, navigate } from 'blazzy-dom'
import { render } from 'blazzy-dom'

function Home() { /* ... */ return document.createElement('div') }
function About() { /* ... */ return document.createElement('div') }

setRoutes({
  '/': Home,
  '/about': About
})

// initial render
render(Home(), document.getElementById('root') as HTMLElement)

// navigate programmatically
navigate('/about')
```

Behavior:

- Stores a map of `path -> () => HTMLElement`
- Uses `history.pushState` and re-renders the active route
- Sets state context to the current path before rendering
- Listens to `popstate` to handle back/forward navigation

## dynamicRender (recommended)

```ts
import { dynamicRender } from 'blazzy-dom'

dynamicRender({
  '/': Home,
  '/about': About
})
```

- Looks up the component by `window.location.pathname`
- Renders into `#root`
- Registers a `setRender` callback so state updates re-render the active route
