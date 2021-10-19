<template>
  <div>
    <a-form-model
      layout="inline"
      :model="formInline"
      @submit="handleSubmit"
      @submit.native.prevent
      :style="{ marginBottom: '20px' }"
    >
      <a-form-model-item label="姓名">
        <a-input
          v-model="formInline.keyword"
          placeholder="请输入姓名"
          :style="{ width: '200px' }"
        />
      </a-form-model-item>
      <a-form-model-item label="用户类型">
        <a-select v-model="formInline.tag" :style="{ width: '200px' }">
          <a-select-option value="Vue"> Vue </a-select-option>
          <a-select-option value="React"> React </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="创建日期">
       <a-range-picker>
        </a-range-picker>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" html-type="submit"> 检索 </a-button>
      </a-form-model-item>
    </a-form-model>
    <div class="admin-table">
      <a-table 
        :columns="columns" 
        :data-source="data"
        :pagination="pagination"
        @change="tableChange"
      >
        <span slot="name" slot-scope="text">{{ text }}</span>
        <span slot="notice" slot-scope="text">
          <a-switch :checked=" text == 0 ? false: true " @change="changeNotice" />
        </span>
        <span slot="forbidden" slot-scope="text">
          <a-switch :checked=" text == 0 ? false: true " @change="changeForbidden" />
        </span>
        <span slot="type" slot-scope="text">
          <a-tag
            :color="text === 0 ? 'magenta' : 'rgb(24, 144, 255)'"
          >
            {{ text == 0 ? "站内用户":"github 用户" }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a @click="del(record)" :style="{ color: 'red' }">Delete</a>
        </span>
        <template slot="pagination"></template>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "用户名",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "邮箱",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "邮件通知",
    dataIndex: "notice",
    key: "notice",
    scopedSlots: { customRender: "notice" },
  },
  {
    title: "禁言",
    dataIndex: "forbidden",
    key: "forbidden",
    scopedSlots: { customRender: "forbidden" },
  },
  {
    title: "用户类型",
    dataIndex: "type",
    key: "type",
    scopedSlots: { customRender: "type" },
  },
  {
    title: "注册时间",
    dataIndex: "createAt",
    key: "createAt",
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    email: "1@qq.com",
    notice: 0,
    forbidden: 0,
    type: 0,
    createAt:"2021-10-13 15:52:15"
  },
  {
    key: "2",
    name: "Johnnnnn",
    email: "123@qq.com",
    notice: 1,
    forbidden: 1,
    type: 1,
    createAt:"2021-10-13 15:52:05"
  },
  {
    key: "2",
    name: "BBBBrown",
    email: "12@qq.com",
    notice: 0,
    forbidden: 1,
    type: 1,
    createAt:"2021-10-13 15:52:19"
  },
];

export default {
  data() {
    return {
      data,
      columns,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formInline: {
        keyword: "",
        tag: "",
        category: "",
      },
      data,
      columns,
      pagination: {
        current: 1,
        pageSize: 10,
        defaultPageSize: 10,
        showTotal: (total) => `共 ${total} 条`,
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(this.formInline);
    },
    tableChange(e) {
      const { current, pageSize } = e;
      this.pagination.current = current;
      this.pagination.pageSize = pageSize;
      this.getTableList();
    },
    del(info) {
      console.log(info);
    },
    changeForbidden(checked) {
      console.log(`a-switch to forbidden ${checked}`);
    },
    changeNotice(checked) {
      console.log(`a-switch notice to ${checked}`);
    },
    tableChange(e){
      const {current,pageSize} = e;
      this.pagination.current = current;
      this.pagination.pageSize = pageSize;
      this.getTableList();
    },
  },
};
</script>