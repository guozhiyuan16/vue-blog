import Vue from 'vue'
import VueRouter from 'vue-router'

// Layout
import BasicLayout from '@/layouts/BasicLayout';
import AdminLayout from '@/layouts/AdminLayout';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path:'',
        component: resolve => require(['@/views/home/home'],resolve),
        // name:'home'
      },
      {
        path:'archives',
        component: resolve => require(['@/views/home/archives'],resolve),
        // name:'archives'
      },
      {
        path:'categories',
        component: resolve => require(['@/views/home/categories'],resolve),
        // name:'categories'
      },
      {
        path:'about',
        component: resolve => require(['@/views/home/about'],resolve),
        // name:'about'
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path:'',
        component: resolve => require(['@/views/admin/home'],resolve),
      },
      {
        path:'article/manager',
        component: resolve => require(['@/views/admin/manager'],resolve),
      },
      {
        path:'article/add',
        component: resolve => require(['@/views/admin/add'],resolve),
      },
      {
        path:'user',
        component: resolve => require(['@/views/admin/user'],resolve),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
