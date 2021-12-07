<template>
    <div id="search-box">
        <a-icon type="search" />
        <a-input
            placeholder="搜索文章"
            type="text"
            :class="['search-input']"
            v-model="searchValue"
            @keyup.enter.native="search"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchValue: '',
        };
    },
    methods: {
        search() {
            console.log(this.searchValue)
        },
    },
}
</script>