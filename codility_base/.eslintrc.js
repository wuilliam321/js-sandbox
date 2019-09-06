// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    es6: true
  },
  globals: {
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ["airbnb-base", "plugin:jest/recommended"],
  plugins: [
    'jest'
  ],
  // custom rules
  rules: {
    'linebreak-style': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    'no-param-reassign': ['error', {
      props: false,
    }],
    'max-len': ['error', { 'code': 100 }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true
      }
    ]
  },
  overrides: [
    Object.assign(
      {
        files: [ '**/*.spec.js' ],
        env: { jest: true },
        plugins: [ 'jest' ],
      },
      require('eslint-plugin-jest').configs.recommended
    )
  ]
};
