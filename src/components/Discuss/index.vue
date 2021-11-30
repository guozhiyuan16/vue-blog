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
          <a-menu-item v-if="!login">
            <a href="javascript:;">登录</a>
          </a-menu-item>
          <a-menu-item v-if="!login">
            <a href="javascript:;">注册</a>
          </a-menu-item>
          <a-menu-item v-if="login">
            <a href="javascript:;">注销</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <a-divider></a-divider>
    </div>
    <a-comment>
      <!-- 未登录展示默认样式 -->
      <a-avatar v-if="!login" slot="avatar" size="large" icon="user" />
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
        :key="`${comment.id}`" 
        :discuss="comment"
        :replyId="replyId" 
        @console_data="changeReplayId"
        @del_reply="delReply"
      >
        <discuss-item 
          v-for="item in comment.replies" 
          :key="`${item.id}`"
          :discuss="item"
          :replyId="replyId" 
          @console_data="changeReplayId" 
          @del_reply="delReply"
        >
        </discuss-item>
      </discuss-item>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import discussItem from './discussItem.vue';

export default {
  components: { discussItem },
  props: ["list"],
  data() {
    return {
      comments: [],
      submitting: false,
      value: "",

      replyId: "", // 回复框对应的id
    };
  },
  computed: mapState({
    login: state => state.user.login,
  }),
  created() {
    console.log('文章id',this.$route.params.articleId);
    console.log('登录状态',this.$store.state.user.login);
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
    /**
     * @func 点击ReplyTo展示对应的回复框
     * @param {String} id 回复框的id
     */
    changeReplayId(id) {
      console.log('parent',id)
      this.replyId = id;
    },
    delReply(id){
      console.log('del',id)

    }
  },
};
</script>
</script>