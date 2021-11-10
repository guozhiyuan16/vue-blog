<template>
  <div class="app-about">
    <a-avatar
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    />
    <span :style="{ paddingLeft: '10px' }">学而知不足</span>
    <a-divider orientation="left">博客简述</a-divider>
    <p>本博客使用的技术为 react hooks + antd + koa2 + mysql</p>
    <p>本博客使用的技术为 react hooks + antd + koa2 + mysql</p>
    <a-divider orientation="left">关于我</a-divider>
    <ul class="about-list">
      <li>姓名：时间在走</li>
      <li>联系方式：时间在走</li>
      <li>坐标：时间在走</li>
      <li>
        技能
        <ul>
          <li>
            具备扎实的 Javascript 基础，熟练使用 ES6+ 语法。
            <a-rate :default-value="3" disabled />
          </li>
          <li>
            具备扎实的 Javascript 基础，熟练使用 ES6+ 语法。
            <a-rate :default-value="2" disabled />
          </li>
          <li>
            具备扎实的 Javascript 基础，熟练使用 ES6+ 语法。
            <a-rate :default-value="2.5" allow-half disabled />
          </li>
        </ul>
      </li>
      <li>
        其他
        <ul>
          <li>常用开发工具：vscode,webstorem</li>
          <li>属性的ui框架：ant-design element</li>
          <li>具备良好的编码风格和习惯，团队规范意识，乐于分享</li>
        </ul>
      </li>
      <li>
        个人
        <ul>
          <li>欢迎交流！</li>
        </ul>
      </li>
    </ul>
    <div id="discuss">
      <div class="discuss-header">
        <span class="discuss-count">47</span>条留言
        <a-dropdown>
          <span class="discuss-user" @click="e => e.preventDefault()">未登录用户  <a-icon type="down" /></span>
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
  </div>
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
