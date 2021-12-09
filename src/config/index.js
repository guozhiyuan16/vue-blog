import avatar from '@/assets/images/avatar.jpeg'; // 后面如何修改为配置文件引入

export default {
    // 开发打包默认的两个环境
    baseURL : process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/',
    github : "https://github.com/", // github地址
    juejin : "https://juejin.im/", // juejin地址
}

// project config
export const HEADER_BLOG_NAME = '郭大大的博客' // header title 显示的名字

export const SIDEBAR = {
    avatar, // 头像
    title: '郭大大',
    subTitle: '学而知不足',
    homePages: {
        github : {
            link: 'https://github.com/guozhiyuan16',
        },
        juejin: {
            link: 'https://juejin.cn/'
        }
    }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

// 公告 announcement
export const ANNOUNCEMENT = {
    enable: true, // 是否开启
    content: ""
}
