const commonRules = {
  'jsx-a11y/anchor-has-content': 'off',
  'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  'global-require': 'off', // For require (IMAGE_PATH)
  'no-console': 'error',
  'function-paren-newline': 'off', // Too many violations
  'import/named': 2,
  'prefer-destructuring': ['error', {
    array: false,
    object: true,
  }, {
    enforceForRenamedProperties: false,
  }],
  'no-else-return': ['error', { allowElseIf: true }],
  'import/no-cycle': 'warn',
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'no-underscore-dangle': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/destructuring-assignment': 'off',
  'max-classes-per-file': 'off',
  'react/require-default-props': ['error', {
    forbidDefaultForRequired: true,
    ignoreFunctionalComponents: true,
  }],
  'no-nested-ternary': 'off',
  'no-alert': 'off',
};

module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@babel/eslint-parser',
  plugins: [
    'import',
    'jest',
  ],
  env: {
    'jest/globals': true,
  },
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    ...commonRules,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        ...commonRules,
        'class-methods-use-this': 'off',
        'react/require-default-props': ['off'],
        'react/jsx-props-no-spreading': 'off',
        'no-use-before-define': 'off', // https://stackoverflow.com/a/64024916
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/member-delimiter-style': ['error'],
      },
    },
  ],
  settings: { 'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx', 'd.ts'] } } },
  globals: {
    fetch: false,
  },
};
