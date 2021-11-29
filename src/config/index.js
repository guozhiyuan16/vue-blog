export default {
    // 开发打包默认的两个环境
    baseURL : process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'
}

console.log(process.env.NODE_ENV)