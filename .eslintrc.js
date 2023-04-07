module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1 }],
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
