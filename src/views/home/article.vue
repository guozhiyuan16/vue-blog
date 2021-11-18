<template>
  <article class="app-article" :style="{ paddingRight: '275px' }">
    <!-- 文章标题 start -->
    <div class="post-header">
      <h1 class="post-title">{{ detail.title }}</h1>
      <div class="article-desc">
        <a-icon type="folder" :style="{ marginRight: '7px' }" />
        &nbsp; Posted on &nbsp;
        <span>{{ detail.createdAt.slice(0, 10) }}</span>

        <template v-if="detail.tags.length">
          <a-divider type="vertical" />
          <a-icon type="tags" :style="{ marginRight: '7px' }" />
          <a-tag v-for="(t, i) in detail.tags" :key="i">{{ t.name }}</a-tag>
        </template>

        <template v-if="detail.categories.length">
          <a-divider type="vertical" />
          <a-icon type="folder" :style="{ marginRight: '7px' }" />
          <a-tag v-for="(c, i) in detail.categories" :key="i">{{
            c.name
          }}</a-tag>
        </template>

        <a-divider type="vertical" />
        <a-icon type="eye" :style="{ marginRight: '7px' }" />
        <span :style="{ marginRight: '10px' }">{{ detail.viewCount || 0 }}</span>
        <a-icon type="message" :style="{ marginRight: '7px' }" />
        <span :style="{ marginRight: '5px' }">{{
          detail.comments.length || 0
        }}</span>
      </div>
    </div>
    <!-- 文章标题 end -->
    <!-- 文章详情 start -->
    <div class="article-detail">
      <v-md-editor :value="detail.content" mode="preview" ref="preview"></v-md-editor>
    </div>
    <!-- 文章详情 end -->
    <!-- 文章快速导航 start -->
    <nav class="article-navigation">
      <div class="ant-anchor-wrapper" style="max-height: 100vh">
        <a-anchor :affix="false">
          <!-- <a-anchor-link
            href="#components-anchor-demo-basic"
            title="Basic demo"
          />
          <a-anchor-link
            href="#components-anchor-demo-static"
            title="Static demo"
          />
          <a-anchor-link href="#API" title="API">
            <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
            <a-anchor-link href="#Link-Props" title="Link Props" />
          </a-anchor-link> -->
          <a-anchor-link
            v-for="(anchor,index) in titles"
            :href="`#${anchor.title}`"
            :title="anchor.title"
            :key="index"
            @click="handleAnchorClick(anchor)"
          >
          </a-anchor-link>
        </a-anchor>
      </div>
    </nav>
    <!-- 文章快速导航 end -->
    <!-- 评论区 start -->
    <Discuss />
    <!-- 评论区 end -->
  </article>
</template>
<script>
import Discuss from "@/components/Discuss/index.vue";
export default {
  components: {
    Discuss,
  },
  data() {
    return {
      detail: {},
      titles: [],
    };
  },
  created() {
    this.getArticleDetail();
  },
  mounted(){
    const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
    const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());

    if (!titles.length) {
      this.titles = [];
      return;
    }

    const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();

    this.titles = titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName),
    }));
    console.log(this.titles);
  },
  methods: {
    getArticleDetail() {
      // this.detail = {
      //   createdAt: "2021-11-14 14:39:05",
      //   updatedAt: "2021-11-18 15:03:30",
      //   id: 181,
      //   title: "ghf",
      //   content: "123444",
      //   viewCount: 6,
      //   tags: [{ name: "react" }],
      //   categories: [{ name: "react" }],
      //   comments: [
      //     {
      //       createdAt: "2021-11-14 15:29:34",
      //       id: 258,
      //       content: "222",
      //       replies: [],
      //       user: {
      //         createdAt: "2020-02-04 10:22:10",
      //         id: 47529556,
      //         username: "admin",
      //         email: "test@qq.com",
      //         notice: true,
      //         role: 1,
      //         github: null,
      //         disabledDiscuss: false,
      //       },
      //     },
      //     {
      //       createdAt: "2021-11-14 15:23:47",
      //       id: 257,
      //       content: "牛的",
      //       replies: [],
      //       user: {
      //         createdAt: "2020-02-04 10:22:10",
      //         id: 47529556,
      //         username: "admin",
      //         email: "test@qq.com",
      //         notice: true,
      //         role: 1,
      //         github: null,
      //         disabledDiscuss: false,
      //       },
      //     },
      //   ],
      // };

      this.detail = {
        createdAt: "2021-08-08 15:59:54",
        updatedAt: "2021-11-18 15:40:06",
        id: 168,
        title: "react脚手架配置代理",
        content:
          "# react脚手架配置代理总结\r\n\r\n\r\n\r\n## 方法一\r\n\r\n> 在package.json中追加如下配置\r\n\r\n```json\r\n\"proxy\":\"http://localhost:5000\"\r\n```\r\n\r\n说明：\r\n\r\n1. 优点：配置简单，前端请求资源时可以不加任何前缀。\r\n2. 缺点：不能配置多个代理。\r\n3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）\r\n\r\n\r\n\r\n## 方法二\r\n\r\n1. 第一步：创建代理配置文件\r\n\r\n ```\r\n 在src下创建配置文件：src/setupProxy.js\r\n ```\r\n\r\n2. 编写setupProxy.js配置具体代理规则：\r\n\r\n ```js\r\n const proxy = require('http-proxy-middleware')\r\n \r\n module.exports = function(app) {\r\n app.use(\r\n proxy('/api1', { //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)\r\n target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)\r\n changeOrigin: true, //控制服务器接收到的请求头中host字段的值\r\n /*\r\n \tchangeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000\r\n \tchangeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000\r\n \tchangeOrigin默认值为false，但我们一般将changeOrigin值设为true\r\n */\r\n pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)\r\n }),\r\n proxy('/api2', { \r\n target: 'http://localhost:5001',\r\n changeOrigin: true,\r\n pathRewrite: {'^/api2': ''}\r\n })\r\n )\r\n }\r\n ```\r\n\r\n说明：\r\n\r\n1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。\r\n2. 缺点：配置繁琐，前端请求资源时必须加前缀。",
        viewCount: 192,
        tags: [
          {
            name: "react",
          },
        ],
        categories: [
          {
            name: "react",
          },
        ],
        comments: [
          {
            createdAt: "2021-10-13 15:17:25",
            id: 248,
            content: "的等待",
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
            createdAt: "2021-10-13 15:17:16",
            id: 247,
            content: "点都德",
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
    handleAnchorClick(anchor) {
      console.log(anchor);
      const { preview } = this.$refs;
      const { lineIndex } = anchor;

      const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);

      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
        });
      }
    },
  },
};
</script>
