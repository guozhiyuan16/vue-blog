import Vue from 'vue'
import VueRouter from 'vue-router'

// Layout
import BasicLayout from '@/layouts/web/index.vue';
import AdminLayout from '@/layouts/AdminLayout';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path:'',
        component: resolve => require(['@/views/user/home/index.vue'],resolve),
      },
      {
        path:'archives',
        component: resolve => require(['@/views/user/archives/index.vue'],resolve),
      },
      {
        path:'categories',
        component: resolve => require(['@/views/user/categories/index.vue'],resolve),
      },
      {
        path:'categories/:type',
        component: resolve => require(['@/views/user/archives/index.vue'],resolve),
      },
      {
        path:'about',
        component: resolve => require(['@/views/user/about/index.vue'],resolve),
      },
      {
        path:'article/:articleId',
        component: resolve => require(['@/views/user/article/index.vue'],resolve),
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path:'',
        component: resolve => require(['@/views/admin/Home'],resolve),
      },
      {
        path:'article/manager',
        component: resolve => require(['@/views/admin/Manager'],resolve),
      },
      {
        path:'article/add',
        component: resolve => require(['@/views/admin/Add'],resolve),
      },
      {
        path:'user',
        component: resolve => require(['@/views/admin/User'],resolve),
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
