import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Travel from '@/components/Travel'
import Infoconfirm from '@/components/Infoconfirm'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Travel',
      name: 'Travel',
      component: Travel 
    },
    {
      path: '/',
      name: 'Infoconfirm',
      component: Infoconfirm 
    }
  ]
})
