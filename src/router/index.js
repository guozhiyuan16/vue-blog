import Vue from 'vue'
import VueRouter from 'vue-router'

// Layout
import BasicLayout from '@/layouts/BasicLayout';
import ManageBascLayout from '@/views/manage';

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
    path: '/admin',
    name: 'admin',
    component: ManageBascLayout,
    children: [
      {
        path:'',
        component: resolve => require(['@/views/admin/home']),
      },
      {
        path:'manager',
        component: resolve => require(['@/views/admin/manager']),
      },
      {
        path:'add',
        component: resolve => require(['@/views/admin/add']),
      },
      {
        path:'user',
        component: resolve => require(['@/views/admin/user']),
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
