<template>
  <a-comment>
    <span
      slot="actions"
      key="comment-nested-reply-to"
      @click="handleClick(discuss.id)"
      @mouseover="hoverIndex = discuss.id"
      @mouseout="hoverIndex = -1"
    >
      Reply to
    </span>
    <!-- 管理员可删除留言 -->
    <template slot="actions" v-if="role == 1">
      <a-popconfirm title="是否删除该留言？" @confirm="delDiscuss(discuss)">
        <a-icon
          v-show="hoverIndex == discuss.id"
          class="icon-delete"
          type="delete"
        />
      </a-popconfirm>
    </template>
    <a 
      slot="author"
    >
      {{ discuss.user.username }}
    </a>
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
        <a-avatar v-else>{{ discuss.user.username }}</a-avatar>
      </a-popover>
    </template>
    <p slot="content">{{ discuss.content }}</p>
    <a-tooltip
      slot="datetime"
      :title="moment(discuss.createdAt).format('YYYY-MM-DD HH:mm:ss')"
    >
      <span>{{ moment(discuss.createdAt).fromNow() }}</span>
    </a-tooltip>
    <!-- 点击 Reply to 展示回复框 -->
    <div v-if="replyId == discuss.id" class="reply-form">
      <a-textarea placeholder="回复" :rows="2" />
      <div class="reply-form-controls">
        <a-button type="primary">回复</a-button>
      </div>
    </div>

    <!-- 回复列表 -->
    <slot></slot>
  </a-comment>
</template>
<script>
import moment from "moment";
import { mapState } from "vuex";

export default {
  props: ['discuss','replyId'],
  data() {
    return {
      moment,

      hoverIndex: -1, // 控制删除按钮展示
    };
  },
  // 获取登录状态 和 角色权限
  computed: mapState({
    login: (state) => state.user.login,
    role: (state) => state.user.role,
  }),
  methods: {
    delDiscuss(id) {
      console.log(`删除编号为${id}的留言`);
      this.$emit("console_data", id);
    },
    handleClick(id) {
      console.log("children", id);
      this.$emit("console_data", id);
    },
  },
};
</script>
