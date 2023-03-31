module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],

    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    plugins: ['react', 'prettier', 'flowtype'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': [
            'error',

            {
                // endOfLine: "off",
                // printWidth: 160,
                singleQuote: false,
                endOfLine: 'auto',
                tabWidth: 4,
            },
        ],
    },
};
