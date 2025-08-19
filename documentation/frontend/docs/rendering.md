---
id: rendering
title: Rendering
sidebar_position: 4
---

Blazzy DOM renders real DOM nodes with a tiny API.

## render

```ts
import { render } from 'blazzy-dom'

render(element, container?)
```

- **element**: an `HTMLElement` (or a JSX component returning one)
- **container**: optional `HTMLElement` to mount into. If omitted, renders into `document.body`.

Behavior:

- Resets the internal hook index pointer before each render
- If no `container` is passed, sets the state context to `window.location.pathname`

## setRender and reRender

```ts
import { setRender, reRender } from 'blazzy-dom'

setRender(() => render(App(), root))
reRender() // triggers the last set render
```

Used internally by routing helpers. You can manually wire reactive updates by calling `setRender` once and `reRender` when state changes.

## dynamicRender

```ts
import { dynamicRender } from 'blazzy-dom'

dynamicRender({
  '/': Home,
  '/about': About
})
```

- Chooses a route by `window.location.pathname`
- Renders into `#root`
- Calls `setRender(() => dynamicRender(routes))` so state updates call through to re-render the active route.
