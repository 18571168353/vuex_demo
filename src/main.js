import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		// 管理数据
		count: 0,
		list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	},
	mutations: {
		// 修改数据
		addCount(state, num) {
			state.count += num
		}
	},
	actions: {
		// 执行异步操作
		getAsyncCount(context, params) {
			setTimeout(() => {
				context.commit('addCount', params)
			}, 1000)
		}
	},
	getters: {
		filterList: (state) => state.list.filter((item) => item > 5),
		token: (state) => state.user.token,
		name: (state) => state.setting.name
	},
	modules: {
		user: {
			namespaced: true,
			state: {
				token: '12345'
			},
			mutations: {
				//  这里的state表示的是user的state
				updateToken(state) {
					state.token = 678910
				}
			}
		},
		setting: {
			state: {
				name: 'Vuex实例'
			}
		}
	}
})
new Vue({
	render: (h) => h(App),
	store
}).$mount('#app')
