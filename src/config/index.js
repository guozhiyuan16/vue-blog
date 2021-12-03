export default {
    // 开发打包默认的两个环境
    baseURL : process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/',
    github : "https://github.com/", // github地址
    juejin : "https://juejin.im/", // juejin地址
}

// project config
export const HEADER_BLOG_NAME = '郭大大的博客' // header title 显示的名字

export const SIDEBAR = {
    // avatar : require('../assets/images/avatar.jpg'),
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
console.log(process.env.NODE_ENV)