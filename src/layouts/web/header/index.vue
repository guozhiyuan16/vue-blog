<template>
  <div id="page-header">
    <a-row type="flex" align="middle" justify="start">
      <a-col :span="4">
        <Left />
      </a-col>
      <a-col :span="20">
        <Right />
      </a-col>
    </a-row>
    <template>
      <modal
        v-if="loginVisible"
        ref="loginForm"
        :rules="loginRules"
        :modalTitle="`login`"
        :type="`login`"
        :selectOptions="selectOptions"
        @console_data="parentEvent"
      >
         <a-form-model
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
      </modal>
    </template>
    <!-- <template>
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
    </template> -->
    <modal
    ></modal>
  </div>
</template>

<script>
import Left from './left/index.vue';
import Right from './right/index.vue';
import { mapState } from 'vuex';
export default {
  components: {
    Left,
    Right
  },
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      //loginVisible:false,
      loginForm:{
        username:'',
        password:''
      },
      loginRules:{ 
        username: [{ required: true, message: 'Username is required' , trigger:'blur'}],
        password: [{ required: true, message: 'Password is required' , trigger:'blur'}]
      },
      selectOptions: {},
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
  computed: mapState({
    loginVisible: state => state.loginVisible,
  }),
  methods: {
    showDetail(path){
      this.$router.push(path);
    },
    manage(){
      this.$router.push('/admin')
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
    parentEvent(form){
      console.log('loginForm',form)
    }
  },
};
</script>

<style scoped>

</style>