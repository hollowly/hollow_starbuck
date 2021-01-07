import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

// 引入jQuery、bootstrap
import $ from 'jquery'
import 'bootstrap'
// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 全局注册 $
Vue.prototype.$ = $
//-----------------------------------------------------------
// 引入Axios并全局配置，设置端口和 node 服务端口一样3000
import Axios from 'axios'
Vue.prototype.HOST = 'http://localhost:3000'
Vue.prototype.$axios  = Axios
//-----------------------------------------------------------
Vue.config.productionTip = false

new Vue({
	router,
	// store,
  render: h => h(App)
}).$mount('#app')



// 配置 axios 请求的为 api 格式
import axios from 'axios'
axios.defaults.baseURL = '/api'
Vue.prototype.$host = 'http://localhost:8011' // 服务器路径常量