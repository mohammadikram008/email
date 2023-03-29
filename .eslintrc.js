module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],

  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    'flowtype',
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      }
    ]
  }
}