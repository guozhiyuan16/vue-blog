<template>
  <div id="page-header">
    <a-row type="flex" align="middle" justify="start">
      <a-col :span="4">
        <div id="page-title">
          <a-icon type="setting" theme="filled" :style="{ color: '#08c' }" />
          <span class="blog-name">个人博客</span>
        </div>
      </a-col>
      <a-col :span="20">
        <div id="search-box">
          <a-icon type="search" />
          <a-input
            placeholder="搜索文章"
            type="text"
            :class="['search-input']"
          />
        </div>
        <div id="page-operation">
          <a-button
            size="small"
            type="primary"
            ghost
            :style="{ marginRight: '20px' }"
            @click="showModal"
            >登录
          </a-button>
          <a-button size="small" type="danger" ghost>注册</a-button>
        </div>
        <div id="page-menu">
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="home" @click="showDetail('/')"> <a-icon type="home" />首页 </a-menu-item>
            <a-menu-item key="archives" @click="showDetail('archives')"> <a-icon type="edit" />归档 </a-menu-item>
            <a-menu-item key="categories" @click="showDetail('categories')"> <a-icon type="folder" />分类 </a-menu-item>
            <a-menu-item key="about" @click="showDetail('about')"> <a-icon type="user" />关于 </a-menu-item>
          </a-menu>
        </div>
      </a-col>
    </a-row>
    <a-modal v-model="visible" title="Login" :footer="null" @ok="handleOk">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              },
            ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-button type="primary" block>
          login
        </a-button>
        <a-button block icon="github" :style="{marginTop:'10px'}">
          github login
        </a-button>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ["home"],
      visible: false,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    showDetail(path){
      console.log(path);
      this.$router.push(path);
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>

<style lang="less">
</style>