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
      },
      {
        path:'archives',
        component: resolve => require(['@/views/home/archives'],resolve),
      },
      {
        path:'categories',
        component: resolve => require(['@/views/home/categories'],resolve),
      },
      {
        path:'categories/:type',
        component: resolve => require(['@/views/home/archives'],resolve),
      },
      {
        path:'about',
        component: resolve => require(['@/views/home/about'],resolve),
      },
      {
        path:'article/:articleId',
        component: resolve => require(['@/views/home/article'],resolve),
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

// 入口文件
// const files = require.context('./',false,/\.router.js/); // webpack语法，像前端的读写文件,返回的是一个方法，方法执行得到所有文件组成的数组
// const routes = [];
// files.keys().forEach(fileName => {
//   // files(fileName) 返回当前模块
//   routes.push(...files(fileName).default)
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
