<template>
  <div :class="['basicLayout']">
    <a-layout :style="{ minHeight: '100vh', width: '100%' }">
      <a-layout-header>
        <header-nav></header-nav>
      </a-layout-header>
      <a-layout-content :style="{ height: '100%'}"
        >Content</a-layout-content
      >
    </a-layout>
  </div>
</template>

<script>
import HeaderNav from "@/components/Menu/HeaderNav";
export default {
  components: { HeaderNav },
};
</script>

<style scoped lang="less">
.basicLayout {
  height: 100vh;
  display: flex;
  overflow: hidden;

  .ant-layout {
    overflow: hidden;

    .ant-layout-header {
      padding: 0;
      background: #fff;
      box-shadow: 0 2px 8px #f0f1f2;
      position: relative;
      z-index: 10;
      max-width: 100%;
    }

    .ant-layout-content {
      background: #fff;
    }
  }
}
</style>