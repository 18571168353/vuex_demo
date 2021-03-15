import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
const store = new Vuex.Store()
Vue.use(Vuex)
new Vue({
	render: (h) => h(App),
	store
}).$mount('#app')
