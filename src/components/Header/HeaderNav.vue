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
          <a-button size="small" type="primary" ghost :style="{ marginRight: '20px' }" @click="login">登录</a-button>
          <a-button size="small" type="danger" ghost @click="register">注册</a-button>
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
    <modal 
      v-if="modalVisible"
      ref="loginOrRegister"
      :rules="rules"
      :modalTitle="modalTitle"
      :type="type"
      @console_data="parentEvent"
    />
  </div>
</template>

<script>
import api from '@/api/api'

// model框的选项
const loginOptions = [
  { title:'用户名',type:'text', name:'username',placeholder:'请输入用户名' },
  { title:'密码',type:'text', name:'password',placeholder:'请输入密码' },
]
const registerOptions = [
  ...loginOptions,
  { title:'确认密码',type:'text', name:'confirm',placeholder:'确认密码' },
  { title:'邮箱',type:'text', name:'email',placeholder:'请输入您的邮箱' },
]
// 选项校验规则
const loginRules = { 
  username: [
    { required: true, message: 'Username is required' , trigger:'blur'},
    // { min: 6, max:20, message: '用户名必须是6到20字符' , trigger:'blur' },
  ],
  password: [{ required: true, message: 'Password is required' ,trigger:'blur'}]
}
const registerRules = { 
  username: [
    { required: true, message: 'Username is required' , trigger:'blur'},
    // { min: 6, max:20, message: '用户名必须是6到20字符' , trigger:'blur' },
  ],
  password: [{ required: true, message: 'Password is required' ,trigger:'blur'}],
  confirm: [
    { required: true, message: 'Password is required' ,trigger:'blur'},
    { 
      validator( rule,value,callback ){
        if(value == ''){
          callback(new Error('Password is required'));
        }else if(value!= this.$refs.loginOrRegister.form.password){
          callback(new Error('Two passwords that you enter is inconsistent'));
        }
      },
      trigger:"change"
    }
  ],
  email: [
    { required: true, message: 'Email is required', trigger:'blur'},
    { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'The input is not valid E-mail' ,trigger:'blur'}
  ]
}
export default {
  data() {
    return {
      current: ["home"],
      modalVisible: false,
      modalTitle: 'login',
      type:'login',
      form: {
        username:'',
        password:''
      },
      options: '' , 
      rules: ''
    };
  },
  methods: {
    showDetail(path){
      console.log(path);
      this.$router.push(path);
    },
    login() {
      this.modalVisible = true;
      this.modalTitle = 'login';
      this.type = "login";
      this.options = loginOptions;
      this.rules = loginRules;
      this.$nextTick(()=>{
        this.$refs.loginOrRegister.showModal(this.options)
      })
    },
    register(){
      this.modalVisible = true;
      this.modalTitle = 'register';
      this.type = "register";
      this.options = registerOptions;
      this.rules = registerRules;
      this.$nextTick(()=>{
        this.$refs.loginOrRegister.showModal(this.options)
      })
    },
    parentEvent(form){
      console.log(this.type);
      var newForm = JSON.parse(JSON.stringify(form))
      console.log('newForm',newForm);
      if(this.type=='login'){
        api.login(newForm).then(res => {
          console.log(res)
        })
      }else{
        newForm.delete('confirm');
        api.register(newForm).then(res => {
          console.log(res)
        })
      }
    },
  },
};
</script>

<style lang="less">
</style>