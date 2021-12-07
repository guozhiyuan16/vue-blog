<template>
  <div id="page-operation">
    <template v-if="login">
      <a-dropdown placement="bottomCenter">
        <a-avatar
          icon="user"
          class="ant-dropdown-link"
          @click="(e) => e.preventDefault()"
        />
        <a-menu slot="overlay">
          <a-menu-item v-if="role == 1">
            <a href="javascript:;" @click="upload">导入文章</a>
          </a-menu-item>
          <a-menu-item v-if="role == 1">
            <a href="javascript:;" @click="manage">后台管理</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">退出登录</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </template>
    <template v-else>
      <a-button
        size="small"
        type="primary"
        ghost
        :style="{ marginRight: '20px' }"
        @click="userLogin"
      >
        登录
      </a-button>
      <a-button size="small" type="danger" ghost @click="register">
        注册
      </a-button>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
       
    };
  },
  computed: mapState({
    login: state => state.user.login, // 获取登录状态
    role: state => state.user.role, // 获取用户权限
  }),
  methods: {
    userLogin() {
      this.loginVisible = true;
    },
    register() {
      this.registerVisible = true;
    },
    manage() {
      this.$router.push("/admin");
    },
  },
};
</script>