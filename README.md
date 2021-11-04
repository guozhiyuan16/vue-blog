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