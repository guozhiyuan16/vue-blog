<template>
  <div id="discuss">
    <div class="discuss-header">
      <span class="discuss-count">{{ this.comments.length }}</span
      >条留言
      <a-dropdown>
        <span class="discuss-user" @click="(e) => e.preventDefault()"
          >未登录用户
          <a-icon type="down" />
        </span>
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
      <!-- 未登录展示默认样式 -->
      <a-avatar v-if="!isLogin" slot="avatar" size="large" icon="user" />
      <!-- 登录展示用户信息 -->
      <a-avatar slot="avatar" v-else>User</a-avatar>

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
      <discuss-item 
        v-for="comment in list" 
        :key="`test${comment.id}`" 
        :info="comment"
      />
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["list"],
  data() {
    return {
      comments: [],
      submitting: false,
      value: "",
      moment,

      isLogin: false, // 是否登录
      role: 2, // 1 管理员 2 普通用户
      replyBoxId: "", // 回复框对应的id
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
      console.log(this.value);
    },
    delDiscuss(id) {
      console.log(`删除编号为${id}的留言`);
    },
    /**
     * @func 点击ReplyTo展示对应的回复框
     * @param {String} id 回复框的id
     */
    changeReplay(id) {
      this.replyBoxId = id;
    },
  },
};
</script>
</script>