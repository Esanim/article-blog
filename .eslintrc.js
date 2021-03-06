module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ["plugin:prettier/recommended", "plugin:vue/recommended"],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // vuejs
    'prettier/prettier': 'error',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 2,
        multiline: {
          max: 10,
          allowFirstLine: true
        }
      }
    ]
  }
}
