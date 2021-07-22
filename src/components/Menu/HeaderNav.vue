<template>
  <div id="page-header">
    <a-row type="flex" align="middle" justify="start">
      <a-col :span="4">
        <div id="page-title">
          <a-icon type="setting" theme="filled" :style="{ color: '#08c' }" />
          <span class='blog-name'>个人博客</span>
        </div>
      </a-col>
      <a-col :span="20">
        <div id="search-box">
          <a-icon type="search" />
          <a-input
            placeholder="搜索文章"
            type="text"
            :class="['search-input']"
          />
        </div>
        <div id="page-operation">
          <a-button
            size="small"
            type="primary"
            ghost
            :style="{ marginRight: '20px' }"
            >登录
          </a-button>
          <a-button size="small" type="danger" ghost>注册</a-button>
        </div>
        <div id="page-menu">
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="mail"> <a-icon type="mail" />首页 </a-menu-item>
            <a-menu-item key="app">
              <a-icon type="appstore" />归档
            </a-menu-item>
            <a-menu-item key="kind">
              <a-icon type="appstore" />分类
            </a-menu-item>
            <a-menu-item key="about">
              <a-icon type="appstore" />关于
            </a-menu-item>
          </a-menu>
        </div>
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

<style lang="less">
</style>