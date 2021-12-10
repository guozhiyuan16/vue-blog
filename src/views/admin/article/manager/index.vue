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
      <a-table 
       :row-selection="rowSelection"
       :columns="columns" 
       :data-source="data"
       :pagination="pagination"
       @change="tableChange"
      >
        <span slot="name" slot-scope="text">{{ text }}</span>
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
            color="rgb(45, 183, 245)"
          >
            {{ category }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a @click="detail(record)">查看</a>
          <a-divider type="vertical" />
          <a @click="modify(record)">编辑</a>
          <a-divider type="vertical" />
          <a>导出</a>
          <a-divider type="vertical" />
          <a @click="del(record)" :style="{color:'red'}">删除</a>
        </span>
        <span slot="footer">
          批量操作
          <a-switch @change="onChange" :style="{marginRight:'8px'}"/>
          <a-button type="primary" v-show="batchSwitch" size="small" :disabled="!batchAction" :style="{marginRight:'8px'}">导出选中项</a-button>
          <a-button type="danger" v-show="batchSwitch" size="small" :disabled="!batchAction" >批量删除</a-button>
        </span>
        <template slot="pagination"></template>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
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
  {
    key: '4',
    name: 'John Brown',
    viewCount: 32,
    createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['nice', 'developer'],
    categories:['nice', 'developer'],
  },
  {
    key: '5',
    name: 'Jim Green',
    viewCount: 42,
     createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['loser'],
    categories:['nice', 'developer'],
  },
  {
    key: '6',
    name: 'Joe Black',
    viewCount: 32,
    createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['cool', 'teacher'],
    categories:['nice', 'developer'],
  },
  {
    key: '7',
    name: 'John Brown',
    viewCount: 32,
    createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['nice', 'developer'],
    categories:['nice', 'developer'],
  },
  {
    key: '8',
    name: 'Jim Green',
    viewCount: 42,
     createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['loser'],
    categories:['nice', 'developer'],
  },
  {
    key: '9',
    name: 'Joe Black',
    viewCount: 32,
    createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['cool', 'teacher'],
    categories:['nice', 'developer'],
  },
  {
    key: '10',
    name: 'John Brown',
    viewCount: 32,
    createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['nice', 'developer'],
    categories:['nice', 'developer'],
  },
  {
    key: '11',
    name: 'Jim Green',
    viewCount: 42,
     createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['loser'],
    categories:['nice', 'developer'],
  },
  {
    key: '12',
    name: 'Joe Black',
    viewCount: 32,
    createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['cool', 'teacher'],
    categories:['nice', 'developer'],
  },
  {
    key: '13',
    name: 'John Brown',
    viewCount: 32,
    createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['nice', 'developer'],
    categories:['nice', 'developer'],
  },
  {
    key: '14',
    name: 'Jim Green',
    viewCount: 42,
     createAt:'2021-08-13 17:49:42',
    updateAt:'2021-09-17 11:02:09',
    tags: ['loser'],
    categories:['nice', 'developer'],
  },
  {
    key: '15',
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
      batchSwitch: false, // 是否开启批处理
      batchAction: false, // 批量导出和批量删除
      data,
      columns,
      selectedRowKeys: [],
      pagination: {
        current: 1,
        pageSize: 10,
        defaultPageSize: 10,
        showTotal: total => `共 ${total} 条`
      }
    };
  },
  computed: {
    rowSelection() {
      return this.batchSwitch ? { onChange : this.onSelectChange } : null ;
    },
  },
  methods: {
    handleSubmit(e) {
      console.log(this.formInline);
    },
    // 查看文章
    detail(info){
      console.log(`查看${JSON.stringify(info)}`)
    },
    // 编辑文章
    modify(info){
      console.log(`编辑${JSON.stringify(info)}`)
    },
    // 删除文章
    del(info){
      console.log(`删除${JSON.stringify(info)}`)
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
      this.batchAction = this.selectedRowKeys.length ? true: false;
    },
    // 批处理开关
    onChange() {
      this.batchSwitch = !this.batchSwitch;
    },
    tableChange(e){
      const {current,pageSize} = e;
      this.pagination.current = current;
      this.pagination.pageSize = pageSize;
      this.getTableList();
    },
    getTableList(){
      console.log('获取分页内容')
    }
  },
};
</script>