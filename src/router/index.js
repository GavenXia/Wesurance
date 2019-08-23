import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/Index'
import Travel from 'pages/Travel'
import Infoconfirm from 'pages/Infoconfirm'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel
    },
    {
      path: '/',
      name: 'infoconfirm',
      component: Infoconfirm
    }
  ]
})
