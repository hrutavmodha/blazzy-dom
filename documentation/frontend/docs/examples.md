---
id: examples
title: Examples
sidebar_position: 9
---

## Counter

```jsx
import { 
    createState, 
    updateState, 
    Division,
    Heading, 
    Button
} from 'blazzy-dom'

function Counter() {
    const count = createState('count', 0)
    return (
        <Division>
            <Heading level={1}>Count: {count}</Heading>
            <Button onClick={() => updateState('count', count + 1)}>+</Button>
            <Button onClick={() => updateState('count', count - 1)}>-</Button>
        </Division>
    )
}
```

## Todo List

```jsx
import { 
    createState,
    updateState, 
    Division, 
    Heading, 
    Input, 
    Button, 
    List, 
    Item 
} from 'blazzy-dom'

function TodoApp() {
    const todo = createState('todo', [])
    const input = createState('input', '')
    const addTodo = () => {
        if (input.trim()) {
            updateState('todo', [...todo, input])
            updateState('input', '')
        }
    }

    return (
        <Division>
            <Heading level={1}>Todo App</Heading>
            <Input
                type="text"
                value={input}
                oninput={(e) => updateState(e.target.value)}
                placeholder="Add a todo..."
            />
            <Button onClick={addTodo}>Add Todo</Button>
            <List ordered={false}>
                {todos.map((todo, i) => (
                <Item>{todo}</Item>
                ))}
            </List>
        </Division>
  )
}
```

## Dialogs

```ts
import { Alert, Confirm, Prompt } from 'blazzy-dom'

// By raw function calls:

Alert({ children: 'Saved successfully!' })
const ok = await Confirm({ children: 'Are you sure?' })
const name = await Prompt({ children: 'Your name:' })

// Or, with JSX:

function App() {
    const check = <Confirm>Are you sure?</Confirm>
    check.then((res) => {
        console.log(res)
    }).catch((error) => {
        console.error(error)
    })
    const ask = <Prompt>Your name:</Prompt>
    ask.then((res) => {
        console.log(res)
    }).catch((error) => {
        console.error(error)
    })
    return (
        <Alert>This is an alert</Alert> 
        {check}
        {ask}
    )
}
```