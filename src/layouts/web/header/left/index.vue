<template>
    <div id="page-title">
        <SvgIcon :iconClass="svgName"></SvgIcon>
        <span class="blog-name">{{ blogName }}</span>
    </div>
</template>
<script>

import { HEADER_BLOG_NAME } from '@/config/index.js';

export default {
    data(){
        return {
            blogName: HEADER_BLOG_NAME,
            svgName : 'airport'
        }
    }
}
</script>