import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,LocaleProvider, ConfigProvider ,Menu, Row,Col } from 'ant-design-vue';

Vue.use(Button);
Vue.use(LocaleProvider);
Vue.use(ConfigProvider)
Vue.use(Menu);
Vue.use(Row);
Vue.use(Col)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
