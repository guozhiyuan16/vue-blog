<template>
  <div>
    <a-form-model
      layout="inline"
      :model="formInline"
      @submit="handleSubmit"
      @submit.native.prevent
    >
      <a-form-model-item label="关键词">
        <a-input v-model="formInline.keyword" placeholder="请输入文章关键词" :style="{width:'200px'}"/>
      </a-form-model-item>
      <a-form-model-item label="标签">
        <a-select v-model="formInline.tag" :style="{width:'200px'}">
          <a-select-option value="Vue"> Vue </a-select-option>
          <a-select-option value="React"> React </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="分类">
        <a-select v-model="formInline.category"  :style="{width:'200px'}">
          <a-select-option value="Vue"> Vue </a-select-option>
          <a-select-option value="React"> React </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" html-type="submit"> 检索 </a-button>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" html-type="submit"> 导出全部文章 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formInline: {
        keyword: "",
        tag: "",
        category: "",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(this.formInline);
    },
  },
};
</script>