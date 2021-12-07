<template>
    <div id="page-menu">
        <a-menu 
            v-model="current" 
            mode="horizontal"
        >
            <a-menu-item v-for="menu in navList" 
                :key="menu.icon"
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
            current: ['home'],
            navList: navList,
        }
    },
    methods: {
        showDetail(path) {
            this.$router.push(path)
        }
    }
}
</script>