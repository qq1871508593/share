/*
 * @Author: mojianpei
 * @description:
 * @Date: 2020-08-01 16:38:45
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-08-11 18:14:20
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import element from 'element-ui'
import { cloneDeepWith } from 'lodash'
// import VeLine from 'v-charts/lib/line.common'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
Vue.use(element)
Vue.use(VCharts)
// Vue.component('veLine', VeLine);
// Vue.use(Button);

Vue.config.productionTip = false
Vue.prototype.$clone = cloneDeepWith

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
