const path = require('path');
function resolve(dir){
  return path.join(__dirname,dir)
}


// vue.config.js for less-loader@6.0.0
module.exports = {
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            // If you are using less-loader@5 please spread the lessOptions to options directly
            modifyVars: {
              'primary-color': '#1DA57A',
              'link-color': '#1DA57A',
              'border-radius-base': '2px',
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
    }
  };