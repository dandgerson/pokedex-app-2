const disableA11y = () =>
  Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce(
    (acc, current) => ({
      ...acc,
      [`jsx-a11y/${current}`]: 'off',
    }),
    {},
  )

module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'react-app', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    ...disableA11y(),
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'warn',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', '.ts', '.js'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
}
