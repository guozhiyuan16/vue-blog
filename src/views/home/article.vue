<template>
  <div class="app-article">
     这是文章详情
  </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    monted(){
        console.log(this.$route.params.articleId)
    }
}
</script>