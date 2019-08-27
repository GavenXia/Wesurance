import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/Index'
import Travel from 'pages/Travel'
import Infoconfirm from 'pages/Infoconfirm'
import Info from 'pages/Info'
import Transtion from 'pages/Transtion'
import Prompt from 'pages/Prompt'
import MemberData from 'pages/MemberData'
import ConfirmMember from 'pages/ConfirmMember'
import ConfirmOrder from 'pages/ConfirmOrder'
import Payment from 'pages/Payment'
import Pay from 'pages/Pay'
import Complete from 'pages/Complete'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'index',
      component: Index
    },
    {
      path: '/Travel',
      name: 'travel',
      component: Travel
    },
    {
      path: 'Infoconfirm',
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
      path: '/',
      name: 'prompt',
      component: Prompt
      // meta: {
      //   title: 'important notes', //页面标题 为空表示没有标题栏
      //   hasClose: false //是否具有可关闭功能
      // }
    },
    {
      path: '/MemberData',
      name: 'memberData',
      component: MemberData
      // meta: {
      //   title: 'Add Member', //页面标题 为空表示没有标题栏
      //   hasClose: false //是否具有可关闭功能
      // }
    },
    {
      path: '/ConfirmMember',
      name: 'confirmMember',
      component: ConfirmMember
      // meta: {
      //   title: 'Add Member', //页面标题 为空表示没有标题栏
      //   hasClose: false //是否具有可关闭功能
      // }
    },
    {
      path: '/ConfirmOrder',
      name: 'confirmOrder',
      component: ConfirmOrder
      // meta: {
      //   title: 'Your Order', //页面标题 为空表示没有标题栏
      //   hasClose: false //是否具有可关闭功能
      // }
    },
    {
      path: '/Payment',
      name: 'payment',
      component: Payment
      // meta: {
      //   title: 'Payment', //页面标题 为空表示没有标题栏
      //   hasClose: false //是否具有可关闭功能
      // }
    },
    {
      path: '/Pay',
      name: 'pay',
      component: Pay
      // meta: {
      //   title: 'Payment', //页面标题 为空表示没有标题栏
      //   hasClose: false //是否具有可关闭功能
      // }
    },
    {
      path: '/Complete',
      name: 'complete',
      component: Complete
    }
  ]
})
