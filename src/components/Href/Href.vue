<template>
    <a target="_black" rel='noreferrer noopener' :href="linkUrl">
        <slot></slot>
    </a>
</template>

<script>
export default {
    props:['linkUrl'],
}
</script>