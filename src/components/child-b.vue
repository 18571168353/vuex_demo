<template>
	<div>
		<div>用户名称:{{ $store.state.user.token }}</div>
		<div>快捷访问:{{ token }}</div>
		<div>应用名称:{{ $store.state.setting.name }}</div>
		<div>快捷访问:{{ name }}</div>
		<button @click="updateToken">修改token</button>
		<!-- <button @click="test">调用子模块的mutations</button> -->
	</div>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('user')
export default {
	name: 'childb',
	components: {},
	props: {},
	data() {
		return {}
	},
	computed: {
		...mapGetters(['token', 'name'])
	},
	watch: {},
	created() {},
	mounted() {},
	methods: {
		updateToken() {
			// 采用路劲形式
			this.$store.commit('user/updateToken')
		},
		// 方案2：**辅助函数-带上模块的属性名路径**
		// ...mapMutations(['user/updateToken']),
		// test() {
		// 	this['user/updateToken']()
		// },
		...mapMutations(['updateToken'])
	}
}
</script>

<style lang="less" scoped></style>
