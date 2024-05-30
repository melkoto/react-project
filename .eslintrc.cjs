module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'simple-import-sort'],
    rules: {
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
            },
        ],
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'react/react-in-jsx-scope': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            rules: {
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            // Импорты из 'react' и других библиотек
                            ['^react', '^@?\\w'],
                            // Импорты из ваших алиасов и компонентов
                            ['^(@|components)(/.*|$)'],
                            // Импорты с абсолютными путями (например, из виртуальных модулей)
                            ['^\\u0000'],
                            // Импорты из родительских директорий
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                            // Импорты из текущей директории
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                            // Импорты файлов стилей (CSS)
                            ['^.+\\.?(css)$'],
                        ],
                    },
                ],
            },
        },
    ],
}
