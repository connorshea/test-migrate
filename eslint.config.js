import react from 'eslint-plugin-react';
import node from 'eslint-plugin-n';

export default [
  {
    plugins: {
      react: react
    },
    rules: {
      'react/no-multi-comp': 'error',
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['subdir/**/*.ts', 'subdir/**/*.tsx'],
    plugins: {
      node: node
    },
    rules: {
      'node/global-require': 'error'
    }
  }
];
