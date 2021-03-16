import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		// 管理数据
		count: 0
	},
	mutations: {
		addCount(state,num) {
			state.count += num
		}
	}
})
new Vue({
	render: (h) => h(App),
	store
}).$mount('#app')
