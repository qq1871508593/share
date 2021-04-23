/*
 * @Author: mojianpei
 * @description:
 * @Date: 2020-08-01 16:38:45
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-04-23 10:36:33
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import element from "element-ui";
import { cloneDeepWith } from 'lodash'

import "element-ui/lib/theme-chalk/index.css";

Vue.use(element);
// Vue.use(Button);

Vue.config.productionTip = false;
Vue.prototype.$clone = cloneDeepWith

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
