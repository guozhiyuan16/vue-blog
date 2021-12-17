import Vue from 'vue';
import VueRouter from 'vue-router';
import hooks from './hooks';

// Layout
import BasicLayout from '@/layouts/web/index.vue';
import AdminLayout from '@/layouts/admin/index.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path:'',
        component: resolve => require(['@/views/web/home/index.vue'],resolve),
      },
      {
        path:'archives',
        component: resolve => require(['@/views/web/archives/index.vue'],resolve),
      },
      {
        path:'categories',
        component: resolve => require(['@/views/web/categories/index.vue'],resolve),
      },
      {
        path:'categories/:type',
        component: resolve => require(['@/views/web/archives/index.vue'],resolve),
      },
      {
        path:'about',
        component: resolve => require(['@/views/web/about/index.vue'],resolve),
      },
      {
        path:'article/:articleId',
        component: resolve => require(['@/views/web/article/index.vue'],resolve),
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path:'',
        component: resolve => require(['@/views/admin/home/index.vue'],resolve),
      },
      {
        path:'article/manager',
        component: resolve => require(['@/views/admin/article/manager/index.vue'],resolve),
      },
      {
        path:'article/add',
        component: resolve => require(['@/views/admin/article/edit/index.vue'],resolve),
      },
      {
        path:'user',
        component: resolve => require(['@/views/admin/user/index.vue'],resolve),
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

Object.values(hooks).forEach(hook => {
  router.beforeEach(hook.bind(router)); // 将this绑定成router
})

export default router
