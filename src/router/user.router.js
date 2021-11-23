export default [
    {
        path: '',
        component: resolve => require(['@/views/user/Home'], resolve),
    },
    {
        path: 'archives',
        component: resolve => require(['@/views/user/Archives'], resolve),
    },
    {
        path: 'categories',
        component: resolve => require(['@/views/user/Categories'], resolve),
    },
    {
        path: 'categories/:type',
        component: resolve => require(['@/views/user/Archives'], resolve),
    },
    {
        path: 'about',
        component: resolve => require(['@/views/user/About'], resolve),
    },
    {
        path: 'article/:articleId',
        component: resolve => require(['@/views/user/Article'], resolve),
    }
]