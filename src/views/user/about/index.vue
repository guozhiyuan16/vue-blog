<template>
  <div class="app-about">
    <MyInfo />
    <Discuss :list="this.detail.comments"/>
  </div>
</template>

<script>
import MyInfo from './MyInfo.vue';
import Discuss from "@/components/Discuss/Discuss.vue";
export default {
  components: {
    MyInfo,
    Discuss
  },
  data() {
    return {
      detail: {},
    };
  },
  created() {
    this.getArticleDetail();
  },
  methods: {
    getArticleDetail() {
      this.detail = {
        createdAt: "2021-08-08 15:59:54",
        updatedAt: "2021-11-22 13:30:32",
        id: 168,
        title: "react脚手架配置代理",
        content:
          "# react脚手架配置代理总结\r\n\r\n\r\n\r\n## 方法一\r\n\r\n> 在package.json中追加如下配置\r\n\r\n```json\r\n\"proxy\":\"http://localhost:5000\"\r\n```\r\n\r\n说明：\r\n\r\n1. 优点：配置简单，前端请求资源时可以不加任何前缀。\r\n2. 缺点：不能配置多个代理。\r\n3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）\r\n\r\n\r\n\r\n## 方法二\r\n\r\n1. 第一步：创建代理配置文件\r\n\r\n   ```\r\n   在src下创建配置文件：src/setupProxy.js\r\n   ```\r\n\r\n2. 编写setupProxy.js配置具体代理规则：\r\n\r\n   ```js\r\n   const proxy = require('http-proxy-middleware')\r\n   \r\n   module.exports = function(app) {\r\n     app.use(\r\n       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)\r\n         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)\r\n         changeOrigin: true, //控制服务器接收到的请求头中host字段的值\r\n         /*\r\n         \tchangeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000\r\n         \tchangeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000\r\n         \tchangeOrigin默认值为false，但我们一般将changeOrigin值设为true\r\n         */\r\n         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)\r\n       }),\r\n       proxy('/api2', { \r\n         target: 'http://localhost:5001',\r\n         changeOrigin: true,\r\n         pathRewrite: {'^/api2': ''}\r\n       })\r\n     )\r\n   }\r\n   ```\r\n\r\n说明：\r\n\r\n1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。\r\n2. 缺点：配置繁琐，前端请求资源时必须加前缀。",
        viewCount: 206,
        tags: [{ name: "react" }],
        categories: [{ name: "react" }],
        comments: [
          {
            createdAt: "2021-10-13 15:17:25",
            id: 248,
            content: "的等待",
            replies: [
              {
                createdAt: "2021-11-20 22:52:40",
                id: 133,
                content: "1212",
                user: {
                  createdAt: "2020-02-04 10:22:10",
                  id: 47529556,
                  username: "admin",
                  email: "test@qq.com",
                  notice: true,
                  role: 1,
                  github: null,
                  disabledDiscuss: false,
                },
              },
              {
                createdAt: "2021-11-20 22:52:43",
                id: 134,
                content: "1212",
                user: {
                  createdAt: "2020-02-04 10:22:10",
                  id: 47529556,
                  username: "admin",
                  email: "test@qq.com",
                  notice: true,
                  role: 1,
                  github: null,
                  disabledDiscuss: false,
                },
              },
              {
                createdAt: "2021-11-20 22:52:46",
                id: 135,
                content: "1212",
                user: {
                  createdAt: "2020-02-04 10:22:10",
                  id: 47529556,
                  username: "admin",
                  email: "test@qq.com",
                  notice: true,
                  role: 1,
                  github: null,
                  disabledDiscuss: false,
                },
              },
              {
                createdAt: "2021-11-22 13:29:02",
                id: 137,
                content: "O(∩_∩)O哈哈~",
                user: {
                  createdAt: "2021-08-10 17:38:02",
                  id: 68802511,
                  username: "1111",
                  email: "1051977875@qq.com",
                  notice: true,
                  role: 2,
                  github: null,
                  disabledDiscuss: false,
                },
              },
            ],
            user: {
              createdAt: "2020-02-04 10:22:10",
              id: 47529556,
              username: "admin",
              email: "test@qq.com",
              notice: true,
              role: 1,
              github: null,
              disabledDiscuss: false,
            },
          },
          {
            createdAt: "2021-10-13 15:17:16",
            id: 247,
            content: "点都德",
            replies: [
              {
                createdAt: "2021-11-22 13:29:11",
                id: 138,
                content: "哈哈",
                user: {
                  createdAt: "2021-08-10 17:38:02",
                  id: 68802511,
                  username: "1111",
                  email: "1051977875@qq.com",
                  notice: true,
                  role: 2,
                  github: null,
                  disabledDiscuss: false,
                },
              },
            ],
            user: {
              createdAt: "2020-02-04 10:22:10",
              id: 47529556,
              username: "admin",
              email: "test@qq.com",
              notice: true,
              role: 1,
              github: null,
              disabledDiscuss: false,
            },
          },
          {
            createdAt: "2021-10-04 23:13:03",
            id: 246,
            content: "312312",
            replies: [],
            user: {
              createdAt: "2020-02-04 10:22:10",
              id: 47529556,
              username: "admin",
              email: "test@qq.com",
              notice: true,
              role: 1,
              github: null,
              disabledDiscuss: false,
            },
          },
          {
            createdAt: "2021-10-04 23:13:02",
            id: 245,
            content: "31231",
            replies: [],
            user: {
              createdAt: "2020-02-04 10:22:10",
              id: 47529556,
              username: "admin",
              email: "test@qq.com",
              notice: true,
              role: 1,
              github: null,
              disabledDiscuss: false,
            },
          },
          {
            createdAt: "2021-10-04 23:13:01",
            id: 244,
            content: "412412",
            replies: [],
            user: {
              createdAt: "2020-02-04 10:22:10",
              id: 47529556,
              username: "admin",
              email: "test@qq.com",
              notice: true,
              role: 1,
              github: null,
              disabledDiscuss: false,
            },
          },
          {
            createdAt: "2021-10-04 23:13:00",
            id: 243,
            content: "312312",
            replies: [],
            user: {
              createdAt: "2020-02-04 10:22:10",
              id: 47529556,
              username: "admin",
              email: "test@qq.com",
              notice: true,
              role: 1,
              github: null,
              disabledDiscuss: false,
            },
          },
          {
            createdAt: "2021-10-04 23:12:57",
            id: 242,
            content: "555",
            replies: [],
            user: {
              createdAt: "2020-02-04 10:22:10",
              id: 47529556,
              username: "admin",
              email: "test@qq.com",
              notice: true,
              role: 1,
              github: null,
              disabledDiscuss: false,
            },
          },
          {
            createdAt: "2021-10-04 23:12:56",
            id: 241,
            content: "333",
            replies: [],
            user: {
              createdAt: "2020-02-04 10:22:10",
              id: 47529556,
              username: "admin",
              email: "test@qq.com",
              notice: true,
              role: 1,
              github: null,
              disabledDiscuss: false,
            },
          },
          {
            createdAt: "2021-10-04 23:12:55",
            id: 240,
            content: "111",
            replies: [],
            user: {
              createdAt: "2020-02-04 10:22:10",
              id: 47529556,
              username: "admin",
              email: "test@qq.com",
              notice: true,
              role: 1,
              github: null,
              disabledDiscuss: false,
            },
          },
          {
            createdAt: "2021-10-04 23:12:53",
            id: 239,
            content: "321",
            replies: [],
            user: {
              createdAt: "2020-02-04 10:22:10",
              id: 47529556,
              username: "admin",
              email: "test@qq.com",
              notice: true,
              role: 1,
              github: null,
              disabledDiscuss: false,
            },
          },
          {
            createdAt: "2021-09-27 13:38:59",
            id: 238,
            content: "123",
            replies: [],
            user: {
              createdAt: "2020-02-04 10:22:10",
              id: 47529556,
              username: "admin",
              email: "test@qq.com",
              notice: true,
              role: 1,
              github: null,
              disabledDiscuss: false,
            },
          },
        ],
      };
    },
  },
};
</script>
