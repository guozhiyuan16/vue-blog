<template>
  <article class="app-article" :style="{ paddingRight: '275px' }">
    <div class="post-header">
      <h1 class="post-title">react脚手架配置代理</h1>
      <div class="article-desc">
        <a-icon type="folder" :style="{ marginRight: '7px' }" />
        &nbsp; Posted on &nbsp;
        <span>2021-08-08</span>
        <a-divider type="vertical" />
        <a-icon type="tags" :style="{ marginRight: '7px' }" />
        <a-tag color="pink">React</a-tag>
        <a-divider type="vertical" />
        <a-icon type="folder" :style="{ marginRight: '7px' }" />
        <a-tag color="#f50">React</a-tag>
        <a-divider type="vertical" />
        <a-icon type="eye" :style="{ marginRight: '7px' }" />
        <span :style="{ marginRight: '5px' }">7</span>
        <a-icon type="eye" :style="{ marginRight: '7px' }" />
        <span :style="{ marginRight: '5px' }">789</span>
      </div>
    </div>
    <div class="article-detail">
      <div class="article-detail">
        <h1 id="react脚手架配置代理总结">react脚手架配置代理总结</h1>
        <h2 id="方法一">方法一</h2>
        <blockquote>
          <p>在package.json中追加如下配置</p>
        </blockquote>
        <pre><code class="language-json"><span class="hljs-string">"proxy"</span>:<span class="hljs-string">"http://localhost:5000"</span></code></pre>
        <p>说明：</p>
        <ol>
          <li>优点：配置简单，前端请求资源时可以不加任何前缀。</li>
          <li>缺点：不能配置多个代理。</li>
          <li>
            工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000
            （优先匹配前端资源）
          </li>
        </ol>
        <h2 id="方法二">方法二</h2>
        <ol>
          <li>
            <p>第一步：创建代理配置文件</p>
            <pre><code>在src下创建配置文件：src/setupProxy.js</code></pre>
          </li>
          <li>
            <p>编写setupProxy.js配置具体代理规则：</p>
            <pre><code class="language-js"><span class="hljs-keyword">const</span> proxy = <span class="hljs-built_in">require</span>(<span class="hljs-string">'http-proxy-middleware'</span>)

