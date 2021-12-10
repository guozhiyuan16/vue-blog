<template>
  <div class="app-categories">
    <h2 class="title">Categories</h2>
    <p class="category-all-title">
      {{ categories.length }} categories in total
    </p>
    <div class="categories-list">
      <a-badge
        v-for="category in categories"
        :count="category.count"
        :key="category.name"
      >
        <a-tag @click="linkTo(category.name)">
          {{ category.name }}
        </a-tag>
      </a-badge>
    </div>
  </div>
</template>
<script>
import { getCategory } from '@/api/article'
export default {
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    async getCategory() {
      // const data =  await getCategory(); 获取分类列表
      this.categories = [
        { name: "react", count: 7 },
        { name: "Node", count: 2 },
        { name: "Koa", count: 1 },
      ];
    },
    linkTo(name){
      this.$router.push(`/categories/${name}`)
    }
  },
};
</script>