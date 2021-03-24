/*
 * @Author: 莫靓仔
 * @description: 
 * @Date: 2021-03-24 12:50:39
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-03-24 12:50:56
 */
module.exports = {
    root: false,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
