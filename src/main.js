//                       .::::.
//                     .::::::::.
//                    :::::::::::
//                 ..:::::::::::'
//              '::::::::::::'
//                .::::::::::
//           '::::::::::::::..
//                ..::::::::::::.
//              ``::::::::::::::::
//               ::::``:::::::::'        .:::.
//              ::::'   ':::::'       .::::::::.
//            .::::'      ::::     .:::::::'::::.
//           .:::'       :::::  .:::::::::' ':::::.
//          .::'        :::::.:::::::::'      ':::::.
//         .::'         ::::::::::::::'         ``::::.
//     ...:::           ::::::::::::'              ``::.
//    ```` ':.          ':::::::::'                  ::::..
//                       '.:::::'                    ':'````..
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/reset.css' //全局css


import './mock'  //数据模拟脱离后端独立开发

import FastClick from 'fastclick' //解决移动端click事件300毫秒延迟方法

import VConsole from 'vconsole/dist/vconsole.min.js' //移动端调试工具 上线之前别忘记注掉

import  axios from '@/axios/api'// import axios from './axios/api'// 导入api接口

let vConsole = new VConsole() // 初始化

Vue.config.productionTip = false

Vue.prototype.$ajax = axios  //axios 全局挂载

FastClick.attach(document.body)  // 原理: 在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后真正的click事件阻止掉
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
