# Blazzy CLI

A CLI-based project scaffolder for Blazzy DOM library. Quickly create new Blazzy DOM projects with zero configuration.

[![npm version](https://badge.fury.io/js/blazzy-cli.svg)](https://badge.fury.io/js/blazzy-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- **🚀 Zero Configuration**: Get started instantly with pre-configured templates
- **📦 Multiple Templates**: Choose between JavaScript and TypeScript
- **⚡ Fast Setup**: Create a new project in seconds
- **🎯 Vite Integration**: Built-in Vite dev server and build tools
- **🔧 Modern Tooling**: ESLint, Prettier, and TypeScript support
- **📱 Responsive**: Mobile-first development setup

## 📦 Installation

### Global Installation (Recommended)

```bash
npm install -g blazzy-cli
```

### One-time Usage

```bash
npx blazzy-cli my-app
```

## 🚀 Quick Start

### Create a New Project

```bash
# Using the CLI command
create-blazzy-app my-app

# Or with npx
npx blazzy-cli my-app
```

### Interactive Setup

The CLI will guide you through the setup process:

```bash
$ create-blazzy-app my-app

? Choose a template:
  ❯ JavaScript (Recommended for beginners)
    TypeScript (Recommended for production)

? Choose a package manager:
  ❯ npm
    yarn
    pnpm

Creating project...
✅ Project created successfully!

Next steps:
  cd my-app
  npm i
  npm run dev
```

## 📁 Project Structure

After creating a project, you'll get:

```
my-app/
├── src/
│   ├── App.jsx          # Main application component
│   └── index.js         # Application entry point
├── public/
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── jsconfig.json OR tsconfig.json     # JS/TS configurations
```

## 🎯 Templates

### JavaScript Template

Perfect for beginners and quick prototypes:

```jsx
// src/App.jsx
import { Division, Heading, Paragraph } from 'blazzy-dom'

export default function App() {
    return (
        <Division id='templateDiv'>
            <Heading level={1}>Welcome to Blazzy DOM</Heading>
            <Paragraph>Edit src/App.jsx to view changes</Paragraph>
        </Division>
    )
}
```

### TypeScript Template

Ideal for production applications with full type safety:

```tsx
// src/App.tsx
import { Division, Heading, Paragraph } from 'blazzy-dom'

export default function App() {
    return (
        <Division id='templateDiv'>
            <Heading level={1}>Welcome to Blazzy DOM</Heading>
            <Paragraph>Edit src/App.tsx to view changes</Paragraph>
        </Division>
    )
}
```

## 🛠️ Available Scripts

Once your project is created, you can use these commands:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking (TypeScript template only)
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

## 🔧 Configuration

### Vite Configuration

Both templates include a pre-configured Vite setup:

```javascript
// vite.config.js
export default {
    esbuild: {
        jsx: 'automatic',
        jsxImportSource: 'blazzy-dom/jsx'
    }
}
```

### TypeScript Configuration (TS Template)

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "useDefineForClassFields": true,
        "module": "ESNext",
        "lib": ["ES2022", "DOM", "DOM.Iterable"],
        "skipLibCheck": true,
        "allowJs": true,
        "moduleResolution": "bundler",
        "baseUrl": ".",
        "jsx": "react-jsx",
        "jsxImportSource": "blazzy-dom/jsx",
        "allowImportingTsExtensions": true,
        "verbatimModuleSyntax": true,
        "moduleDetection": "force",
        "noEmit": true,
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noFallthroughCasesInSwitch": true
    },
    "include": ["src"]
}
```

### JavaScript Configuration (JS Template)

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "ESNext",
        "moduleResolution": "bundler",
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "jsx": "react-jsx",
        "jsxImportSource": "blazzy-dom/jsx",
        "baseUrl": ".",
        "paths": {
            "blazzy-dom": ["./node_modules/blazzy-dom/src/index.ts"]
        }
    },
    "include": ["src/**/*", "**/*.js", "**/*.jsx"],
    "exclude": ["node_modules", "dist"]
}
```

## 📚 Examples

### Basic Counter App

```jsx
import { useState, Division, Heading, Button } from 'blazzy-dom'

export default function App() {
    const [count, setCount] = useState(0)
    
    return (
        <Division>
            <Heading level={1}>Counter: {count}</Heading>
            <Button onClick={() => setCount(count + 1)}>
                Increment
            </Button>
            <Button onClick={() => setCount(count - 1)}>
                Decrement
            </Button>
        </Division>
    )
}
```

### Todo List

```jsx
import { useState, Division, Heading, Input, Button, List, Item } from 'blazzy-dom'

export default function App() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input.trim()])
            setInput('')
        }
    }
    
    return (
        <Division>
            <Heading level={1}>Todo List</Heading>
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a todo..."
            />
            <Button onClick={addTodo}>Add Todo</Button>
            <List>
                {todos.map((todo, index) => (
                    <Item key={index}>{todo}</Item>
                ))}
            </List>
        </Division>
    )
}
```

## 🎨 Customization

### Adding Styles

Create a CSS file and import it in your main component:

```css
/* src/styles.css */
.todo-app {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}
```

```jsx
// src/App.jsx
import './styles.css'
import { Division, Heading } from 'blazzy-dom'

export default function App() {
    return (
        <Division className="todo-app">
            <Heading level={1}>My App</Heading>
            {/* Your app content */}
        </Division>
    )
}
```

### Adding External Libraries

Install additional dependencies as needed:

```bash
npm install lodash
npm install axios
npm install date-fns
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

### Deploy to Various Platforms

#### Netlify

1. Build your project: `npm run build`
2. Deploy the `dist` folder to Netlify

#### Vercel

1. Connect your GitHub repository
2. Vercel will automatically detect Vite and deploy

#### GitHub Pages

1. Add to `vite.config.js`:
```javascript
export default {
    base: '/your-repo-name/',
    // ... other config
}
```

2. Deploy using GitHub Actions or manual upload

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Blazzy DOM Library](https://www.npmjs.com/package/blazzy-dom)
- [GitHub Repository](https://github.com/hrutavmodha/blazzy-dom)
- [Documentation](https://github.com/hrutavmodha/blazzy-dom#readme)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [GitHub Issues](https://github.com/hrutavmodha/blazzy-dom/issues)
2. Create a new issue with detailed information
3. Join our community discussions

---

Made with ❤️ by [Hrutav Modha](https://github.com/hrutavmodha)
