<template>
  <a-layout class="admin-container">
    <a-layout-header class="header admin-header">
      <div class="header-title">Blog Manager</div>
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
    <a-layout class="admin-slider">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="sub1" @click="showDetail('/admin')"><a-icon type="home" />首页 </a-menu-item>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="highlight" />文章</span>
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
            <a-icon type="user" />用户
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout class="admin-content-wrap">
        <a-breadcrumb v-show="breadcrumbVisible" :routes="routes" style="margin: 16px 0">
          <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
            <span v-if="routes.indexOf(route) === routes.length - 1">
              {{ route.breadcrumbName }}
            </span>
            <router-link v-else :to="`${basePath}/${paths.join('/')}`">
              {{ route.breadcrumbName }}
            </router-link>
          </template>
        </a-breadcrumb>
        <a-layout-content class="admin-content">
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
      basePath: '/admin',
      routes:[
        {
          path: '',
          breadcrumbName: '首页',
        },
        {
          path: 'article/manager',
          breadcrumbName: '文章管理',
        },
        {
          path: 'article/add',
          breadcrumbName: '文章新增',
        },
        {
          path: 'user',
          breadcrumbName: '用户管理',
        },
      ],
      breadcrumbVisible:true,
    };
  },
  methods:{
    showDetail(path){
      this.breadcrumbVisible = path == '/admin' ? false : true;
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
