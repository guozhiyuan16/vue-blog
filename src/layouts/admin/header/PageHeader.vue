<template>
  <div>
    <div class="header-title">Blog Manager</div>
    <a-dropdown class="header-dropdown">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        Hover me <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;" @click="backHome">返回主页</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">退出登录</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
    methods: {
        backHome() {
            this.$router.push('/');
        }
    }
}
</script>