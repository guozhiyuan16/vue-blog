<template>
  <div class="nav">
    <a-row type="flex" align="middle">
      <a-col :span="4"> </a-col>
      <a-col :span="6"> </a-col>
      <a-col :span="10">
        <a-menu v-model="current" mode="horizontal">
          <a-menu-item key="mail"> <a-icon type="mail" />首页 </a-menu-item>
          <a-menu-item key="app"> <a-icon type="appstore" />归档 </a-menu-item>
          <a-menu-item key="kind"> <a-icon type="appstore" />分类 </a-menu-item>
          <a-menu-item key="about">
            <a-icon type="appstore" />关于
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :span="4">
          <a-button size="small">登录 </a-button>
          <a-button size="small">注册</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ["mail"],
    };
  },
};
</script>

<style scoped lang="less">
.nav {
 
}
</style>