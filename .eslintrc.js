module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // tsconfigRootDir: __dirname,
    // project: ['./tsconfig.json'],
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 'off',
  },
  env: {
    browser: true,
    es2020: true,
  },
};
