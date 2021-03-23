/*
 * @Author: mojianpei
 * @description:
 * @Date: 2020-08-03 19:22:03
 * @LastEditors: mojianpei
 * @LastEditTime: 2021-03-16 20:45:41
 */

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('v', resolve('src/views'))
      .set('cmt', resolve('src/components'))
      .set('rt', resolve('src/router'))
  }
};