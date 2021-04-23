/*
 * @Author: mojianpei
 * @description: 
 * @Date: 2021-04-14 20:09:06
 * @LastEditors: mojianpei
 * @LastEditTime: 2021-04-23 09:48:23
 */

module.exports = {
    root: false,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        // "semi": ["error", "always"]
        'no-unused-vars': 'off',
        // "vue/no-unused-components": "off",
        // 'no-useless-escape': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
