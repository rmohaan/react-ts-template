module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
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
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
