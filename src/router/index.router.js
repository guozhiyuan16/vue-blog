export default [
    {
        path: '/',
        component: () => import(/*webpackChunkName:'homeLayout'*/'@/layouts/BasicLayout.vue'), // 异步组件，通过jsonp实现代码分割
    },
    {
        path: '/admin',
        component: () => import(/*webpackChunkName:'adminLayout'*/'@/layouts/AdminLayout.vue'), // 异步组件，通过jsonp实现代码分割
    },
    {
        path: '*',
        component: () => import(/*webpackChunkName:'404'*/'@/views/404.vue'), // 异步组件，通过jsonp实现代码分割
    }
]