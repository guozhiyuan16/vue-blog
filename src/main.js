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
import { Button,spin, Calendar,Card,ConfigProvider,Layout,DatePicker,Dropdown,Form,FormModel,Icon,Input,InputNumber,message,Popconfirm,Menu,Modal,notification,Pagination,Select,Table,TreeSelect,Upload,Col,Row,Alert,Divider,Tag,Badge,Timeline,Avatar,Rate,Comment,List,Popover,Tooltip,Breadcrumb,Switch} from 'ant-design-vue';
Vue.use(Button);
Vue.use(Calendar);
Vue.use(spin);
Vue.use(Card);
Vue.use(DatePicker);
Vue.use(Dropdown);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Icon);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(message);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(notification);
Vue.use(Pagination);
Vue.use(Select);
Vue.use(Table);
Vue.use(TreeSelect);
Vue.use(Upload);
Vue.use(Col);
Vue.use(Row);

Vue.use(Layout);
Vue.use(Popconfirm)
Vue.use(ConfigProvider)
Vue.use(Alert)
Vue.use(Divider)
Vue.use(Tag)
Vue.use(Badge)
Vue.use(Timeline)
Vue.use(Avatar)
Vue.use(Rate)
Vue.use(Comment)
Vue.use(List)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(Switch)

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
