<template>
  <a-breadcrumb
    v-show="breadcrumbVisible"
    :routes="routes"
    style="margin: 16px 0"
  >
    <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }} 
      </span>
      <router-link v-else :to="`${paths.join('/')}`">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      basePath: "",
      routes: [
        {
          path: "/admin",
          breadcrumbName: "首页",
        },
        {
          path: "/admin/article/manager",
          breadcrumbName: "文章管理",
        },
        {
          path: "/admin/article/add",
          breadcrumbName: "新增文章",
        },
        {
          path: "/admin/user",
          breadcrumbName: "用户管理",
        },
      ],
      breadcrumbVisible: true,
    };
  },
  created(){
    this.breadcrumbVisible = this.$route.path === "/admin" ? false : true;
  },
  watch: {
    $route(to, from){
      this.breadcrumbVisible = to.path === '/admin' ? false : true;
    }
  }
};
</script>