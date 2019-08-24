import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/Index'
import Travel from 'pages/Travel'
import Infoconfirm from 'pages/Infoconfirm'
import Info from 'pages/Info'
import Transtion from 'pages/Transtion'
import Prompt from 'pages/Prompt'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Travel',
      name: 'travel',
      component: Travel
    },
    {
      path: '/Infoconfirm',
      name: 'infoconfirm',
      component: Infoconfirm
    },
    {
      path: '/Info',
      name: 'info',
      component: Info
    },
    {
      path: '/Transtion',
      name: 'transtion',
      component: Transtion
    },
    {
      path: '/Prompt',
      name: 'prompt',
      component: Prompt
    }
  ]
})
