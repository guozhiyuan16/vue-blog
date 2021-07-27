import Vue from 'vue'
import VueRouter from 'vue-router'

// Layout
import BasicLayout from '@/layouts/BasicLayout';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: BasicLayout,
    children: [
      {
        path:'',
        component: resolve => require(['@/views/home/home'],resolve),
        name:'home'
      },
      {
        path:'archives',
        component: resolve => require(['@/views/home/archives'],resolve),
        name:'archives'
      },
      {
        path:'categories',
        component: resolve => require(['@/views/home/categories'],resolve),
        name:'categories'
      },
      {
        path:'about',
        component: resolve => require(['@/views/home/about'],resolve),
        name:'about'
      }
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/manage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
