module.exports = {
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
  },
  env: {
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['rxjs'],
      extends: ['plugin:rxjs/recommended'],
      rules: {
        'rxjs/no-compat': 'error',
        'rxjs/no-connectable': 'error',
        'rxjs/no-cyclic-action': 'error',
        'rxjs/no-ignored-observable': 'error',
        'rxjs/no-topromise': 'error',
        'rxjs/no-unsafe-catch': 'error',
        'rxjs/no-unsafe-first': 'error',
        'rxjs/no-unsafe-switchmap': 'error',
        'rxjs/throw-error': 'error',
      },
    },
  ],
};
