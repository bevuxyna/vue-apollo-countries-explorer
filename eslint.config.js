import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
    js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        files: ['**/*.vue', '**/*.ts', '**/*.js'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2021,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            prettier: prettierPlugin,
            'no-restricted-dynamic-imports': noRestrictedDynamicImportsPlugin,
            '@typescript-eslint': ts,
        },
        rules: {
            'prettier/prettier': 'warn',
            // Отключаем правила форматирования, которые конфликтуют с Prettier
            'vue/html-indent': 'off',
            'vue/max-attributes-per-line': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            // ****************************************************

            'vue/no-v-html': 'off',
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always', // <img />, <br />, <input /> - всегда самозакрывающиеся
                        normal: 'never', // Обычные теги (div, span) самозакрывающиеся, если пустые
                        component: 'always', // Компоненты Vue всегда самозакрывающиеся
                    },
                    svg: 'always',
                    math: 'always',
                },
            ],
            'vue/component-name-in-template-casing': [
                'error',
                'PascalCase',
                {
                    registeredComponentsOnly: false,
                    ignores: [],
                },
            ],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'typeAlias',
                    format: ['PascalCase'],
                    prefix: ['I'],
                },
            ],
            curly: 'error',
            eqeqeq: ['error', 'always'],
        },
    },
    {
        ignores: ['dist', 'node_modules', '*.config.js', '*.config.ts'],
    },
]