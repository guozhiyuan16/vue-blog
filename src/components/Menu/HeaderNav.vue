<template>
  <div class="header">
    <a-row type='flex' align='middle' justify="start">
      <a-col :span="4">
        <a-icon type="thunderbolt" />
        <span>个人博客</span>
      </a-col>
      <a-col :span="4">
        <template>
          <a-input placeholder="搜索文章">
            <a-icon
              slot="prefix"
              type="search"
              style="color: rgba(0, 0, 0, 0.2)"
            />
          </a-input>
        </template>
      </a-col>
      <a-col :span="15">
          <div class="page-operation">
              <a-button size="small" type="primary" ghost :style="{marginRight:'20px'}">登录 </a-button>
              <a-button size="small" type="danger" ghost >注册</a-button>
          </div>
          <div class="page-menu">
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
      size: "large",
    };
  },
};
</script>

<style scoped lang="less">
.header {

  .ant-menu{
    line-height: 63px;
    
  }

  .ant-menu-horizontal{
    border-bottom:1px solid transparent;
  }

  .page-menu{
    float: right;
  }

  .page-operation{
    float: right;
    padding-left:0 40px 0 16px;
  }
}
</style>