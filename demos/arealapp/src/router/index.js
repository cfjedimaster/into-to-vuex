import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/shippingaddress',
    name: 'ShippingAddress',
    component: () => import(/* webpackChunkName: "ShippingAddress" */ '../views/ShippingAddress.vue')
  },
  {
    path: '/billingaddress',
    name: 'BillingAddress',
    component: () => import(/* webpackChunkName: "BillingAddress" */ '../views/BillingAddress.vue')
  },
  {
    path: '/ccinfo',
    name: 'CCInfo',
    component: () => import(/* webpackChunkName: "CCInfo" */ '../views/CCInfo.vue')
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import(/* webpackChunkName: "Confirm" */ '../views/Confirm.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
