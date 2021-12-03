<template>
  <section class="app-warper">
    <a-row>
      <a-col :span="4">
        <aside class="app-sidebar">
          <img
            src="data:image/jpeg;base64,/9j/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAZABkAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOcooor3jwQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKYBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArsvBnggeI4WvLqWSO1DFRs6sR1rja9r+GUofwiiL95JnU/z/rWGJnKELxN8PCM52kef+NfCUfhm5tzbSSSW84OC/UEdq5SvbfiVZi48JyS7fmgdZAfTnH9a8Sp4ao5w13DEU1CegUUUV0GAUUUUAFFFFABUttbT3k6wW0Lyyt0VFyTUVexfDPRI7TRP7RljBnuSSrEchOgx+v6VjXrKlG5rRp+0lY8pvtKv9McJe2ssDEZG9cZqnXt3xGS3/4RKfzAokDr5ZPrkdPwrxGlQqurHmY69NU5WQUUUVqYhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFb3hLQB4h1pbV3ZYVG6Qr1xXoupfDHSZLGQWIliuQvyMZNwJ981jUrxpy5WbU6Epq6PHKKlubeW0uZLedCksbFWU9QRUVbKz1Ri01owooooAKKKKACiiigAooooAK9X+E1yDp99bk/MsgcD6jH9K8orrfh1qJsvFcMTSbY7hWjOemeorHERvTZth5csz1rxVbG78MajDjJMDEfgM/wBK+eK+m7hRNC8bYIdSCK+aruE297PCescjIfwOK58A90dGMjqmQ0UUV6JwhRRRQAUUUUAW9MsX1LU7ayiBLTSBPpk8mvo2ytI7O0ht4lxHEgRR7CvLfhXo8M91capJy8J8uMehI5r0zVtRi0zS572VgFiQtz3PYV5WLm5VOQ9LDQUYczPKPifrLXmuLp0b5htl+YD++f8A62K4Sprq4ku7ua5lOZJWLMfcmoa76MOSKRwVJ80mwooorWxAUUUUrAFFFFFgCit3RPCOra+vmWkG2DOPNkOFP0qPXfDOo+H5FW8j+RvuupypqFVg3y31LdOSV7aGNRRRV2ICiiinYAoooosAUUUVIBRRRQAUUUUAFFFFABRRRQBv+DdWGj+JLaZ22wyN5chPYHjNe/rhlB4INfMQOCDXuPw+106xoEaTSbrm3/dvnqR2P5fyrgxsL++juwlT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"
            class="sider-avatar"
            alt=""
          />
          <h2>时间在走</h2>
          <h5 class="sub-title">学而知不足</h5>
          <ul class="home-pages">
            <li>
              <a-icon type="github" class="homepage-icon" />
              <Href :linkUrl="githubUrl">github</Href>
            </li>
            <li>
              <svg class="svg-icon homepage-icon" aria-hidden="true"><use xlink:href="#iconjuejin"></use></svg>
              <Href :linkUrl="juejinUrl">juejin</Href>
            </li>
          </ul>
          <a-alert description="个人笔记网站" />
          <a-divider orientation="left"> 热门文章 </a-divider>
          <ul class="article-list">
            <li v-for="article in articles.rows" :key="article.id">
              <router-link :to="`article/${article.id}`">
                {{ article.title }}
              </router-link>
            </li>
          </ul>
          <a-divider orientation="left"> 标签 </a-divider>
          <div class="tag-list">
            <template v-for="tag in tags">
              <a-tag :key="tag.name" :color="tag.color">{{ tag.name }}</a-tag>
            </template>
          </div>
        </aside>
      </a-col>
      <a-col :span="20">
        <div class="app-main">
          <router-view />
        </div>
      </a-col>
    </a-row>
  </section>
</template>

<script>
import config from "@/config/index.js";
export default {
  data() {
    return {
      tags: [], // 所有的标签列表
      tagColor: ["pink", "red", "orange", "green", "cyan", "blue", "purple"],
      articles: [], // 所有的文章列表
      githubUrl: config.github, // 配置的github地址
      juejinUrl: config.juejin // 配置的juejin地址
    };
  },
  created() {
    this.getAritcleList();
    this.getTagList();
  },
  methods: {
    getAritcleList() {
      this.articles = {
        count: 11,
        rows: [
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
              { id: 239, replies: [] },
              { id: 247, replies: [] },
              { id: 240, replies: [] },
              { id: 248, replies: [] },
              { id: 241, replies: [] },
              { id: 242, replies: [] },
              { id: 243, replies: [] },
              { id: 244, replies: [] },
              { id: 245, replies: [] },
              { id: 238, replies: [] },
              { id: 246, replies: [] },
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
            createdAt: "2021-10-18 13:46:40",
            updatedAt: "2021-11-15 13:36:06",
            id: 178,
            title: "吃饭睡觉打豆豆",
            content:
              "吃饭睡觉打豆豆 吃饭睡觉打豆豆 吃饭睡觉打豆豆吃饭睡觉打豆豆吃饭睡觉打豆豆吃饭睡觉打豆豆吃饭睡觉打豆豆吃饭睡觉打豆豆吃饭睡觉打豆豆",
            viewCount: 47,
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
              { id: 256, replies: [] },
              { id: 255, replies: [] },
            ],
          },
        ],
      };
      // api.getAritcleList().then((res) => {
      //   console.log("getAritcleList", res);
      // });
    },
    getTagList() {
      this.tags = [
        { name: "react", count: 5 },
        { name: "Node", count: 2 },
        { name: "JavaScript", count: 2 },
        { name: "吃饭睡觉打豆豆", count: 1 },
      ];
      this.tags = this.tags.map((tag) => {
        tag.color = this.tagColor[Math.floor(Math.random() * this.tagColor.length)];
        return tag;
      });
      // api.getTagList().then((res) => {
      //   console.log("getTagList", res);
      // });
    },
  },
};
</script>
