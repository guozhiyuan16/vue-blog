<template>
    <a-menu
        mode="inline"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        :style="{ height: '100%', borderRight: 0 }"
    >
        <a-menu-item key="sub1" @click="showDetail('/admin')"
        ><a-icon type="home" />首页
        </a-menu-item>
        <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="highlight" />文章</span>
        <a-menu-item key="5" @click="showDetail('/admin/article/manager')">
            <a-icon type="folder" />
            管理
        </a-menu-item>
        <a-menu-item key="6" @click="showDetail('/admin/article/add')">
            <a-icon type="edit" />
            新增
        </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="sub3" @click="showDetail('/admin/user')">
        <a-icon type="user" />用户
        </a-menu-item>
    </a-menu>
</template>

<script>
export default {
    methods: {
        showDetail(path) {
            this.breadcrumbVisible = path == "/admin" ? false : true;
            this.$router.push(path);
        },
    }
}
</script>