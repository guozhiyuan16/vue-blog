<template>
  <div>
    <ul class="form-list">
        <li>
          <span>标题</span>
          <span><a-input placeholder="请输入文章标题"/></span>
        </li>
        <li>
          <span>标签</span>
          <tag-and-category
            type='Tag' 
            :resource="tags"
            @console_data="parentEvent"
          />
        </li>
        <li>
          <span>分类</span>
          <tag-and-category 
            type="Category"
            :resource="categorise"
            @console_data="parentEvent"
          />
        </li>
    </ul>
    <div id="simplemde-editor-2-wrapper">
      <v-md-editor v-model="text" height="400px"></v-md-editor>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags:["Movies", "Books", "Music", "Sports"], // 所有标签
      tagSelected:[],
      categorise:["Node", "React", "Vue"], // 所有分类
      categorySelected:[],
      text:''
    };
  },
  methods: {
    getTags(){
      
    },
    getCategorise(){
      
    },
    parentEvent(type,checkedKeys){
      type == "Tag"? this.tagSelected = checkedKeys: this.categorySelected = checkedKeys;
    }
  },
};
</script>