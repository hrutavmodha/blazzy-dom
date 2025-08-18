import { defineConfig } from 'vite'
export default defineConfig({
    esbuild: {
        jsxImportSource: 'blazzy-dom/jsx',
        jsxDev: false,
    }
})
