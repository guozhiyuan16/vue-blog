<template>
    <a-layout class="app-container">
      <a-layout-header class="app-header">
        <PageHeader />
      </a-layout-header>
      <a-layout-content>
        <AppMain />
      </a-layout-content>
      <!-- <a-layout-footer>
        <PageFooter />
      </a-layout-footer> -->
    </a-layout>
</template>

<script>
import PageHeader from '@/layouts/web/header/index.vue'
import PageFooter from '@/layouts/web/footer/PageFooter.vue'
import AppMain from '@/layouts/web/AppMain.vue'
export default {
    name: 'AppLayout',
    components: {
        PageHeader,
        PageFooter,
        AppMain
    }
}
</script>