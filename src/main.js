import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/global'; // 全局组件注册
import '@/assets/index.less'

// vue markdown 编辑器
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';

//ant-design-vue按需加载
import { Button,spin,Card,ConfigProvider,Layout,DatePicker,Dropdown,Form,FormModel,Icon,Input,InputNumber,message,Popconfirm,Menu,Modal,notification,Pagination,Select,Table,Upload,Col,Row,Alert,Divider,Tag,Badge,Timeline,Avatar,Rate,Comment,List,Popover,Tooltip,Breadcrumb,Switch,Anchor} from 'ant-design-vue';
const components = { Button,spin,Card,ConfigProvider,Layout,DatePicker,Dropdown,Form,FormModel,Icon,Input,InputNumber,message,Popconfirm,Menu,Modal,notification,Pagination,Select,Table,Upload,Col,Row,Alert,Divider,Tag,Badge,Timeline,Avatar,Rate,Comment,List,Popover,Tooltip,Breadcrumb,Switch,Anchor }

Object.values(components).forEach(component => {
  Vue.use(component);
})

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$destroyAll = Modal.destroyAll;

Vue.config.productionTip = false

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

Vue.use(VueMarkdownEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
