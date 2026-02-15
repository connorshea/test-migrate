import react from 'eslint-plugin-react';
import node from 'eslint-plugin-n';
import typescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    plugins: {
      react: react,
      '@typescript-eslint': typescript
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    rules: {
      'react/no-multi-comp': 'error',
      '@typescript-eslint/no-inferrable-types': 'error'
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
]);
