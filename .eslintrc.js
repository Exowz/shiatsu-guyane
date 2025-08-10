module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Enable strict linting for better code quality
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@next/next/no-img-element': 'error',
    'react/no-unescaped-entities': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-empty-object-type': 'error',
    'prefer-const': 'error'
  }
};