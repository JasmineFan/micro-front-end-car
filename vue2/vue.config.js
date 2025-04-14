const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const { name } = require('./package');//package.json 里面的name

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 9004;
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  publicPath: 'http://localhost:9004',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // 静态资源目录
      watch: true // 监听文件变化
    },
    hot: true,
     allowedHosts: "all",
    port,
    headers: {    // 必须要改的解决跨域问题
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     '@': resolve('src'),
    //   },
    // },
    output: {
      // 把子应用打包成 umd 库格式
      libraryTarget: 'umd',
      filename: 'vue2.[contenthash].js',   //打包以后的名字
      library: 'vue2',      //在全局环境下获取到打包的内容, 然后我们就可以通过window.vue2 获取子应用
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
}
