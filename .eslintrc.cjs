/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended"
  ],
  "env": {
    "vue/setup-compiler-macros": true,
    "browser": true,
    "es2021": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    'no-undef': 'off'
  }
}
