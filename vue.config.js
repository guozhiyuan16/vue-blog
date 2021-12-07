const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}


// vue.config.js for less-loader@6.0.0
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            // 'primary-color': '#ff6d26', // 全局主色
            // 'link-color': '#ff6d26', // 链接色
            // 'success-color': '#ff6d26', // 成功色
            // 'warning-color': '#faad14', // 警告色
            // 'error-color': '#f5222d', // 错误色
            // 'font-size-base': '14px', // 主字号
            // 'heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
            // 'text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
            // 'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
            // 'disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
            // 'border-radius-base': '4px', // 组件/浮层圆角
            // 'border-color-base': '#d9d9d9', // 边框色
            // 'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)' // 浮层阴影
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      .set('utils', resolve('src/utils'))
      .set('api', resolve('src/api'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))
  },
  chainWebpack: config => {
    console.log(config);
    // svg rule loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
}