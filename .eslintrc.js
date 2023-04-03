module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        es6: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],

    overrides: [],
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
        ecmaFeatures: {
            classes: true,
            jsx: true
        }
    },
    plugins: ["react", "prettier", "flowtype"],
    rules: {
        "no-console": 1, // Means warning
        "prettier/prettier": 2,
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto"
            }
        ]
        // "prettier/prettier": [
        //   "error",

        //   {
        //     // endOfLine: "off",
        //     printWidth: 160,
        //     singleQuote: false,
        //     endOfLine: "auto",
        //     tabWidth: 4
        //   }
        // ]
    }
};
