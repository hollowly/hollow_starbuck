import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { request } from '@/network/request'

export default new Vuex.Store({
  state: {
		data:[],
		name:'邓俊贤'
  },
	mounted() {
		request({
			url:'/data.json',
		}).then(res => {
			this.data = res;
			console.log(this.data);
		}).catch(err => {
			console.log(err);
		})
	},
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
