## Blazzy DOM

A tiny, batteries-included JSX-to-DOM micro-framework. No virtual DOM, no component classes — just plain functions that return real DOM nodes, a minimal hooks system, a simple client-side router, and a small set of useful UI primitives.

This repository is organized as a multi-part project:

- `core/`: framework runtime, components, hooks, router, and dev setup (Vite + TS)
- `cli/`: CLI tooling (planned)
- `documentation/`: docs site (planned)

### Why Blazzy DOM?

- **Real DOM first**: Components return `HTMLElement`s directly
- **Lightweight JSX runtime**: Custom `jsx/jsxs/Fragment` to support TSX
- **Minimal hooks**: `useState`, `useEffect`, `useScript`, `useSocket`
- **Simple routing**: Hash-free, history API-based router with helpers
- **Handy components**: Alert, Confirm, Prompt, List, Button, Input, etc.
- **Zero config DX**: Vite dev server, TypeScript, ESLint + Prettier

---

## Quick start

Requirements: Node 18+

``` Bash
cd core
npm install
npm run start
```

Open the app at `http://localhost:5173` (Vite default). The test app under `core/src/test/` demonstrates routing, state, and components.

Build and preview:

``` Bash
cd core
npm run build
npm run preview
```

---

## Project structure

```
blazzy-dom/
  core/
    src/
      components/       # UI primitives that return real DOM nodes
      hooks/            # Minimal hooks
      jsx/              # Custom JSX runtime
      render/           # Render and re-render orchestration
      router/           # History API router
      styles/           # Component CSS (scoped via class names)
      test/             # Example pages/components used by main.ts
    index.html          # Mounts #root
    vite.config.js      # Vite + esbuild JSX config
    tsconfig.json       # TS with custom jsxImportSource
  cli/                  # (coming soon)
  documentation/        # (coming soon)
```

---

## Using the framework

### Authoring a component

Components are plain functions that return real DOM elements. With the custom JSX runtime, TSX calls your function and passes props.

``` TypeScript JSX
// core/src/test/App.tsx
import Division from '../components/Division'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import useState from '../hooks/useState'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <Division id="app">
      <Heading level={1}>Hello</Heading>
      <Paragraph>Count is {count}</Paragraph>
      <Button onclick={() => setCount(count + 1)}>Increment</Button>
    </Division>
  )
}
```

Mounting happens in `core/src/main.ts`:

``` TypeScript
import { render, setRender } from './render'
import App from './test/App'

const root = document.getElementById('root') as HTMLDivElement
render(App(), root)
setRender(() => render(App(), root))
```

### Routing

Use the history API-based router to map paths to components, navigate programmatically, and handle back/forward.

``` TypeScript
import { setRoutes, navigate } from './router'
import App from './test/App'
import Home from './test/Home'
import About from './test/About'

setRoutes({
  '/': App,
  '/home': Home,
  '/about': About,
})

// navigate('/home') to push a new route
```

Alternatively, `dynamicRender` can map the current `window.location.pathname` to a component and set up re-rendering:

``` TypeScript
import dynamicRender from './render/dynamicRender'

dynamicRender({
  '/': App,
  '/home': Home,
  '/about': About,
})
```

### State and effects

- `useState<T>(initial: T)`: returns `[state, setState]` and triggers a re-render when changed
- `useEffect(callback, deps)`: runs when deps change; return a cleanup function to dispose

``` TypeScript JSX
import useState from '../hooks/useState'
import useEffect from '../hooks/useEffect'

export default function Clock() {
  const [now, setNow] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date().toLocaleTimeString()), 1000)
    return () => clearInterval(id)
  }, [])

  return <Paragraph>{now}</Paragraph>
}
```

Note: Hooks are intentionally minimal and currently experimental.

### Useful UI primitives

All components live under `core/src/components/` and are re-exported from `core/src/index.ts`.

- `Division`: `<div>` container that appends children
- `Heading`: semantic headings with `level={1|2|...}`
- `Paragraph`: text node wrapper
- `Button`: `<button>` with `on*` event props (e.g., `onclick`)
- `Input`: `<input>` with typed `type`
- `List` + `Item`: ordered/unordered lists
- `Header`/`Footer`: semantic layout containers
- `Link`: `<a href>` (note: use router `navigate` for SPA transitions)
- `Alert`: transient toast-like alert (imports CSS automatically)
- `Confirm`: programmatic confirm returning `Promise<boolean>`
- `Prompt`: programmatic prompt returning `Promise<string>`
- `Code`: code block with copy-to-clipboard
- `Script`: injects and runs an inline script function

Examples:

``` TypeScript JSX
import Alert from '../components/Alert'
import Confirm from '../components/Confirm'
import Prompt from '../components/Prompt'
import Code from '../components/Code'

// Alert
Alert({ children: 'Saved!' })

// Confirm
const ok = await Confirm({ children: 'Are you sure?' })

// Prompt
const value = await Prompt({ children: 'Your name?' })

// Code block
<Code>
  {"console.log('Hello World')"}
  {"alert('This is an alert')"}
  {"// Multi-line supported"}
  {"const x = 42"}
  {"(async () => {})()"}
</Code>
```

### Networking: `useSocket`

`useSocket` wraps `socket.io-client` for quick real-time wiring.

``` TypeScript
import useSocket from '../hooks/useSocket'

const socket = useSocket({ url: 'ws://localhost:3000' })
socket.on('message', (payload) => { /* ... */ })
socket.emit('join', 'room-123')
```

---

## Render API

- `render(element: HTMLElement, parent?: HTMLElement)`: Clears and mounts into `parent` (or `document.body` if omitted). Also resets internal hook state and sets default routing context when needed.
- `setRender(fn: () => void)`: Registers the re-render function used by hooks.
- `reRender()`: Triggers the registered render function.
- `dynamicRender(routes: Record<string, () => HTMLElement>)`: Renders the component matching `window.location.pathname` and wires up re-rendering.

## Router API

- `setRoutes(routes: Record<string, () => HTMLElement>)`: Register route map
- `navigate(path: string)`: Pushes a new history entry and renders the matching component

---

## JSX runtime and TypeScript config

Custom runtime is in `core/src/jsx/jsx-runtime.ts`:

- `jsx(type, props)` and `jsxs` call your component function with props and expect an `HTMLElement` return
- `Fragment` returns `props.children`

Relevant configuration:

- `tsconfig.json`
  - `"jsx": "react-jsx"`
  - `"jsxImportSource": "src/jsx"`
- `vite.config.js`
  - `esbuild.jsxImportSource = 'jsx'`
  - `resolve.alias.jsx -> src/jsx`

This setup enables TSX files to compile using the custom runtime rather than React.

---

## Scripts

Run these in the `core/` directory:

- `npm run start`: Vite dev server
- `npm run build`: Type-check + production build
- `npm run preview`: Preview production build
- `npm run lint`: ESLint over `src/`
- `npm run format`: Prettier write
- `npm run type-check`: TypeScript without emit

---

## Roadmap

- **CLI** (`cli/`): project scaffolding, code generators, component templates
- **Documentation site** (`documentation/`): guides, tutorials, API references
- More components and hook utilities

---

## Contributing

PRs and issues are welcome. Please run lint, format, and type-check before submitting:

```bash
cd core
npm run format && npm run lint && npm run type-check
```

---

## License

This project is licensed under MIT — see [LICENSE](./LICENSE) for details.
