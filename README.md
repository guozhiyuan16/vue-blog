# vue-blog

## 基础组件的全局注册

> 可能你得许多组件只包裹了一个输入框或按钮之类的元素，是相对通用的。我们有时候会把它们称为`基础组件`，它们会在各个组件中被频繁用到


> [基础组件的自动化全局注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)


## Vue-Router

### 通过注入路由器，我们可以在任何组件内通过 `this.$router` 访问路由器，也可以通过 `this.$route` 访问当前路由

### 复用组件时，想对路由参数的变化做出相应的话，可以用watch(检测变化) $route 对象

```js
const User = {
  template: '...',
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
    }
  },
  // 或者使用 2.2 中引入的 beforeRouteUpdate `导航守卫`：
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}
```
 
### 通配符路由

- 含有通配符的路由应该放在最后
- $route.params 内会自动添加一个名为`pathMatch`参数，包含了URL通过通配符被匹配的部分

### 匹配优先级

- 同一个路径可以匹配多个路由，匹配的优先级按照路由的定义顺序（路由定义的越早，优先级越高）

## Vue-Component

### 单向数据流

所有的prop都使得其父子prop之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

不应该在子组件内部改变 prop

- 两种常见的试图变更 prop 的情形
  - 这个prop 用来传递一个初始值 ; 这个子组件接下来希望将其作为一个本地的prop数据来使用 在这种情况下，最好定义一个本地的 data property 并将这个 prop 用作其初始值：
  - 这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：

## Vuex

Vuex 和 单纯的全局对象有以下两种不同

- **Vuex 的状态存储是响应式的**。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会*相应地得到高效更新*。

- **你不能直接改变 store 中的状态。**改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。


## QUESTION

### 如何在项目中使用SVG

[在vue项目中优雅的使用Svg](https://juejin.cn/post/6844903697999200263)
[SVG在Vue中如何引入？如何做到懒人引入？](https://segmentfault.com/a/1190000022664906)
[webpack.html添加一个新的-loader](https://cli.vuejs.org/zh/guide/webpack.html#%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84-loader)

### requireContext.keys().map(requireContext)在批量导入时的作用
[requireContext.keys().map(requireContext)在批量导入时的作用](https://blog.csdn.net/qq_21567385/article/details/107626075)