/*
 * @Author: 莫靓仔
 * @description: 
 * @Date: 2020-12-24 15:57:58
 * @LastEditors: mojianpei
 * @LastEditTime: 2021-04-14 20:10:12
 */
/**
 * @Description: eslint配置文件
 * @Date: 2020-04-01 16:22:42
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2020-04-02 09:31:51
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
