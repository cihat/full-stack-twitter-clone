module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/base'
    // "plugin:vue/recommended"
    // "plugin:vue/essential",
    // "plugin:vue/strongly-recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
