<template>
	<div>
		<button @click="test">+1(原始方式调用)</button>
		<button @click="addCount(100)">+100(辅助函数调用)</button>
		<button @click="text1">异步调用(原始形式)</button>
		<button @click="getAsyncCount(20)">异步调用(辅助函数调用)</button>
		<div>原始形式getters:{{ $store.getters.filterList }}</div>
		<div>辅助函数调用getters:{{ filterList }}</div>
	</div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {}
	},
	computed: {
		...mapGetters(['filterList'])
	},
	watch: {},
	created() {},
	mounted() {},
	methods: {
		test() {
			this.$store.commit('addCount', 1)
		},
		text1() {
			this.$store.dispatch('getAsyncCount', 111)
		},
		...mapMutations(['addCount']),
		...mapActions(['getAsyncCount']) // 引入异步actions
	}
}
</script>

<style lang="less" scoped></style>
