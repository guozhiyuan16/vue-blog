<template>
  <div class="admin-article-manager">
    <a-form-model
      layout="inline"
      :model="formInline"
      @submit="handleSubmit"
      @submit.native.prevent
      :style="{ marginBottom: '20px' }"
    >
      <a-form-model-item label="关键词">
        <a-input
          v-model="formInline.keyword"
          placeholder="请输入文章关键词"
          :style="{ width: '200px' }"
        />
      </a-form-model-item>
      <a-form-model-item label="标签">
        <a-select v-model="formInline.tag" :style="{ width: '200px' }">
          <a-select-option value="Vue"> Vue </a-select-option>
          <a-select-option value="React"> React </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="分类">
        <a-select v-model="formInline.category" :style="{ width: '200px' }">
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
    <div class="admin-table">
      <a-table :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }" :columns="columns" :data-source="data">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle">标题</span>
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="categories" slot-scope="categories">
          <a-tag
            v-for="category in categories"
            :key="category"
            :color="
              category === 'loser'
                ? 'volcano'
                : category.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ category.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a @click="detail(record)">查看</a>
          <a-divider type="vertical" />
          <a>编辑</a>
          <a-divider type="vertical" />
          <a>导出</a>
          <a-divider type="vertical" />
          <a>删除</a>
        </span>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: '分类',
    key: 'categories',
    dataIndex: 'categories',
    scopedSlots: { customRender: 'categories' },
  },
  {
    title: '浏览数',
    dataIndex: 'viewCount',
    key: 'viewCount',
  },
  {
    title: '发布时间',
    dataIndex: 'createAt',
    key: 'createAt',
  },
  {
    title: '修改时间',
    dataIndex: 'updateAt',
    key: 'updateAt',
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    viewCount: 32,
    createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['nice', 'developer'],
    categories:['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    viewCount: 42,
     createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['loser'],
    categories:['nice', 'developer'],
  },
  {
    key: '3',
    name: 'Joe Black',
    viewCount: 32,
    createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['cool', 'teacher'],
    categories:['nice', 'developer'],
  },
];
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
      data,
      columns,
      selectedRowKeys: [],
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(this.formInline);
    },
    detail(info){
        console.log(info)
    },
     onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
  },
};
</script>