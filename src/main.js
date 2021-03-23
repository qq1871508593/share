/*
 * @Author: mojianpei
 * @description:
 * @Date: 2020-08-01 16:38:45
 * @LastEditors: mojianpei
 * @LastEditTime: 2020-08-04 14:46:59
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import element from "element-ui";
// import { Button } from "element-ui";

import "element-ui/lib/theme-chalk/index.css";

Vue.use(element);
// Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
