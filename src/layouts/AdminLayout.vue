<template>
  <a-layout class="admin-view">
    <a-layout-header class="header admin-header">
      <div class="header-title">博客后管</div>
      <a-dropdown class="header-dropdown">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
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
    </a-layout-header>
    <a-layout class="admin-body">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="sub1" @click="showDetail('/admin')"><a-icon type="user" />首页 </a-menu-item>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" />文章</span>
            <a-menu-item key="5" @click="showDetail('/admin/article/manager')">
              <a-icon type="folder" />
              管理
            </a-menu-item>
            <a-menu-item key="6" @click="showDetail('/admin/article/add')">
              <a-icon type="edit" />
              新增
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="sub3" @click="showDetail('/admin/user')">
            <a-icon type="notification" />用户
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content  :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px',}" >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods:{
    showDetail(path){
      this.$router.push(path)
    },
    backHome(){
      this.$router.push('/')
    }
  }
};
</script>

<style>
</style>
