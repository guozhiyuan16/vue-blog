<template>
  <div class="app-archives">
    <a-timeline>
      <a-timeline-item>
        <span class="desc">
          Nice! {{ articles.count }} posts in total. Keep on posting.
        </span>
        <br />
        <br />  
      </a-timeline-item>
      <template v-for="(y, i) in articles.rows">
        <a-timeline-item color="red" :key="i">
          <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px" />
          <div class="year">{{ y[0]['createdAt'].slice(0,4) }}...</div>
          <br />
        </a-timeline-item>
        <a-timeline-item v-for="(item, index) in y" :key="index">
          <span :style="{ fontSize: '13px', marginRight: '16px' }">
            {{ item.createdAt.slice(5, 10) }}
          </span>
          <router-link :to="`/article/${item.id}`">
            {{ item.title }}
          </router-link>
        </a-timeline-item>
      </template>
    </a-timeline>
  </div>
</template>
<script>
import { groupBy } from "@/utils";
export default {
  data() {
    return {
      articles: {},
    };
  },
  created() {
    this.getArticles();
    console.log(this.$route.params.type);
  },
  methods: {
    getArticles() {
      const data = {
        count: 11,
        rows: [
          {
            createdAt: "2020-11-14 14:39:48",
            updatedAt: "2020-11-15 14:25:29",
            id: 182,
            title: "response.txt",
            content: "OK",
            viewCount: 1,
            tags: [],
            categories: [],
            comments: [],
          },
          {
            createdAt: "2021-11-14 14:39:48",
            updatedAt: "2021-11-15 14:25:29",
            id: 182,
            title: "response.txt",
            content: "OK",
            viewCount: 1,
            tags: [],
            categories: [],
            comments: [],
          },
          {
            createdAt: "2021-11-14 14:39:05",
            updatedAt: "2021-11-14 15:17:16",
            id: 181,
            title: "ghf",
            content: "123444",
            viewCount: 2,
            tags: [{ name: "react" }],
            categories: [{ name: "react" }],
            comments: [
              { id: 257, replies: [] },
              { id: 258, replies: [] },
            ],
          },
          {
            createdAt: "2021-11-12 22:59:28",
            updatedAt: "2021-11-15 14:24:57",
            id: 180,
            title: "杀手锏",
            content:
              "`HTTPS 所有加密算法`，`chromium 进程 IPC 原理`，`斐波拉契第 n 数的 logn 解法`，`浏览器渲染过程`，`vue 编译器架构`，`vue 双向绑定`，`快排以及手写 V8 排序`......",
            viewCount: 4,
            tags: [],
            categories: [],
            comments: [],
          },
          {
            createdAt: "2021-10-18 13:46:40",
            updatedAt: "2021-11-15 14:25:18",
            id: 178,
            title: "吃饭睡觉打豆豆",
            content:
              "吃饭睡觉打豆豆 吃饭睡觉打豆豆 吃饭睡觉打豆豆吃饭睡觉打豆豆吃饭睡觉打豆豆吃饭睡觉打豆豆吃饭睡觉打豆豆吃饭睡觉打豆豆吃饭睡觉打豆豆",
            viewCount: 48,
            tags: [{ name: "吃饭睡觉打豆豆" }],
            categories: [{ name: "react" }],
            comments: [
              { id: 250, replies: [] },
              { id: 251, replies: [] },
              { id: 252, replies: [] },
            ],
          },
          {
            createdAt: "2021-10-15 14:57:11",
            updatedAt: "2021-11-13 17:27:42",
            id: 177,
            title: "alifafa",
            content:
              "中国粉丝但是颠三倒四随时随地是的是\n> let a=110\n* > function(){\n> }\n> \n* sd sds ds sd sd \n**sdsds dsds \n*** dsds ds \n*** function(){}\n# 在src下创建配置文件：src/setupProxy.js",
            viewCount: 39,
            tags: [{ name: "react" }],
            categories: [{ name: "react" }],
            comments: [
              { id: 255, replies: [] },
              { id: 256, replies: [] },
            ],
          },
          {
            createdAt: "2021-10-13 15:53:39",
            updatedAt: "2021-11-12 17:00:13",
            id: 171,
            title: "asdasd",
            content: "sad",
            viewCount: 10,
            tags: [{ name: "react" }],
            categories: [{ name: "react" }],
            comments: [],
          },
          {
            createdAt: "2021-10-13 15:33:27",
            updatedAt: "2021-10-21 14:47:59",
            id: 170,
            title: "测试1",
            content: "ccc",
            viewCount: 16,
            tags: [{ name: "JavaScript" }, { name: "Node" }],
            categories: [{ name: "Koa" }, { name: "Node" }],
            comments: [{ id: 249, replies: [] }],
          },
          {
            createdAt: "2021-08-13 17:49:42",
            updatedAt: "2021-11-15 00:07:39",
            id: 169,
            title: "风格化",
            content: "规范化",
            viewCount: 80,
            tags: [{ name: "react" }, { name: "JavaScript" }],
            categories: [{ name: "react" }],
            comments: [{ id: 237, replies: [{ id: 132 }] }],
          },
          {
            createdAt: "2021-08-08 15:59:54",
            updatedAt: "2021-11-12 16:20:08",
            id: 168,
            title: "react脚手架配置代理",
            content:
              "# react脚手架配置代理总结\r\n\r\n\r\n\r\n## 方法一\r\n\r\n> 在package.json中追加如下配置\r\n\r\n```json\r\n\"proxy\":\"http://localhost:5000\"\r\n```\r\n\r\n说明：\r\n\r\n1. 优点：配置简单，前端请求资源时可以不加任何前缀。\r\n2. 缺点：不能配置多个代理。\r\n3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）\r\n\r\n\r\n\r\n## 方法二\r\n\r\n1. 第一步：创建代理配置文件\r\n\r\n   ```\r\n   在src下创建配置文件：src/setupProxy.js\r\n   ```\r\n\r\n2. 编写setupProxy.js配置具体代理规则：\r\n\r\n   ```js\r\n   const proxy = require('http-proxy-middleware')\r\n   \r\n   module.exports = function(app) {\r\n     app.use(\r\n       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)\r\n         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)\r\n         changeOrigin: true, //控制服务器接收到的请求头中host字段的值\r\n         /*\r\n         \tchangeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000\r\n         \tchangeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000\r\n         \tchangeOrigin默认值为false，但我们一般将changeOrigin值设为true\r\n         */\r\n         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)\r\n       }),\r\n       proxy('/api2', { \r\n         target: 'http://localhos",
            viewCount: 189,
            tags: [{ name: "react" }],
            categories: [{ name: "react" }],
            comments: [
              { id: 244, replies: [] },
              { id: 245, replies: [] },
              { id: 238, replies: [] },
              { id: 246, replies: [] },
              { id: 239, replies: [] },
              { id: 247, replies: [] },
              { id: 240, replies: [] },
              { id: 248, replies: [] },
              { id: 241, replies: [] },
              { id: 242, replies: [] },
              { id: 243, replies: [] },
            ],
          },
          {
            createdAt: "2021-08-04 16:02:24",
            updatedAt: "2021-11-15 13:36:12",
            id: 167,
            title: "README",
            content:
              "## 1.求和案例_redux精简版\r\n\t\t(1).去除Count组件自身的状态\r\n\t\t(2).src下建立:\r\n\t\t\t\t\t\t-redux\r\n\t\t\t\t\t\t\t-store.js\r\n\t\t\t\t\t\t\t-count_reducer.js\r\n\r\n\t\t(3).store.js：\r\n\t\t\t\t\t1).引入redux中的createStore函数，创建一个store\r\n\t\t\t\t\t2).createStore调用时要传入一个为其服务的reducer\r\n\t\t\t\t\t3).记得暴露store对象\r\n\r\n\t\t(4).count_reducer.js：\r\n\t\t\t\t\t1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态\r\n\t\t\t\t\t2).reducer有两个作用：初始化状态，加工状态\r\n\t\t\t\t\t3).reducer被第一次调用时，是store自动触发的，\r\n\t\t\t\t\t\t\t\t\t传递的preState是undefined,\r\n\t\t\t\t\t\t\t\t\t传递的action是:{type:'@@REDUX/INIT_a.2.b.4}\r\n\r\n\t\t(5).在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>\r\n\t\t\t\t备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。\r\n\r\n\r\n## 2.求和案例_redux完整版\r\n\t\t新增文件：\r\n\t\t\t1.count_action.js 专门用于创建action对象\r\n\t\t\t2.constant.js 放置容易写错的type值\r\n\r\n\r\n\r\n## 3.求和案例_redux异步action版\r\n\t\t (1).明确：延迟的动作不想交给组件自身，想交给action\r\n\t\t (2).何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。\r\n\t\t (3).具体编码：\r\n\t\t \t\t\t1).yarn add redux-thunk，并配置在store中\r\n\t\t \t\t\t2).创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。\r\n\t\t \t\t\t3).异步任务有结果后，分发一个同步的action去真正操作数据。\r\n\t\t (4).备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。\r\n\r\n\r\n\r\n\r\n\r\n## 4.求",
            viewCount: 110,
            tags: [{ name: "react" }],
            categories: [{ name: "react" }],
            comments: [],
          },
          {
            createdAt: "2021-07-28 22:40:23",
            updatedAt: "2021-11-15 11:59:18",
            id: 165,
            title: "rollup基本配置",
            content:
              "```js\nimport babel from 'rollup-plugin-babel'\nimport serve from 'rollup-plugin-server'\nexport default {\n    input:\"./src/index.js\",\n    output:{\n        format:'umd', // 支持amd commonjs window.Vue\n        file:\"./dist/vue.js\",\n        name:\"Vue\",\n        sourcemap:true\n    },\n    plugins:[\n        babel({\n            exclude:'node_modules/**'\n        }),\n        serve({\n            open:true,\n            port:3000,\n            contentBase:'',\n            openPage:'/index.html'\n        })\n    ]\n}\n```",
            viewCount: 99,
            tags: [{ name: "Node" }],
            categories: [{ name: "Node" }],
            comments: [],
          },
        ],
      };
      this.articles = data;
      this.articles.rows = groupBy(data.rows, (item) =>
        item.createdAt.slice(0, 4)
      );
    },
  },
};
</script>