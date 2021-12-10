<template>
    <aside class="app-sidebar">
        <img :src="avatar" class="sider-avatar" />
        <h2>{{ title }}</h2>
        <h5 class="sub-title">{{ subTitle }}</h5>
        <!-- 后续优化为一个循环,方便添加多个链接 -->
        <ul class="home-pages">
            <li>
                <a-icon type="github" class="homepage-icon" />
                <Href :linkUrl="homePages.github.link">github</Href>
            </li>
            <li>
                <SvgIcon :iconClass="`juejin`"/>
                <Href :linkUrl="homePages.juejin.link">juejin</Href>
            </li>
        </ul>

        <a-alert message="个人笔记网站，请访问" type="info" />

        <a-divider orientation="left"> 热门文章 </a-divider>
        <ul class="article-list">
            <li v-for="article in articles.rows" :key="article.id">
                <router-link :to="`${article.id}`">
                    {{ article.title }}
                </router-link>
            </li>
        </ul>

        <a-divider orientation="left"> 标签 </a-divider>
        <div class="tag-list">
            <a-tag v-for="tag in tags" :key="tag.name" :color="tag.color">{{ tag.name }}</a-tag>
        </div>
    </aside>
</template>
<script>
import { SIDEBAR } from "@/config/index.js";
import { mapState,mapActions } from 'vuex';
import * as types from '@/store/action-types';
export default {
  data() {
    return {
      homePages: SIDEBAR.homePages, // 首页链接
      avatar: SIDEBAR.avatar, // 配置的头像地址
      title: SIDEBAR.title, // 配置的标题
      subTitle : SIDEBAR.subTitle, // 配置的副标题
    };
  },
  computed:{
    ...mapState({
      articles : state => state.article.articles,
      tags : state => state.article.tags,
    })
  },
  methods: {
    // 注意命名空间
    ...mapActions('article',[ types.SET_ARTICLE , types.SET_TAG ]),
  },
  mounted(){
    // 做缓存
    if(this.articles.rows.length === 0){
      this[types.SET_ARTICLE]({page:1,limit:5});
    }
    if(this.tags.length === 0){
      this[types.SET_TAG]();
    }
  }
};
</script>