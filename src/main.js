// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as http from '@/api/http'
// 移动端适配
import 'lib-flexible/flexible.js'
import 'normalize.css/normalize.css' // 去除默认样式

import Cube from 'cube-ui'
Vue.use(Cube)

import progressive from 'progressive-image/dist/vue'; // 渐进式
Vue.use(progressive, {
  removePreview: true,
  scale: true
})
// 解决移动端click事件300毫秒延迟方法
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body)
    },
    false
  )
}

Vue.prototype.$http = http.default

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
