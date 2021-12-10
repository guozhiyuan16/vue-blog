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
      <router-link v-else :to="`${basePath}/${paths.join('/')}`">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      basePath: "/admin",
      routes: [
        {
          path: "",
          breadcrumbName: "首页",
        },
        {
          path: "article/manager",
          breadcrumbName: "文章管理",
        },
        {
          path: "article/add",
          breadcrumbName: "文章新增",
        },
        {
          path: "user",
          breadcrumbName: "用户管理",
        },
      ],
      breadcrumbVisible: true,
    };
  },
};
</script>