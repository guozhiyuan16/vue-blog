<template>
  <div class="app-categories">
    <h2 class="title">Categories</h2>
    <p class="category-all-title">
      {{ categories.length }} categories in total
    </p>
    <div class="categories-list">
      <a-badge
        v-for="(category, index) in categories"
        :count="category.count"
        :key="index"
      >
        <a-tag color="pink">
          <router-link
            :to="`/categories/${category.name}`"
            class="head-example"
          >
            {{ category.name }}
          </router-link>
        </a-tag>
      </a-badge>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      this.categories = [
        { name: "react", count: 7 },
        { name: "Node", count: 2 },
        { name: "Koa", count: 1 },
      ];
    },
  },
};
</script>