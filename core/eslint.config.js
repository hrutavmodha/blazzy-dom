import js from '@eslint/js'
import ts from 'typescript-eslint'
export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        files: ['./src/**/*.{js,ts,tsx}'],
        rules: {
            semi: ['error', 'never'],
            quotes: ['error', 'single'],
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
]
