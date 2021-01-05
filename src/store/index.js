import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		data:[],

  },
  mutations: {
		created() {
			axios.all([
				axios({url:'/data.json'}).then(data => {
					state.data = data
					// console.log(data);
					// this.menu = data.data.menu
				}),
			])
		}
  },
  actions: {
  },
  modules: {
  }
})
