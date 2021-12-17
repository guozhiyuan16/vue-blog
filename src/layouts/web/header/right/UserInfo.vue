<template>
  <div id="page-operation">

   <template v-if="!hasPermission">
      <a-button
        size="small"
        type="primary"
        ghost
        :style="{ marginRight: '20px' }"
        @click="handleClick('loginVisible')"
      >
        登录
      </a-button>
      <a-button size="small" type="danger" ghost @click="handleClick('registerVisible')">
        注册
      </a-button>
    </template>

    <template v-else>
      <a-dropdown placement="bottomCenter">
        <a-avatar icon="user" class="ant-dropdown-link" @click=" e => e.preventDefault() "/>

        <a-menu slot="overlay">
          <a-menu-item v-if="userInfo.role == 1">
            <a href="javascript:;" @click="handleClick('uploadVisible')">导入文章</a>
          </a-menu-item>
          <a-menu-item v-if="userInfo.role == 1">
            <a href="javascript:;" @click="toManage">后台管理</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;" @click="loginOut">退出登录</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </template>
    
    <!-- 登录modal -->
    <template>
      <a-modal
        :visible="loginVisible"
        :title="`login`"
        :footer="null"
        :destroyOnClose="true"
        @cancel="handleCancel('loginVisible')"
      >
        <a-form-model
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="用户名" prop="username">
            <a-input v-model="loginForm.username" placeholder="请输入用户名" />
          </a-form-model-item>
          <a-form-model-item label="密码" prop="password">
            <a-input v-model="loginForm.password" placeholder="请输入密码" />
          </a-form-model-item>
          <a-button type="primary" block @click="handleLogin">
            login
          </a-button>
          <a-button block icon="github" :style="{ marginTop: '10px' }">
            github login
          </a-button>
        </a-form-model>
      </a-modal>
    </template>
    <!-- 注册modal -->
    <template>
      <a-modal
        :visible="registerVisible"
        :title="`register`"
        :footer="null"
        :destroyOnClose="true"
        @cancel="handleCancel('registerVisible')"
      >
        <a-form-model
          ref="registerForm"
          :model="registerForm"
          :rules="registerRules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="用户名" prop="username">
            <a-input
              v-model="registerForm.username"
              placeholder="请输入用户名"
            />
          </a-form-model-item>
          <a-form-model-item label="密码" prop="password">
            <a-input v-model="registerForm.password" placeholder="请输入密码" />
          </a-form-model-item>
          <a-form-model-item label="确认密码" prop="confirm">
            <a-input v-model="registerForm.confirm" placeholder="请输入密码" />
          </a-form-model-item>
          <a-form-model-item label="邮箱" prop="email">
            <a-input v-model="registerForm.email" placeholder="请输入邮箱" />
          </a-form-model-item>
          <a-button type="primary" block @click="handleReg">
            register
          </a-button>
          <a-button block icon="github" :style="{ marginTop: '10px' }">
            github login
          </a-button>
        </a-form-model>
      </a-modal>
    </template>
    <!-- 上传modal -->
    <template>
      <a-modal
        :visible="uploadVisible"
        :title="'导入文章'"
        :destroyOnClose="true"
        :maskClosable="false"
        @cancel="handleCancel('uploadVisible')"
        width="776px"
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
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </a-upload-dragger>
      </a-modal>
    </template>
  </div>
</template>
<script>
import * as types from '@/store/action-types';
import {createNamespacedHelpers } from "vuex";
let { mapState, mapMutations , mapActions } = createNamespacedHelpers("user");
export default {
  data() {
    return {
       labelCol: { span: 6 },
      wrapperCol: { span: 18 },

      loginVisible: false,
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, message: "Username is required", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
        ],
      },
      registerVisible: false,
      registerForm: {
        username: "",
        password: "",
        confirm: "",
        email: "",
      },
      registerRules: {
        username: [
          { required: true, message: "Username is required", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
        ],
        confirm: [
          {
            validator: (rule, value, callback) => {
              if (value == "") {
                callback(new Error("Password is required"));
              } else if (value != this.registerForm.password) {
                callback(
                  new Error("Two passwords that you enter is inconsistent")
                );
              } else {
                callback();
              }
            },
            trigger: "change",
          },
        ],
        email: [
          { required: true, message: "Email is required", trigger: "blur" },
          {
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "The input is not valid E-mail",
            trigger: "blur",
          },
        ],
      },
      uploadVisible: false,
      uploadForm: {},
    };
  },
  computed: {
    ...mapState(['userInfo','hasPermission']),
  },
  methods: {
    ...mapMutations([types.USER_LOGIN_OUT]),
    ...mapActions([types.USER_LOGIN,types.USER_REGISTER]),
    // 展示modal
    handleClick(type){
      this[type] = true;
    },
    // 跳转后台管理
    toManage() {
      this.$router.push("/admin");
    },
    // 登录
    handleLogin() {
      this.$refs["loginForm"].validate(async (valid) => {
        if (valid) {
          this[types.USER_LOGIN](this.loginForm);
          this.$nextTick(() => {
            this.$message.success("登录成功");
            this.loginVisible = false;
          });
        } else {
          return false;
        }
      });
    },
    // 注册
    handleReg() {
      this.$refs["registerForm"].validate(async (valid) => {
        if (valid) {
          this[types.USER_REGISTER](this.registerForm);
           this.$nextTick(() => {
            this.$message.success('注册成功，请重新登录您的账号！');
            this.registerVisible = false;
          });
        } else {
          return false;
        }
      });
    },
    // 退出登录
    loginOut() {
      this[types.USER_LOGIN_OUT]();
    },
    // 关闭modal
    handleCancel(type) {
      this[type] = false;
    },
    // 上传组件
    handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>