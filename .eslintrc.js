/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    'next',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
    'turbo'
  ],
  settings: {
    tailwindcss: {
      callees: ['cn']
    }
  },
  rules: {
    // Next
    '@next/next/no-html-link-for-pages': 'off',

    // React
    'react/no-unescaped-entities': 'off',

    // Tailwind
    'tailwindcss/no-custom-classname': 'error',
    'tailwindcss/no-contradicting-classname': 'error'
  }
};

module.exports = config;
