export default [
    {
        path: '',
        component: resolve => require(['@/views/admin/Home'], resolve),
    },
    {
        path: 'article/manager',
        component: resolve => require(['@/views/admin/Manager'], resolve),
    },
    {
        path: 'article/add',
        component: resolve => require(['@/views/admin/Add'], resolve),
    },
    {
        path: 'user',
        component: resolve => require(['@/views/admin/User'], resolve),
    }
]