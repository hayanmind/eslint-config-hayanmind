module.exports = {
  env: {
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    './react.js',
  ],
  rules: {
    /* Please add only required rules for nextjs */
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
  },
};
