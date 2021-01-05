import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入jQuery、bootstrap
import $ from 'jquery'
import 'bootstrap'
// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 全局注册 $
Vue.prototype.$ = $
Vue.config.productionTip = false

new Vue({
	router,
	store,
  render: h => h(App)
}).$mount('#app')



// 配置 axios 请求的为 api 格式
import axios from 'axios'
axios.defaults.baseURL = '/api'
