// https://docs.expo.dev/guides/using-eslint/
// @ts-nocheck
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');



module.exports = defineConfig([
    expoConfig,
    {
        ignores: ['dist/*', 'eslint.config.js', 'android/**/*', 'ios/**/*', 'node_modules/**/*'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
                ecmaFeatures: {
                    jsx: true, // ✅ Enables React rules on .ts files
                },
            },
        },
        plugins: {
            prettier: prettierPlugin,
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            "func-style": ["error", "expression", { "allowArrowFunctions": true }],
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "variable",
                    format: ["camelCase"],
                    leadingUnderscore: "allow"
                },
                {
                    selector: "variable",
                    modifiers: ['const'],
                    format: ["camelCase", "UPPER_CASE"],
                    leadingUnderscore: "allow"
                },
                {
                    selector: 'variable',
                    types: ['function'],
                    modifiers: ['const'],
                    format: ['camelCase', 'PascalCase'],
                },

                {
                    selector: "typeLike",
                    format: ["PascalCase"]
                },
                {
                    selector: "variable",
                    types: ["boolean"],
                    format: ["PascalCase"],
                    prefix: ["is", "has", "can"]
                }
            ],
            'prettier/prettier': ['error'],
            indent: ['error', 4, { SwitchCase: 1 }],
            'no-console': 'warn',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'react/jsx-pascal-case': 'error',
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },

            ],

            // Import rules
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
            "import/no-unresolved": "error",
            "import/order": [
                "error",
                {
                    "groups": [["builtin", "external"], "internal"],
                    "alphabetize": {
                        "order": "asc",
                        "caseInsensitive": true
                    }
                }
            ]
        }
    },
]);
