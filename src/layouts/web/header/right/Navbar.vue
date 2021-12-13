<template>
    <div id="page-menu">
        <a-menu 
            v-model="current" 
            mode="horizontal"
        >
            <a-menu-item v-for="menu in navList" 
                :key="menu.link"
                @click="showDetail(menu.link)"
            >
                <a-icon :type="menu.icon" />
                {{ menu.title }}
            </a-menu-item>
        </a-menu>
    </div>
</template>
<script>
import navList from './navList';
export default {
    data() {
        return {
            current: ['/'],
            navList,
        }
    },
    created(){
        // 页面刷新后自动选中当前项
        let path = this.$route.path;
        this.current = [path];
    },
    methods: {
        showDetail(path) {
            this.$router.push(path)
        }
    }
}
</script>