<span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">app</span>) </span>{
  app.use(
    proxy(<span class="hljs-string">'/api1'</span>, {  <span class="hljs-comment">//api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)</span>
      <span class="hljs-attr">target</span>: <span class="hljs-string">'http://localhost:5000'</span>, <span class="hljs-comment">//配置转发目标地址(能返回数据的服务器地址)</span>
      <span class="hljs-attr">changeOrigin</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">//控制服务器接收到的请求头中host字段的值</span>
      <span class="hljs-comment">/*
          changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
          changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
          changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */</span>
      <span class="hljs-attr">pathRewrite</span>: {<span class="hljs-string">'^/api1'</span>: <span class="hljs-string">''</span>} <span class="hljs-comment">//去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)</span>
    }),
    proxy(<span class="hljs-string">'/api2'</span>, { 
      <span class="hljs-attr">target</span>: <span class="hljs-string">'http://localhost:5001'</span>,
      <span class="hljs-attr">changeOrigin</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">pathRewrite</span>: {<span class="hljs-string">'^/api2'</span>: <span class="hljs-string">''</span>}
    })
  )
}</code></pre>
          </li>
        </ol>
        <p>说明：</p>
        <ol>
          <li>优点：可以配置多个代理，可以灵活的控制请求是否走代理。</li>
          <li>缺点：配置繁琐，前端请求资源时必须加前缀。</li>
        </ol>
      </div>
    </div>
    <nav class="article-navigation">
      <div class="ant-anchor-wrapper" style="max-height: 100vh">
        <a-anchor :affix="false">
          <a-anchor-link
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
          </a-anchor-link>
        </a-anchor>
      </div>
    </nav>
    <!-- 评论区 start -->
    <div id="discuss">
      <div class="discuss-header">
        <span class="discuss-count">47</span>条留言
        <a-dropdown>
          <span class="discuss-user" @click="(e) => e.preventDefault()"
            >未登录用户 <a-icon type="down"
          /></span>
          <a-menu slot="overlay">
            <a-menu-item v-if="!isLogin">
              <a href="javascript:;">登录</a>
            </a-menu-item>
            <a-menu-item v-if="!isLogin">
              <a href="javascript:;">注册</a>
            </a-menu-item>
            <a-menu-item v-if="isLogin">
              <a href="javascript:;">注销</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <a-divider></a-divider>
      </div>
      <a-comment>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        <div slot="content">
          <a-form-item>
            <a-textarea :rows="4" :value="value" @change="handleChange" />
          </a-form-item>
          <a-form-item>
            <div class="controls">
              <a-icon type="exclamation-circle" class="controls-tip-icon" />
              <span class="controls-tip">支持 Markdown 语法</span>
              <a-button
                html-type="submit"
                :loading="submitting"
                type="primary"
                @click="handleSubmit"
              >
                添加评论
              </a-button>
            </div>
          </a-form-item>
        </div>
      </a-comment>
      <div class="discuss-list">
        <a-comment>
          <span slot="actions" key="comment-nested-reply-to">Reply to </span>
          <template slot="actions">
            <a-popconfirm title="是否删除改留言？" @confirm="delDiscuss(1)">
              <a-icon class="icon-delete" type="delete" />
            </a-popconfirm>
          </template>
          <a slot="author">Han Solo</a>
          <template slot="avatar">
            <a-popover placement="topLeft" trigger="hover">
              <template slot="title">
                <a-icon type="github" />
                <span class="github-info" style="marginleft: 10px"
                  >I Have A Dream</span
                >
              </template>
              <template slot="content">
                <div>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                  <span>后续再添加</span>
                </div>
              </template>
              <a-avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            </a-popover>
          </template>
          <p slot="content">
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure).
          </p>
          <a-tooltip
            slot="datetime"
            :title="moment().format('YYYY-MM-DD HH:mm:ss')"
          >
            <span>{{ moment().fromNow() }}</span>
          </a-tooltip>
          <div class="reply-form">
            <a-textarea placeholder="回复" :rows="2" />
            <div class="reply-form-controls">
              <a-button type="primary">回复</a-button>
            </div>
          </div>
          <a-comment>
            <span slot="actions" key="comment-nested-reply-to">Reply to </span>
            <template slot="actions">
              <a-popconfirm title="是否删除改留言？" @confirm="delDiscuss(1)">
                <a-icon class="icon-delete" type="delete" />
              </a-popconfirm>
            </template>
            <a slot="author">Han Solo</a>
            <template slot="avatar">
              <a-popover placement="topLeft" trigger="hover">
                <template slot="title">
                  <a-icon type="github" />
                  <span class="github-info" style="marginleft: 10px"
                    >I Have A Dream</span
                  >
                </template>
                <template slot="content">
                  <div>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt="Han Solo"
                    />
                    <span>后续再添加</span>
                  </div>
                </template>
                <a-avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              </a-popover>
            </template>
            <p slot="content">
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure).
            </p>
            <a-tooltip
              slot="datetime"
              :title="moment().format('YYYY-MM-DD HH:mm:ss')"
            >
              <span>{{ moment().fromNow() }}</span>
            </a-tooltip>
          </a-comment>
          <a-comment>
            <span slot="actions" key="comment-nested-reply-to">Reply to </span>
            <template slot="actions">
              <a-popconfirm title="是否删除改留言？" @confirm="delDiscuss(1)">
                <a-icon class="icon-delete" type="delete" />
              </a-popconfirm>
            </template>
            <a slot="author">Han Solo</a>
            <template slot="avatar">
              <a-popover placement="topLeft" trigger="hover">
                <template slot="title">
                  <a-icon type="github" />
                  <span class="github-info" style="marginleft: 10px"
                    >I Have A Dream</span
                  >
                </template>
                <template slot="content">
                  <div>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt="Han Solo"
                    />
                    <span>后续再添加</span>
                  </div>
                </template>
                <a-avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              </a-popover>
            </template>
            <p slot="content">
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure).
            </p>
            <a-tooltip
              slot="datetime"
              :title="moment().format('YYYY-MM-DD HH:mm:ss')"
            >
              <span>{{ moment().fromNow() }}</span>
            </a-tooltip>
          </a-comment>
        </a-comment>
      </div>
    </div>
    <!-- 评论区 end -->
  </article>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      comments: [],
      submitting: false,
      value: "",
      moment,

      isLogin: false,
      role: 1,
    };
  },
  monted() {
    console.log(this.$route.params.articleId);
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.value = "";
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
    delDiscuss(id) {
      console.log(`删除编号为${id}的留言`);
    },
  },
};
</script>