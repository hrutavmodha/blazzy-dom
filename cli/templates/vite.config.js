import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
    esbuild: {
        jsxImportSource: 'jsx',
        jsxDev: false,
    },
    resolve: {
        alias: {
            'jsx': resolve(__dirname, 'src', 'jsx'),
        },
    },
})
