module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'jest', 'prettier', 'react', 'eslint-plugin-no-inline-styles'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'no-inline-styles/no-inline-styles': 'error',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'react/jsx-uses-react': 'off', // react 17+ doesn't need react imports
    'react/react-in-jsx-scope': 'off', // react 17+ doesn't need react imports
    'eol-last': ['error', 'always'],
    'import/named': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'jest/no-disabled-tests': 'error',
    'react/jsx-no-bind': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          { pattern: './**', group: 'sibling' },
        ],
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  overrides: [
    {
      files: ['*.stories.tsx', 'src/app/**/**.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  ignorePatterns: ["file-to-exclude.js"],
};

