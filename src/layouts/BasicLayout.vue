<template>
    <a-layout class="app-container">
      <a-layout-header class="app-header">
        <PageHeader></PageHeader>
      </a-layout-header>
      <a-layout-content>
        <AppMain></AppMain>
      </a-layout-content>
      <a-layout-footer>
        <PageFooter></PageFooter>
      </a-layout-footer>
    </a-layout>
</template>

<script>

</script>

<style lang="less">
// .app-container {
//   height: 100vh;
//   display: flex;
//   overflow: hidden;

//   .ant-layout {
//     overflow: hidden;

//     .ant-layout-header {
//       padding: 0;
//       background: #fff;
//       box-shadow: 0 2px 8px #f0f1f2;
//       position: relative;
//       z-index: 10;
//       max-width: 100%;
//     }

//     .ant-layout-content {
//       background: #fff;
//       height: calc(100vh - 141px);
//       overflow: hidden;
//     }

//     .ant-layout-footer{
//       position: absolute;
//       bottom:0;
//       left: 0;
//       right: 0;
//       text-align: center;
//       background-color: #fff;
//       border-top:1px solid #ebedf0;
//     }
//   }
// }
</style>