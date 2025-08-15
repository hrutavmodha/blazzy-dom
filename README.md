# JSX DOM Kit

- This project uses **Vite** as a build tool for its blazing fastness

- A light-weight, framework-agnostic **JSX-renderer** for building component-based UI by **Direct DOM rendering for speed and simplicty**, bringing the power of JSX to vanilla TypeScript and JavaScript - minimal, fast and flexible

## Features

1. Direct DOM manipulation: meant for simplicity

2. Functional JSX components support: _Inspired from **React**'s component-based architecture_

3. Client-side Routing support - Via history API

4. Not only functional JSX components are supported, but it also supports manually calling the DOM functions in vanilla syntax instead of JSX

5. No build-time lock-in - Works with Vite and ESBuild or TypeScript Compiler

## Quick Start

1. Configure JSX support for the project

> You may skip this step if you want to use the kit by calling the raw functions defined, but it is recommended step

- After cloning the repository and moving into the project's root directory, follow the below steps:

- Open `tsconfig.json` file (located at the root of the project)

- Add the below lines if not present already, and if it's there, make sure that those are as follows:

```JSON
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "src/jsx",
    }
}
```

2. Run server

- Run the development server by running the following command in your terminal:

```Bash
npm start
```

3. Start wrangling!

- If you've followed all the steps correctly till here, you will see the App.tsx function's content being rendered on the screen

## Notes

- The implementation of `useState()` function inside `hooks/` folder is made to understand the internal working mechanism of React and I have **not directly copied** the actual source of React's `useState()` function.

- Also, many more hooks which I may implement in future would have the working and syntax similar to React's hooks usage, **but I won't directly copy-paste it!**
