import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

// 引入jQuery、bootstrap、并且全局注册$
import $ from 'jquery'
import 'bootstrap'
// 引入bootstrap样式和js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
Vue.prototype.$ = $

// 引入cookie.js 来进行登录判断,并且全局注册cookie
import cookie from './utils/cookie'
Vue.prototype.cookie = cookie;


// Vue.config.productionTip = true
new Vue({
	router,
	// store,
  render: h => h(App)
}).$mount('#app')



// 配置 axios 请求的为 api 格式
import axios from 'axios'
axios.defaults.baseURL = '/api'
Vue.prototype.$host = 'http://localhost:8011' // 服务器路径常量
//-----------------------------------------------------------
// 引入Axios并全局配置，设置端口和 node 服务端口一样3000
Vue.prototype.HOST = 'http://localhost:3000'
Vue.prototype.$axios  = axios
//-----------------------------------------------------------