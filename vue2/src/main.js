import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

Vue.config.productionTip = false
let instance = null; // 为了在unmount 的时候也能得到这个vue 实例，先把它定义在上面


const render = ()=>{
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
render()
//当前不在微前端环境，直接执行
if (!window.__MICRO_WEB__) {
  render()
}
//开始的加载结构，可看做生命周期
export const bootstrap = ()=>{
  console.log("开始加载")
}
export const mount = ()=>{
  render()
  console.log("渲染成功")
}

export const unmount = ()=>{
  console.log("卸载",instance)
  //比如说在卸载的时候，同步撤销监听事件，或者撤销这个容器显示的所有内容
}





// export async function unmount(ctx) {
//   instance = null;
//   const { container } = ctx
//   if (container) {
//     document.querySelector(container).innerHTML = ''
//   }
// }
