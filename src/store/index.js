import Vue from 'vue'
import Vuex from 'vuex'
import rootModule from './rootModule'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)

files.keys().forEach(key => {
  let store = files(key).default;
  let moduleName = key.replace(/^\.\//, '').replace(/\.js$/, ''); // article  user
  let modules = rootModule.modules = (rootModule.modules || {});
  modules[moduleName] = store;
  modules[moduleName].namespaced = true;
})

const store = new Vuex.Store(rootModule)

export default store