import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
    root: 'src',
    build: {
        outDir: resolve(__dirname, 'dist'),
        lib: {
            entry: resolve(__dirname, 'src', 'index.ts'),
            name: 'BlazzyDOM',
            formats: [
                'es',
                'cjs'
            ],
            fileName: (format) => {
                `blazzy-dom.${format}.js`
            }
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        },
        emptyOutDir: true
    },
    esbuild: {
        jsxImportSource: 'jsx',
        jsxDev: false,
    },
    resolve: {
        alias: {
            jsx: resolve(__dirname, 'src', 'jsx'),
        },
    },
})
