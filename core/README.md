# Blazzy DOM

A tiny, batteries-included JSX-to-DOM micro-framework. No virtual DOM, no component classes — just plain functions that return real DOM nodes, a minimal hooks system, a simple client-side router, and a small set of useful UI primitives.

[![npm version](https://badge.fury.io/js/blazzy-dom.svg)](https://badge.fury.io/js/blazzy-dom)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- **🚀 Zero Virtual DOM**: Direct DOM manipulation for maximum performance
- **⚡ Tiny Size**: Minimal footprint with no unnecessary abstractions
- **🎯 JSX Support**: Full JSX syntax with TypeScript support
- **🔧 Hooks System**: React-like hooks (useState, useEffect, useScript, useSocket)
- **🛣️ Built-in Router**: Simple client-side routing
- **🎨 UI Primitives**: Ready-to-use components (Button, Input, Form, etc.)
- **📱 No Dependencies**: Zero external dependencies
- **🔍 Full TypeScript**: Complete type definitions and IntelliSense

## 📦 Installation

```bash
npm install blazzy-dom
```

## 🚀 Quick Start

### Basic Setup

```html
<!DOCTYPE html>
<html>
<head>
    <title>Blazzy DOM App</title>
</head>
<body>
    <div id="root"></div>
    <script type="module">
        import { render, Division, Heading, Button, useState } from 'blazzy-dom'
        
        function App() {
            const [count, setCount] = useState(0)
            
            return Division({
                children: [
                    Heading({ level: 1, children: `Count: ${count}` }),
                    Button({
                        onClick: () => setCount(count + 1),
                        children: 'Increment'
                    })
                ]
            })
        }
        
        render(App(), document.getElementById('root'))
    </script>
</body>
</html>
```

### With JSX

```jsx
import { render, Division, Heading, Button, useState } from 'blazzy-dom'

function App() {
    const [count, setCount] = useState(0)
    
    return (
        <Division>
            <Heading level={1}>Count: {count}</Heading>
            <Button onClick={() => setCount(count + 1)}>
                Increment
            </Button>
        </Division>
    )
}

render(<App />, document.getElementById('root'))
```

## 🎯 Core API

### Rendering

```typescript
import { render, setRender, reRender } from 'blazzy-dom'

// Render an element to a container
render(element, container)

// Set up automatic re-rendering
setRender(() => render(App(), container))

// Manually trigger re-render
reRender()
```

### Hooks

```typescript
import { useState, useEffect, useScript, useSocket } from 'blazzy-dom'

// State management
const [state, setState] = useState(initialValue)

// Side effects
useEffect(() => {
    // Effect code
    return () => {
        // Cleanup code
    }
}, [dependencies])

// Load external scripts
useScript('https://example.com/script.js')

// WebSocket connection
const { socket, connected, send, on, off } = useSocket('ws://localhost:3000')
```

### Routing

```typescript
import { setRoutes, navigate } from 'blazzy-dom'

// Define routes
setRoutes({
    '/': HomeComponent,
    '/about': AboutComponent,
    '/contact': ContactComponent
})

// Navigate programmatically
navigate('/about')
```

## 🎨 UI Components

### Basic Components

```typescript
import { 
    Button, Input, Form, Division, Heading, 
    Paragraph, Link, List, Item, Alert 
} from 'blazzy-dom'

// Button with event handling
Button({
    onClick: () => console.log('clicked'),
    children: 'Click me',
    disabled: false
})

// Input with controlled value
Input({
    type: 'text',
    placeholder: 'Enter text...',
    value: inputValue,
    onChange: (e) => setInputValue(e.target.value)
})

// Form with submission
Form({
    onSubmit: (e) => {
        e.preventDefault()
        // Handle form submission
    },
    children: [/* form elements */]
})
```

### Advanced Components

```typescript
import { Confirm, Prompt, Code } from 'blazzy-dom'

// Confirmation dialog
Confirm({
    message: 'Are you sure?',
    onConfirm: () => console.log('confirmed'),
    onCancel: () => console.log('cancelled')
})

// Input prompt
Prompt({
    message: 'Enter your name:',
    onConfirm: (value) => console.log('Name:', value),
    placeholder: 'John Doe'
})

// Code block with syntax highlighting
Code({
    children: 'console.log("Hello, World!")',
    language: 'javascript',
    theme: 'dark'
})
```

## 🔧 Configuration

### TypeScript Setup

Add to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "blazzy-dom/jsx"
  }
}
```

### Vite Configuration

```javascript
// vite.config.js
export default {
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'blazzy-dom/jsx'
  }
}
```

## 📚 Examples

### Todo App

```jsx
import { useState, Division, Heading, Input, Button, List, Item } from 'blazzy-dom'

function TodoApp() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input.trim()])
            setInput('')
        }
    }
    
    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    }
    
    return (
        <Division>
            <Heading level={1}>Todo App</Heading>
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a todo..."
            />
            <Button onClick={addTodo}>Add Todo</Button>
            <List>
                {todos.map((todo, index) => (
                    <Item key={index}>
                        {todo}
                        <Button onClick={() => removeTodo(index)}>Delete</Button>
                    </Item>
                ))}
            </List>
        </Division>
    )
}
```

### Counter with Effects

```jsx
import { useState, useEffect, Division, Heading, Button } from 'blazzy-dom'

function Counter() {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])
    
    return (
        <Division>
            <Heading level={1}>Count: {count}</Heading>
            <Button onClick={() => setCount(count + 1)}>+</Button>
            <Button onClick={() => setCount(count - 1)}>-</Button>
        </Division>
    )
}
```

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/hrutavmodha/blazzy-dom)
- [Documentation](https://github.com/hrutavmodha/blazzy-dom#readme)
- [CLI Tool](https://www.npmjs.com/package/blazzy-cli)

---

Made with ❤️ by [Hrutav Modha](https://github.com/hrutavmodha)
