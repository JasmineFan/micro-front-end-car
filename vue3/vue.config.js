const { defineConfig } = require('@vue/cli-service')

const path = require('path');
const { name } = require('./package');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 9004;
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    port: 9005, // 修改为你需要的端口号
    host: 'localhost', // 可选：指定主机（默认 localhost）
    open: true // 可选：自动打开浏览器
  }
}
