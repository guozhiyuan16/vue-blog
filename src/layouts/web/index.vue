<template>
    <a-layout class="app-container">
      <a-layout-header class="app-header">
        <PageHeader />
      </a-layout-header>
      <a-layout-content class="app-warper">
        <a-row>
          <a-col :span="4">
            <SideBar />
          </a-col>
          <a-col :span="20">
            <AppMain />
          </a-col>
        </a-row>
      </a-layout-content>
      <!-- <a-layout-footer>
        <PageFooter />
      </a-layout-footer> -->
      <a-back-top />
    </a-layout>
</template>

<script>
import PageHeader from '@/layouts/web/header/index.vue'
import PageFooter from '@/layouts/web/footer/PageFooter.vue'
import AppMain from '@/layouts/web/AppMain.vue'
import SideBar from '@/layouts/web/sidebar/index.vue'
export default {
    name: 'AppLayout',
    components: {
        PageHeader,
        PageFooter,
        AppMain,
        SideBar
    }
}
</script>