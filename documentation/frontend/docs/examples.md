---
id: examples
title: Examples
sidebar_position: 9
---

## Counter

```jsx
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

## Todo List

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

  return (
    <Division>
      <Heading level={1}>Todo App</Heading>
      <Input
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <Button onClick={addTodo}>Add Todo</Button>
      <List ordered={false}>
        {todos.map((todo, i) => (
          <Item key={i}>{todo}</Item>
        ))}
      </List>
    </Division>
  )
}
```

## Dialogs

```ts
import { Alert, Confirm, Prompt } from 'blazzy-dom'

Alert({ children: 'Saved successfully!' })
const ok = await Confirm({ children: 'Are you sure?' })
const name = await Prompt({ children: 'Your name:' })
```
