<template>
  <a-comment>
    <span
      slot="actions"
      key="comment-nested-reply-to"
      @click="changeReplay(comment.id)"
      >Reply to
    </span>
    <!-- 管理员可删除留言 -->
    <template slot="actions" v-if="role == 1">
      <a-popconfirm title="是否删除该留言？" @confirm="delDiscuss(comment)">
        <a-icon class="icon-delete" type="delete" />
      </a-popconfirm>
    </template>
    <a slot="author">{{ comment.user.username }}</a>
    <template slot="avatar">
      <a-popover placement="topLeft" trigger="hover">
        <!-- github登录的用户可以展示用户信息 -->
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
        <!-- 管理员 -->
        <a-avatar
          v-if="role == 1"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        <!-- 普通用户 -->
        <a-avatar v-else>{{ comment.user.username }}</a-avatar>
      </a-popover>
    </template>
    <p slot="content">{{ comment.content }}</p>
    <a-tooltip
      slot="datetime"
      :title="moment(comment.createdAt).format('YYYY-MM-DD HH:mm:ss')"
    >
      <span>{{ moment(comment.createdAt).fromNow() }}</span>
    </a-tooltip>
    <!-- 点击 Reply to 展示回复框 -->
    <div v-if="replyBoxId == comment.id" class="reply-form">
      <a-textarea placeholder="回复" :rows="2" />
      <div class="reply-form-controls">
        <a-button type="primary">回复</a-button>
      </div>
    </div>
  </a-comment>
</template>
<script>
import moment from "moment";
export default {
  props: ["info"],
  data() {
    return {
      comment: {},
      submitting: false,
      value: "",
      moment,

      isLogin: false, // 是否登录
      role: 2, // 1 管理员 2 普通用户
      replyBoxId: "", // 回复框对应的id
    };
  },
  created() {
    console.log(this.info);
    this.comment = this.info;
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
