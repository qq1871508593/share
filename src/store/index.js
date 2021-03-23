/*
 * @Author: mojianpei
 * @description:
 * @Date: 2020-08-03 20:08:53
 * @LastEditors: mojianpei
 * @LastEditTime: 2020-08-03 22:07:33
 */

import vue from "vue";
import vuex from "vuex";

import user from "./modules/user";

vue.use(vuex);

const store = new vuex.Store({
  modules: {
    user,
  },
});

export default store;
