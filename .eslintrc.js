module.exports = {
  parser: 'babel-eslint',
  // This file should define what the new @thrillworksinc/eslint-config-thrillworks should be
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  globals: {
    window: true,
    document: true,
  },
  ignorePatterns: ['node_modules', '.cache', 'public', 'storybook-static'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'import/extensions': 0,
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
