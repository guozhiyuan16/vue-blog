<template>
  <div class="app-home">
    <ul class="app-home-list">
      <template v-for="article in articles.rows">
        <li :key="`home${article.id}`" class="app-home-list-item">

          <a-divider orientation="left">
            <span @click="toArtDetail(article)" class="title">{{ article.title }}</span>
            <span class="posted-time">{{ article.createdAt.slice(0,10) }}</span>
          </a-divider>

          <div @click="toArtDetail(article)" class="article-detail content">
            <p>{{ article.content }}</p>
          </div>

          <div class="list-item-others">

            <a-icon type="message" />
            <span :style="{ marginRight: '5px' }">{{ article.comments.length }}</span>

            <a-icon type="eye" />
            <span :style="{ marginRight: '5px' }">{{ article.viewCount }}</span>
           
            <template v-if="article.tags.length">
              <a-divider type="vertical" />

              <a-icon type="tags" theme="filled" />
              <a-tag 
                v-for="tag in article.tags" 
                :key="`tag-${article.id}${tag.name}`"
              >
                <a> {{ tag.name }} {{article.id + tag.name}}</a>
              </a-tag>
            </template>
            
            <template v-if="article.categories.length">
              <a-divider type="vertical" />

              <a-icon type="folder" />
              <a-tag 
                v-for="category in article.categories" 
                :key="`category-${article.id}${category.name}`"
              >
                <a> {{ category.name }} {{ article.id + category.name }} </a>
              </a-tag>
            </template>
          </div>
        </li>
      </template>
    </ul>
    <ul class="preview">
      <a-divider orientation="center"> 快速导航 </a-divider>
      <template v-for="article in articles.rows">
          <li :key="article.id">
            <router-link :to="`${article.id}`">{{ article.title}}</router-link>
          </li>
      </template>
    </ul>
    <div class="app-pagination">
      <a-pagination v-model="current" :total="50" show-less-items />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      current: 1,
    };
  },
  computed: {
    ...mapState({
      articles: state => state.article.articles
    })
  },
  methods: {
    toArtDetail(artInfo){
      this.$router.push(`/article/${artInfo.id}`)
    }
  },
};
</script>