<template>
  <div :class="['basicLayout']">
    <a-layout :style="{ minHeight: '100vh', width: '100%' , minWidth: '960px' }">
      <a-layout-header>
        <header-nav></header-nav>
      </a-layout-header>
      <a-layout-content :style="{ height: '100%' }">
        <app-main></app-main>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import HeaderNav from "@/components/Header/HeaderNav";
import AppMain from "@/components/AppMain";
export default {
  components: { HeaderNav,AppMain },
  created(){
    
  }
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

    .ant-layout-footer{
      position: absolute;
      bottom:0;
      left: 0;
      right: 0;
      text-align: center;
      background-color: #fff;
      border-top:1px solid #ebedf0;
    }
  }
}
</style>