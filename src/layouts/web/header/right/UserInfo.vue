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
            <a href="javascript:;" @click="handleUpload">导入文章</a>
          </a-menu-item>
          <a-menu-item v-if="role == 1">
            <a href="javascript:;" @click="toManage">后台管理</a>
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
        @click="handleLogin"
      >
        登录
      </a-button>
      <a-button size="small" type="danger" ghost @click="handleRegister">
        注册
      </a-button>
    </template>
  </div>
</template>
<script>
import * as types from '@/store/action-types';
import { mapState,mapMutations } from "vuex";
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
    ...mapMutations([types.LOGIN_VISIBLE_STATE,types.REGISTER_VISIBLE_STATE,types.UPLOAD_VISIBLE_STATE]),
    handleLogin() {
      this[types.LOGIN_VISIBLE_STATE](true);
    },
    handleRegister() {
      this[types.REGISTER_VISIBLE_STATE](true);
    },
    handleUpload() {
      this[types.UPLOAD_VISIBLE_STATE](true);
    },
    toManage() {
      this.$router.push("/admin");
    },
  },
};
</script>