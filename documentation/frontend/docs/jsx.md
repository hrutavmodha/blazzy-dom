---
id: jsx-setup
title: JSX Setup
sidebar_position: 3
---

To use JSX with Blazzy DOM, point the JSX runtime to `blazzy-dom/jsx`.

A template-wise breakdown is given below. Refer to your template's configurations as guided below for smoothly using the library.

## TypeScript

- Make sure: 

1. Your `tsconfig.json` has these options:

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "blazzy-dom/jsx"
  	}
}
```

And, 

2. Your `vite.config.js` has these options:

```js
esbuild: {
  	jsxImportSource: 'blazzy-dom/jsx',
  	jsxDev: false,
}
```

3. Your `src/vite-env.d.ts` has these options:

```ts
/// <reference types="vite/client" />
declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}
```

This is not mandatory for smoothly transpiling the JSX, but is for let allow importing the CSS files and stylings in the component files

## JavaScript

If you chose JavaScript template, make sure that `vite.config.js` has:

```js
esbuild: {
  	jsx: 'automatic',
  	jsxImportSource: 'blazzy-dom/jsx',
  	jsxDev: false,
}
```

If you're facing the issue yet even after making sure that your configurations matches the configurations provided above, please kindly raise the issue [here](https://github.com/hrutavmodha/blazzy-dom) and describe that what is the issue you are facing.