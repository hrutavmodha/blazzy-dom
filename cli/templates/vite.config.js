import { defineConfig } from 'vite'
import { jsx } from 'blazzy-dom'
export default defineConfig({
    esbuild: {
        jsxFactory: jsx,
        jsxImportSource: 'blazzy-dom',
        jsxDev: false,
    }
})
