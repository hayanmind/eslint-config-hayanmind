module.exports = {
  root: true,
  extends: [
    './index.js',
    'plugin:react-native/all',
  ],
  plugins: [
    'react-native',
  ],
  env: {
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-native/sort-styles': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
  },
};
