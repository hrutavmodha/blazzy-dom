---
id: components
title: Components
sidebar_position: 7
---

Blazzy DOM exposes small functions that return actual DOM nodes. Event props start with `on` (e.g., `onClick`) and are attached as listeners; other props are set as attributes.

## Division

```ts
Division({ children, ...props }): HTMLDivElement
```

- `children`: an element or array of elements appended to the `<div>`
- Events: `onClick`, `onInput`, ...

## Heading

```ts
Heading({ level, children, ...props }): HTMLHeadingElement
```

- `level`: number `1-6`
- `children`: string or number set as `textContent`

## Paragraph

```ts
Paragraph({ children, ...props }): HTMLParagraphElement
```

- `children`: string | number | boolean

## Button

```ts
Button({ children, ...props }): HTMLButtonElement
```

- `children`: string | number

## Input

```ts
Input({ type, ...props }): HTMLInputElement
```

- `type`: `'text' | 'number' | 'file' | 'date' | 'button' | 'email' | 'password'`

## Form

```ts
Form({ children, ...props }): HTMLFormElement
```

- `children`: array of elements appended to the form

## Link

```ts
Link({ href, children, ...props }): HTMLAnchorElement
```

- `href`: string
- `children`: string | number

## List and Item

```ts
List({ ordered = true, children, ...props }): HTMLUListElement | HTMLOListElement
Item({ children, ...props }): HTMLLIElement
```

- `ordered`: `true` --> `<ol>`, `false` --> `<ul>`

## Header and Footer

```ts
Header({ children, ...props }): HTMLElement
Footer({ children, ...props }): HTMLElement
```

- Appends children; sets attributes and event listeners

## Script

```ts
Script({ children: () => any }): HTMLScriptElement
```

- Inlines an IIFE of the provided function

## Alert

```ts
Alert({ children: string }): HTMLDivElement
```

- Renders a dismissible alert using built-in styles

## Confirm

```ts
const ok = await Confirm({ children: 'Are you sure?' })
```

- Returns a `Promise<boolean>` resolved by OK/Cancel

## Prompt

```ts
const value = await Prompt({ children: 'Enter your name' })
```

- Returns a `Promise<string>` with the input value

## Code

```ts
Code({ children: string[] }): HTMLDivElement
```

- Renders a `<pre>` code block with a Copy button and shows `Alert` on success
