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
          <template v-if="isLogin">

            <a-dropdown placement="bottomCenter">
              <a-avatar :size="large" icon="user" class="ant-dropdown-link" @click="e => e.preventDefault()" />
              <a-menu slot="overlay">
                <a-menu-item v-if="role==1">
                  <a href="javascript:;" @click="upload">导入文章</a>
                </a-menu-item>
                <a-menu-item v-if="role==1">
                  <a href="javascript:;">后台管理</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">退出登录</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </template>
          <template v-else>
              <a-button size="small" type="primary" ghost :style="{ marginRight: '20px' }" @click="login">登录</a-button>
              <a-button size="small" type="danger" ghost @click="register">注册</a-button>
          </template>
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
    <template>
      <a-modal
        v-model="loginVisible"
        :title="'login'"
        :destoryOnClose= true
        :footer= null
      >
         <a-form-model
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
              <a-form-model-item label="用户名" prop="username" >
                  <a-input v-model="loginForm.username" placeholder="请输入用户名" />
              </a-form-model-item>
              <a-form-model-item label="密码" prop="password" >
                  <a-input v-model="loginForm.password" placeholder="请输入密码" />
              </a-form-model-item>
              <a-button type="primary" block @click="onSubmit('login')">login</a-button>
              <a-button block icon="github" :style="{marginTop:'10px'}">github login</a-button>
          </a-form-model>
      </a-modal>
    </template>
    <template>
      <a-modal
        v-model="registerVisible"
        :title="'register'"
        :destoryOnClose= true
        :footer= null
      >
         <a-form-model
            ref="registerForm"
            :model="registerForm"
            :rules="registerRules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
              <a-form-model-item label="用户名" prop="username" >
                  <a-input v-model="registerForm.username" placeholder="请输入用户名" />
              </a-form-model-item>
              <a-form-model-item label="密码" prop="password" >
                  <a-input v-model="registerForm.password" placeholder="请输入密码" />
              </a-form-model-item>
              <a-form-model-item label="确认密码" prop="confirm" >
                  <a-input v-model="registerForm.confirm" placeholder="请输入密码" />
              </a-form-model-item>
              <a-form-model-item label="邮箱" prop="email" >
                  <a-input v-model="registerForm.email" placeholder="请输入邮箱" />
              </a-form-model-item>
              <a-button type="primary" block @click="onSubmit('register')">register</a-button>
              <a-button block icon="github" :style="{marginTop:'10px'}">github login</a-button>
          </a-form-model>
      </a-modal>
    </template>
    <template>
      <a-modal
        v-model="uploadVisible"
        :title="'导入文章'"
        :destoryOnClose= true
        :maskClosable= false
        width='776px'
      >
        <a-upload-dragger
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          @change="handleChange"
        >
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
          </p>
          <p class="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p class="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </a-upload-dragger>
      </a-modal>
    </template>
  </div>
</template>

<script>
// 选项校验规则


export default {
  data() {
    return {
      isLogin:true,
      role:1,
      current: ["home"],
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      loginVisible:false,
      loginForm:{
        username:'',
        password:''
      },
      loginRules:{ 
        username: [{ required: true, message: 'Username is required' , trigger:'blur'}],
        password: [{ required: true, message: 'Password is required' , trigger:'blur'}]
      },

      registerVisible:false,
      registerForm:{
        username:'',
        password:'',
        confirm:'',
        email:''
      },
      registerRules:{ 
        username: [{ required: true, message: 'Username is required' , trigger:'blur'}],
        password: [{ required: true, message: 'Password is required' , trigger:'blur'}],
        confirm: [
          { 
            validator : ( rule,value,callback ) => {
              if(value == ''){
                callback(new Error('Password is required'));
              }else if(value!= this.registerForm.password){
                callback(new Error('Two passwords that you enter is inconsistent'));
              }else{
                callback()
              }
            },
            trigger:"change"
          }
        ],
        email: [
          { required: true, message: 'Email is required', trigger:'blur'},
          { pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'The input is not valid E-mail' ,trigger:'blur'}
        ]
      },

      uploadVisible:false,
      uploadForm: {

      }
    };
  },
  methods: {
    showDetail(path){
      this.$router.push(path);
    },
    login() {
      this.loginVisible = true;
    },
    register(){
      this.registerVisible = true;
    },
    upload(){
      this.uploadVisible = true;
    },
    onSubmit(type){
      let formName = type === 'login'?'loginForm':'registerForm';
      this.$refs[formName].validate(valid => {
        if (valid) {
          
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleCancel(e){
      console.log('cancel')
      this.$refs['loginForm'].resetFields();
      this.$refs['registerForm'].resetFields();
    },

    // 上传组件
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>

<style lang="less">
</style>