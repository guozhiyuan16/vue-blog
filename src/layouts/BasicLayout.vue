<template>
  <div :class="['basicLayout']">
    <a-layout :style="{ minHeight: '100vh',width:'100%' }">
      <a-layout-header>
        <header-nav></header-nav>
      </a-layout-header>
      <a-layout>
        <a-layout-sider>Sider</a-layout-sider>
        <a-layout-content :style="{ height: '100%', margin: '20px 20px 0' }">Content</a-layout-content>
      </a-layout>
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
.basicLayout{
    height: 100vh;
    display: flex;
    overflow: hidden;

    .ant-layout{
		overflow: hidden;
	}
}


</style>