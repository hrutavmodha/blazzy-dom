---
id: getting-started
title: Getting Started
sidebar_position: 2
---

## Installation

```bash
npm install blazzy-dom
```
---

After installing the blazzy-dom:

You have 2 ways to get started using the Blazzy DOM:

### 1. Install CLI (Recommended)

Install the CLI to scaffold a project:

```bash
npx blazzy-cli my-app
```

Running the command will ask you few questions in an interactive way, scaffold the project according to your choices and guiding for further using the library

> **OR**

### 2. Manually setup the project

- Create a `index.html` with a root element:

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

- Create `src/App.tsx`:

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

- Create `src/index.ts`:

```ts
import { render } from 'blazzy-dom'
import App from './App'
render(App(), document.getElementById('root') as HTMLElement)
```

Run with command:

```bash
npm start
```