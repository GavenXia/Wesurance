import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/Index'
import Travel from 'pages/Travel'
import TravelInfo from 'pages/TravelInfo'
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
import CoverageDetails from 'pages/CoverageDetails'




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
      path: '/TravelInfo',
      name: 'travelInfo',
      component: TravelInfo
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
    },
    {
      path: '/MemberData',
      name: 'memberData',
      component: MemberData
    },
    {
      path: '/ConfirmMember',
      name: 'confirmMember',
      component: ConfirmMember
    },
    {
      path: '/ConfirmOrder',
      name: 'confirmOrder',
      component: ConfirmOrder
    },
    {
      path: '/Payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/Pay',
      name: 'pay',
      component: Pay
    },
    {
      path: '/Complete',
      name: 'complete',
      component: Complete
    },
    {
      path: '/CoverageDetails',
      name: 'coverageDetails',
      component: CoverageDetails
    }
  ]
})
