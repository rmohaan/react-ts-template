module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: [
      'react',
      'react-hooks',
    ],
    rules: {
      'react/prop-types': 'off', // Disable prop-types (if using TypeScript or other validation)
      'react/react-in-jsx-scope': 'off', // No need for React import in JSX files (React 17+)
      'react/jsx-uses-react': 'off', // Disable React import in JSX files (React 17+)
      'no-console': 'warn', // Warn on console.log statements
      'no-unused-vars': 'warn', // Warn on unused variables
      'semi': ['error', 'always'], // Enforce semicolons
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the version of React
      },
    },
  };
  