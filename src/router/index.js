import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Travel from '@/components/Travel'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'Travel',
      component: Travel 
    }
  ]
})
