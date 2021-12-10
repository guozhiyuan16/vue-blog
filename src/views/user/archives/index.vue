<template>
  <div class="app-archives">
    <a-timeline>
      <a-timeline-item>
        <span class="desc">
          Nice! {{ archives.count }} posts in total. Keep on posting.
        </span>
        <br />
        <br />  
      </a-timeline-item>
      <template v-for="y in archives.rows">

        <a-timeline-item color="red" :key="y[0].id">
          <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px" />
          <div class="year">{{ y[0]['createdAt'].slice(0,4) }}...</div>
          <br />
        </a-timeline-item>

        <a-timeline-item v-for="item in y" :key="`archives${item.id}`">
          <span :style="{ fontSize: '13px', marginRight: '16px' }">
            {{ item.createdAt.slice(5, 10) }}
          </span>
          
          <router-link :to="`/article/${item.id}`">
            {{ item.title }}
          </router-link>

        </a-timeline-item>
      </template>
    </a-timeline>
  </div>
</template>
<script>
import { groupBy } from "@/utils";
import { mapState } from "vuex";
export default {
  data() {
    return {
      archives: []
    };
  },
  computed: {
    ...mapState({
      articles: state => state.article.articles
    })
  },
  mounted() {
    this.getArchives(this.articles);
  },
  methods: {
    /**
     * 对文档列表进行分组
     */
    getArchives(articles) {
      this.archives = JSON.parse(JSON.stringify(articles)); // 深拷贝防止影响老数据
      this.archives.rows = groupBy(articles.rows, (item) =>
        item.createdAt.slice(0, 4)
      );
    }
  },
};
</script>