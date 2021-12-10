<template>
  <a-layout class="admin-container">
    <a-layout-header class="header admin-header">
      <PageHeader />
    </a-layout-header>
    <a-layout class="admin-slider">
      <a-layout-sider width="200" style="background: #fff">
        <Sidebar />
      </a-layout-sider>
      <a-layout class="admin-content-wrap">
        <Breadcrumb />
        <a-layout-content class="admin-content">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import PageHeader from "./header/PageHeader.vue";
import Sidebar from './sidebar/index.vue';
import Breadcrumb from '@/components/Breadcrumb/index.vue';
export default {
  components: {
    PageHeader,
    Sidebar,
    Breadcrumb
  }
};
</script>

<style>
</style>
