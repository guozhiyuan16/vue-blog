<template>
  <div>
    <a-avatar
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    />
    <span :style="{ paddingLeft: '10px' }">学而知不足</span>
    <a-divider orientation="left">博客简述</a-divider>
    <p>本博客使用的技术为 react hooks + antd + koa2 + mysql</p>
    <p>本博客使用的技术为 react hooks + antd + koa2 + mysql</p>
    <a-divider orientation="left">关于我</a-divider>
    <ul class="about-list">
      <li>姓名：时间在走</li>
      <li>联系方式：时间在走</li>
      <li>坐标：时间在走</li>
      <li>
        技能
        <ul>
          <li v-for="(skill,index) in skills" :key="index">
              {{ skill.label }}
               <a-rate :default-value="skill.rate" disabled />
          </li>
        </ul>
      </li>
      <li>
        其他
        <ul>
          <li>常用开发工具：vscode,webstorem</li>
          <li>属性的ui框架：ant-design element</li>
          <li>具备良好的编码风格和习惯，团队规范意识，乐于分享</li>
        </ul>
      </li>
      <li>
        个人
        <ul>
          <li>欢迎交流！</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
const skills = [
  {
    label: "具备扎实的 Javascript 基础，熟练使用 ES6+ 语法。",
    rate: 3,
  },
  {
    label: "熟悉 React 并理解其原理，熟悉 Vue 框架及其用法。",
    rate: 3,
  },
  {
    label: "熟练使用 Webpack 打包工具，熟悉常用工程化和模块化方案。",
    rate: 3,
  },
  {
    label:
      "熟悉 Koa、Mysql，针对需求可以做到简单的数据库设计、接口的开发与设计！",
    rate: 2,
  },
  {
    label: "熟悉 HTTP 协议，缓存、性能优化、安全等，了解浏览器原理。",
    rate: 2,
  },
  {
    label: "熟悉常用的算法与数据结构",
    rate: 2,
  },
];
export default {
    data() {
        return {
            skills,
        };
    },
};
</script>