module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 'error',
    'eqeqeq': 'error',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-useless-escape': 'error',
    'linebreak-style': 0,
    'max-len': [1, 160, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    'comma-spacing': 'error',
    'keyword-spacing': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
